import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color='white';
      showAlert('Dark mode has been activated','succes')
      document.title ='Textutils-Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='#212529';
      showAlert('Light mode has been activated','succes')
      document.title ='Textutils-Light Mode'
    }
  }
  

  return (
    <>
    <Router>
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>
          <Route path="/about" element= { <About mode = {mode}/>}/>                  
          <Route exact path="/" element={<TextForm mode={mode} heading="Enter the text to analyze"/>}/>          
        </Routes>
      
      </div>
      </Router>
    </>
  );
}

export default App;
