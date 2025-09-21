import { renderToStaticMarkup } from "@usewaypoint/email-builder";
import { app } from "./app";
import { PORT, HOST } from "./helper/constants";
import startUp from "./startup";
import { normalizeMail } from "./helper/normalizeMail";

app.listen(Number(PORT), HOST!, async () => {
  await startUp();
  const txt = await normalizeMail(
    {
      root: {
        type: "EmailLayout",
        data: {
          backdropColor: "#F2F5F7",
          canvasColor: "#FFFFFF",
          textColor: "#242424",
          fontFamily: "MODERN_SANS",
          childrenIds: ["block-1709571228545", "block-1709571234315"],
        },
      },
      "block-1709571228545": {
        type: "Text",
        data: {
          style: {
            fontWeight: "normal",
            padding: {
              top: 0,
              bottom: 16,
              right: 24,
              left: 24,
            },
          },
          props: {
            text: "Hi ${{name}} 👋,",
          },
        },
      },
      "block-1709571234315": {
        type: "Text",
        data: {
          style: {
            fontWeight: "normal",
            padding: {
              top: 0,
              bottom: 16,
              right: 24,
              left: 24,
            },
          },
          props: {
            text: "Welcome to ${{appName}}!",
          },
        },
      },
    },
    {
      name: "Oriabure Trust",
      appName: "Eventus",
    },
  );
  console.log(txt);
  console.log(`http://${HOST}:${PORT} is up and running 🚀`);
});
