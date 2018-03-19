import React, { Component } from 'react';
import '../App.css';

const FilterItems = (props) => (
    <input type="text" placeholder="Search..."
           onChange={props.onChangeDataFilter}
           value={props.filterInputValue} />
)

export default FilterItems;