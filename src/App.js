// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


 function App() {
  const [mode, setMode] = useState('light');  // weather dark mode is enabled or not
  const [alert, setAlert] = useState("");

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert("");
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
    }
    else{
    		setMode('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("Light mode has been enabled", "success");
        // document.title = 'TextUtils - Light-Mode'
    }
  }
  return (
    <>
    {/* <Navbar title='TextUtils' aboutText='About TextUtils'/> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-5" >
     <Routes>   
          <Route path="/about" element={ <About />} />
                   
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/> }/>
            
          
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App();

