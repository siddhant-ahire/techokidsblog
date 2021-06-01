import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Search from './Search';

const Header = ({mainData, setSearch, setSearchClick, onSearchClick, onselect, onFilterClick}) => {
    return (
        <div className="m-4">
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
                        <a href="/" style={{ marginLeft: 5, fontWeight: 'bold', fontSize: 'small', textDecoration: 'none' }}>Published </a> ({mainData.length})
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
                        <select title="Bulk actions" className="dropbutton">
                            <option className="dropdown-item" >Bulk actions</option>
                            <option className="dropdown-item" >DELETE</option>
                            <option className="dropdown-item" >EDIT</option>
                        </select>
                        <button className="mx-2 blogbutton">Apply</button>
                    </div>
                    <div className="dropdown d-flex" style={{ marginRight: '0.5rem' }}>
                        <select defaultValue={'Author'} title="Author" className="dropbutton" onChange={onselect('author')}>
                            <option disabled >Author</option>
                            <option className="dropdown-item" value="all">All</option>
                            <option className="dropdown-item" value="sonveer.singh">sonveer.singh</option>
                            <option className="dropdown-item" value="xyz">xyz</option>
                        </select>
                    </div>
                    <div className="dropdown d-flex">
                        <select defaultValue={'All Categories'} title="All Categories" className="dropbutton" onChange={onselect('category')}>
                            <option disabled>All Categories</option>
                            <option className="dropdown-item" value="all">All</option>
                            <option className="dropdown-item" value="uncategorized">uncategorized</option>
                            <option className="dropdown-item" value="category1">category1</option>
                        </select>
                        <button className="mx-2 blogbutton" onClick={onFilterClick}>Filter</button>
                    </div>
                    <div style={{ marginLeft: 'auto', alignSelf: 'center', marginRight: '10px', fontSize: 'small' }}>
                        <span >{mainData.length} items</span>
                    </div>
                </div>
            </div>
    )
}

export default Header
