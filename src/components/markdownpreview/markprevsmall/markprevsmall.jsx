import React from 'react' 
import {Button} from '../../btn/btn'


const Markprevsmall = ({markdown,preview})=>{
    return <div className="markprevbtns">
    <Button styleName="markdwn" name="Markdown" changed={markdown}/>
    <Button styleName="prev" name="preview" changed={preview}/>
</div>
}

export {Markprevsmall}