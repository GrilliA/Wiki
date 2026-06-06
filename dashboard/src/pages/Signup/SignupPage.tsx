import { Signup } from "./Signup";
import { useTranslation } from "react-i18next";
import { PageComponent } from "@/components/PageComponent/PageComponent";

const SignupPage = () => {
  const { t } = useTranslation("signup");

  return (
    <PageComponent
      withPadding
      title={t("document.title")}
      description={t("document.description")}
    >
      <Signup />
    </PageComponent>
  );
};

export default SignupPage;
