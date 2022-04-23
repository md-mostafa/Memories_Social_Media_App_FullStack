import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './views/Navbar/Navbar';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import PostDetails from './views/PostDetails/PostDetails';

const App = () => {

     //accessing to the user variable
  const user = JSON.parse(localStorage.getItem('profile'));
 
    return (
        <BrowserRouter>
            <Container maxwidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" exact element={ <Navigate to="/posts" />} />
                    <Route path="/posts" exact element={< Home />} />
                    <Route path="/posts/search" exact element={< Home />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/auth" exact element={  (!user ? <Auth /> : <Navigate to="/posts" />)} />
                </Routes>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;