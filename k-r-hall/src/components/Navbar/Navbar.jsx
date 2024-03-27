import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-dark">
        {/* <Link to="/">Kesha Hall</Link> */}
        

        <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/"> Home </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/portfolio"> Portfolio </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/contact"> Contact </Link>
            </li>
            
          </ul>
        </div>


        <div className="pos-f-t">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="bg-dark p-4">
      <h5 className="text-white h4">Collapsed content</h5>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav className="navbar navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      
    <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/"> Home </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/portfolio"> Portfolio </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/contact"> Contact </Link>
            </li>
            
          </ul>
      
      <span></span>
    </button>
  </nav>
</div>



        

      </nav>
      <div></div>
    </div>







 
  );
};

export default Navbar;
