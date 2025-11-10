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
    href: "/dashboard/home",
    icon: "home",
  },
  {
    id: "search",
    href: "/dashboard/search",
    icon: "search",
  },
  {
    id: "add",
    icon: "add_circle",
    href: "/dashboard/new",
    size: 32,
  },
  {
    id: "notifications",
    href: "/dashboard/notifications",
    icon: "notifications",
  },
  {
    id: "profile",
    href: "/dashboard/profile",
    icon: "person",
  },
];
