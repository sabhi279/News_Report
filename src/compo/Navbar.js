
import React, { Component } from 'react'
import { Link } from "react-router-dom";

//  export class Navbar extends Component {              //this is for class based components
 const Navbar = ()=>{

  // render() {                                          //this is for class based components
    return (
      <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">ToddayNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5" >

                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/home">Home</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/business'>Business</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/entertainment'>Entertainment</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/health'>Health</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/science'>Science</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/sports'>Sports</Link></li>
                {/* <li className='nav-item'><Link className='nav-link' to='/technology'>Technology</Link></li> */}
         </ul>
        </div>
    </div>
    </nav>
      </div>
    )
  // }
}

export default Navbar