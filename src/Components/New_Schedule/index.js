import React from 'react';
import './styles.css';
import { useState } from 'react';

function NewItem(){

    const [name,setName] = useState('');/*Saving the old state empty*/
    const [date,setDate] = useState('');
    const [list,setList] = useState("");

    

    return(
        <div className="container">
            <div className="content">
                <h1>New Item</h1>
                <form>
                <fieldset>
                        <label /*first state*/ htmlFor="name">Item Name</label>
                        <input
                         type="text"id="name"
                         value={name}/*linking the state to the field*/
                         onChange={
                             (event)=>{
                                 setName(event.target.value);
                             }
                         }
                         ></input>
                    </fieldset>
                    <fieldset>
                        <label /*second state*/ htmlFor="Data">Item final date</label>
                        <input type="date"id="Data"
                        value={date}
                        onChange={
                            (event) =>{
                                setDate(event.target.value);
                            }
                        }
                        ></input>
                    </fieldset>
                    <fieldset>
                        <label /*third state*/ htmlFor="list"
                        value={list}
                        onChange={
                            event=>{
                                setList(event.target.value);
                            }
                        }
                        >Item list</label>
                      <textarea/>
                    </fieldset>
                </form>
                <button>Save</button>
            </div>
        </div>
    );
}

export default NewItem;