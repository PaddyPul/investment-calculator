import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Box from '../components/Box';
const months = ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];

export class InvestmentChart extends Component {


  constructor(props) {
    super(props);
    this.state = { boxDisplay: false };
    this.onChartClick = this.onChartClick.bind(this);
  }


  getClosingPrice(investmentData) {
    var closing_price;
    if (this.props.investment === 'Bitcoin') {
      var bitcoins = this.props.amount/this.props.history[0].close; //quantity of bitcoins user could purchase at the beginning of period
      closing_price = bitcoins * investmentData.close;
    } else if (this.props.investment === 'Tesouro Direto pré-fixado 10%') {
      closing_price = investmentData.close * this.props.amount;
    }
    var pretty_price = Math.round(closing_price * Math.pow(10, 2)) / Math.pow(10, 2);
    return pretty_price;
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
    if (this.state.boxDisplay === false) {
      this.setState({boxDisplay: true});
    } else {
      this.setState({boxDisplay: false});
    }
  }

  shouldDisplay() {
    return this.state.boxDisplay;
  }

  getFinalAmount() {
    var historylength = this.props.history.length;
    var bitcoins;
    var final_amount;

      if (this.props.investment === 'Bitcoin') {

      bitcoins = this.props.amount/this.props.history[0].close; //quantity of bitcoins user could purchase at the beginning of period
      final_amount = bitcoins * this.props.history[historylength - 1].close;
      final_amount = Math.round(final_amount * Math.pow(10, 2)) / Math.pow(10, 2);

    } else if (this.props.investment === 'Tesouro Direto pré-fixado 10%') {

      final_amount = this.props.amount * this.props.history[historylength -1].close}
      final_amount = Math.round(final_amount * Math.pow(10, 2)) / Math.pow(10, 2);

    return final_amount
  }


  render() {
    const ChartActive = this.props.history; // check if props.history is functioning, if it is a list
    if (ChartActive.error) {
      alert('Houve um problema ao captar os dados de cotação de BitCoin. Cheque sua conexão ou tente mais tarde.');
      return null;
    } else if (ChartActive.length > 0 ) {
      return (
        <div className='flex-container'>
          <Chart
            data={this.props.history.map(this.getClosingPrice, this)}
            labels={this.props.history.map(this.getTime)}
            type={this.props.investment}
            amount={this.props.amount}
            period={this.props.period}
            onChartClick={this.onChartClick}/>
          {this.shouldDisplay() ?
            <Box
              amount={this.props.amount}
              investment={this.props.investment}
              period={this.props.period}
              finalamount={this.getFinalAmount()}/> :
            null
          }

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
