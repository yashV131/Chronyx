//import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import Login from '../src/pages/Login.jsx';
import Register from '../src/pages/Register.jsx';
import Navbar from './components/Navbar.jsx';
   
function App() {

    return (
     <div>

     <h1>Chronyx</h1>
      <Navbar />
      <h1>Hi</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes> 
     </div>
    )
  }
export default App
