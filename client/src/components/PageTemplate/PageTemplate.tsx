import { Card, Container } from "@mantine/core";
import { WikiBottomNavigation } from "../BottomNavigation";
import { WikiNavigation } from "../Navigation";
import { WikiSidebar } from "../Sidebar";
import styles from "./PageTemplate.module.css";
import { Outlet } from "react-router";
import { ErrorModal } from "../ErrorModal/ErrorModal";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import { useRouter } from "@/hooks/useRouter";

export const PageTemplate = () => {
  const { data: user, isSuccess } = useUser();
  const { push } = useRouter();
  useEffect(() => {
    if (!user?.id && isSuccess) {
      push("/auth/login", { replace: true });
    }
    if (!user?.isOnboarded && isSuccess) {
      push("/onboarding", { replace: true });
    }
  }, [user?.id, isSuccess]);

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
