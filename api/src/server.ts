import { app } from "./app";
import { PORT } from "./helper/constants";

const host = "localhost";

app.listen(Number(PORT), host, async () => {
  console.log(`http://${host}:${PORT} is up and running 🚀`);
});
