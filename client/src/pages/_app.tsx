import "@/styles/globals.css";
import "material-symbols";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { Container, createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Provider } from "@/store";
import { Poppins } from "next/font/google";

const theme = createTheme({});

const geistSans = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Provider>
          <Container h={"100%"} className={`${geistSans.variable}`}>
            <Component {...pageProps} />
          </Container>
        </Provider>
      </ModalsProvider>
    </MantineProvider>
  );
}
