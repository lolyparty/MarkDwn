import React from 'react' 
import './guide.css'

const Guide = () =>{
    return <div className="markdwnguide">
    <hr />
    <h3> Here's a simple guide to get you started with writing markdown</h3>
    <div className="guide_header">
        <h2>Headings</h2>
        <p className="guide_explanation">To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. </p>
        <div className="markdown_block">
        # Heading  level 1 <br />  ##  Heading level 2 <br />  ###  Heading level 3 <br />  ####  Heading level 4 <br />#####  Heading level 5 <br /> ######  Heading level 6
        </div>
    </div>
    <div className="guide_header">
        <h2>Paragraphs</h2>
        <p className="guide_explanation">To create paragraphs, use a blank line to separate one or more lines of text </p>
        <div className="markdown_block">
        I like using markdown
        </div>
    </div>
    <div className="guide_header">
        <h2>Line breaks</h2>
        <p className="guide_explanation">To create a line break (&lt;br&gt;), end a line with two or more spaces, and then type return. There is another option, adding the &lt;br&gt; HTML tag. </p>
        <div className="markdown_block">
        First Line with two spaces in front  <br />
        Next line <br />

        <br />
        Line 1 with html tag &lt;br&gt;<br />
        The next line
        </div>
    </div>
    <div className="guide_header">
        <h2></h2>
        <p className="guide_explanation"> </p>
        <div className="markdown_block">
        
        </div>
    </div>
    <div className="guide_header">
        <h2></h2>
        <p className="guide_explanation"> </p>
        <div className="markdown_block">
        
        </div>
    </div>
    </div>
}

export {Guide}