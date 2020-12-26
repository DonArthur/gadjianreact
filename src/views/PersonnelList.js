import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import Search from '../components/Search'
import AddPersonnelBtn from '../components/AddPersonnelBtn'
import PersonnelCards from '../components/PersonnelCards'
import Pagination from '../components/Pagination'

const PersonnelList = ({ personnels }) => {
    const [personnelDataDefault, setPersonnelDataDefault] = useState([])
    const [personnelData, setPersonnelData] = useState([])
    // const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(4)
    const [input, setInput] = useState('')

    useEffect(() => {
        const fetchData = () => {
            // setLoading(true)
            setPersonnelDataDefault(personnels)
            setPersonnelData(personnelDataDefault)
            // setLoading(false)
        }
        fetchData()
    }, [personnels, personnelDataDefault])

    const addPageNum = () => {
        setCurrentPage(currentPage + 1)
    }

    const subtractPageNum = () => {
        setCurrentPage(currentPage - 1)
    }

    const updateSearch = async (input) => {
        const filteredData = personnelDataDefault.filter(data => {
            return data.name.first.toLowerCase().includes(input.toLowerCase())
        })
        console.log(filteredData)
        setInput(input)
        setPersonnelData(filteredData)
    }

    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage
    const currentData = personnelData.slice(indexOfFirstData,indexOfLastData)

    return (
        <div className="col-sm-12 col-md-10 container-fluid p-0 p-md-2" style={{ backgroundColor: "#f8f8f8" }}>
            <div className="row m-4 pb-4 pb-md-0 align-items-center" style={{ backgroundColor: "#fff" }}>
                <div className="col-sm-12 col-md-6">
                    <PageTitle title="PERSONNEL LIST" subtitle="List of all personnels" />
                </div>
                <div className="col-sm-12 col-md-6 mt-md-3 d-md-flex d-sm-block justify-content-end">
                    <div className="col-sm-12 col-md-6">
                        <Search input={input} onChange={updateSearch} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <AddPersonnelBtn />
                    </div>
                </div>
            </div>
            <div className="row m-4 align-items-center">
                {
                    <PersonnelCards personnelData={currentData} />
                }
            </div>
            <div className="row m-4">
                <div className="container-fluid d-flex justify-content-center">
                    <Pagination datasPerPage={dataPerPage} currentPage={currentPage} totalDatas={personnelData.length} subtractPageNum={subtractPageNum} addPageNum={addPageNum} />
                </div>
            </div>
        </div>
    )
}

export default PersonnelList