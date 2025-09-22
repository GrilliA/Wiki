import { ModalRootProps } from "@mantine/core";
import { ReactNode, MouseEventHandler } from "react";

export interface TModalProps extends ModalRootProps {
  title?: ReactNode;
  confirmProps?: {
    label: string;
    onClick?: MouseEventHandler;
    form?: string;
    color?: string;
  };
  closeProps?: {
    label: string;
    color?: string;
  };
}
