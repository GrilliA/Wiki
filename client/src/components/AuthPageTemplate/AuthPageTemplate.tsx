import { PageComponent } from "../PageComponent/PageComponent";
import Footer from "../Footer/Footer";
import style from "./AuthPageTemplate.module.css";
import type { ReactNode } from "react";
import { WikiNavigation } from "../Navigation";

export const AuthPageTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WikiNavigation />
      <PageComponent withPadding>
        <section className={style.wrapper}>{children}</section>
      </PageComponent>
      <Footer />
    </>
  );
};
