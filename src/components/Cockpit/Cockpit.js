import React from 'react';
import classes from './Cockpit.css';

const Cockpit = ({ persons, togglePersonsHandler, showPersons }) => {
  const assignedClasses = [];
  if (persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  let btnClass = '';

  if (showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
