import React from 'react' 
import './preview.css'


const Preview = ({html}) =>{
    return <div className="prevdiv">
        <div className="previewdiv" dangerouslySetInnerHTML={{__html:html}}>
            
        </div>
    </div>
}

export {Preview}