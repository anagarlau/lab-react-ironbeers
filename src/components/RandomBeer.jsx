import React from 'react'
import axios from 'axios'
import Header from './Header'

class RandomBeer extends React.Component{
    constructor(props){
        super(props)
        this.state = {randomBeer: null}
    }
    
    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response=> 
             this.setState({randomBeer: response.data}))
        .catch(err=> console.log(err))
    }

   render(){
       if(this.state.randomBeer === null) return (<h4> Wait for it... </h4>)
       return (
         <div className='container'> 
         <Header />
           <div className="card" style={{width: '28rem'}}>

           <img style={{width:'4rem'}} className="card-img-top" src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name}  />
           <div className="card-body">
               <h5 className="card-title">Hi, I am {this.state.randomBeer.name}</h5>
               <p className="card-text">Tagline: {this.state.randomBeer.tagline} </p>
               <p className="card-text">I was first brewed in {this.state.randomBeer.first_brewed} and I have an attenuation level of {this.state.randomBeer.attenuation_level} 
               (whatever that means!).</p> 
               <p className="card-text"> What my brewer, <b>{this.state.randomBeer.contributed_by}</b> , has to say about me: {this.state.randomBeer.description} </p>

                </div>
       </div>
       </div>  )
   }

}








export default RandomBeer