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
          <Button
            size="sm"
            variant="subtle"
            leftSection={<Icon size={18} name="edit" />}
          >
            Edit
          </Button>
        </Group>
        <Divider label="Contributions" />
        <Text c="dimmed">No contributions made yet!</Text>
      </Stack>
    </PageTemplate>
  );
};
