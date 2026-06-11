import { Card } from "@mantine/core";
import { WikiLogo } from "../Logo";
import styles from "./Navigation.module.css";
import NavigationMenu from "./NavigationMenu";

const NavigationDashboard = () => {
  return (
    <Card p={0}>
      <nav className={`${styles.nav}`}>
        <WikiLogo className={styles.logo} />
        <NavigationMenu />
      </nav>
    </Card>
  );
};

export default NavigationDashboard;
