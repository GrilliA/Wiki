import type { MaterialSymbol } from "material-symbols";

type TNavigationData = {
  id: string;
  href?: string;
  icon: MaterialSymbol;
  size?: number;
  handleClick?: () => void;
}[];

export const navigationData: TNavigationData = [
  {
    id: "home",
    href: "/home",
    icon: "home",
  },
  {
    id: "search",
    href: "/search",
    icon: "search",
  },
  {
    id: "add",
    icon: "add_circle",
    href: "/new",
    size: 32,
  },
  {
    id: "notifications",
    href: "/notifications",
    icon: "notifications",
  },
  {
    id: "profile",
    href: "/profile",
    icon: "person",
  },
];
