import { Container } from "@chakra-ui/react";
import { Welcome } from "./welcome";
import { HeadingNews } from "./headingNews";

function Home() {
    return (
      <Container maxWidth="container.xl" centerContent>
        <Welcome />
        <HeadingNews />
      </Container>
    )
}

export { Home }