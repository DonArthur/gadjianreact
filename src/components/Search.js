import React from 'react'

function Search() {
    return (
        <div className="p-3">
            <div className="mt-3">
                <div className="form-group has-search" style={{ width: "180px" }}>
                    <span className="fa fa-search form-control-feedback main-color"></span>
                    <input type="text" className="form-control rounded-0" placeholder="Find Personnels" />
                </div>
            </div>
        </div>
    )
}

export default Search