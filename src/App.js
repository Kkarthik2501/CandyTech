import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './home/Home';
import Category from './category/Category';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Sidebar />
          <main className="main-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/category" component={Category} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
