import { Container } from "@mantine/core";
import styles from "./PageComponent.module.css";
import Footer from "../Footer/Footer";
import { WikiNavigation } from "../Navigation";
import type { TPageComponentSiteProps } from "./PageComponent.model";
import { PageComponentMetaData } from "./PageComponentMetaData";

export const PageComponentSite = (props: TPageComponentSiteProps) => {
  return (
    <>
      <PageComponentMetaData
        title={props.title}
        description={props.description}
      />
      <WikiNavigation.Site />
      <section className={`${styles.main} ${styles.padding}`}>
        <Container h={"100%"}>{props.children}</Container>
      </section>
      <Footer />
    </>
  );
};
