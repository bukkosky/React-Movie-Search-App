import React, { Component } from 'react';
import '../App.css';



const FilterItems = (props) => (
    <input type="text"
                onChange={props.onChangeFilterInput}
                value={props.filterInputValue} 
                placeholder="Search..." />
)

export default FilterItems;