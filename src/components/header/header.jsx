import React from 'react' 
import './header.css'
import {Link} from 'react-router-dom'

const Header = () =>{
    return <div className="header">
        <Link to="/">
            <div className="logo"><h1>Markdwn</h1></div>
        </Link>
        <Link className="guide" to="/guide">Guide</Link>
    </div>
}

export {Header}