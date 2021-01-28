import React from 'react' 
import {Button} from '../../btn/btn'
import './markprevsmall.css'


const Markprevsmall = ({markdown,preview,markdownactive,prevactive})=>{
    return <div className="markprevbtns">
    <Button styleName={`markdwn ${markdownactive}`} name="Markdown Input" changed={markdown}/>
    <Button styleName={`prev ${prevactive}`} name="Preview" changed={preview}/>
</div>
}

export {Markprevsmall}