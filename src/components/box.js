import React, {Component} from 'react';


export default class Box extends Component {
  render() {
    return (
      <div>
        <h2>Seu investimento</h2>
        <p>Valor inicial: R${this.props.amount}</p>
        <p>Valor final: R${this.props.finalamount}</p>
      </div>
    );
  }
};
