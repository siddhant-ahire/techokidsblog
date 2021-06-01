import React, { useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Data } from './data'
import './DataGrid.css'
import Header from './Header'
import Tables from './Table'

const DataGrid = () => {


    const [mainData, setMainData] = useState(Data);
    const [data, setData] = useState(mainData);
    const [search, setSearch] = useState("")
    const [searchClick, setSearchClick] = useState(false);
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [checked, setChecked] = useState(false);

    
    const onSearchClick = (e) => {
        if (e.key === 'Enter' || e.type === 'click')
            setSearchClick(!searchClick)
    }

    //For Search event 
    const tableData = useMemo(() => {
        let computedData;
        if (search) {
            computedData = mainData;
        } else {
            computedData = data;
        }
        if (searchClick) {
            computedData = computedData.filter(data =>
                data.Title.toLowerCase().includes(search.toLowerCase()) ||
                data.Author.toLowerCase().includes(search.toLowerCase())
            );
            return computedData;

        }

        return computedData;

    }, [data, search, searchClick, mainData])


    // filter select
    const onselect = value => e => {
        console.log(e.target.value, value);
        if (value == 'author') {
            setAuthor(e.target.value)
        }
        if (value == 'category') {
            setCategory(e.target.value)
        }

    }

    // filter check
    const onFilterClick = () => {
        let computedData = mainData;
        computedData = computedData.filter(data =>
            data.Author.toLowerCase().includes(author.toLowerCase()) &&
            data.Categories.toLowerCase().includes(category.toLowerCase())
        );
        if (author === 'all') {
            console.log('in')
            computedData = mainData;
            computedData = computedData.filter(data =>
                data.Categories.toLowerCase().includes(category.toLowerCase())
            );
        }
        if (category === 'all') {
            console.log('in')
            computedData = mainData;
            computedData = computedData.filter(data =>
                data.Author.toLowerCase().includes(author.toLowerCase())
            );
        }
        if (category === 'all' && author === 'all') {
            console.log('in')
            computedData = mainData;
        }
        console.log(computedData)
        setData(computedData)
    }

    // for select all blog
    const allBlogCheck = () => {
        setChecked(!checked)
    }

    return (
        <Container className="blogmain container mt-5 mb-5" style={{ backgroundColor: '#eee' }}>
            <Header
                mainData={mainData}
                setSearch={setSearch}
                setSearchClick={setSearchClick}
                onSearchClick={onSearchClick}
                onselect={onselect}
                onFilterClick={onFilterClick}
            />
            <Tables
                tableData={tableData}
                allBlogCheck={allBlogCheck}
                setMainData={setMainData}
                checked={checked}
                mainData={mainData}
            />
        </Container>
    )
}

export default DataGrid
