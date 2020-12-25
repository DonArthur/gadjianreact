import React from 'react'

const PersonnelCards = ({ personnelData }) => {
    return (
        <div className="row" style={{ width: '100%' }}>
            {personnelData.map(data => (
                <div key={data.login.username} className="col-sm-12 col-md-3 card-group">
                    <div className="card border-0 custom-card" style={{ borderRadius: "25px" }}>
                        <div 
                            className="card-header p-2 d-flex justify-content-between align-items-center" 
                            style={{ fontSize: ".75rem", backgroundColor: "transparent" }}
                        >
                            <div>Personnel ID: <span className="main-color">{data.id.value ? data.id.value: 'No ID'}</span></div>
                            <button type="button" className="btn btn-outline-light rounded-circle border-0"><span className="fa fa-ellipsis-h mr-0" style={{ fontSize: "1.5rem", color: "#000" }}></span></button>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top rounded-circle mb-3 custom-card-img" src={data.picture.large} alt={data.name.first + " " + data.name.last} />
                            <div className="mb-3 important-info">
                                <h6 className="mb-0" style={{ fontSize: ".85em" }}>Name</h6>
                                <p className="card-text pt-0">{ data.name.first + " " + data.name.last }</p>
                                <h6 className="mb-0" style={{ fontSize: ".85em" }}>Telephone</h6>
                                <p className="card-text">{ data.cell }</p>
                            </div>
                            <div className=" unimportant-info">
                                <h6 className="mb-0" style={{ fontSize: ".85em" }}>Birthday</h6>
                                <p className="card-text">{ 
                                    data.dob.date.toString().substring(8, 10) + "-" +  data.dob.date.toString().substring(5, 7)
                                }</p>
                                <h6 className="mb-0" style={{ fontSize: ".85em" }}>Email</h6>
                                <p className="card-text">{ data.email }</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PersonnelCards