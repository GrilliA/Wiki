import { app } from "./app";

const host = process.env.HOST || (process.env.NODE_ENV === "development" ? "0.0.0.0" : "localhost");
const port = parseInt(process.env.PORT || "5555", 10);

app.listen(port, host, async () => {
  console.log(`http://${host}:${port} is up and running 🚀`);
});
