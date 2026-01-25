import { Text, Container } from "@mantine/core";
import classes from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { appName } from "@/helper/constants";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          {t("Global.Copyright", {
            date: new Date().getFullYear(),
            company: appName,
          })}
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
