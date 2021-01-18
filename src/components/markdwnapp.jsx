import React from 'react' 
import {Markdown} from './markdownpreview/markdown/markdown'
import {Header} from './header/header'

const Markdwnapp = () =>{
    return <div>
        <Header />
        
        <Markdown />
    </div>
}

export {Markdwnapp}