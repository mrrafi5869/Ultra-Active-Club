import React from 'react';
import './Categories.css';
const Categories = ({img, name, details, time}) => {
    return (
        <div className='category'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{details}</p>
            <p>Time required:{time}</p>
        </div>
    );
};
export default Categories;