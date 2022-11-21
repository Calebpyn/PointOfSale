import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Header.css'

function Header() {

    const navigate = useNavigate()

  return (
    <div className='header'>

        <p className='logo'>POS</p>

        <div className='nav-bar'>

            <button type='button' onClick={ () => navigate('/') }>Home</button>
            <button type='button' className='margin-only-left'>Orders</button>
            <button type='button' className='margin-only-right'>Sale Report</button>
            <button type='button'>Stock</button>

        </div>

        <div className='nav-bar-buttons'>

            <button type='button'>Settings</button>

        </div>

    </div>
  )
}

export default Header