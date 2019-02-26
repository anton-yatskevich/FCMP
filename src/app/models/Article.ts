export interface Article {
    source: {
        id?: any,
        name: string
    },
    author: string,
    isLocalArticle?: boolean,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: number,
    content: string,
    isLocal?: boolean,
    _id?: string
}

export interface ArticleResponse {
    status: string,
    totalResults: number,
    articles: Array<Article>
}
