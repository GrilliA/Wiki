import { Login } from "./Login";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation("login");
  return (
    <PageComponent
      withPadding
      title={t("document.title")}
      description={t("document.description")}
    >
      <Login />
    </PageComponent>
  );
};

export default LoginPage;
