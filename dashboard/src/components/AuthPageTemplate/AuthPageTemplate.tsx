import { PageComponent } from "../PageComponent/PageComponent";
import Footer from "../Footer/Footer";
import style from "./AuthPageTemplate.module.css";
import { Outlet } from "react-router";
import { useRouter } from "@/hooks/useRouter";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";
import type { TAuthPageTemplateProps } from "./AuthPageTemplate.model";

export const AuthPageTemplate = (props: TAuthPageTemplateProps) => {
  const { data: user, isSuccess } = useUser();
  const { push } = useRouter();

  useEffect(() => {
    if (user?.id && isSuccess) {
      push("/");
    }
  }, [user?.id, isSuccess]);

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
