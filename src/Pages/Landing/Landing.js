import React from 'react';
import Logo from '../../assets/Images/logo.png';
import './styles.css';


function Landing(){
    return(
        <div className="land-container">
           <div className="logo">
           <img src={Logo} alt="logo-igm" className="image"/>
           </div>
           <button>Login</button>
        </div>
    );
}

export default Landing;