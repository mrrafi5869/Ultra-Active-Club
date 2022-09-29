import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import myPic from '../../../src/images/Rafi.jpg'
import './Information.css';

const Information = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("gymData.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])
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
                    <p>15m</p>
                    <p>10m</p>
                    <p>5m</p>
                    <p>20m</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Information;