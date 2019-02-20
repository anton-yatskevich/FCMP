interface SourceResponseItem {
    category: string,
    country: string,
    description: string,
    id: string,
    language: string,
    name: string,
    url: string
}

export interface SourcesResponse {
    status: string,
    sources: Array<SourceResponseItem>
}

export interface Source {
    name: string,
    id: string
}

