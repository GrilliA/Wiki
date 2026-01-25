import styles from "./Sidebar.module.css";
import { Box } from "@mantine/core";
import Icon from "../Icon/Icon";
import { WikiLink } from "../Link";
import { WikiIcon } from "../Icon";
import { useRouter } from "../../hooks/useRouter";
import type { TSidebarItemProps } from "./Sidebar.model";

const SidebarItem = (props: TSidebarItemProps) => {
  const { href, handleClick, isDisabled } = props;
  const pathname = useRouter().pathname;
  const isActive = pathname === props.href;

  return (
    <li
      className={`${styles.item} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      {href ? (
        <WikiLink
          href={href || "#"}
          className={`${styles.link} ${isDisabled ? styles.disabled : ""}`}
        >
          <Box className={styles.icon}>
            <WikiIcon
              isOutlined={!isActive}
              name={props.icon}
              size={props.size}
            />
          </Box>
        </WikiLink>
      ) : (
        <Box className={`${styles.link} ${styles.noLink}`}>
          <Box className={styles.icon}>
            <Icon name={props.icon} size={props.size} />
          </Box>
        </Box>
      )}
    </li>
  );
};

export default SidebarItem;
