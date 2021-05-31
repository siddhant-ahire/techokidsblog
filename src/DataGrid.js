import { Dropdown } from 'bootstrap'
import React, { useMemo, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Data } from './data'
import './DataGrid.css'
import Search from './Search'

const DataGrid = () => {

    const data = useState(Data);
    const [search, setSearch] = useState("")
    const [searchClick, setSearchClick] = useState(false);

    const onSearchClick = (e) => {
        // e.preventDefault();
        if(e.key === 'Enter' || e.type==='click')
            setSearchClick(!searchClick)
            console.log(searchClick)
    }

    const tableData = useMemo(() => {
        let computedData = data;

        if (searchClick) {

            console.log(computedData)
            computedData = computedData[0].filter(data =>
                data.Title.toLowerCase().includes(search.toLowerCase()) ||
                data.Author.toLowerCase().includes(search.toLowerCase())
            );
            return computedData;

        }

        return computedData[0];

    }, [data, search, searchClick])

    return (
        <Container className="blogmain container mt-5 mb-5" style={{ backgroundColor: '#eee' }}>
            <div className="m-3">
                <Row>
                    <Col className="container mb-2">
                        <span className="h3">Blogs</span>
                        <button className="blogbutton" style={{ marginLeft: '20px' }}>
                            Add New
                </button>
                    </Col>
                </Row>
                <Row className="mb-1 ">
                    <Col xs={12} sm={6} style={{ marginLeft: 5 }}>
                        <span style={{ fontWeight: 'bold', fontSize: 'small' }}>All </span>(5) <span style={{ color: 'darkgray' }}>|</span>
                        <a href="/" style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 'small', textDecoration: 'none' }}>Published </a> (5)
                    <a href="/" style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 'small', textDecoration: 'none', color: '#6fc1ec' }}>Save </a>(0)
                </Col>
                    <Col className="inputflex" style={{ marginRight: "10px", display: 'flex', justifyContent: 'flex-end' }}>
                        <Search onSearch={(value) => {
                            setSearch(value);
                            setSearchClick(false);
                            
                        }}
                        onKeyPress={onSearchClick}
                        />
                        <button className="blogbutton mx-2" onClick={onSearchClick}>Search Posts</button>
                    </Col>
                </Row>
                <div className="blogrow3 d-flex">
                    <div className="dropdown d-flex">
                        <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                            Bulk actions
                    </button>
                        <div className="dropdown-menu">
                            <a href="/" className="dropdown-item" >Action</a>
                            <a href="/" className="dropdown-item" >Action</a>
                            <a href="/" className="dropdown-item" >Action</a>
                        </div>
                        <button className="mx-2 blogbutton">Apply</button>
                    </div>
                    <div className="dropdown d-flex" style={{ marginRight: '0.5rem' }}>
                        <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                            Author
                    </button>
                        <div className="dropdown-menu">
                            <a href="/" className="dropdown-item" >Action</a>
                            <a href="/" className="dropdown-item" >Action</a>
                            <a href="/" className="dropdown-item" >Action</a>
                        </div>
                    </div>
                    <div className="dropdown d-flex">
                        <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                            All Categories
                    </button>
                        <div className="dropdown-menu">
                            <a href="/" className="dropdown-item" >Action</a>
                            <a href="/" className="dropdown-item" >Action</a>
                            <a href="/" className="dropdown-item" >Action</a>
                        </div>
                        <button className="mx-2 blogbutton">Filter</button>
                    </div>
                    <div style={{ marginLeft: 'auto', alignSelf: 'center', marginRight: '10px', fontSize: 'small' }}>
                        <span >10 items</span>
                    </div>
                </div>
            </div>
            <div className="data-grid px-4">
                <div className="table-wrapper">
                    <Table responsive id="example" className="table table-striped" style={{ backgroundColor: '#fff', border: '2px solid rgb(216 207 207)' }}>
                        <thead>
                            <tr>
                                <th className="Blogtitle">
                                    <input className="form-check-input" type="checkbox" id="checkbox" />
                                </th>
                                <th className="Blogtitle">Title</th>
                                <th className="Blogtitle">Author</th>
                                <th className="Blogtitle">Categories</th>
                                <th className="Blogtitle">Tags</th>
                                <th className="Blogtitle"><i className="bi bi-chat-fill" style={{ color: '#47414b' }} /></th>
                                <th className="Blogtitle">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((row) => (
                                    <tr>
                                        <td >
                                            <input className="form-check-input" type="checkbox" key={row.id} id={row.id} />
                                        </td>
                                        <td>{row.Title}</td>
                                        <td>{row.Author}</td>
                                        <td>{row.Categories}</td>
                                        <td>{row.Tags}</td>
                                        <td><i className="bi bi-chat-fill" style={{ color: 'darkgray' }} /></td>
                                        <td><span>{row.Published}</span><br />{row.Date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot style={{ borderTopColor: 'rgb(202, 199, 199)', borderWidth: '1px' }}>
                            <tr>
                                <th>
                                    <input class="form-check-input" type="checkbox" id="checkbox" /></th>
                                <th className="Blogtitle">Title</th>
                                <th className="Blogtitle">Author</th>
                                <th className="Blogtitle">Categories</th>
                                <th className="Blogtitle">Tags</th>
                                <td className="Blogtitle"><i className="bi bi-chat-fill" style={{ color: '#47414b' }} /></td>
                                <th className="Blogtitle">Date</th>
                            </tr>
                        </tfoot>
                    </Table>
                </div>
                <div className="dropdown d-flex">
                    <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                        Bulk actions
                    </button>
                    <div className="dropdown-menu">
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                    </div>
                    <button className="mx-2 blogbutton">Apply</button>
                    <div style={{ marginLeft: 'auto', alignSelf: 'center', marginRight: '10px', fontSize: 'small' }}>
                        <span >10 items</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default DataGrid
