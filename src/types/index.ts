export interface Repository {
    id: number;
    name: string;
    owner: {
        login: string;
    };
    description: string;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
}

export interface SearchResult {
    items: Repository[];
}
