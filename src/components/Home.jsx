import React from 'react'
import { Link } from 'react-router-dom'



class Home  extends React.Component{

    render(){
        return (<div> 
        <Link to='/beers'> Beers</Link>
        <Link to='/random-beers'> Random Beers</Link>
        <Link to='/new-beer'> New Beer</Link>
         
        </div>)
    }
}




export default Home 