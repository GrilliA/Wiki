import { AuthPageTemplate } from "@/components/AuthPageTemplate/AuthPageTemplate";
import { Login } from "@/templates/Login/Login";
import { Paper } from "@mantine/core";

const LoginPage = () => {
  return (
    <AuthPageTemplate>
      <Paper withBorder maw={600} w={"100%"} radius="md" p="xl">
        <Login />
      </Paper>
    </AuthPageTemplate>
  );
};

export default LoginPage;
