import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Box from '../components/box';

const months = ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];

export class InvestmentChart extends Component {
  constructor(props) {
    super(props);
    this.state = { display:'hide' };
    this.onChartClick = this.onChartClick.bind(this);
  }

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

  onChartClick() {
    if (this.state.display === 'hide') {
      this.setState({display: 'show'});
    } else {
      this.setState({display: 'hide'});
    }
  }

  getFinalAmount() {
    var historylength = this.props.history.length;

    if (this.props.investment === 'bitcoin') {
      var bitcoins = this.props.amount/this.props.history[0].close; //quantity of bitcoins user could purchase at the beginning of period
      var final_amount = bitcoins * this.props.history[historylength - 1].close;
      final_amount = Math.round(final_amount * Math.pow(10, 2)) / Math.pow(10, 2);
    } else if (this.props.investment === 'tesouro') {
      var final_amount = this.props.amount * this.props.history[historylength -1].close}
      final_amount = Math.round(final_amount * Math.pow(10, 2)) / Math.pow(10, 2);
    return final_amount
  }

  render() {
    const ChartActive = this.props.history; // check if props.history is functioning, if it is a list
    if (ChartActive.length > 0 ) {
      return (
        <div>
          <Chart
            data={this.props.history.map(this.getClosingPrice, this)}
            labels={this.props.history.map(this.getTime)}
            type={this.props.investment}
            amount={this.props.amount}
            period={this.props.period}
            onChartClick={this.onChartClick}/>
          <div className={this.state.display}>
            <Box
              amount={this.props.amount}
              finalamount={this.getFinalAmount()}/>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps({ amount, history, investment, period}) {
  return { amount, history, investment, period};
}

export default connect(mapStateToProps)(InvestmentChart);
