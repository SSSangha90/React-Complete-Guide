import React, { useState } from 'react'
// all hooks start with the use keyword
// useState the most important React hook
// import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

// Functional Component
// Can now use React Hooks feature

const app = props => {

  // useState returns an array - always with two elements
  const [ personsState, setPersonsState ] =  useState({ // Array destructuring
    // 1st elem allows for data 2nd allow us to set the new state
    persons: [
      { name: 'Sukh', age: 28 },
      { name: 'Tania', age: 25 },
      { name: 'Jas', age: 51 }
    ],
    otherState: 'some other value'
  })

// Can have mulitple useState calls
useState('some other value') // doesn't have to be an object

  // function within function
  const switchNameHandler = () => {
    // console.log('Was clicked!')
    // DONT DO THIS - this.state.persons[0].name = 'Sukhveer'
     setPersonsState( {
       persons: [
         { name: 'Sukhveer', age: 29 },
         { name: 'Tanveer', age: 26 },
         { name: 'Jasbinder', age: 51 }
       ],
       otherState: personsState.otherState
     })
   }
   
    return (
      <div className="App">
        <h1>Hi, I'm a React Developer</h1>
        <p>Completing Max's tutorial</p>
        <button onClick={switchNameHandler}>Switch Name:</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Dancing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>And I like cooking</Person>
      </div>
    );
  }


export default app;


// Different to class based components..but this is the latest way to use React Hooks as of update 16.8+
