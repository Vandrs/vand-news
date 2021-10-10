import logo from "../../logo.svg";
import {
    SimpleGrid,
    Box,
    Flex,
    Heading,
    Image,
    Center 
} from "@chakra-ui/react"

function Welcome() {
    return (
      <SimpleGrid columns={{ sm:1, md:2 }} p="2">
        <Flex>
            <Center w="100%">
                <Image src={logo} alt="logo" objectFit="cover" backgroundColor="teal" borderRadius="full" boxSize="150px"/>
            </Center>  
        </Flex>
        <Flex alignItems="center">
            <Box>
                <Center w="100%">
                    <Heading as="h1">
                        Welcome to Vand News.
                    </Heading>  
                </Center>
            </Box>
        </Flex>
      </SimpleGrid>
    )
}

export { Welcome }