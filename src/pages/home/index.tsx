import { Container } from "@chakra-ui/react"
import { Welcome } from "./welcome"

function Home() {
    return (
      <Container maxW="xl" centerContent>
        <Welcome />
      </Container>
    )
}

export { Home }