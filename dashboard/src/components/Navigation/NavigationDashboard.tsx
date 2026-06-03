import { WikiLogo } from "../Logo";
import styles from "./Navigation.module.css";
import NavigationMenu from "./NavigationMenu";

const NavigationDashboard = () => {
  return (
    <>
      <nav className={`${styles.nav}`}>
        <WikiLogo className={styles.logo} />
        <NavigationMenu />
      </nav>
    </>
  );
};

export default NavigationDashboard;
