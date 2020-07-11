import React, { Component } from 'react';

export class Transaction extends Component {
  render() {
    return (
      <div>
        <h3>Add New Transaction</h3>
        <form>
          <label className="label">Text</label>
          <input
            type="text"
            onChange={this.props.setName}
            placeholder="Enter text..."
            required
          />
          <label className="label">Amount</label>
          <label className="label">(Expense start with minus)</label>
          <input
            type="number"
            onChange={this.props.setAmount}
            placeholder="Enter text..."
            required
          />
          <button onClick={this.props.setItem} className="btn">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default Transaction;
