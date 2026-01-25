import { app } from "./app";
import { PORT, HOST } from "./helper/constants";
const host = process.env.NODE_ENV === "development" ? "server" : "localhost";
app.listen(Number(PORT), host, async () => {
  console.log(`http://${host}:${PORT} is up and running 🚀`);
});
