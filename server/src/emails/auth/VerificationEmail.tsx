import { Link, Section } from "@react-email/components";
import { CLIENT_URL } from "../../helper/constants";
import { Token, User } from "@prisma/client";
import { AUTH_TOKEN_TYPE } from "../../api/auth/auth.helper";
import Layout from "../components/Layout/Layout";

export default async function VerificationEmail(props: { user: User & { tokens: Array<Token> }; language: string }) {
  const token = props.user?.tokens?.find((token) => token.type === AUTH_TOKEN_TYPE.SIGN_UP_VERIFICATION);
  return (
    <Layout>
      <Section>
        <Link
          href={`${CLIENT_URL}/auth/signup/verification/${token.code}`}
          style={{
            color: "#6741d9",
            fontWeight: "bolder",
          }}
        >
          This is just a test{" "}
        </Link>
      </Section>
    </Layout>
  );
}
