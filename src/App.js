import React, { Component } from 'react';
import './App.scss';
import tShirtCodersTokyo from './assets/images/tshirt.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tShirtCodersTokyo} className="App-logo" alt="logo" />
          <br/>
          <p>
            Cùng học với Coders.Tokyo nhé
          </p>
          <a
            className="App-link"
            href="https://coders.tokyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Đăng ký học
          </a>
        </header>
      </div>
    );
  }
}

export default App;
