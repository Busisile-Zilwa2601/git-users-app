import React, { Component } from 'react';
import SearchComp from './SearchComp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Git Users
        </header>
        <SearchComp
        />
      </div>
    );
  }
}

export default App;
