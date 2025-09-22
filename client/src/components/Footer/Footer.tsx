import { Text, Container } from "@mantine/core";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Gemma. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
