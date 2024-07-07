import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchRepositories } from '../api/github';
import { Repository, SearchResult } from '../types';
import { Container, List, ListItem, ListItemText, CircularProgress, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchResults: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            setLoading(true);
            searchRepositories(query).then(response => {
                setRepositories(response.data.items);
                setLoading(false);
            });
        }
    }, [query]);

    return (
        <Container>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            ) : (
                <List>
                    {repositories.map(repo => (
                        <ListItem key={repo.id} component={Link} to={`/repo/${repo.owner.login}/${repo.name}`}>
                            <ListItemText primary={repo.name} secondary={repo.description} />
                        </ListItem>
                    ))}
                </List>
            )}
        </Container>
    );
};

export default SearchResults;
