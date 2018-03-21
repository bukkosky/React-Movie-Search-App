import React, { Component } from 'react';
import '../App.css';


const blackStar = '★'
const baseStar = Array(5).fill('☆')
const getStars = rating => baseStar.map((item, index) => {
    const star = rating > index ? blackStar : item
    return <span key={index}>{star}</span>
    }
)

const Stars = (props) => (
    <div>
        {getStars(props.rating)}
    </div>
)


export default Stars;