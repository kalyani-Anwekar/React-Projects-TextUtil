import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import AlertNew from "./Components/AlertNew";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import React, { Component }  from 'react';

import ReactDOM from 'react-dom'
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode is successfully enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is successfully enabled", "success");
    }
  };

  return (
    <>
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <AlertNew alert={alert}/>
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} >

            </Route>

            <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


      </div>


      </Router>

    </>

  );
}

export default App;
