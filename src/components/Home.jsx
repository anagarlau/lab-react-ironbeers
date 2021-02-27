import React from 'react'
import { Link } from 'react-router-dom'



class Home  extends React.Component{

    render(){
        return (<div className="navbar navbar-light bg-dark   mb-3"> 
        <Link to='/beers'> Beers</Link>
        <Link to='/random-beer'> Random Beer</Link>
        <Link to='/new-beer'> New Beer</Link>
         
        </div>)
    }
}




export default Home 