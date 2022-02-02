import React, { useRef, useEffect, useState } from 'react';
import List from './List';
import { api_call } from '../sevices/api_call';
import { sortBy } from 'lodash';

const Search = (props) => {

    const inpuRef = useRef(null);
    const sortRef = useRef(null);
    const [pictues, setPictures] = useState([]);

    useEffect(() => {
        // focus the input on the first load
        inpuRef.current.focus();
        // first load pictures
        onFirstLoad();
    }, []);

    const onFirstLoad = async () => {
        const url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=clock&image_type=photo&pretty=true`;
        const response = await api_call(url);
        setPictures(response.data.hits);
    }

    const onSearch = async () => {
        const input = inpuRef.current.value;
        const url = `https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${input}&image_type=photo&pretty=true`;
        const response = await api_call(url);
        setPictures(response.data.hits);
        console.log(response)
    }

    // sorting function by selection
    const sort = () => {
        const change = sortRef.current.value;
        // sort by value and reverse from biggest to smallest
        const sort = sortBy(pictues, change).reverse();;
        setPictures(sort);
    }

    const entered = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    }

    return (<>
        <div className="bg-dark d-flex justify-content-center shadow sticky-top ">
            <div className="sortDiv d-flex m-2">
                <label className=" text-light m-2">Sort:</label>
                <select ref={sortRef} onChange={sort} className="form-select" aria-label="Default select example">
                    <option value="likes">Likes</option>
                    <option value="views">Views</option>
                    <option value="downloads">Dowloads</option>
                </select>
            </div>
            <div className=" col-sm-6 d-flex align-items-center">
                <input onKeyDown={entered} placeholder="Search" ref={inpuRef} type="text" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                <button className="btn btn-outline-light m-1" type="search" id="inputGroupFileAddon04" onClick={onSearch}>Search</button>
            </div>
        </div>
        <div className="container ">
            <div className="row justify-content-md-center mt-4">
                <List pictues={pictues} />
            </div>
        </div>
    </>);
};

export default Search;
