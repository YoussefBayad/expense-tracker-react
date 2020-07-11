import React, { Component } from 'react';
import './App.css';
import Balance from './components/Balance';
import History from './components/History';
import { Transaction } from './components/Transaction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: [],
      expense: [],
      newItem: { name: '', amount: 0 },
    };
    this.setItem = this.setItem.bind(this);
    this.setName = this.setName.bind(this);
    this.setAmount = this.setAmount.bind(this);
  }
  setName(e) {
    const { amount } = this.state.newItem;
    this.setState({ newItem: { name: e.target.value, amount: amount } });
    e.target.value = '';
  }
  setAmount(e) {
    const { name } = this.state.newItem;

    this.setState({ newItem: { name: name, amount: e.target.value } });
    e.target.value = '';
  }
  setItem(e) {
    e.preventDefault();
    const newItem = this.state.newItem;
    const { income, expense } = this.state;
    if (newItem.amount > 0) {
      this.setState({ income: [...income, newItem] });
    } else {
      this.setState({ expense: [...expense, newItem] });
    }
  }
  render() {
    return (
      <div className="container">
        <h4>Expense Tracker</h4>
        <Balance />
        <History />
        <Transaction
          setAmount={this.setAmount}
          setName={this.setName}
          setItem={this.setItem}
        />
      </div>
    );
  }
}

export default App;
