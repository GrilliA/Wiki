import Icon from "@/components/Icon/Icon";
import { PageTemplate } from "@/components/PageTemplate/PageTemplate";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Stack,
  Text,
} from "@mantine/core";

export const Profile = () => {
  return (
    <PageTemplate>
      <Stack>
        <Avatar src={null} size={"xl"} />
        <Box>
          <Text fw={"bold"}>DDoctor</Text>
          <Text size="sm">I am the creator of this page ahahah</Text>
        </Box>
        <Group>
          <Button variant="outline" leftSection={<Icon name="edit" />}>
            Edit
          </Button>
          <Button variant="outline" leftSection={<Icon name="settings" />}>
            Settings
          </Button>
        </Group>
        <Divider label="Contributions" />
        <Text c="dimmed">No contributions made yet!</Text>
      </Stack>
    </PageTemplate>
  );
};
