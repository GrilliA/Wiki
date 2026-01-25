import { Paper } from "@mantine/core";
import { Login } from "./Login";

const LoginPage = () => {
  return (
    <Paper withBorder maw={600} w={"100%"} radius="md" p="xl">
      <Login />
    </Paper>
  );
};

export default LoginPage;
