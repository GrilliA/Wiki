import { Body, Container, Html } from "@react-email/components";
import React from "react";
import Footer from "../Footer/Footer";
// import { APP_ADDRESS, APP_EMAIL, APP_LOGO, APP_NAME, APP_PHONE } from "../../../helper/constants";
type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <Html>
      <Body style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
        <Container>
          {props.children}
          {/* <Footer appName={APP_NAME} email={APP_EMAIL} address={APP_ADDRESS} phone={APP_PHONE} logo={APP_LOGO} /> */}
        </Container>
      </Body>
    </Html>
  );
};

export default Layout;
