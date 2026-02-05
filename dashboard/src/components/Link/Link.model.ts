import { AnchorProps } from "@mantine/core";
import { MouseEventHandler, ReactNode } from "react";

export interface TLinkProps extends AnchorProps {
  href: string;
  className?: string;
  onClick?: MouseEventHandler;
  children: ReactNode;
}
