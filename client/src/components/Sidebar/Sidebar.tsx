import SidebarItem from "./SidebarItem";
import styles from "./Sidebar.module.css";
import { navigationData } from "../../helper/navigationData";
import type { TSidebarProps } from "./Sidebar.model";

const SideBar = (_: TSidebarProps) => {
  return (
    <aside className={styles.nav}>
      <ul className={styles.items}>
        {navigationData.map(({ href, icon, id, size }) => (
          <SidebarItem key={id} id={id} href={href} icon={icon} size={size} />
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
