import { PageComponent } from "../PageComponent/PageComponent";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useWikiFetch } from "@/hooks/useFetch";
import style from "./AuthPageTemplate.module.css";
import { ReactNode } from "react";

export const AuthPageTemplate = ({ children }: { children: ReactNode }) => {
  useWikiFetch<string, any>("/auth/current", {
    noError: true,
    onSuccess: () => {
      //TODO: remove comments
    },
  });
  return (
    <>
      <Navigation />
      <PageComponent withPadding>
        <section className={style.wrapper}>{children}</section>
      </PageComponent>
      <Footer />
    </>
  );
};
