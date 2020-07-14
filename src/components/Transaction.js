import React from 'react';
const Transaction = ({ setName, setAmount, setItem }) => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <label className="label">Text</label>
        <input
          type="text"
          onChange={setName()}
          placeholder="Enter text..."
          required
        />
        <label className="label">Amount</label>
        <label className="label">(Expense start with minus)</label>
        <input
          type="number"
          onChange={setAmount()}
          placeholder="Enter text..."
          required
        />
        <button onClick={setItem()} className="btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;
