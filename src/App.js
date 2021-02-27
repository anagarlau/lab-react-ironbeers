import React from 'react';
 import './App.css';
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'
import Beers from './components/Beers'
import BeerCard from './components/BeerCard'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
class App extends React.Component{
  render(){
    return (
      
    <div > 
   <Switch> 
   
    <Route exact path="/beers" component={Beers} />
    <Route exact path='/beers/:id' component={BeerCard} />
    <Route exact path="/random-beer" component={RandomBeer} />   
    <Route exact path="/new-beer" component={NewBeer} />
    <Route exact path="/" component={Home} />
   </Switch> 
  
    </div>)
    
        }
}

export default App;
