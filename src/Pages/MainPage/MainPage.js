import React from 'react'
import './styles.css';
import ScheduleItem from '../../Components/Schedule_Item';
import NewItem from '../../Components/New_Schedule';

function MainPage(){

    return(
        <div className="page-container">
            <header><h1>Scheduler</h1></header>
                <NewItem/>
            <footer className="info">
                <button>New Item</button>
                <div>
                    <h3>User Name</h3>
                    <p>Number of Items</p>
                </div>
            </footer>
        </div>
    );
}


export default MainPage;