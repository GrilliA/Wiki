import type { ReactNode } from "react";

export type TPageComponentProps = {
  withPadding?: boolean;
  children: ReactNode;
  title?: string;
  description?: string;
  header?: ReactNode;
  footer?: ReactNode;
  variant?: "simple" | "dashboard";
};
