import React, { Component } from 'react';
import Stars from './Stars';
import '../App.css';

class ItemsList extends Component {
  render() {
    const { thumbnail, name, rating } = this.props
    return (
      <div>
        <div>
          {thumbnail ? <img src={thumbnail} alt="" /> :
                       <span>NO IMAGE</span>
          }
        </div>
        <div><h4>Tytuł: {name}</h4></div>
        <div><Stars rating={rating} /></div>
      </div>
    )
  }
}

export default ItemsList;