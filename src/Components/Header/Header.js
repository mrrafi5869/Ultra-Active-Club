import React from 'react';
import logo from '../../../src/images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon className='dumbbell' icon = {faDumbbell}></FontAwesomeIcon>
            <h1>Fit ZONE</h1>
        </div>
    );
};

export default Header;