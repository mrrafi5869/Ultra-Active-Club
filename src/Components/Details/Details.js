import React, { useEffect, useState } from 'react';
import myPic from '../../images/Rafi.jpg';
import './Details.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {
    const {times} = props;
    const [breaks, setBreaks] = useState([]);
    const [second, setSecond] = useState([]);

    useEffect(() => {
        fetch("break.json")
        .then(res => res.json())
        .then(data => setBreaks(data))
    } , [])

    let total = 0;
    for(const time of times){
        total = total + time.time;
    }
    const notify = () => {
        toast("Yeah.Alhamdulillah done.")
    }
    const addToBreakContainer = (breakTime) => {
        setSecond(breakTime);
    }
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
                        <h4>5.9inch<br/> <small>height</small></h4>
                    </div>
                    <div>
                        <h4>19 <small>years</small><br/>age</h4>
                    </div>
                </div>
                <h2>Add a break</h2>
                <div className='break-time'>
                    {
                        breaks.map(breakTime => <h5 onClick={() => addToBreakContainer(breakTime.time)}>{breakTime.time}</h5>)
                    }
                </div>
                <h2>Exercise Details</h2>
                <div className='exc-time'>
                    <p>Exercise Time: {total} minute</p>
                </div>
                <div className='break-total-time'>
                    <p>Break-time: {second}</p>
                </div>
                <button onClick={notify} className='active-btn'><h4>Activity Completed</h4></button>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;