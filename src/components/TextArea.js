import React, { useState } from 'react';

export default function TextArea(props){
    const [text, setText] = useState('')

    const onChangehandler = (event) =>{
        setText(event.target.value)
        
    }

    //changes text to Upper Case
    const toUpperCasehandler = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    //changes text to Lower Case
    const toLowerCasehandler = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    //remove extra space from the start and end of the sentence
    const removeextraspacehandler = () =>{
        let newText = text.trim();
        setText(newText)
    }


    //remove special characters from the sentence
    const removespecialcharacters = () =>{
        let newText = text.replace(/[^a-z0-9,. ]/gi, '');
        setText(newText)
    }

    //clear text
    const cleartext = () =>{
        let newText ='';
        setText(newText)
    }
    
    
    return(
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2 className="my-3">{props.heading}</h2>
            <div className="mt- 2 mb-3">
                <textarea className="form-control" value={text} onChange = {onChangehandler} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={toUpperCasehandler}>Convert to Upper case</button>
            <button type="button" className="btn btn-primary mx-3 my-3" onClick={toLowerCasehandler}>Convert to Lower case</button>
            <button type="button" className="btn btn-primary" onClick={removeextraspacehandler}>Trim Sentence</button>
            <button type="button" className="btn btn-primary mx-3  my-3" onClick={removespecialcharacters}>Remove Special Characters</button>
            <button type="button" className="btn btn-danger" onClick={cleartext}>Clear Text</button>
        </div>

        <div className="container my-5"  style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p style ={{color:props.mode ==='dark'?'#00FFFF':'black'}}>
                {text.split(' ')[0] === ''?0:text.split(' ').length} words and {text.length} letters</p>
            <p style ={{color:props.mode ==='dark'?'#00FFFF':'black'}}>{0.008*text.split(' ').length} Minutes read.</p>
            <h2>Preview</h2>
            <p style ={{color:props.mode ==='dark'?'#00FFFF':'black'}}>{text.length === 0?"Please enter something to preview here.":text}</p>
        </div>
        </>
    );
}