import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import FlightListing from './Pages/Flight Flow/FlightListing/FlightListing'

function App() {
  return (
    <>
    <Outlet />
    </>
  )
}

export default App
