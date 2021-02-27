import React from 'react'
import axios from 'axios'

class NewBeer extends React.Component{
        constructor(props){
            super(props)
            this.state={
                name: '',
                tagline: '',
                description: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            }
            this.changeHandler=this.changeHandler.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

    changeHandler(e){
       
        // console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value }); 
    }   

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
        .then((response)=> {
            console.log(response)
            this.setState({state: response.body})
        })
        .catch(err=>{console.log(err)})
    }


    render(){
        // console.log(this.state)
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
        return(<form className="form" onSubmit={this.handleSubmit}> 
            <div> 
                <input  
                    name="name"
                    type="text"
                    value={name} 
                    onChange={this.changeHandler} />
            </div>
            <div> 
                <input  
                    name="tagline"
                    type="text"
                    value={tagline}
                    onChange={this.changeHandler}  />
            </div>
            <div> 
                <input  
                    name="description"
                    type="text"
                    value={description}
                    onChange={this.changeHandler}  />
            </div>
            <div> 
                <input  
                    name="first_brewed"
                    type="text"
                    value={first_brewed}
                    onChange={this.changeHandler}  />
            </div>
            <div> 
                <input  
                    name="brewers_tips"
                    type="text"
                    value={brewers_tips}
                    onChange={this.changeHandler}  />
            </div>
            <div> 
                <input  
                    name="attenuation_level"
                    type="number"
                    value={attenuation_level}
                    onChange={this.changeHandler}  />
            </div>
            <div> 
                <input  
                    name="contributed_by"
                    type="text"
                    value={contributed_by}
                    onChange={this.changeHandler}  />
            </div>
            

        <button  type="submit">Submit </button>
        </form>)
    }





}








export default NewBeer