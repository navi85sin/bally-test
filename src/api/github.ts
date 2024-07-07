import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
});

export const searchRepositories = (query: string) => {
    return githubApi.get(`/search/repositories`, {
        params: { q: query }
    });
};

export const getRepositoryDetails = (owner: string, repo: string) => {
    return githubApi.get(`/repos/${owner}/${repo}`);
};

export const getRepositoryReadme = async (owner: string, repo: string) => {
    const response = await githubApi.get(`/repos/${owner}/${repo}/readme`, {
        headers: { Accept: 'application/vnd.github.v3.raw' }
    });
    return response.data;
};
