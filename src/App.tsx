import React from 'react'
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'



function App() {

  return (
    <div className="App">
      <Navbar/>

      <Home />
    </div>
  )
}

export default App