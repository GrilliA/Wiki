import styles from "./Logo.module.css";
import { WikiLink } from "../Link";
import { sizes } from "./Logo.utils";
import { Image } from "@mantine/core";
import type { TLogoProps } from "./Logo.model";

const Logo = (props: TLogoProps) => {
  const { className, size = "md" } = props;
  return (
    <WikiLink href={"/"} className={`${className} ${styles.logo}`}>
      <Image
        src={"/light_logo.svg"}
        w={sizes[size]}
        alt="logo"
        className={styles.img}
      />
    </WikiLink>
  );
};

export default Logo;
