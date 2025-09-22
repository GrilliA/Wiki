import { WikiLogo } from "../Logo";
import styles from "./Navigation.module.css";
import { Container, Divider } from "@mantine/core";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  return (
    <>
      <nav className={`${styles.nav}`}>
        <Container>
          <div className={`${styles.wrapper}`}>
            <div className={styles["nav-start"]}>
              <WikiLogo className={styles.logo} />
              <Divider className={styles.divider} orientation="vertical" />
            </div>
            <NavigationMenu />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
