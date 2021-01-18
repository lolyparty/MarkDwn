import React from 'react' 
import './header.css'

const Header = () =>{
    return <div className="header">
        <div className="logo"><h2>MarkDwn</h2></div>
        <div ><a className="guide" href="" to="/guide">Guide</a></div>
    </div>
}

export {Header}