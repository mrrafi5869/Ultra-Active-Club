import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import './Information.css';

const Information = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("gymData.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    } , [])
    return (
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
            <div className="details">name:</div>
        </div>
    );
};

export default Information;