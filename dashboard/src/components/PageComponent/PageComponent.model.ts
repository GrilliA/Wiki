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

export type TPageComponentDashboardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export type TPageComponentSiteProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export type TPageComponentMetaDataProps = {
  title: string;
  description: string;
};
