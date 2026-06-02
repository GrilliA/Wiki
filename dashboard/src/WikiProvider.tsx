import { createTheme, Button, MantineProvider } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "./state/store";

const WikiProvider = (props: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {props.children}
        </MantineProvider>
      </BrowserRouter>
    </Provider>
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
