import React, { useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import History from './components/History';

const App = () => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [newItem, setNewItem] = useState({});
  const history = [...income, ...expense];

  const setName = (e) => {
    const { amount } = newItem;
    setNewItem({ name: e.target.value, amount: amount });
  };
  const setAmount = (e) => {
    const { name } = newItem;

    setNewItem({ name: name, amount: Number(e.target.value) });
  };
  const setItem = (e) => {
    console.log('inside set item');

    e.preventDefault();

    if (newItem.amount > 0) {
      console.log('inside income');

      setIncome([...income, newItem]);
    } else {
      console.log('inside expense');

      setExpense([...expense, newItem]);
    }
  };

  const deleteItem = (id) => {
    console.log('iside delete');
    console.log(id);
    if (income.length > 0) {
      const newList = income.filter((item) => {
        return item.name + item.amount !== id;
      });
      setIncome(newList);
      console.log(newList);
    }
    if (expense.length > 0) {
      const newList = expense.filter((item) => item.name + item.amount !== id);
      console.log(newList);

      setExpense(newList);
    }
  };

  let totalIncome = 0;
  let totalExpense = 0;
  if (income.length > 0) {
    totalIncome = income.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
  }

  if (expense.length > 0) {
    totalExpense = expense.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amount;
    }, 0);
  }

  return (
    <div className="container">
      <h4>Expense Tracker</h4>
      <Balance income={totalIncome} expense={totalExpense} />
      <History history={history} deleteItem={deleteItem} />
      <Transaction
        setAmount={() => setAmount}
        setName={() => setName}
        setItem={() => setItem}
      />
    </div>
  );
};

export default App;
