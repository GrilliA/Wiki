import { Card, Container } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import styles from "./PageTemplate.module.css";
import { Outlet } from "react-router";
import type { TRootState } from "@/state/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "@/hooks/useRouter";
import { ErrorModal } from "../ErrorModal/ErrorModal";

export const PageTemplate = () => {
  const { push } = useRouter();
  const apiErrors = useSelector((state: TRootState) => state.apiError);
  const isAuthenticated = apiErrors.find((err) => err.status !== 401);

  useEffect(() => {
    if (!isAuthenticated) {
      push("/auth/login", { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <div className={styles.template}>
        <WikiNavigation />
        <section className={styles.container}>
          <WikiSidebar />
          <div className={styles.wrapper}>
            <Card shadow="xs" className={styles.card}>
              <Outlet />
              <ErrorModal />
            </Card>
          </div>
        </section>
        <WikiBottomNavigation />
      </div>
    </Container>
  );
};
