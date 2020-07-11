import React from 'react';

const History = (props) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {props.history.map((item) => {
          return (
            <li
              className={item.amount > 0 ? 'plus' : 'minus'}
              key={item.name + item.amount}
            >
              <p>{item.name}</p>
              <p>{item.amount}</p>
              <button
                className="delete-btn"
                onClick={() => props.deleteItem(item.name + item.amount)}
              >
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
