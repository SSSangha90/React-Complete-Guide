import React from 'react'

import './Person.css'

// static component
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.newChange} value={props.name}/>
        </div>
    )
}

// Dynamic - user inpt for example


export default person


