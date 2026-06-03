import { appName } from "../../helper/constants";
import styles from "./PageComponent.module.css";
import { Container } from "@mantine/core";
import type { TPageComponentProps } from "./PageComponent.model";
import Footer from "../Footer/Footer";
import { WikiNavigation } from "../Navigation";

export const PageComponent = (props: TPageComponentProps) => {
  const classes = `${styles.main} ${props.withPadding ? styles.padding : ""}`;
  return (
    <>
      <title>{`${appName} - ${props.title}`}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <WikiNavigation />
      <section className={classes}>
        <Container h={"100%"}>{props.children}</Container>
      </section>
      <Footer />
    </>
  );
};
