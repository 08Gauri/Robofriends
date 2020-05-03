
import React ,{Component} from 'react';
import {Robots} from './Robots';
import CardList from './CardList';
import SearchBox from './SearchBox';



class App extends Component{
	constructor(){
		super();
		this.state = {
			robots : Robots,
			searchfield :''
		}
	}


onEventChange = (event) => {
	this.setState({searchfield : event.target.value});
	};

	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	});
		return(
			<div className = 'tc'>
			<h1> ROBOFRIENDS </h1>
			<SearchBox searchChange = {this.onEventChange}/>
			<CardList robots = {filteredRobots} />
			</div>
			);
	}
}




export default App;