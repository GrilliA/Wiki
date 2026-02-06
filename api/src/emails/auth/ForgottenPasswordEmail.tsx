import { Body, Container, Html, Link, Text } from "@react-email/components";
import { CLIENT_URL } from "../../helper/constants";
import { Token, User } from "@prisma/client";

export default async function ForgottenPasswordEmail(props: { user: User; token: Token }) {
  const { token, user } = props;

  return (
    <Html>
      <Body style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
        <Container>
          <Text>This is just a test</Text>
          <Link
            href={`${CLIENT_URL}/auth/new_password/${token.code}`}
            style={{
              color: "#6741d9",
              fontWeight: "bold",
            }}
          >
            Click here to reset
          </Link>
          <Text>End</Text>
        </Container>
      </Body>
    </Html>
  );
}
