import React, { Component } from 'react';
import './App.css';
import InvestmentChoices from './containers/investment_choices';
import InvestmentChart from './containers/investment_chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvestmentChoices />
        <InvestmentChart />
      </div>
    );
  }
}

export default App;
