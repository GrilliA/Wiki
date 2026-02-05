import styles from "./BottomNavigation.module.css";
import { WikiLink } from "../Link";
import { WikiIcon } from "../Icon";
import { Box } from "@mantine/core";
import { navigationData } from "../../helper/navigationData";
import { useRouter } from "../../hooks/useRouter";

const BottomNavigation = () => {
  const pathname = useRouter().pathname;
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        {navigationData.map((d) => {
          const isActive = pathname === d.href;
          const className = `${styles.link} ${isActive ? styles.active : ""} ${d.isDisabled ? styles.disabled : ""}`;
          if (d.href) {
            return (
              <WikiLink key={d.href} href={d.href} className={className}>
                <WikiIcon isOutlined={!isActive} size={d.size} name={d.icon} />
              </WikiLink>
            );
          }
          return (
            <Box className={className} key={d.id}>
              <WikiIcon size={d.size} name={d.icon} />
            </Box>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
