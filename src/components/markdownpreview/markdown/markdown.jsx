import React from 'react' 
import {Button} from '../../btn/btn'
import './markdown.css'

const Markdown = ({cleared, copied,markup,value})=>{
    return <div className="markeddiv">
        <textarea rows="28" onChange={markup} placeholder="Markdown" value={value}></textarea>
        <br />
        <Button styleName="clear" name="Clear" changed={cleared} />
        <Button styleName="copy" name="Copy to clipboard" changed={copied} />
    </div>
}

export {Markdown}