import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Contacts from './Pages/Contacts'
import About from './Pages/About'
import axios from 'axios'
import SingleProduct from './Pages/SingleProduct'


const App = () => {
  const [location, setLocation] = useState();
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);



  const toggleDialogue = () => {
    return setIsDialogueOpen(isDialogueOpen => ~isDialogueOpen);
  }

  function getLocation() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const fetchedLocation = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const exactLocation = fetchedLocation.data.address;
        console.log(exactLocation);

        setLocation(exactLocation);
        toggleDialogue();
      } catch (error) {
        console.log("Error in getting location", error);
      }

    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div className='w-full h-full p-0.5  bg-[#ECDFCC]'>
      <Navbar location={location} getLocation={getLocation} isDialogueOpen={isDialogueOpen} toggleDialogue={toggleDialogue} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}

export default App