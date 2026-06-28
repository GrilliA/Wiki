import {
  Avatar,
  Badge,
  Divider,
  Group,
  Spoiler,
  Stack,
  Text,
  Typography,
} from "@mantine/core";
import styles from "./Profile.module.css";
import { useRouter } from "../../hooks/useRouter";
import { useUser } from "@/hooks/useUser";
import { useTranslation } from "react-i18next";
import { CurrentUserProfile } from "./CurrentUserProfile";

export const Profile = () => {
  const { push } = useRouter();
  const user = useUser();
  const { t } = useTranslation();
  const profession = user?.professions;
  const genres = user?.genres;
  const bio = user?.bio;

  return (
    <Stack gap={"xl"}>
      <Stack gap={"md"}>
        <Group gap={"sm"}>
          <Avatar src={user?.avatar} size={"xl"} className={styles.logo} />
          <Stack gap={0}>
            <Text component="div" fw={"bold"} tt={"capitalize"}>
              {user?.nickname}
            </Text>
            <Group>
              {profession?.map((item) => (
                <Badge key={item} variant="outline" size="xs">
                  {item}
                </Badge>
              ))}
            </Group>
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

        <CurrentUserProfile userId="111" />
      </Stack>
      <Divider />
      <Text c="dimmed" size="sm">
        No contributions yet{" "}
      </Text>
    </Stack>
  );
};
