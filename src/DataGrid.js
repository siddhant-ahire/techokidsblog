import React from 'react'
import Chatfill from 'bootstrap-icons/icons/chat-fill.svg'
import './DataGrid.css'

const DataGrid = () => {
    return (
        <div className="container mt-5 mb-5" style={{backgroundColor:'#eee',padding:'30px'}}>
            <div className="m-3">

            <div className="container mb-2">
                <span className="h3">Blogs</span>
                <button style={{width:"100px",hight:"50px",marginLeft:'20px',backgroundColor:"#fff"}}>
                    Add New
                </button>
            </div>
            <div className="container mb-1 d-flex justify-content-between">
                <div className="" style={{marginLeft:5}}>
                    <span className="">All (5)</span> <span style={{color:'darkgray'}}>|</span> 
                    <a href="/" style={{marginLeft:5}}>Published </a> (5) 
                    <a href="/" style={{marginLeft:10}}>Save </a>(0)
                </div>
                <div className="" style={{marginRight:"10px"}}>
                    <input type="text" className="mx-3"/>
                    <button className="btn btn-primary">submit</button>
                </div>
            </div>
            <div className="container d-flex">
                <div className="dropdown d-flex">
                    <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                        Bulk actions
                    </button>
                    <div className="dropdown-menu">
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                    </div>
                    <button className="mx-2">Apply</button>
                </div>
                <div className="dropdown d-flex">
                    <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                        Author
                    </button>
                    <div className="dropdown-menu">
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                    </div>
                </div>
                <div className="dropdown d-flex mx-2">
                    <button className="btn btn-sm border-secondary bg-white dropdown-toggle">
                        All Categories
                    </button>
                    <div className="dropdown-menu">
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                        <a href="/" className="dropdown-item" >Action</a>
                    </div>
                    <button className="mx-2">Apply</button>
                </div>
                <div style={{marginLeft:'auto' , alignSelf:'center', marginRight:'10px', fontSize:'small'}}>
                <span >10 items</span>
                </div>
            </div>
            </div>
            <div className="data-grid px-4">
                <div className="table-wrapper">
            <table id="example" className="table table-striped" style={{ backgroundColor:'#fff',border:'2px solid rgb(216 207 207)'}}>
        <thead>
            <tr>
                <th className="Blogtitle">
                    <input className="form-check-input" type="checkbox" id="checkbox"/>
                </th>
                <th className="Blogtitle">Title</th>
                <th className="Blogtitle">Author</th>
                <th className="Blogtitle">Categories</th>
                <th className="Blogtitle">Tags</th>
                <th className="Blogtitle"><i className="bi bi-chat-fill" style={{color:'black'}}/></th>
                <th className="Blogtitle">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td >
                    <input class="form-check-input" type="checkbox" id="checkbox"/>
                </td>
                <td>Top 5 programming languages Every kid should learn At its Early Age</td>
                <td>sonveer.singh</td>
                <td>uncategorized</td>
                <td>--</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td><span>Published</span><br />2021/01/11 at 11:27</td>
            </tr>
            <tr>
                <td style={{width:10}}>
                <input class="form-check-input" type="checkbox" id="checkbox"/>
                </td>
                <td>10 Best way to learn coding for the 21st century Kids</td>
                <td>sonveer.singh</td>
                <td>uncategorized</td>
                <td>--</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td><span>Published</span><br />2020/02/12 at 01:22</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td>2009/01/12</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>--</td>
                <td>2012/03/29</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td>2008/11/28</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>--</td>
                <td>2012/12/02</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td>2012/08/06</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Rhona Davidson</td>
                <td>Integration Specialist</td>
                <td>Tokyo</td>
                <td>55</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td>2010/10/14</td>
            </tr>
            <tr>
                <td>
                <input class="form-check-input" type="checkbox" id="checkbox"/></td>
                <td>Colleen Hurst</td>
                <td>Javascript Developer</td>
                <td>San Francisco</td>
                <td>39</td>
                <td><i className="bi bi-chat-fill" style={{color:'darkgray'}}/></td>
                <td>2009/09/15</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>
                <input class="form-check-input" type="checkbox" id="checkbox"/></th>
                <th>Tile</th>
                <th>Author</th>
                <th>Categories</th>
                <th>Tags</th>
                <td style={{borderBottomColor:'black'}}><i className="bi bi-chat-fill" style={{color:'black'}}/></td>
                <th>Date</th>
            </tr>
        </tfoot>
    </table>
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
                    <button className="mx-2">Apply</button>
                    <div style={{marginLeft:'auto' , alignSelf:'center', marginRight:'10px', fontSize:'small'}}>
                    <span >10 items</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataGrid
