import React from 'react'

// static component
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

// Dynamic - user inpt for example


export default person


