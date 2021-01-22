import React from 'react' 
import {Button} from '../../btn/btn'
import './markdown.css'

const Markdown = React.forwardRef((props,ref)=>{
    return <div className="markeddiv" >
        <textarea ref={ref} rows="28" onChange={props.markup} placeholder="Markdown" value={props.value}></textarea>
        <br />
        <Button styleName="clear" name="Clear" changed={props.cleared} />
        <Button styleName="copy" name="Copy to clipboard" changed={props.copied} />
    </div>
})

export {Markdown}