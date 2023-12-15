import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import Watchlist from './pages/Watchlist'
import Header from './Components/Common/Header'
import CoinPage from './pages/CoinPage'
import Compare from './pages/Compare'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/dashboard'element={<DashboardPage/>}/>
          <Route path='/coin/:id' element={<CoinPage/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/watchlist' element={<Watchlist/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

