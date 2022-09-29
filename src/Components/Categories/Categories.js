import React from 'react';
import './Categories.css';
const Categories = ({img, name, details, time, addTime}) => {

    return (
        <div className='category'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{details}</p>
            <h3>Time required:{time} minute</h3>
            <button onClick={() => addTime(time)}>Add to List</button>
        </div>
    );
};
export default Categories;