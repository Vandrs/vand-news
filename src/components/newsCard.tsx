
import { Article } from "../api/types";
import { Box, Image, Text, Flex  } from "@chakra-ui/react"


interface NewsCardProps {
  article: Article
}

function NewsCard({ article }: NewsCardProps) {

    const parseDate = (dateStr: string): string => {
      try {
        const date = Date.parse(dateStr);
        return Intl.DateTimeFormat('pt-BR').format(date);
      } catch (e) {
        return "";
      } 
    }


    return (
        <Box w="100%" 
             borderRadius="xl" 
             backgroundColor="white" 
             borderColor="gray.100" 
             borderWidth="1px" 
             overflow="hidden"
             shadow="md"
            >
            
            {article.urlToImage &&
              <Image w="100%" src={article.urlToImage} fit="cover"/>
            }
            
            <Box w="100%" p="10px">
              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                <a href={article.url}>{article.title}</a>
              </Box>
              <Box py="4px">
                <Text fontSize="small" textAlign="justify">{article.description}</Text>
              </Box>       
              { article.author &&
                <Flex w="100%" alignItems="flex-end">
                    <Text as="span" fontSize="small">
                        By: <Text as="span" fontWeight="semibold">{article.author}</Text>
                    </Text>
                </Flex>
              }
              { article.publishedAt && 
                <Box display="flex" alignItems="flex-end">
                    at {parseDate(article.publishedAt)}
                </Box> 
              }
            </Box>
        </Box>
    )
}


export { NewsCard }