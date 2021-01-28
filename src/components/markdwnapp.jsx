import React from 'react' 
import {Markdown} from './markdownpreview/markdown/markdown'
import {Preview} from '../components/markdownpreview/preview/preview'
import { Markprevsmall } from "../components/markdownpreview/markprevsmall/markprevsmall";
import { Markprevbig } from "../components/markdownpreview/markprevbig/markprevbig";
import './markdwnapp.css'
let marked = require("marked")

const Markdwnapp = () =>{
    const [display, setDisplay] = React.useState(true)

    const [markText, setText] = React.useState('')

    const [copy, setCopy] = React.useState(false)

    const [html, setHtml] = React.useState('')

    const markdownInput = React.createRef(null)

    const changedToMarkdown = () =>{
        setDisplay(true)
    }

    const changedToPreview = ()=>{
        setDisplay(false)
    }

    const markup = (e) =>{
        const {value} = e.target
        setText(value)
        setHtml(marked(value))
        console.log(html)
    }

    const cleared = (e)=>{
        e.preventDefault()
        setText('')
        setHtml('')
    }

    const copied= (e)=>{
        e.preventDefault()
        markdownInput.current.focus()
        markdownInput.current.select()

        try{
            document.execCommand('copy')
            markdownInput.current.blur()
            setTimeout(()=>{
                setCopy(true)
            },500)
            setCopy(false)
        } catch{
            alert('Oops,unable to copy markdown to clipboard')
        }
        //Js copying fuction

        
    }

    return <div>
    <div className={`copied ${copy && 'show'}`}>Copied to clipboard!</div>
    {window.innerWidth <= 510 ? <Markprevsmall markdownactive={display && 'active'} prevactive={!display && 'prevactive'} markdown={changedToMarkdown} preview={changedToPreview}/> : <Markprevbig />}
    {window.innerWidth <= 510 ? (display ? <Markdown ref={markdownInput} markup={markup} cleared={cleared} value={markText} copied={copied}/> : <Preview html={html}/>): <div className="markdwn_big"><Markdown ref={markdownInput} markup={markup} cleared={cleared} value={markText} copied={copied}/> <Preview html={html}/></div>}
    </div>
}

export {Markdwnapp}