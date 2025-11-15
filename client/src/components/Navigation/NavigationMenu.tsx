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

  return (
    <Menu width={300} withArrow>
      <Menu.Target>
        <Button
          variant={"subtle"}
          color="gray.5"
          c={"gray.6"}
          size="compact-xs"
          classNames={{ root: styles["nav-deselect"] }}
          radius={0}
        >
          <Icon name="menu" />
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<Icon name="shield" />}>
          {"Area riservata"}
        </Menu.Item>
        {/* <Menu.Item leftSection={<Icon name="edit" />} onClick={handlePassRoute}> */}
        {/*   {"Cambia password"} */}
        {/* </Menu.Item> */}
        {/* <Menu.Item leftSection={<Icon name="settings" />} onClick={handleSettingsRoute}> */}
        {/*   {"Impostazioni"} */}
        {/* </Menu.Item> */}
        <Menu.Item
          color="red"
          leftSection={<Icon name="logout" />}
          onClick={handleLogout}
        >
          {"Esci"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavigationMenu;
