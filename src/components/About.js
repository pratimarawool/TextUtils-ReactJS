import React, { useState } from 'react';

export default function About(){

    const [mystyle, setstyle] = useState({
        color:'black',
        backgroundColor: 'white'
    });

    const [thememode, setthememode] = useState("Enable Dark Mode")

    const togglestyle = () =>{
        if(mystyle.color === 'black'){
            setstyle({
                color:'white',
                backgroundColor: 'black'
            })
            setthememode("Enable Light Mode")
        }
        else{
            setstyle({
                color:'black',
                backgroundColor: 'white'
            })
            setthememode("Enable Dark Mode")
        }
    }

    return(
        <div>
            <div className="accordion my-5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style = {mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About TextUtils #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>TextUtils</strong> is a fundamental <strong>React JS application</strong> that empowers users to manipulate text according to their preferences. It offers functionalities such as converting text to uppercase or lowercase, trimming sentences, removing special characters, and clearing text. Additionally, the app provides word and letter count for sentences or paragraphs, along with an estimated reading time indication.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style = {mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Features #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <ul>
                            <li>Transform text to upper or lower case.</li>
                            <li>Trim sentence whitespace.</li>    
                            <li>Remove special characters.</li>    
                            <li>Clear text easily.</li>    
                            <li>Count words and letters.</li>    
                            <li>Estimate reading time for content.</li>    
                        </ul>
                        </div>
                    </div>
                </div>

 
            </div>

            <div className="my-3">
                <button type="button" className="btn btn-primary" onClick={togglestyle}>{thememode}</button>
            </div>
        </div>

    );
}