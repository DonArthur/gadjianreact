import React from 'react'
import logo from '../assets/images/gadjian-logo.png'

function NavBar() {
    return(
        <nav className="navbar static-top flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 ml-3 mt-3 mb-3 mr-0" href="gadjian.com">
                <img alt="gadjian" src={logo} className="navbar-img" />
            </a>
            <div className="px-3">
                <span className="mx-1 h5">Hallo, <span className="main-color">Gadjian User</span></span>
                <button className="btn btn-primary rounded-circle ml-2 mr-4"><i className="fa fa-user"></i></button>
            </div>
        </nav>
    )
}

export default NavBar