import { Card, Container } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import styles from "./PageTemplate.module.css";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useRouter } from "@/hooks/useRouter";
import { ErrorModal } from "../ErrorModal/ErrorModal";
import { useSelector } from "react-redux";
import type { TRootState } from "@/state/store";
import { useCurrentUserQuery } from "@/services/auth";

export const PageTemplate = () => {
  const { push } = useRouter();
  const token = useSelector((state: TRootState) => state.ui.token);
  const { data: user } = useCurrentUserQuery();

  useEffect(() => {
    if (!token) {
      push("/auth/login", { replace: true });
      return;
    }
    if (!user?.isOnboarded) {
      push("/onboarding");
    }
  }, [token, user?.isOnboarded]);

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
