import React from 'react'
import logo from '../assets/images/gadjian-logo.png'

const NavBar = ({ toggleSidebar }) => {
    return(
        <nav className="navbar static-top flex-md-nowrap p-0">
            <button type="button" onClick={toggleSidebar} className="btn btn-outline-light rounded-circle ml-2 border-0 hamburger-btn"><span className="fa fa-bars" style={{ fontSize: "1.5rem", color: "#000" }}></span></button>
            <a className="navbar-brand col-sm-3 col-md-2 mt-3 mb-3 mr-auto" href="https://gadjian.com">
                <img alt="gadjian" src={logo} className="navbar-img" />
            </a>
            <div className="px-3">
                <span className="mx-1 h5 user-name">Hallo, <span className="main-color">Gadjian User</span></span>
                <button className="btn btn-primary rounded-circle ml-2 mr-4 profile-btn"><i className="fa fa-user"></i></button>
            </div>
        </nav>
    )
}

export default NavBar