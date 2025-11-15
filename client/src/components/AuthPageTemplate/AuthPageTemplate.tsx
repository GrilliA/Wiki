import { PageComponent } from "../PageComponent/PageComponent";
import Footer from "../Footer/Footer";
import style from "./AuthPageTemplate.module.css";
import { Outlet } from "react-router";
import { useRouter } from "@/hooks/useRouter";
import { useEffect } from "react";
import type { TRootState } from "@/state/store";
import { useSelector } from "react-redux";

export const AuthPageTemplate = () => {
  const { push } = useRouter();
  const token = useSelector((state: TRootState) => state.ui.token);

  useEffect(() => {
    if (token) {
      push("/", { replace: true });
    }
  }, [token]);

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
