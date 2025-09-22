import styles from "./Logo.module.css";
import { WikiLink } from "../Link";
import { TLogoProps as TLogoProps } from "./Logo.model";
import { sizes } from "./Logo.utils";
import { Image } from "@mantine/core";

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
