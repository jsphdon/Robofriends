import React, {Component} from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = { 
      robots: [],
      searchField: ''}
  }


  
  componentDidMount(){
    // Web API
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json();
    }).then(users =>{
      this.setState({robots: users});
    })
  }

  onSearchChange = (event) => {
    //this should give us the value in the console to what we type on the search field
    this.setState({searchField: event.target.value })
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots => { 
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })

    // if the state is very slow, we can put an alert to users that it is loading
    if (this.state.robots.length === 0){
      return <h1>LOADING.....</h1>
    }else{  
          return(
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots = {filteredRobots}/>
      </div>
      
    )
    }

  }
}

// const App = () => {
//   return(
//     <div className="tc">
//       <h1>Robofriends</h1>
//       <SearchBox />
//       <CardList robots = {robots}/>
//     </div>
    
//   )
  
// }

export default App