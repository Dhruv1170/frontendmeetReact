import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PreLanuch from "./component/PreLaunch";
import Meeting from './component/Meeting';
import Registration from './component/Register';
import Login from './component/Login';
import { useEffect } from 'react';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/preLanuch" element={<PreLanuch/>} /> 
      <Route path="/meeting" element={<Meeting/>}/>
    </Routes>
  </BrowserRouter>,
  </>
  );
}

export default App;
