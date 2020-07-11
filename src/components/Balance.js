import React, { Component } from 'react';

export class Balance extends Component {
  render() {
    return (
      <div>
        <div className="balance">
          <h4>Your Balance </h4>
          <h4>$00.00</h4>
        </div>
        <div className="inc-exp-container">
          <div>
            <h2>Income</h2>
            <p className="money plus">$ 00.00</p>
          </div>
          <div>
            <h2>Expense</h2>
            <p className="money minus">$ 00.00</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
