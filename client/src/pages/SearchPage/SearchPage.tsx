import { WikiFull } from "@/components/Full";
import { SearchComponent } from "@/components/HeroSection/SearchComponent";
import GemmaList from "@/components/List/List";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { Title } from "@mantine/core";

export const SearchPage = () => {
  return (
    <WikiFull noNav>
      <PageComponent>
        <Title mb={"md"}>Search the community</Title>
        <SearchComponent />
        <GemmaList></GemmaList>
      </PageComponent>
    </WikiFull>
  );
};
