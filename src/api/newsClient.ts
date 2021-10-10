import axios, { Axios, AxiosRequestConfig } from "axios";
import { HeadlinesRequest, HeadlinesResponse } from "./types";

class NewsClient {
    
    private axios: Axios;
    private apiKey: string | undefined;
    private apiBaseUrl: string | undefined;

    constructor() {
        this.apiBaseUrl = process.env.NEW_API_URL
        this.apiKey = process.env.NEW_API_URL
        this.axios = axios.create(this.getAxiosConfig()) 
    }

    private getAxiosConfig(): AxiosRequestConfig {
        return {
            baseURL: `${this.apiBaseUrl}`,
            headers: {
                Authorization: `${this.apiKey}`
            }
        };
    }

    public async getHeadlines({}: HeadlinesRequest): Promise<HeadlinesResponse>  {
        try {
            const response = await this.axios.get<HeadlinesResponse>("/top-headlines");
            return response.data;
        } catch(e) {
            console.log(e);
            return {
                status: "error",
                code: "500",
                message: "Falha ao obter últimas notícias"
            }
        }
    }
}

export { NewsClient }