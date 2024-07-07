import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepositoryDetails, getRepositoryReadme } from '../api/github';
import { Repository } from '../types';
import { Container, Typography } from '@mui/material';

const RepoDetail: React.FC = () => {
    const { owner, repo } = useParams<{ owner: string, repo: string }>();
    const [repository, setRepository] = useState<Repository | null>(null);
    const [readme, setReadme] = useState<string>('');

    useEffect(() => {
        if (owner && repo) {
            getRepositoryDetails(owner, repo).then(response => {
                setRepository(response.data);
            });

            getRepositoryReadme(owner, repo).then(data => {
                setReadme(data);
            });
        }
    }, [owner, repo]);

    return (
        <Container>
            {repository && (
                <>
                    <Typography variant="h4">{repository.name}</Typography>
                    <Typography variant="subtitle1">{repository.description}</Typography>
                    <Typography>Stars: {repository.stargazers_count}</Typography>
                    <Typography>Forks: {repository.forks_count}</Typography>
                    <Typography>Open Issues: {repository.open_issues_count}</Typography>
                </>
            )}
            <Typography variant="h5">README</Typography>
            <pre>{readme}</pre>
        </Container>
    );
};

export default RepoDetail;
