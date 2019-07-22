import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Sukh', age: 28 },
      { name: 'Tania', age: 25 },
      { name: 'Jas', age: 51 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
   // console.log('Was clicked!')
   // DONT DO THIS - this.state.persons[0].name = 'Sukhveer'
    this.setState( {
      persons: [
        { name: 'Sukhveer', age: 29 },
        { name: 'Tanveer', age: 26 },
        { name: 'Jasbinder', age: 51 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React Developer</h1>
        <p>Completing Max's tutorial</p>
        <button onClick={this.switchNameHandler}>Switch Name:</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dancing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>And I like cooking</Person>
      </div>
    );
  }
}

export default App;

