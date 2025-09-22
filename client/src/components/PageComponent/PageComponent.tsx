import { ReactNode } from "react";
import styles from "./PageComponent.module.css";
import { Container } from "@mantine/core";
export const PageComponent = (props: {
  withPadding?: boolean;
  children: ReactNode;
}) => {
  const classes = `${styles.main} ${props.withPadding ? styles.padding : ""}`;
  return (
    <section className={classes}>
      <Container h={"100%"}>{props.children}</Container>
    </section>
  );
};
