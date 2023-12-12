import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import Watchlist from './pages/Watchlist'
import { Compare } from '@mui/icons-material'
import Header from './Components/Common/Header'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/dashboard'element={<DashboardPage/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App

