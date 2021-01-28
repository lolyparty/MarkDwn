import React from 'react' 
import './guide.css'

const Guide = () =>{
    return <div className="markdwnguide">
    <hr />
    <h3 className="header_exp"> Here's a simple guide to get you started with writing markdown</h3>
    <div className="guide_header">
        <h2>Headings</h2>
        <p className="guide_explanation">To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. </p>
        <div className="markdown_block">
        # Heading  level 1 <br />  ##  Heading level 2 <br />  ###  Heading level 3 <br />  ####  Heading level 4 <br />##### Heading level 5 <br /> ######  Heading level 6
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
        <h2>Italic</h2>
        <p className="guide_explanation">To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.</p>
        <div className="markdown_block">
        _Italiced_
        <br/>
        *Italics*
        </div>
    </div>
    <div className="guide_header">
        <h2>Bold</h2>
        <p className="guide_explanation">To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.</p>
        <div className="markdown_block">
        I just love **bold text**.
        <br/>
        I love __bold text__.
        <br/>
        **I am bold**
        </div>
    </div>
    <div className="guide_header">
        <h2>Bold and Italic</h2>
        <p className="guide_explanation">To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters</p>
        <div className="markdown_block">
        This text is ***emphasized***.
        <br/>
        This text is ___really important___.
        <br/>
        This text is __*really important*__.
        <br/>
        This text is **_really important_**.
        <br/>
        This is really***very***important text
        </div>
    </div>
    <div className="guide_header">
        <h2>Blockquotes</h2>
        <p className="guide_explanation">To create a blockquote, add a &gt; in front of a paragraph.</p>
        <div className="markdown_block">
        &gt; This is a blockquote
        </div>
    </div>
    <div className="guide_header">
        <h3>Blockquotes with Multiple Paragraphs</h3>
        <p className="guide_explanation">Blockquotes can contain multiple paragraphs. Add a &gt; on the blank lines between the paragraphs.</p>
        <div className="markdown_block">
        &gt; This is a blockquote, paragraph 1
        <br/>
        &gt;
        <br/>
        &gt; Still a blockquote, paragraph 2
        </div>
    </div>
    <div className="guide_header">
        <h3>Nested Blockquotes</h3>
        <p className="guide_explanation">Blockquotes can be nested. Add a &gt;&gt; in front of the paragraph you want to nest</p>
        <div className="markdown_block">
        &gt; Dorothy followed her through many of the beautiful rooms in her castle.
        <br/>
        &gt;
        <br/>
        &gt;&gt; The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
        </div>
    </div>
    <div className="guide_header">
        <h3>Blockquotes with Other Elements</h3>
        <p className="guide_explanation">Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.</p>
        <div className="markdown_block">
        &gt; ### Blockquote with other elements.
        <br/>
        &gt; 
        <br/>
        &gt; - some item
        <br/>
        &gt; - Another item.
        <br/>
        &gt; 
        <br/> *Everything* is going according to **plan**.
        <br/>
        </div>
    </div>
    <div className="guide_header">
        <h2>Lists</h2>
        <p className="guide_explanation">You can organize items into ordered and unordered lists.</p>
        <h3>unordered list</h3>
        <p className="guide_explanation">To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.</p>
        <div className="markdown_block">
        - List item 1
        <br/>
        - List item 2
        <br/>
        + List item 3
        <br/>
        * List item 4
        </div>
        <h3>ordered list</h3>
        <p className="guide_explanation">To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one</p>
        <div className="markdown_block">
        1. List item 1
        <br/>
        2. List item 2
        <br/>
        3. List item 3
        <br/>
        4. List item 4
        </div>
    </div>
    <div className="guide_header">
        <h2>Code</h2>
        <p className="guide_explanation">To denote a word or phrase as code, enclose it in backticks (`).</p>
        <div className="markdown_block">
        At the command prompt, type `nano`.
        </div>
        <h3>Code Blocks</h3>
        <p className="guide_explanation">To create code blocks, indent every line of the block by at least four spaces or one tab</p>
        <div className="markdown_block">
        ````&lt;html&gt;&lt;head&gt;&lt;/html&gt;&lt;body&gt;&lt;/body&gt;&lt;/html&gt;````
        </div>
    </div>
    <div className="guide_header">
        <h2>Horizontal Line</h2>
        <p className="guide_explanation">To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.</p>
        <div className="markdown_block">
        ***
        <br/>
        ---
        <br/>
        ______
        </div>
    </div>
    <div className="guide_header">
        <h2>Links</h2>
        <p className="guide_explanation">To create a link, enclose the link text in brackets (e.g., [Google]) and then follow it immediately with the URL in parentheses (e.g., (https://google.com)).</p>
        <div className="markdown_block">
        My favorite search engine is [Google](https://Google.com).
        </div>
    </div>
    <p>Source <a href="https://www.markdownguide.org/basic-syntax/">markdown guide</a></p>
    <p>You can try these markdown syntaxes in the markdown input.</p>
    
    </div>
}

export {Guide}