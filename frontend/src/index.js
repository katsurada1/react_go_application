import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import './index.css';
import AppContent from './AppContent';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader title="Cool App!" subject="" />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
