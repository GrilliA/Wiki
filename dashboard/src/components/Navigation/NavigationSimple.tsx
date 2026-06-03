import { WikiLogo } from "../Logo";
import styles from "./Navigation.module.css";

const NavigationSimple = () => {
  return (
    <div className={styles.simple}>
      <WikiLogo className={styles.logo} size="xl" />
    </div>
  );
};

export default NavigationSimple;
