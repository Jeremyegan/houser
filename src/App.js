import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import './App.css';

import Header from './components/Header/Header'



class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <header className="header">
        <Header />
        </header>
      { routes }
      </div>
      </HashRouter>
    );
  }
}

export default App;
