import React from 'react';
import PostTemplate from './components/PostTemplate';
import Insert from './components/Insert';
import List from './components/List';

const App=()=> {
  return (
  <PostTemplate>
    <Insert/>
    <List/>
  </PostTemplate>
  )
};

export default App;
