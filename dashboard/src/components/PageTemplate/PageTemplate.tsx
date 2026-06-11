import { Card, Container } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import styles from "./PageTemplate.module.css";
import { Outlet } from "react-router";

export const PageTemplate = () => {
  return (
    <div>
      <Container>
        <div className={styles.template}>
          <WikiNavigation variant="dashboard" />
          <section className={styles.container}>
            <WikiSidebar />
            <div className={styles.wrapper}>
              <Card shadow="xs" className={styles.card}>
                <Outlet />
              </Card>
            </div>
          </section>
          <WikiBottomNavigation />
        </div>
      </Container>
    </div>
  );
};
