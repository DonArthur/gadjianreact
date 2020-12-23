import React from 'react'

function SideBar() {
    return(
        <nav className="col-md-2 d-none d-md-block sidebar side-bar p-0">
            <div className="sidebar-sticky">
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