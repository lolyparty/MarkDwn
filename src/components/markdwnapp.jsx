import React from 'react' 
import {Markdown} from './markdownpreview/markdown/markdown'
import {Preview} from '../components/markdownpreview/preview/preview'
import { Markprevsmall } from "../components/markdownpreview/markprevsmall/markprevsmall";
import { Markprevbig } from "../components/markdownpreview/markprevbig/markprevbig";
import './markdwnapp.css'

const Markdwnapp = () =>{
    const [display, setDisplay] = React.useState(true)

    const [Device, setDevice] = React.useState(false)

    const [markText, setText] = React.useState('')

    const [copy, setCopy] = React.useState(false)

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
        //Js copying fuction
        setTimeout(()=>{
            setCopy(true)
        },500)
        setCopy(false)
    }


    return <div>
    <div className={`copied ${copy && 'show'}`}>Copied to clipboard!</div>
    {Device ? <Markprevsmall markdownactive={display && 'active'} prevactive={!display && 'prevactive'} markdown={changedToMarkdown} preview={changedToPreview}/> : <Markprevbig />}
    {Device ? (display ? <Markdown markup={markup} cleared={cleared} value={markText} copied={copied}/> : <Preview />): <div className="markdwn_big"><Markdown markup={markup} cleared={cleared} value={markText} copied={copied}/> <Preview /></div>}
    </div>
}

export {Markdwnapp}