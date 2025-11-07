import { Paper } from "@mantine/core";
import { AuthPageTemplate } from "../../components/AuthPageTemplate/AuthPageTemplate";
import { Signup } from "./Signup";

const SignupPage = () => {
  return (
    <AuthPageTemplate>
      <Paper withBorder maw={600} w={"100%"} radius="md" p="xl">
        <Signup />
      </Paper>
    </AuthPageTemplate>
  );
};

export default SignupPage;
