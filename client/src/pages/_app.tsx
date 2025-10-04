import "@/styles/globals.css";
import "material-symbols";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { Button, Container, createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Provider } from "@/store";
import { Poppins } from "next/font/google";
import { ChangePasswordModal } from "@/templates/ChangePassword/ChangePasswordModal";
import { ContactModal } from "@/templates/Contact/ContactModal";
import { LoginModal } from "@/templates/Login/LoginModal";
import { SignupModal } from "@/templates/Signup/SignupModal";

const theme = createTheme({
  fontFamily: '"--font-poppins", sans-serif',
  primaryColor: "violet",
  defaultRadius: "md",
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
        radius: "xl",
      },
    }),
  },
});

const geistSans = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Provider>
          <Container h={"100%"} className={`${geistSans.variable}`}>
            <Component {...pageProps} />
          </Container>
          <LoginModal />
          <SignupModal />
          <ContactModal />
          <ChangePasswordModal />
        </Provider>
      </ModalsProvider>
    </MantineProvider>
  );
}
