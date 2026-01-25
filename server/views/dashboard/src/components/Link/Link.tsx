import styles from "./Link.module.css";
import { Anchor } from "@mantine/core";
import { Link as Linke } from "react-router-dom";
import type { TLinkProps } from "./Link.model";

const Link = (props: TLinkProps) => {
  const { href: to, children, onClick, className } = props;
  return (
    <Anchor component={Linke} to={to} className={`${styles.link} ${className}`}>
      {children}
    </Anchor>
  );
};

export default Link;
