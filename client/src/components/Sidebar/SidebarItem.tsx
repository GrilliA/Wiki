import styles from "./Sidebar.module.css";
import { Box } from "@mantine/core";
import { TSidebarItemProps } from "./Sidebar.model";
import Icon from "../Icon/Icon";
import { useRouter } from "next/router";
import { WikiLink } from "../Link";
import { WikiIcon } from "../Icon";

const SidebarItem = (props: TSidebarItemProps) => {
  const { href, handleClick } = props;
  const pathname = useRouter().pathname;
  const isActive = pathname === props.href;

  return (
    <li
      className={`${styles.item} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      {href ? (
        <WikiLink href={href || "#"} className={`${styles.link}`}>
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
