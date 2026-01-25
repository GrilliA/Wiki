import { MaterialSymbol } from "material-symbols";
import { MouseEventHandler, ReactNode } from "react";

export type TBottomNavigationProps = {
  items: TBottomNavigationItem[];
};

export type TBottomNavigationItem = {
  handleClick?: MouseEventHandler;
  icon: MaterialSymbol;
  href: string;
};
