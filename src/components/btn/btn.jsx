import React from 'react' 

const Button = ({changed,name, styleName}) =>{
    return <button style={{cursor:"pointer"}} className={styleName} onClick={changed}>{name}</button>
}

export {Button}