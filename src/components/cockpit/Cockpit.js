import React from 'react';
import './Cockpit.css';
import Aux from '../hoc/Auxillary';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = "Button";

    if(props.showPersons){
        btnClass = ['Button','Red'].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push('red');
    }

    if (props.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
        <Aux>
        <h1>{props.appTitle}</h1>
         <p className ={assignedClasses.join(' ')}>This is really working!</p>
         <button className = {btnClass} onClick = {props.clicked}>Toggle persons</button>
         </Aux>
    )
};

export default Cockpit;