import React from 'react' 
import {Button} from '../../btn/btn'
import './markdown.css'

const Markdown = ()=>{
    return <div className="markeddiv">
        <textarea onChange=""></textarea>
        <br />
        <Button className="clear" name="Clear" changed='' />
        <Button className="copy" name="ocpy to clipboard" changed="" />
    </div>
}

export {Markdown}