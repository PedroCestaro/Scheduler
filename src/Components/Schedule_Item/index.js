import React from 'react';
import './styles.css';

function ScheduleItem(){
    return(
        <div className="item-container">
            <div className="item">
            <h1>Nome Tarefa</h1>
            <div className="time">
                <h4>Data:</h4>
                <h4>Tempo restante:</h4>
            </div>
            <div className="list">
                <h4>Itens</h4>
            </div>
            <div className="button-container">
                <h5>Done?</h5>
                <button>yes</button>
                <button>No</button>
            </div>
            </div>
        </div>
    );
}

export default ScheduleItem;