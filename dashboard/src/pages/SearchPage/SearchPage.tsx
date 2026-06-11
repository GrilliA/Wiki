import { WikiFull } from "@/components/Full";
import { SearchComponent } from "@/components/HeroSection/SearchComponent";
import GemmaList from "@/components/List/List";
import GemmaListItem from "@/components/List/ListItem";
import { PageComponent } from "@/components/PageComponent/PageComponent";
import { usePage } from "@/hooks/usePage";
import { Divider, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";

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
    <>
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
                <Text size="md" c={"violet.5"} fw={"bolder"}>
                  {page?.description}
                </Text>
              </Stack>
            </GemmaListItem>
          );
        })}
      </GemmaList>
    </>
  );
};
