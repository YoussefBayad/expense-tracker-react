import React from 'react';

const Balance = ({ income, expense }) => {
  return (
    <div>
      <div className="balance">
        <h4>Your Balance </h4>
        <h4>${income + expense}</h4>
      </div>
      <div className="inc-exp-container">
        <div>
          <h2>Income</h2>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h2>Expense</h2>
          <p className="money minus">${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
