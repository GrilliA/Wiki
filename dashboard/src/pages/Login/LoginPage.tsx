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
      <Login />
    </PageComponent>
  );
};

export default LoginPage;
