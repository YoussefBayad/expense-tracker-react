import React from 'react';

const History = ({ history, deleteItem }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {history.map((item) => {
          const q = item.name + item.amount;
          return (
            <li
              className={item.amount > 0 ? 'plus' : 'minus'}
              key={item.name + item.amount}
            >
              <p>{item.name}</p>
              <p>{item.amount}</p>
              <button className="delete-btn" onClick={deleteItem(q)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
