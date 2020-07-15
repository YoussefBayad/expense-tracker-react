import React from 'react';

const History = ({ history, deleteItem }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {history.map((item) => {
          const id = item.name + item.amount;
          console.log('id inside hist', id);
          return (
            <li className={item.amount > 0 ? 'plus' : 'minus'} key={id}>
              <p>{item.name}</p>
              <p>{item.amount}</p>
              <button className="delete-btn" onClick={() => deleteItem(id)}>
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
