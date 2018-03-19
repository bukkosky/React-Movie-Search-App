import React, { Component } from 'react';
import '../App.css';

class FetchForm extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.input.value)
    console.log('ok')
  }

  render() {
    return (
       <form onSubmit={this.submit}>
          <input type="submit" value="Get Movie List" ref={element => this.input = element} /> 
        {/* TODO onLoad movie list */}
       </form>
      
    );
  }
}

export default FetchForm;