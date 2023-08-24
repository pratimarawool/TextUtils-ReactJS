import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  //usestate to set navigation bar theme
  const [mode, setmode] = useState('light')

  //handler to set navigation bar theme & back ground color 
  const toggleMode = () => {
      if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor = '#13274F'
      }
      else{
        setmode('light')
        document.body.style.backgroundColor = 'white'
      }
  }

  return (
    <BrowserRouter>
      <Navigation title="TextUtils" mode={mode} toggleMode={toggleMode}/>

      <div className = "container">
        <Routes>
          <Route exact path="/" element= {<TextArea heading="Enter the text to analyze here" mode={mode}/>} />
        </Routes>

      <Routes>
        <Route exact path="/about" element= {<About mode={mode}/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
