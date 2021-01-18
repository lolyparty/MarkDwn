import React from 'react' 

const Button = ({changed,name}) =>{
    return <button onClick={changed}>{name}</button>
}

export {Button}