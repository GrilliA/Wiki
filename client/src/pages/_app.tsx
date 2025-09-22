import "@/styles/globals.css";
import "material-symbols/outlined.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Provider } from "@/store";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ModalsProvider>
    </MantineProvider>
  );
}
