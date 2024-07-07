import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import RepoDetail from './components/RepoDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/repo/:owner/:repo" element={<RepoDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
