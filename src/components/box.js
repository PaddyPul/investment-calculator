import React, {Component} from 'react';
import Submit from '../containers/Submit';
import '../css/Box.css';

export default class Box extends Component {

  componentDidMount() {
    this.node.scrollIntoView();
  }

  getOtherInvestment(type) {
    if (type === 'Bitcoin') {
      return 'Tesouro Direto pré-fixado 10%';
    } else {
      return 'Bitcoin';
    }
  }


  getFinalReturn(initial, final) {
    const finalreturn = final-initial;
    const prettyreturn = Math.round(finalreturn * Math.pow(10, 2)) / Math.pow(10, 2);
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
      <div className='box' ref={node => this.node = node}>
        <h2 className='box__title'>Seu investimento em {this.props.investment}</h2>
        <p className='box__text'>Valor inicial: R$ {this.props.amount}</p>
        <p className='box__text'>Valor final: R$ {this.props.finalamount}</p>
        <p className='box__text'>Período: {this.getPeriodString()}.</p>
        <p className='box__text'>Rendimento no período: R$ {this.getFinalReturn(this.props.amount, this.props.finalamount)}</p>
        <Submit
          amount={this.props.amount}
          date={this.props.period}
          type={this.getOtherInvestment(this.props.investment)}
          label='Simular com o outro investimento' />
      </div>
    );
  }
};
