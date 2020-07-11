import React, { Component } from 'react';

export class History extends Component {
  render() {
    return (
      <div>
        <h3>History</h3>
        <ul className="list">
          {this.props.history.map((item) => {
            return (
              <li
                className={item.amount > 0 ? 'plus' : 'minus'}
                key={item.name + item.amount}
              >
                <p>{item.name}</p>
                <p>{item.amount}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default History;
