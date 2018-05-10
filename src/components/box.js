import React, {Component} from 'react';
import Submit from '../containers/submit';

export default class Box extends Component {
  getOtherInvestment(type) {
    if (type === 'Bitcoin') {
      return 'Tesouro Direto pré-fixado 10%';
    } else {
      return 'Bitcoin';
    }
  }
  getFinalReturn(initial, final) {
    const finalreturn = final-initial;
    const prettyreturn = Math.round(finalreturn * Math.pow(10, 2)) / Math.pow(10, 2)
    return prettyreturn;
  }
  getPeriodString() {
    if (this.props.period === '1') {
      return '1 ano'
    } else {
      return `${this.props.period} anos`
    }
  }
  render() {
    return (
      <div>
        <h2>Seu investimento em {this.props.investment}</h2>
        <p>Valor inicial: R${this.props.amount}</p>
        <p>Valor final: R${this.props.finalamount}</p>
        <p>Período: {this.getPeriodString()}</p>
        <p>Rendimento no período: R${this.getFinalReturn(this.props.amount, this.props.finalamount)}</p>
        <Submit
          amount={this.props.amount}
          date={this.props.period}
          type={this.getOtherInvestment(this.props.investment)}
          label='Simular com o outro investimento' />
      </div>
    );
  }
};
