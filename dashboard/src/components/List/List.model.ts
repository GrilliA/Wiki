import { ReactNode } from "react";
export type TListSharedProps = {
  isHoverable?: boolean;
};
export type TListProviderProps = {
  children: ReactNode;
  listProps: TListSharedProps;
};
export type TListProps = {
  children: ReactNode;
} & TListSharedProps;

export type TListItemProps = {
  children: ReactNode;
  isActive?: boolean;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  handleClick?: () => void;
};
