import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HotelSearch from './Pages/Hotel Flow/HotelSearch/HotelSearch';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <>
    <Outlet />
    {/* <HotelSearch />  */}
    </>
  )
}

export default App
