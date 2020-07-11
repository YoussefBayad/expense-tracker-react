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
  }
  setAmount(e) {
    const { name } = this.state.newItem;

    this.setState({ newItem: { name: name, amount: Number(e.target.value) } });
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
    let totalIncome = 0;
    let totalExpense = 0;
    let { income, expense } = this.state;
    if (income.length > 0) {
      totalIncome = income.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.amount;
      }, 0);
    }
    // objs.reduce(function(accumulator, currentValue) {
    //   return accumulator + currentValue.age;
    // }, 0);
    if (expense.length > 0) {
      totalExpense = expense.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.amount;
      }, 0);
    }

    return (
      <div className="container">
        <h4>Expense Tracker</h4>
        <Balance income={totalIncome} expense={totalExpense} />
        <History history={[...income, ...expense]} />
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
