import { PageComponent } from "../PageComponent/PageComponent";
import Footer from "../Footer/Footer";
import style from "./AuthPageTemplate.module.css";
import { WikiNavigation } from "../Navigation";
import { Outlet } from "react-router";
import { useRouter } from "@/hooks/useRouter";
import type { TRootState } from "@/state/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AuthPageTemplate = () => {
  const { push } = useRouter();
  const apiErrors = useSelector((state: TRootState) => state.apiError);
  const isAuthenticated = apiErrors.find((err) => err.status !== 401);

  useEffect(() => {
    if (isAuthenticated) {
      push("/", { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <>
      <PageComponent withPadding>
        <section className={style.wrapper}>
          <Outlet />
        </section>
      </PageComponent>
      <Footer />
    </>
  );
};
