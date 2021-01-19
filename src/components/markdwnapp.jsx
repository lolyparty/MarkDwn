import React from 'react' 
import {Markdown} from './markdownpreview/markdown/markdown'
import {Preview} from '../components/markdownpreview/preview/preview'
import { Markprevsmall } from "../components/markdownpreview/markprevsmall/markprevsmall";
import { Markprevbig } from "../components/markdownpreview/markprevbig/markprevbig";
import './markdwnapp.css'

const Markdwnapp = () =>{
    const [display, setDisplay] = React.useState(true)

    const [Device, setDevice] = React.useState(true)

    const [markText, setText] = React.useState('')

    const changedToMarkdown = () =>{
        setDisplay(true)
    }

    const changedToPreview = ()=>{
        setDisplay(false)
    }

    const markup = (e) =>{
        const {value} = e.target
        setText(value)
    }

    const cleared = (e)=>{
        e.preventDefault()
        setText('')
    }

    const copied= (e)=>{
        e.preventDefault()
        const markUpText = markText
        console.log(markUpText)
    }


    return <div>
    {Device ? <Markprevsmall markdown={changedToMarkdown} preview={changedToPreview}/> : <Markprevbig />}
    {Device ? (display ? <Markdown markup={markup} cleared={cleared} value={markText} copied={copied}/> : <Preview />): <div className="markdwn_big"><Markdown markup={markup} cleared={cleared} value={markText} copied={copied}/> <Preview /></div>}
    </div>
}

export {Markdwnapp}