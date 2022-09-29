import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import myPic from '../../../src/images/Rafi.jpg'
import './Information.css';

const Information = () => {
    const [categories, setCategories] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch("gymData.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])

    const addTime = minute => {
        const newTime = [...time, minute]
        setTime(newTime)
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
                    addTime = {addTime(category.time)}
                    ></Categories>)
                }
            </div>
            <div className="details">
                <div className='my-details'>
                    <img src={myPic} alt="" />
                    <div className='location'>
                    <h2>Mohammad Rafi</h2>
                    <p><h4>Bangladesh, Chittagong</h4></p>
                    </div>
                </div>
                <div className='customer-info'>
                    <div>
                        <h4>56 <small>kg</small><br/>weight</h4>
                    </div>
                    <div>
                        <h4>6.5<br/> <small>height</small></h4>
                    </div>
                    <div>
                        <h4>25 <small>years</small><br/>age</h4>
                    </div>
                </div>
                <h2>Add a break</h2>
                <div className='break-time'>
                    <h5>15m</h5>
                    <h5>10m</h5>
                    <h5>5m</h5>
                    <h5>20m</h5>
                </div>
                <h2>Exercise Details</h2>
                <div className='exc-time'>
                    <p>Exercise Time: <small>0</small> minute</p>
                </div>
                <div className='break-total-time'>
                    <p>Break-time: </p>
                </div>
                <button className='active-btn'><h4>Activity Completed</h4></button>
            </div>
        </div>
        </div>
    );
};

export default Information;