import { Button, Menu } from "@mantine/core";
import Icon from "../Icon/Icon";
import styles from "./Navigation.module.css";
import { tokenKey } from "@/helper/constants";
import { useRouter } from "@/hooks/useRouter";
import { removeToken } from "@/state/uiSlice/uiSlice";
import { useDispatch } from "react-redux";

const NavigationMenu = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem(tokenKey);
    dispatch(removeToken());
    push("/auth/login");
  };

  const handlePassRoute = () => {
    return;
  };
  const handleSettingsRoute = () => {
    return;
  };

  return (
    <Menu width={300}>
      <Menu.Target>
        <Button variant={"subtle"} size="compact-xs" radius={0}>
          <Icon name="menu" />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<Icon name="shield" size={14} />}>
          {"Area riservata"}
        </Menu.Item>
        <Menu.Item
          leftSection={<Icon name="edit" size={14} />}
          onClick={handlePassRoute}
        >
          {"Cambia password"}
        </Menu.Item>
        <Menu.Item
          leftSection={<Icon name="settings" size={14} />}
          onClick={handleSettingsRoute}
        >
          {"Impostazioni"}
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<Icon name="logout" size={14} />}
          onClick={handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavigationMenu;
