import { useState } from 'react'
import './styles/App.css'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { ListProvider } from './components/ListContext.jsx';
import NavBar from './components/NavBar.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import FetchLatestPost from './components/FetchLatestPost.jsx';
import RecLatestPost from './components/RecLatestPost.jsx';
function App() {
  

  return (
    <Router>
    <ListProvider>
      <NavBar/>
    <Routes>
      <Route path="/" element={<FetchLatestPost>
        <RecLatestPost/>
      </FetchLatestPost>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </ListProvider>
    </Router>
  )
}

export default App
