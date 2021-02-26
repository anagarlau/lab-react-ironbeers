import React from 'react'
import Header from './Header'
// import {Link} from 'react-router-dom'
import axios from 'axios'
import Beer from './Beer'

class Beers extends React.Component{
       constructor(){
           super()
           this.state={
               beers: []
            }
       }

       componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            // console.log(response.data)
            this.setState({beers: response.data})
        })
    }

    render(){
    //   console.log(this.state.beers[0])  
      if(this.state.beers.length === 0) return (<h3>Loading... </h3>)
        return (<div> 
        <Header />
        <h2>Click on the beer's picture to get more Info </h2>
        
       
        <div className="container">
           { this.state.beers.map(beer=>
            <Beer key={beer._id}
            id={beer._id}
            image={beer.image_url}
            name={beer.name}
            contributedBy={beer.contributed_by}
            tagline={beer.tagline}  /> )}     
            </div> 
             
       

        </div>)
    }
}






export default Beers