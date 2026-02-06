import { app } from "./app";

const host = process.env.NODE_ENV === "development" ? "site" : "localhost";
const port = 5555;

app.listen(port, host, async () => {
  console.log(`http://${host}:${port} is up and running 🚀`);
});
