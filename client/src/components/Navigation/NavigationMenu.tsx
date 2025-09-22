import { Button, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Navigation.module.css";

const NavigationMenu = () => {
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
        <Menu.Item color="red" leftSection={<Icon name="logout" />}>
          {"Esci"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavigationMenu;
