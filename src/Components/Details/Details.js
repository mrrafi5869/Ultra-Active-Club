import React from 'react';
import myPic from '../../images/Rafi.jpg';
import './Details.css'

const Details = (props) => {
    const {addTime} = props;
    return (
        <div>
            <div className='my-details'>
                    <img src={myPic} alt="" /> 
                    <div>
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
                    <p>Exercise Time: {addTime} minute</p>
                </div>
                <div className='break-total-time'>
                    <p>Break-time: </p>
                </div>
                <button className='active-btn'><h4>Activity Completed</h4></button>
        </div>
    );
};

export default Details;