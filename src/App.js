import React, { Component } from 'react';
import FetchForm from './components/FetchForm.js'
import ItemsList from './components/ItemsList'
import FilterItems from "./components/FilterItems"
import './App.css';



const url = 'https://gitfilm-675bb.firebaseio.com/asy-app.json'



class App extends Component {

	state = {
		fetchedItems: [],
		filterData: []
	}


	// changeFilterInput = (e) => {
	// 	this.setState({
	// 		dataToFilter: e.target.value
	// 	}, () => {
	// 		this.filterData(this.state.dataToFilter)
	// 	})
	// }

	filterData = (dataToFilter) => {
		const { fetchedItems } = this.state

		const filterData = fetchedItems.filter(item => {
			return item.name.toLowerCase()
						 .indexOf(dataToFilter.toLowerCase()) !== -1
		})
		console.log(filterData)
		this.setState({
			filterData
		})
	}

	fetchData = (fetchItems) => {
		fetch(url)
		.then(response => response.json())
		.then(Object.values)
		.then(fetchedItems => {
			this.setState({
				fetchedItems,
				filterData: fetchedItems
			})
			console.log(fetchedItems)
		})
}

  render() {
		const { fetchedItems } = this.state
		const { filterData } = this.state
    return (
      <div className="App">
        <FetchForm onSubmit={this.fetchData}/>

		{filterData.length > 0 && <FilterItems onSubmit={this.filterData} /> }

			<div>
				{filterData.map(({thumbnail, name, rating, index}) => (
					<ItemsList thumbnail={thumbnail}
							   name={name}
							   rating={rating}
							   key={filterData.index} />  
				))}
			</div>	
      </div>
		);
	}
}

export default App;
