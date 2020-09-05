import React from 'react'
import './styles.css';
import ScheduleItem from '../../Components/Schedule_Item';
import NewItem from '../../Components/New_Schedule';
import { Link } from 'react-router-dom';

function MainPage(){

    return(
        <div className="page-container">
            <header><h1>Scheduler</h1></header>
                <ScheduleItem/>
                <ScheduleItem/>
                <ScheduleItem/>
            <footer className="info">
               <Link to="/newItem">
                <button>New Item</button>
               </Link>
                <div>
                    <h3>User Name</h3>
                    <p>Number of Items</p>
                </div>
            </footer>
        </div>
    );
}


export default MainPage;