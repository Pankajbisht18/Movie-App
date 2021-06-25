import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Trending from './Component/Trending';
import Movie from './Component/Movie';
import TvShow from './Component/TvShow';
import Search from './Component/Search';
import Content from './Component/ContentTrending';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Trending} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/tvshow" exact component={TvShow} />
        <Route path="/search" exact component={Search} />
        
        <Route path="/:media_type/:id" component={Content} />
        <Route path="/movie/:media_type/:id" component={Content} />
        <Route path="/tvshow/:id" component={Content} />
        <Route path="/search/:id" component={Content} />
      </Switch>
    </>
  );
}
export default App;
