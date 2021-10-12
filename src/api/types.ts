
export interface HeadlinesRequest {
    country?: string;
    category?: string;
    sources?: string;
    q?: string;
    page: Number;
    pageSize: Number
}

export interface Article {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
}

export interface Source {
    id: string;
    name: string;
    source?: Source;
}

export interface HeadlinesResponse {
    status: string;
    articles?: Article[];
    totalResults?: Number;
    code?: string;
    message?:string;
}