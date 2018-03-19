import React, { Component } from 'react';
import '../App.css';

class ItemsList extends Component {
  render() {
    const { key, rating } = this.props
    return (
      <div>
        <div>{key}</div>
        <div>{rating}</div>
      </div>
    )
  }

}

export default ItemsList;