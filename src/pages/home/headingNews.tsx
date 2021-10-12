import { 
    SimpleGrid, 
    Box, 
    Input,
    InputGroup,
    InputRightElement,
    Center,
    Spinner
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect, ChangeEvent } from 'react';
import { Article, HeadlinesRequest } from "../../api/types";
import { NewsClient } from "../../api/newsClient";
import { NewsCard } from "../../components/newsCard";


function HeadingNews() {

    const newsAPI = new NewsClient();
    const [search, setSearch] = useState<string>("");
    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target) {
            setSearch(event.target.value) 
        } 
    }
    const getNews = async () => {
        setIsLoading(true);
        setArticles([]);

        if (!search || search.length <= 3) {
            setIsLoading(false);
            return;
        }

        const hlRequest: HeadlinesRequest = {
            q: search,
            page: 1,
            pageSize: 12
        }
        const news = await newsAPI.getHeadlines(hlRequest);
        if (news.articles) {
            setArticles(news.articles)
        }

        setIsLoading(false);
    }
    
    useEffect(() => {
        getNews();
    },[search])

    return (
        <Box w="100%" py="30px">
          <Center w="100%">
            <Box w="lg" pb="30px">
              <InputGroup >
                <Input size="lg" placeholder="Search" onChange={handleSearch}/>
                <InputRightElement children={<SearchIcon fontSize="lg" color="blue.500" />} />
              </InputGroup>
            </Box>
          </Center>
          
          {isLoading &&
            <Center w="100%" pt="40px">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          }

          {!isLoading &&   
            <SimpleGrid columns={{sm:1, md:2, lg:4}} spacing="5">
                {articles.map(article => <NewsCard article={article} />)}
            </SimpleGrid>
          }
        </Box>
    )
}

export { HeadingNews }