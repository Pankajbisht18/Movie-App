import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Trending from './Component/Trending';
import Movie from './Component/Movie';
import TvShow from './Component/TvShow';
import Search from './Component/Search';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Trending} />
        <Route path="/movie" component={Movie} />
        <Route path="/tvshow" component={TvShow} />
        <Route path="/search" component={Search} />
      </Switch>
    </>
  );
}
export default App;
