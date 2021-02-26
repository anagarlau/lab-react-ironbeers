import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Beer extends React.Component{
     constructor(props){
         super(props)
        this.state={
            beers: null
        } 
     }

  componentDidMount(){
      const id = this.props.id;
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(response => 
       this.setState({beers: response.data}) )
      .catch(err=>console.log(err))
  }

   render(){
    // console.log(this.props)
    if(this.state.beer === null) return (<h1> Loading... </h1>)
    return (
             
        <div className="row">
        <div className="col-md">
       {/* link or route?  */}
      <Link to={`/beers/${this.props.id}`}>   <img src={this.props.image} style={{width: '25px'}} /> </Link>    
        </div>
         <div className="col-md">
          {this.props.name}
         </div>
         <div className="col-md">
         {this.props.tagline}
        </div>
        <div className="col-md">
        {this.props.contributedBy}
        </div>
        
    
     </div>   
     
    )




   }

}




export default Beer 