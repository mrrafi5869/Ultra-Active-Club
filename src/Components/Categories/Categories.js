import React from 'react';
import './Categories.css';
const Categories = (props) => {
    const {img, name, details, time, addTime} = props;
    return (
        <div className='category'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{details}</p>
            <h3>Time required:{time} minute</h3>
            <button onClick={() => addTime(props)}>Add to List</button>
        </div>
    );
};
export default Categories;