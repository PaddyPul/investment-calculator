import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

const months = ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];

export class InvestmentChart extends Component {

  getClosingPrice(investmentData) {
    const closing_price = investmentData.close;
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
    const ChartActive = this.props.investment;
    if (ChartActive.data ) {
      return <Chart data={this.props.investment.map(this.getClosingPrice)} labels={this.props.investment.map(this.getTime)} />
    } else {
      return null;
    }
  }
}

function mapStateToProps({ investment }) {
  return { investment };
}

export default connect(mapStateToProps)(InvestmentChart);
