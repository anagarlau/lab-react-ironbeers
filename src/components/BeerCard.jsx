import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class BeerCard extends React.Component{
    constructor(props){
        super(props)
       this.state = {
           beer: null
       } 
    }

    componentDidMount() {
        let beerId = this.props.match.params.id
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            console.log(response.data)
            this.setState({beer: response.data})
        })
    }

     render(){
        
        if(this.state.beer === null) return (<h1> Loading...</h1>) 
        return (
            <div className="card" style={{width: '28rem'}}>
            <Link to={"/beers"}> Go back to beers </Link>
                <img style={{width:'4rem'}} className="card-img-top" src={this.state.beer.image_url}  />
                <div className="card-body">
                    <h5 className="card-title">Hi, I am {this.state.beer.name}</h5>
                    <p className="card-text">Tagline: {this.state.beer.tagline} </p>
                    <p className="card-text">I was first brewed in {this.state.beer.first_brewed} and I have an attenuation level of {this.state.beer.attenuation_level} 
                    (whatever that means!).</p> 
                    <p className="card-text"> What my brewer, <b>{this.state.beer.contributed_by}</b> , has to say about me: {this.state.beer.description} </p>

                     </div>
            </div>


        )
    }

 


}






export default BeerCard