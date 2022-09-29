import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import Details from '../Details/Details';
import './Information.css';

const Information = () => {
    const [categories, setCategories] = useState([]);
    const [times, setTimes] = useState([]);

    
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
                <Details
                    times = {times}
                ></Details>
            </div>
            </div>
            </div>
            <div className='question'>
                <div>
                    <h1>How does react work?</h1>
                    <p>'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                </div>
                <div>
                    <h1>What is different of props and state?</h1>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                </div>
                <div>
                    <h1>Is useEffect use withour fetching data?</h1>
                    <p>useEffect is for side-effects. A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects</p>
                </div>
            </div>
        </div>
    );
};

export default Information;