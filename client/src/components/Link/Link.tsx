import RouterLink from "next/link";
import { TLinkProps } from "./Link.model";
import styles from "./Link.module.css";
import { Anchor } from "@mantine/core";

const Link = (props: TLinkProps) => {
  const { href: to, children, onClick, className, ...rest } = props;
  return (
    <Anchor
      unstyled
      component={RouterLink}
      href={to}
      className={`${styles.link} ${className}`}
      {...rest}
    >
      {children}
    </Anchor>
  );
};

export default Link;
