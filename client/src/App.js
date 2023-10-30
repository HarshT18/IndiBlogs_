import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import CategoryBar from './components/CategoryBar/CategoryBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Announcement from './components/Announcement/Announcement';
import Footer from './components/Footer/Footer';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import { getPostsBySearch } from './actions/posts'; // Import the action
import  Display  from './components/display/display';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  const onCategorySelect = (categoryId) => {
    // Set the selected category ID and perform actions like fetching posts.
    setSelectedCategory(categoryId);

    // You can also call an API or dispatch actions here to fetch posts based on the selected category.
    // For example, dispatch an action to fetch posts by category.
    // dispatch(fetchPostsByCategory(categoryId));
  };

  const categories = [
    { _id: 1, name: 'Category 1' },
    { _id: 2, name: 'Category 2' },
    // Add more categories as needed.
  ];


  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <CategoryBar categories={categories} onCategorySelect={onCategorySelect}/>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route exact path="/category/display" component={<Display />} />
         
        </Switch>
        <Announcement />
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
