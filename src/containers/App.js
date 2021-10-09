import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App (){

  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState('')
  const [count, setCount] = useState(0)

  useEffect(()=>{
    // Web API
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json();
    }).then(users =>{setRobots(users)});
    }, [count]) // only run if count changes

  const onSearchChange = (event) => {
    //this should give us the value in the console to what we type on the search field
    setSearchField(event.target.value)
  }

    const filteredRobots = robots.filter(robot => { 
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    // if the state is very slow, we can put an alert to users that it is loading
    if (!robots.length){
      return <h1>LOADING.....</h1>
    }else{  
      return(
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <button onClick={()=>setCount(count+1)}>Click Me</button>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
          </Scroll>
        </div>
    )
    }
}

export default App