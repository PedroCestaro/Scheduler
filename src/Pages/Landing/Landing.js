import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Images/logo.png';
import './styles.css';
import Mainpage from '../MainPage/MainPage';


function Landing(){
    return(
        <div className="land-container">
           <div className="logo">
                 <img src={Logo} alt="logo-igm" className="image"/>
           </div>
           <div className="button-container">
                <button>Login</button>
                <Link to="/main">
                <button
                >Keep</button>
                </Link>
           </div>
        </div>
    );
}

export default Landing;