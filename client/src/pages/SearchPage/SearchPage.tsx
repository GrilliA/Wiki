import { WikiFull } from "@/components/Full";
import { SearchComponent } from "@/components/HeroSection/SearchComponent";
import GemmaList from "@/components/List/List";
import GemmaListItem from "@/components/List/ListItem";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { Spoiler, Stack, Text, Title, Typography } from "@mantine/core";

export const SearchPage = () => {
  const pages = [
    {
      name: "he3llo",
      description: "this is a description",
      sections: [
        {
          title: "Summary",
          content: "This is a summary of the topic.",
        },
      ],
    },
  ];
  return (
    <WikiFull noNav>
      <PageComponent>
        <Title mb={"md"}>Search the community</Title>
        <SearchComponent />
        <GemmaList>
          {pages?.map((page) => {
            return (
              <GemmaListItem>
                <Stack>
                  <Text>{page?.name}</Text>
                  <Text
                    lineClamp={3}
                    dangerouslySetInnerHTML={{ __html: page?.content }}
                  />
                </Stack>
              </GemmaListItem>
            );
          })}
        </GemmaList>
      </PageComponent>
    </WikiFull>
  );
};
