import type { MaterialSymbol } from "material-symbols";

type TNavigationData = {
  id: string;
  href?: string;
  icon: MaterialSymbol;
  size?: number;
  isDisabled: boolean;
  handleClick?: () => void;
}[];

export const navigationData: TNavigationData = [
  {
    id: "home",
    href: "/home",
    icon: "home",
    isDisabled: false,
  },
  {
    id: "search",
    href: "/search",
    icon: "search",
    isDisabled: true,
  },
  {
    id: "add",
    icon: "add_circle",
    href: "/new",
    size: 32,
    isDisabled: true,
  },
  {
    id: "notifications",
    href: "/notifications",
    icon: "notifications",
    isDisabled: true,
  },
  {
    id: "profile",
    href: "/profile",
    icon: "person",
    isDisabled: false,
  },
];
