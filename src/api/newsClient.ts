import axios, { Axios, AxiosRequestConfig } from "axios";
import { HeadlinesRequest, HeadlinesResponse } from "./types";

class NewsClient {
    
    private axios: Axios;
    private apiKey: string | undefined;
    private apiBaseUrl: string | undefined;

    constructor() {

        console.log(process.env);
        
        this.apiBaseUrl = process.env.REACT_APP_NEWS_API_URL
        this.apiKey = process.env.REACT_APP_NEWS_API_KEY
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

    public async getHeadlines(request: HeadlinesRequest): Promise<HeadlinesResponse>  {
        try {
            const urlParams = this.buildUrlParams(request);
            const url = `/top-headlines?${urlParams}`
            const response = await this.axios.get<HeadlinesResponse>(url);
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

    private buildUrlParams(request: HeadlinesRequest): string {

        const strRequest = {...request, pageSize: String(request.pageSize), page: String(request.page)}
        const sp = new URLSearchParams(strRequest);
        return sp.toString();
        
    }
}

export { NewsClient }