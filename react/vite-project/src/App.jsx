import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import About from './component/Form'
import Home from './component/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
