import React from 'react'

function Search({input: keyword, onChange: setKeyword}) {
    return (
        <div>
            <div className="mt-0 ml-md-4">
                <div className="form-group has-search ml-md-4" style={{ width: "100%" }}>
                    <span className="fa fa-search form-control-feedback main-color"></span>
                    <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="form-control rounded-0" placeholder="Find Personnels" />
                </div>
            </div>
        </div>
    )
}

export default Search