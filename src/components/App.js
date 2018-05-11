import React, { Component } from 'react';
import '../css/App.css';
import InvestmentChoices from '../containers/Investment_choices';
import InvestmentChart from '../containers/Investment_chart';
import Header from './Header';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Header />
          <InvestmentChart />
          <InvestmentChoices />
        </div>
      </Provider>
    );
  }
}

export default App;
