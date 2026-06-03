import { Paper } from "@mantine/core";
import { Login } from "./Login";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation("login");
  return (
    <PageComponent
      withPadding
      title={t("Accedi")}
      description={
        "Secure login page for accessing your private account, saved data, and personalized tools."
      }
    >
      <Login />
    </PageComponent>
  );
};

export default LoginPage;
