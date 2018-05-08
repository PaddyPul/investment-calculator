import React, {Component} from 'react';

export default class InvestmentChoices extends Component {
  constructor(props) {
    super(props);
    this.state = { investmentDate: '', investmentType: '', investmentAmount: '' };
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onTypeChange(event) {
    this.setState({investmentType: event.target.value},
      () => console.log(this.state));
  }

  onDateChange(event) {
    this.setState({investmentDate: event.target.value},
      () => console.log(this.state));
  }

  onAmountChange(event) {
    this.setState({investmentAmount: event.target.value},
      () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <h1>Há quanto tempo realizou o investimento?</h1>
        <form>

          <select
            onChange={this.onTypeChange}>
            <option>Tesouro Direto pré-fixado 10%</option>
            <option>Bitcoin</option>
          </select>
          <select
            onChange={this.onDateChange}>
            <option>1 ano</option>
            <option>2 anos</option>
          </select>
          <select
            onChange={this.onAmountChange}>
            <option>RS$2 mil</option>
            <option>R$10 mil</option>
          </select>

        </form>
      </div>
    );
  }
}
