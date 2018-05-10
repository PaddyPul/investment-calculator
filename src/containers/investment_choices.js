import React, {Component} from 'react';

import Submit from './submit';

export default class InvestmentChoices extends Component {
  constructor(props) {
    super(props);
    this.state = { investmentDate: '1', investmentType: 'tesouro', investmentAmount: '2000' };
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onTypeChange(event) {
    this.setState({investmentType: event.target.value});
  }

  onDateChange(event) {
    this.setState({investmentDate: event.target.value});
  }

  onAmountChange(event) {
    this.setState({investmentAmount: event.target.value});
  }


  render() {
    return (
      <div>
        <h1>Há quanto tempo realizou o investimento?</h1>
          <select
            onChange={this.onTypeChange}>
            <option value='tesouro'>Tesouro Direto pré-fixado 10%</option>
            <option value='bitcoin'>Bitcoin</option>
          </select>
          <select
            onChange={this.onDateChange}>
            <option value='1'>1 ano</option>
            <option value='2'>2 anos</option>
          </select>
          <select
            onChange={this.onAmountChange}>
            <option value='2000'>RS$2 mil</option>
            <option value='10000'>R$10 mil</option>
          </select>
          <Submit
            type={this.state.investmentType}
            date={this.state.investmentDate}
            amount={this.state.investmentAmount}
            label='Simular Investimento'/>
      </div>
    );
  }
}
