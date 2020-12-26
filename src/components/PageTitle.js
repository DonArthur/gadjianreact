import React from 'react'

function PageTitle({title, subtitle}) {
    return(
        <div className="p-3">
            <h3 className="main-color font-weight-bold page-title">{title}</h3>
            <h5 className="font-weight-normal page-subtitle">{subtitle}</h5>
        </div>
    )
}

export default PageTitle