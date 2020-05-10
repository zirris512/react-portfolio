import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
         <Link className="navbar-brand" id="logo" to="/">Brent Edwards</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
               <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio</Link>
               </li>
               <li className="nav-item active">
                  <Link className="nav-link" to="/">About</Link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
   )
};

export default Nav;