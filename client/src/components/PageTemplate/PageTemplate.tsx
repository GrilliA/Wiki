import { Card } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import { TPageTemplateProps } from "./PageTemplate.model";
import styles from "./PageTemplate.module.css";
export const PageTemplate = (props: TPageTemplateProps) => {
  return (
    <div className={styles.template}>
      <WikiNavigation />
      <section className={styles.container}>
        <WikiSidebar />
        <div className={styles.wrapper}>
          <Card shadow="xs" h={"100%"}>
            {props.children}
          </Card>
        </div>
      </section>
      <WikiBottomNavigation />
    </div>
  );
};
