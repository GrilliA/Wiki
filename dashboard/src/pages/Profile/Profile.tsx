import {
  Avatar,
  Button,
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
import { WikiLink } from "@/components/Link";
import { OtherUserProfile } from "./OtherUserProfile";

export const Profile = () => {
  const { push } = useRouter();
  const user = useUser();
  const { t } = useTranslation();
  const bio = user?.bio;
  const fansCount = 12;
  const fanOfCount = 130;

  return (
    <Stack gap={"xl"}>
      <Stack gap={"md"}>
        <Group gap={"lg"}>
          <Avatar src={user?.avatar} size={"lg"} />
          <Stack gap={"sm"}>
            <Text component="div" fw={"bolder"} tt={"capitalize"} lh={1}>
              {user?.nickname}
            </Text>
            <Group gap={"md"}>
              <Stack gap={"xs"} align="start">
                <Text size="xs" fw={"bold"} tt={"capitalize"} lh={1}>
                  {t("fans")}
                </Text>
                <Button variant="transparent" size="sm" radius={"sm"} lh={1}>
                  {fansCount}
                </Button>
              </Stack>
              <Stack gap={"xs"} align="start">
                <Text size="xs" fw={"bold"} tt={"capitalize"} lh={1}>
                  {t("fan of")}
                </Text>
                <Button variant="transparent" size="sm" radius={"sm"} lh={1}>
                  {fanOfCount}
                </Button>
              </Stack>
            </Group>
          </Stack>
        </Group>

        <Spoiler
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

        {/* <CurrentUserProfile userId="111" /> */}
        <OtherUserProfile />
      </Stack>
      <Divider />
      <Text c="dimmed" size="sm">
        No contributions yet{" "}
      </Text>
    </Stack>
  );
};
