import React, { Component } from 'react';
import FetchForm from './components/FetchForm.js'
import ItemsList from './components/ItemsList'
import FilterItems from "./components/FilterItems"
import './App.css';



const url = 'https://gitfilm-675bb.firebaseio.com/asy-app.json'



class App extends Component {

	state = {
		fetchedItems: [],
		filteredData: [],
		dataToFilter: ""
	}


	changeFilterInput = (e) => {
		this.setState({
			dataToFilter: e.target.value
		}, () => {
			this.filterData(this.state.dataToFilter)
		})
	}

	filterData = (dataToFilter) => {
		const { fetchedItems } = this.state
		const filteredData = fetchedItems.filter(item => {
			return item.name.toLowerCase()
						 .indexOf(dataToFilter.toLowerCase()) !== -1
		})
		this.setState({
			filteredData
		})
	}

	fetchData = (fetchItems) => {
		fetch(url)
		.then(response => response.json())
		.then(Object.values)
		.then(fetchedItems => {
			this.setState({
				fetchedItems
			})
			console.log(fetchedItems)
		})
}

  render() {
		const { filteredData } = this.state
    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchData}/>

		  	<FilterItems onChangeDataFilter={this.changeFilterInput} filterInputValue={this.state.dataToFilter} />

				<div>
				{filteredData.map(({thumbnail, name, rating}) => (
					<ItemsList thumbnail={thumbnail}
				   				 name={name}
				   				 rating={rating}/>  
				))}
				</div>
         		
      </div>
		);
	}
}

export default App;
