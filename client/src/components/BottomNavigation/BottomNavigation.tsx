import styles from "./BottomNavigation.module.css";
import { WikiLink } from "../Link";
import { navigationData } from "@/helper/navigationData";
import { WikiIcon } from "../Icon";
import { useRouter } from "next/router";
import { Box } from "@mantine/core";

const BottomNavigation = () => {
  const pathname = useRouter().pathname;
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        {navigationData.map((d) => {
          const isActive = pathname === d.href;
          const className = `${styles.link} ${isActive ? styles.active : ""}`;
          if (d.href) {
            return (
              <WikiLink key={d.href} href={d.href} className={className}>
                <WikiIcon name={d.icon} />
              </WikiLink>
            );
          }
          return (
            <Box className={className} key={d.id}>
              <WikiIcon name={d.icon} />;
            </Box>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
