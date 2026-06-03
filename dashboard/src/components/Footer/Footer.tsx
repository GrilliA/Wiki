import { Text, Container, Anchor } from "@mantine/core";
import classes from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import { appName } from "@/helper/constants";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={classes.footer}>
      <section className={classes.copyright}>
        <Text c="dimmed" size="sm">
          {t("footer.copyright", {
            date: new Date().getFullYear(),
            company: appName,
          })}
        </Text>
      </section>
    </footer>
  );
};

export default Footer;
