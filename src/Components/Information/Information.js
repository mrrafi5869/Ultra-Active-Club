import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import Details from '../Details/Details';
import './Information.css';

const Information = () => {
    const [categories, setCategories] = useState([]);
    const [times, setTimes] = useState([]);
    
    // {
    //     breaks.map(breakTime => console.log(breakTime))
    // }
    useEffect(() => {
        fetch("gymData.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    const addTime = minute => {
    //    console.log(minute);
       const newTime = [...times, minute];
       setTimes(newTime);
    }
    return (
        <div>
            <h3 className='headline'>Select Today's Exercise</h3>
            <div className='info'>
            <div className="categories">
                {
                    categories.map(category => <Categories
                    key={category.id}
                    img = {category.img}
                    name = {category.name}
                    details = {category.details}
                    time = {category.time}
                    addTime = {addTime}
                    ></Categories>)
                }
            </div>
            <div className="details">
                <h1>details; {times.length}</h1>
                <Details
                    times = {times}
                ></Details>
            </div>
        </div>
        </div>
    );
};

export default Information;