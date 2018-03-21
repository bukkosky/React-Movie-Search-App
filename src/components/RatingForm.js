import React, { Component } from 'react';
import { ratingNames, getStats } from'../utils';
import '../App.css';


class RatingForm extends Component {
    render() {
        const stats = getStats(this.props.data)
      //  console.log(stats)
        return(
            <div>{ratingNames.map(item => (
                <div key={item}>{item}: {stats[item] || 0}</div>
            ))}</div>
        )
    }
}

export default RatingForm;