import { app } from "./app";

// In development, bind to 0.0.0.0 to allow access from Docker containers and external networks
// In production or when HOST is set, use that value; otherwise default to localhost
const host = process.env.HOST || (process.env.NODE_ENV === "development" ? "0.0.0.0" : "localhost");
const port = parseInt(process.env.PORT || "5555", 10);

app.listen(port, host, async () => {
  console.log(`http://${host}:${port} is up and running 🚀`);
});
