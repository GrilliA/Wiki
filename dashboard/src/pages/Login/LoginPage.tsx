import { Paper } from "@mantine/core";
import { Login } from "./Login";
import { PageComponent } from "@/components/PageComponent/PageComponent";

const LoginPage = () => {
  return (
    <PageComponent
      withPadding
      title="Login"
      description={
        "“Secure login page for accessing your private account, saved data, and personalized tools."
      }
    >
      <Paper withBorder maw={600} w={"100%"} radius="md" p="xl">
        <Login />
      </Paper>
    </PageComponent>
  );
};

export default LoginPage;
