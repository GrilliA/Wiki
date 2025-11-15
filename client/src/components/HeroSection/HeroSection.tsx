import { Button, Container, Image, Overlay, Text, Title } from "@mantine/core";
import classes from "./HeroSection.module.css";
import { SearchComponent } from "./SearchComponent";
import { appName } from "@/helper/constants";
import { useRouter } from "@/hooks/useRouter";

export const HeroSection = () => {
  const { push } = useRouter();
  const handleSearch = () => {
    push("/search");
  };
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to{" "}
          <Text component="span" inherit className={classes.highlight}>
            {appName}
          </Text>
        </Title>

        <Container size={640} mb={"md"}>
          <Text size="lg" className={classes.description}>
            The goal is to make it a community based management. Where the
            community is the one providing a safe environment, moderating the
            content and providing new content.
          </Text>
        </Container>
        <Container mb={"md"}>
          <SearchComponent onClick={handleSearch} />
        </Container>
        <Container size={640} mb={"md"}>
          <Text size="lg" className={classes.description} fw={"bolder"}>
            sponsored by:
          </Text>
          <div style={{ width: 150 }}>
            <Image src="mike.avif" maw={"100%"} h={"100%"} />
          </div>
        </Container>
      </div>
    </div>
  );
};
