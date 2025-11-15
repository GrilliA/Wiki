import { createTheme, Button, MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";

const WikiProvider = (props: PropsWithChildren) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {props.children}
    </MantineProvider>
  );
};

const theme = createTheme({
  fontFamily: '"IBM Plex Sans", sans-serif',
  primaryColor: "violet",
  defaultRadius: "md",
  components: {
    Button: Button.extend({
      styles(theme, props, ctx) {
        return {
          root: {
            borderRadius: props.variant === "transparent" ? 0 : undefined,
            padding: props.variant === "transparent" ? 0 : undefined,
            height: props.variant === "transparent" ? "auto" : undefined,
          },
        };
      },
      defaultProps: {
        radius: "xl",
        size: "lg",
      },
    }),
  },
});

export default WikiProvider;
