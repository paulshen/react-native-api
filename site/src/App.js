import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { StyleRoot } from 'radium';

import MainPage from './ui/pages/MainPage';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <BrowserRouter>
          <div>
            <Route path="/:componentName?" component={MainPage} />
          </div>
        </BrowserRouter>
      </StyleRoot>
    );
  }
}

export default App;
