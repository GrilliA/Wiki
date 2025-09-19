import { Img, Section, Text } from "@react-email/components";
import React from "react";
import { TFooterProps } from "./Footer.model";

const Footer = (props: TFooterProps) => {
  return (
    <Section>
      <table style={{ width: "100%" }}>
        <tr style={{ width: "100%" }}>
          <td align="center">
            <Img alt="React Email logo" height="42" src={props.logo} />
          </td>
        </tr>
        <tr style={{ width: "100%" }}>
          <td align="center">
            <Text
              style={{
                marginTop: 4,
                marginBottom: 4,
                fontSize: 11,
                color: "rgb(17,24,39)",
              }}
            >
              {props.appName}
            </Text>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Text
              style={{
                marginBottom: 4,
                fontSize: 11,
                color: "rgb(107,114,128)",
              }}
            >
              {props.address}
            </Text>
            <Text
              style={{
                marginTop: 4,
                marginBottom: "0px",
                fontSize: 11,
                color: "rgb(107,114,128)",
              }}
            >
              {props.email} {props.phone}
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  );
};

export default Footer;
