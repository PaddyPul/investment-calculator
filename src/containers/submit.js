import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBitcoin, calculateTreasure, getAmount, getPeriod, getInvest } from '../actions/index';

export class Submit extends Component {
  constructor(props) {
    super(props);
    this.onInvestSubmit = this.onInvestSubmit.bind(this);
  }

  onInvestSubmit(event) {
    event.preventDefault();
    if (this.props.type === 'bitcoin') {
      this.props.fetchBitcoin(this.props.date);
    } else {
      this.props.calculateTreasure(this.props.date);
    }
    this.props.getAmount(this.props.amount);
    this.props.getPeriod(this.props.date);
    this.props.getInvest(this.props.type);
  }

  render() {
    return (
      <form
        onSubmit={this.onInvestSubmit}>
        <button type='submit'>{this.props.label}</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBitcoin, calculateTreasure, getAmount, getPeriod, getInvest }, dispatch);
}

export default connect(null, mapDispatchToProps)(Submit);
