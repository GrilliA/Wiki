import {
  Avatar,
  Badge,
  Button,
  Divider,
  Group,
  Spoiler,
  Stack,
  Text,
} from "@mantine/core";
import { PageTemplate } from "../../components/PageTemplate/PageTemplate";
import { WikiIcon } from "../../components/Icon";
import styles from "./Profile.module.css";
import { useRouter } from "../../hooks/useRouter";

export const Profile = () => {
  const jobs = ["dancer"];
  const name = "D.Doctor";
  const genres = ["hip hop", "house"];
  const bio = "I am trust!";
  const { push } = useRouter();
  return (
    <PageTemplate>
      <Stack gap={"xl"}>
        <Stack gap={"md"}>
          <Group gap={"sm"}>
            <Avatar src={"/trust.jpeg"} size={"xl"} className={styles.logo} />
            <Stack gap={0}>
              <Group>
                {jobs.map((item) => (
                  <Badge key={item} variant="outline" size="xs">
                    {item}
                  </Badge>
                ))}
              </Group>
              <Text component="div" fw={"bold"} tt={"capitalize"}>
                {name}
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
            <Text
              size="sm"
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
              onClick={() => {
                push("/profile/edit");
              }}
              leftSection={<WikiIcon name="edit" />}
            >
              Edit profile
            </Button>
            <Button
              size="sm"
              className={styles["profile-button"]}
              variant="outline"
              onClick={() => {
                console.log("style");
              }}
            >
              Check my style
            </Button>
          </Group>
        </Stack>
        <Divider />
        <Text c="dimmed" size="sm">
          No contributions yet{" "}
        </Text>
      </Stack>
    </PageTemplate>
  );
};
