import { MaterialSymbol } from "material-symbols";

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
    href: "/",
    icon: "home",
  },
  {
    id: "search",
    href: "/search",
    icon: "search",
  },
  {
    id: "add",
    icon: "add",
  },
  {
    id: "notifications",
    href: "/notifications",
    icon: "notifications",
  },
  {
    id: "profile",
    href: "/profile",
    icon: "verified_user",
  },
];
