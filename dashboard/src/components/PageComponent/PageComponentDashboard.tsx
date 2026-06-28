import { Container, Card } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import styles from "./PageComponent.module.css";
import type { TPageComponentDashboardProps } from "./PageComponent.model";
import { PageComponentMetaData } from "./PageComponentMetaData";

export const PageComponentDashboard = (props: TPageComponentDashboardProps) => {
  return (
    <div>
      <PageComponentMetaData
        title={props.title}
        description={props.description}
      />
      <Container>
        <div className={styles.template}>
          <WikiNavigation.Dashboard />
          <section className={styles.container}>
            <WikiSidebar />
            <div className={styles.wrapper}>
              <Card className={styles.card}>{props.children}</Card>
            </div>
          </section>
          <WikiBottomNavigation />
        </div>
      </Container>
    </div>
  );
};
