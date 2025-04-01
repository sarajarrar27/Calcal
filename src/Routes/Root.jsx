import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <div className='logo'>
        <img className='logo' src='src\assets\logo.png' />
        <span>CALORIES  CALCULATOR</span>
      </div>
      <Outlet />
    </>
  )
}
