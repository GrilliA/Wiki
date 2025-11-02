import GemmaList from "@/components/List/List";
import GemmaListItem from "@/components/List/ListItem";
import { PageTemplate } from "@/components/PageTemplate/PageTemplate";
import { Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();

  return (
    <PageTemplate>
      <Title>Our Links</Title>
      <GemmaList isHoverable>
        <GemmaListItem
          handleClick={() => {
            push("/auth/signup");
          }}
        >
          Sign up
        </GemmaListItem>
      </GemmaList>
    </PageTemplate>
  );
}
