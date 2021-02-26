import React from 'react'
import {Link} from 'react-router-dom'


function Header(){
    return (
    <div>
       
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <Link className="navbar-brand" to='/'> Home  </Link>
        </div>
      </nav>
     </div>

       )
   
    
}


export default Header


