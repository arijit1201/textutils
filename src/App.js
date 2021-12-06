// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// let name = "Arijit"

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
      if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      }
      else if(mode==='dark'){
        setMode('light')
        document.body.style.backgroundColor = 'white'
      }
  }
  return (
    <>
      <Navbar title="Text Utilities" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm title="Input Your text Here" mode={mode}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
