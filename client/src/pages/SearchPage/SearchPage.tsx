import { WikiFull } from "@/components/Full";
import { SearchComponent } from "@/components/HeroSection/SearchComponent";
import GemmaList from "@/components/List/List";
import GemmaListItem from "@/components/List/ListItem";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { usePage } from "@/hooks/usePage";
import { Divider, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { useRouter } from "@/hooks/useRouter";
export const SearchPage = () => {
  const { push } = useRouter();
  const [searchString, setSearchString] = useState("");
  const { data: pages } = usePage();
  console.log(pages);
  const filteredPages = (pages?.data ?? [])?.filter((page) => {
    return page.name.includes(searchString);
  });

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <WikiFull noNav>
      <PageComponent>
        <Title mb={"md"}>Search the community</Title>
        <SearchComponent onChange={handleChange} />
        <Divider label="Results" my={"md"} />
        <GemmaList isHoverable>
          {filteredPages?.map((page) => {
            const handleClick = () => {
              push(`/page/${page?.documentId}`);
            };
            return (
              <GemmaListItem key={page?.id} handleClick={handleClick}>
                <Stack gap={4}>
                  <Text size="md" c={"violet.5"} fw={"bolder"}>
                    {page?.name}
                  </Text>
                  <BlocksRenderer
                    content={page?.description}
                    blocks={{
                      paragraph: ({ children }) => {
                        return (
                          <Text size="sm" c="dimmed" lineClamp={2}>
                            {children}
                          </Text>
                        );
                      },
                    }}
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
