import React from 'react'

function SideBar({ sidebarToggled, toggleSidebar }) {
    return(
        <nav className={ sidebarToggled ? "sidenav" : "col-md-2 d-none d-md-block sidebar side-bar p-0" }>
            <button type="button" onClick={toggleSidebar} className="btn btn-outline-light rounded-circle ml-auto border-0 hamburger-btn" style={{ float: "right" }}><span className="fa fa-times" style={{ fontSize: "1.5rem", color: "#000" }}></span></button>
            <div className="sidebar-sticky" style={{ fontSize: ".9em" }}>
                <ul className="nav flex-column">
                <li className="nav-item">
                    <button className="nav-link main-link">
                        <i className="fa fa-home"></i> &nbsp;
                        Beranda
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link active-link">
                    <i className="fa fa-users"></i> &nbsp;
                    Personnel List
                    </button>
                </li>
                <li className="nav-item">
                    <button className="nav-link main-link">
                    <i className="fa fa-calendar"></i> &nbsp;
                    Daily Attendance
                    </button>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar