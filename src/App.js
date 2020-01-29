import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Persons from './components/Persons';
import Home from './components/Home';
import HighPosts from './components/HighPosts';
import PageNotFound from './components/PageNotFound';
import ToDos from './components/ToDos';
import AlbumsPhotos from './components/AlbumsPhotos';
import UsersAlbums from './components/UsersAlbums';

class App extends Component {

  render () {
    return (
      // <Persons contacts={this.state.persons}></Persons>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/high-posts" component={HighPosts}></Route>
          <Route path="/persons" component={Persons}></Route>          
          <Route path="/todos-percentual" component={ToDos}></Route>
          <Route path="/albums-photos" component={AlbumsPhotos}></Route>
          <Route path="/users-albums" component={UsersAlbums}></Route>
          <Route path='*' component={PageNotFound} />
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
