import React from 'react'

function Props({ name, age }) {
    // Conditional backgrund color based on age
    const backgroundColor = age > 30 ? 'green' : 'red'

    // Styling for the name(uppercase and font size)
    const textFormat = {
        textTransform: 'uppercase',
        fontSize: '30px',
        textShadow: '2px 3px 2px black'
    }
    return (
        <div className='contacts' style={{ backgroundColor: backgroundColor }}>
            <h2 style={textFormat}>Your name: {name}</h2>
            <h2>Your age: {age}</h2>
        </div>
    )
}

export default Props
