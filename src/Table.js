import React from 'react'
import {Table} from 'react-bootstrap'

const Tables = ({tableData, allBlogCheck, setMainData, checked, mainData}) => {
    return (
        <div className="data-grid px-4">
                <div className="table-wrapper">
                    <Table responsive id="example" className="table table-striped" style={{ backgroundColor: '#fff', border: '2px solid rgb(216 207 207)' }}>
                        <thead>
                            <tr>
                                <th className="Blogtitle">
                                    <input className="form-check-input" name="all" checked={checked}
                                        onChange={(e) => {
                                            allBlogCheck();
                                            let checked = e.target.checked;
                                            setMainData(
                                                mainData.map(d => {
                                                    d.select = checked;
                                                    return d;
                                                })
                                            )
                                        }}
                                        type="checkbox" id="checkbox" value="all" />
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
                                    <tr key={row.id}>
                                        <td >
                                            <input
                                                className="form-check-input"
                                                name="blog"
                                                type="checkbox"
                                                key={row.id}
                                                value={row.id}
                                                onChange={(e) => {
                                                    let checked = e.target.checked;
                                                    setMainData(mainData.map(data => {
                                                        if (row.id === data.id) {
                                                            data.select = checked;
                                                        }
                                                        return data;
                                                    }))
                                                }}
                                                checked={row.select}
                                            />
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
                                    <input className="form-check-input" name="all" checked={checked}
                                        onChange={(e) => {
                                            allBlogCheck();
                                            let checked = e.target.checked;
                                            setMainData(
                                                mainData.map(d => {
                                                    d.select = checked;
                                                    return d;
                                                })
                                            )
                                        }}
                                        type="checkbox" id="checkbox" value="all" /></th>
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
                    <select title="Bulk actions" className="dropbutton">
                        {/* Bulk actions */}
                        {/* <div className="dropdown-menu"> */}
                        <option href="/" className="dropdown-item" >Bulk actions</option>
                        <option href="/" className="dropdown-item" >Action</option>
                        <option href="/" className="dropdown-item" >Action</option>
                        {/* </div> */}
                    </select>
                    <button className="mx-2 blogbutton">Apply</button>
                    <div style={{ marginLeft: 'auto', alignSelf: 'center', marginRight: '10px', fontSize: 'small' }}>
                        <span >{mainData.length} items</span>
                    </div>
                </div>
            </div>
    )
}

export default Tables
