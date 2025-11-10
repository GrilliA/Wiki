import { Card, Container } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import styles from "./PageTemplate.module.css";
import type { TPageTemplateProps } from "./PageTemplate.model";
export const PageTemplate = (props: TPageTemplateProps) => {
  return (
    <Container>
      <div className={styles.template}>
        <WikiNavigation />
        <section className={styles.container}>
          <WikiSidebar />
          <div className={styles.wrapper}>
            <Card shadow="xs" className={styles.card}>
              {props.children}
            </Card>
          </div>
        </section>
        <WikiBottomNavigation />
      </div>
    </Container>
  );
};
