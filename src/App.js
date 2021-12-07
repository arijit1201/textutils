// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

// let name = "Arijit"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      typ: type
    })
  }
  const toggleMode = () => {
      if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0b1826'
      showAlert("Dark Mode enabled","Success")
      }
      else if(mode==='dark'){
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light Mode enabled","Success")
      }
  }
  return (
    <>
      <Navbar title="Text Utilities" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm title="Input Your text Here" mode={mode} showAlert = {showAlert}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
