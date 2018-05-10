import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBitcoin, calculateTreasure } from '../actions/index';

export class InvestmentChoices extends Component {
  constructor(props) {
    super(props);
    this.state = { investmentDate: '1', investmentType: 'tesouro', investmentAmount: '2000' };
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onInvestSubmit = this.onInvestSubmit.bind(this);

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

  onInvestSubmit(event) {
    event.preventDefault();
    if (this.state.investmentType === 'bitcoin') {
      this.props.fetchBitcoin(this.state.investmentDate, this.state.investmentAmount, this.state.investmentType);
    } else {
      this.props.calculateTreasure(this.state.investmentDate, this.state.investmentAmount, this.state.investmentType);
    }

  }

  render() {
    return (
      <div>
        <h1>Há quanto tempo realizou o investimento?</h1>
        <form
          onSubmit={this.onInvestSubmit}>

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
          <button type='submit'>Rodar investimento</button>
        </form>
      </div>
    );
  }
}

function  mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBitcoin, calculateTreasure }, dispatch);
}

export default connect(null, mapDispatchToProps)(InvestmentChoices);
