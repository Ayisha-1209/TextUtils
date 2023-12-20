import About from './About';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import React, {useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route
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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert}/>
      <div className='container my-3'>
      <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
              </Route>
            <Route exact path="/" element={<Textform showAlert = {showAlert} heading="Try TextUtils - Word Counter, Character Counter., Remove Extra Spaces" mode={mode}/>}>
              </Route>
      </Routes>
      </div>
      </Router>
      </>
  )
}