import React, { Component } from 'react';
import '../App.css';
import RatingForm from './RatingForm';


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
        <div><h4>Rating: {rating}</h4></div>
        <RatingForm rating={rating} />
      </div>
    )
  }
}

export default ItemsList;