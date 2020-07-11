import React, { Component } from 'react';

export class History extends Component {
  render() {
    return (
      <div>
        <h3>History</h3>
        <ul className="list">
          <li className="plus">cash</li>
          <li className="minus">car</li>
        </ul>
      </div>
    );
  }
}

export default History;
