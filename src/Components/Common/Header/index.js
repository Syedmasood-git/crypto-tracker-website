import React from 'react'
import './style.css'
import TemporaryDrawer from './Drawer'
import Button from '../Button'

const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
      <div className='links'>
        <a href='#'><p className='link'>Home</p></a>
        <a href='#'><p className='link'>Compare</p></a>
        <a href='#'><p className='link'>Watchlist</p></a>
        <Button text={'Dashboard'} outlined={true} onClick={()=>console.log('btn clicked')}/>
      </div>
      <div className='mobile-drawer'>
        <TemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header
