import React from 'react'

const Pagination = ({ currentPage, datasPerPage, totalDatas, subtractPageNum, addPageNum }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <button disabled={currentPage === 1} onClick={() => subtractPageNum()} type="button" className="btn btn-light mr-1"><span className="fa fa-chevron-left mr-2"></span>Previous Page</button>
            <button disabled={currentPage === pageNumbers.length} type="button" onClick={() => addPageNum()} className="btn btn-light ml-1">Next Page<span className="fa fa-chevron-right ml-2"></span></button>
        </div>
    )
}

export default Pagination