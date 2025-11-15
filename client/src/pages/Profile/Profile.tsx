import {
  Avatar,
  Badge,
  Button,
  Divider,
  Group,
  Spoiler,
  Stack,
  Text,
  Typography,
} from "@mantine/core";
import { WikiIcon } from "../../components/Icon";
import styles from "./Profile.module.css";
import { useRouter } from "../../hooks/useRouter";
import { useUser } from "@/hooks/useUser";

export const Profile = () => {
  const { push } = useRouter();
  const { data: user } = useUser();

  if (!user) {
    return null;
  }

  const profession = user?.profession ? user?.profession?.split(",") : [];
  const genres = user?.genre ? user?.genre?.split(",") : [];
  const bio = user?.bio;
  return (
    <Stack gap={"xl"}>
      <Stack gap={"md"}>
        <Group gap={"sm"}>
          <Avatar src={user?.avatar?.url} size={"xl"} className={styles.logo} />
          <Stack gap={0}>
            <Group>
              {profession?.map((item) => (
                <Badge key={item} variant="outline" size="xs">
                  {item}
                </Badge>
              ))}
            </Group>
            <Text component="div" fw={"bold"} tt={"capitalize"}>
              {user?.nickName}
            </Text>
            <Group gap={0}>
              {genres.map((item) => (
                <Badge p={4} key={item} variant="transparent" size="xs">
                  {item}
                </Badge>
              ))}
            </Group>
          </Stack>
        </Group>

        <Spoiler
          maxHeight={60}
          hideLabel={
            <Text fw={"bold"} size="xs">
              hide
            </Text>
          }
          showLabel={
            <Text fw={"bold"} size="xs">
              show more
            </Text>
          }
        >
          <Typography
            dangerouslySetInnerHTML={{
              __html: bio,
            }}
          />
        </Spoiler>

        <Group>
          <Button
            size="sm"
            variant="filled"
            className={styles["profile-button"]}
            disabled
            onClick={() => {
              push("/profile/edit");
            }}
            leftSection={<WikiIcon name="edit" />}
          >
            Edit profile
          </Button>
        </Group>
      </Stack>
      <Divider />
      <Text c="dimmed" size="sm">
        No contributions yet{" "}
      </Text>
    </Stack>
  );
};
