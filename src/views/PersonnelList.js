import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import Search from '../components/Search'
import AddPersonnelBtn from '../components/AddPersonnelBtn'
import PersonnelCards from '../components/PersonnelCards'
import Pagination from '../components/Pagination'

const PersonnelList = ({ personnels }) => {
    const [personnelData, setPersonnelData] = useState([])
    // const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(4)

    useEffect(() => {
        const fetchData = () => {
            // setLoading(true)
            setPersonnelData(personnels)
            // setLoading(false)
        }
        fetchData()
    }, [personnels])

    const addPageNum = () => {
        setCurrentPage(currentPage + 1)
    }

    const subtractPageNum = () => {
        setCurrentPage(currentPage - 1)
    }

    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage
    const currentData = personnelData.slice(indexOfFirstData,indexOfLastData)

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
            <div className="row m-4 align-items-center">
                {
                    <PersonnelCards personnelData={currentData} />
                }
            </div>
            <div className="row m-4">
                <div className="container-fluid d-flex justify-content-center">
                    <Pagination datasPerPage={dataPerPage} currentPage={currentPage} totalDatas={personnels.length} subtractPageNum={subtractPageNum} addPageNum={addPageNum} />
                </div>
            </div>
        </div>
    )
}

export default PersonnelList