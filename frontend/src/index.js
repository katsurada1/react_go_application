import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import './index.css';
import AppContent from './AppContent';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1>Hello, world!</h1>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
