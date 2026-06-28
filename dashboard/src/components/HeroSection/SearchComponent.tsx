import {
  ActionIcon,
  TextInput,
  type TextInputProps,
  useMantineTheme,
} from "@mantine/core";
import Icon from "../Icon/Icon";

export const SearchComponent = (props: TextInputProps) => {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search for wikis"
      rightSectionWidth={42}
      leftSection={<Icon name="search" size={"md"} />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <Icon name="arrow_circle_right" size={"md"} />
        </ActionIcon>
      }
      autoFocus
      {...props}
    />
  );
};
