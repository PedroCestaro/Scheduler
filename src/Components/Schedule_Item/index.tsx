import React from 'react';
import './styles.css';


function ScheduleItem(){
    return(
        <div className="item-container">
            <p>Nome</p>
            <p>Data</p>
            <p>Atribuições</p>
            <p>Atraso</p>
        </div>
    );
}

export default ScheduleItem;