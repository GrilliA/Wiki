import { Group, Button } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import type { TCurrentUserProfileProps } from "./Profile.model";
import { WikiIcon } from "@/components/Icon";
import styles from "./Profile.module.css";

export const CurrentUserProfile = (props: TCurrentUserProfileProps) => {
  const {} = props;
  const { t } = useTranslation();
  const push = useNavigate();
  const handleEditProfileRoute = () => push("/profile/edit");
  const handleLinkRoute = () => push("/profile/link/edit");

  return (
    <Group>
      <Button
        size="sm"
        variant="filled"
        className={styles["profile-button"]}
        onClick={handleEditProfileRoute}
        leftSection={<WikiIcon name="edit" size={"sm"} />}
      >
        {t("Edit profile")}
      </Button>
      <Group className={styles.wrapper}>
        <Button
          size="sm"
          className={styles["profile-button"]}
          variant="outline"
          onClick={handleLinkRoute}
          leftSection={<WikiIcon name="link" size={"sm"} />}
        >
          {t("Manage links")}
        </Button>
      </Group>
    </Group>
  );
};
