import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

const months = ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];

export class InvestmentChart extends Component {

  getClosingPrice(investmentData) {
    if (this.props.investment === 'bitcoin') {

      var bitcoins = this.props.amount/this.props.history[0].close; //quantity of bitcoins user could purchase at the beginning of period
      console.log(bitcoins);
      var closing_price = bitcoins * investmentData.close;
    } else if (this.props.investment === 'tesouro') {

      var closing_price = investmentData.close * this.props.amount;
    }
    return closing_price;
  }

  getTime(investmentData) {
    const time = new Date(investmentData.time*1000); //argument must be in milliseconds, not seconds

    const day = time.getUTCDate();
    const month = months[time.getUTCMonth()];
    const year = time.getUTCFullYear();

    const date = `${day} - ${month} - ${year}`

    return date;
  }


  render() {
    const ChartActive = this.props.history;
    if (ChartActive.length > 0 ) {
      return <Chart data={this.props.history.map(this.getClosingPrice, this)} labels={this.props.history.map(this.getTime)} type={this.props.investment} />
    } else {
      return null;
    }
  }
}

function mapStateToProps({ amount, history, investment, period}) {
  return { amount, history, investment, period};
}

export default connect(mapStateToProps)(InvestmentChart);
