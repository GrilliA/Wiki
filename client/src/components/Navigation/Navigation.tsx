import { Container } from "@mantine/core";
import { WikiLogo } from "../Logo";
import styles from "./Navigation.module.css";
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  return (
    <>
      <nav className={`${styles.nav}`}>
        <WikiLogo className={styles.logo} />
        <NavigationMenu />
      </nav>
    </>
  );
};

export default Navigation;
