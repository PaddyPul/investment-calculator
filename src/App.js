import React, { Component } from 'react';
import './App.css';
import InvestmentChoices from './containers/investmentChoices';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvestmentChoices />
      </div>
    );
  }
}

export default App;
