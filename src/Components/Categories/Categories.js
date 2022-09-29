import React from 'react';
import './Categories.css';
const Categories = ({img, name, details, time}) => {
    return (
        <div className='category'>
            <img src={img} alt="" />
            <h3>name : {name}</h3>
            <p>{details}</p>
            <p>{time}</p>
        </div>
    );
};
export default Categories;