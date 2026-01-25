import { Paper } from "@mantine/core";
import { Signup } from "./Signup";

const SignupPage = () => {
  return (
    <Paper withBorder maw={600} w={"100%"} radius="md" p="xl">
      <Signup />
    </Paper>
  );
};

export default SignupPage;
