import { Container, Group, Stack, Text } from "@mantine/core";
import classes from "./UnderConstructionPage.module.css";
import { WikiIcon } from "@/components/Icon";

export const UnderConstructionPage = () => {
  return (
    <Container h={"100vh"} py={"md"}>
      <Stack style={{ margin: "100px auto" }}>
        <Group c="violet" align="center">
          <WikiIcon name="construction" size={64} />
          <Text fw={"bolder"} size="64px">
            Under construction
          </Text>
        </Group>
        <Text size="xl">We are working actively on the site. Stay tuned!</Text>
      </Stack>
    </Container>
  );
};
