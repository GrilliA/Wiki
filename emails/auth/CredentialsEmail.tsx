import { Link, Section, Text } from "@react-email/components";
import { CLIENT_URL } from "../../helper/constants";
import { User } from "@prisma/client";
import Layout from "../components/Layout/Layout";

export default async function CredentialsEmail(props: { user: User }) {
  return (
    <Layout>
      <Section>
        <Text style={{ fontWeight: "bolder" }}>Benvenuto su Gemma</Text>
        <Text>Email: {props.user.email}</Text>
        <Text>password: {props.user.password}</Text>
        <Link
          href={`${CLIENT_URL}`}
          style={{
            color: "green",
            fontWeight: "bolder",
          }}
        >
          Accedi
        </Link>
      </Section>
    </Layout>
  );
}
