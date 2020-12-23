import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'
import Search from '../components/Search'
import AddPersonnelBtn from '../components/AddPersonnelBtn'
import PersonnelCards from '../components/PersonnelCards'

class PersonnelList extends Component {
    render() {
        return (
            <div className="col-10 container-fluid p-2" style={{ backgroundColor: "#f8f8f8" }}>
                <div className="row m-4 align-items-center" style={{ backgroundColor: "#fff" }}>
                    <div className="col-5">
                        <PageTitle />
                    </div>
                    <div className="col-7 d-flex flex-row align-items-center justify-content-end">
                        <Search />
                        <AddPersonnelBtn />
                    </div>
                </div>
                <div className="row m-4 align-items-center" style={{ backgroundColor: "#fff" }}>
                    <PersonnelCards />
                </div>
            </div>
        )
    }
}

export default PersonnelList