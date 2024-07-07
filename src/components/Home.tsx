import React, { useState } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                <TextField
                    label="Search Repositories"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ marginBottom: 20, width: '50%' }}
                />
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
