import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import './index.css';
import AppContent from './AppContent';
import AppHeader from './AppHeader';

class App extends Component {
  render() {
    const myProps = {
      title: 'My cool App!',
      subject: 'My subject',
      favourite_color: 'red',
    };

    return (
      <div className="app">
        <AppHeader {...myProps} />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
