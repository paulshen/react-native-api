import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './ui/pages/MainPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/:componentName?" component={MainPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
