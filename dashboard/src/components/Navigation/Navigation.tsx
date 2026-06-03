import type { TNavigationProps } from "./Navigation.model";
import NavigationDashboard from "./NavigationDashboard";
import NavigationSimple from "./NavigationSimple";

const Navigation = (props: TNavigationProps) => {
  if (props.variant === "simple") {
    return <NavigationSimple />;
  }

  if (props.variant === "dashboard") {
    return <NavigationDashboard />;
  }

  return <NavigationSimple />;
};

export default Navigation;
