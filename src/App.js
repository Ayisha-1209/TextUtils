import About from './About';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React, {useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled.", "success");
      document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing!!"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now!!"
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className='container my-3'>
      <Routes>
            <Route exact path="/about" element={<About />}>
              </Route>
            <Route exact path="/" element={<Textform showAlert = {showAlert} heading="Enter the text to analyze." mode={mode}/>}>
              </Route>
      </Routes>
      </div>
      </Router>
      </>
  )
}