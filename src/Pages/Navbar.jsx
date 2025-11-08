import React, { useState } from 'react'
import { FiMapPin } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Home from './Home';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useCart } from '../Context/CartData';

const Navbar = ({ location, getLocation, isDialogueOpen, toggleDialogue }) => {
    //1 useState for dialogue box
    //2 Moved to app.jsx 
    const {cartItems} = useCart();

    return (
        <div className='w-full h-[8vh]   overflow-hidden '>
            <div className='relative rounded-3xl w-full h-full bg-[#697565] flex justify-between px-20 items-center'>
                <div className="logoWrapper text-3xl flex gap-4 items-center">
                    <Link to={'/'}>
                        <h1>Zaptro</h1>
                    </Link>
                    <div className="icons flex gap-2">
                        <FiMapPin />
                        {
                            location ? (
                                <div className='text-[1vw] flex flex-col items-start '>
                                    <p>{location.county},</p>
                                    <p>{location.state}</p>
                                </div>

                            ) : null
                        }
                        <IoMdArrowDropdown className='cursor-pointer' onClick={toggleDialogue} />
                    </div>
                </div>

                <nav className='flex gap-10 items-center '>
                    <ul className='flex gap-10 text-2xl'>
                        {/* <NavLink >Home</NavLink> */}
                        <Link to={'/'}>Home </Link>
                        <Link to={'/products'}>Product</Link>
                        {/* <Link to={'/cart'}>Cart</Link> */}
                        <Link to={'/contacts'}>Contact</Link>
                        <Link to={'/about'}>About</Link>
                    </ul>

                </nav>

                <div className=' flex gap-10 items-center'>
                    <div className=''>
                        <Link to={'/cart'} className='relative'>
                            <FaShoppingCart className='w-9 h-9 cursor-pointer' />
                            <div className="w-5 h-5 flex z-99 items-center justify-center rounded-full text-black bg-green-600 absolute -top-2 left-7">
                                {/* can incr using state */}
                                {cartItems?.length}
                                
                            </div>
                        </Link>
                    </div>
                    <div>
                        <SignedOut>
                            <SignInButton className='bg-red-400 p-2 w-3rem text-1xl rounded-lg cursor-pointer' />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>

                </div>
                {
                    isDialogueOpen ? (<div className="transition-all dialogue-box w-[16vw] h-[20vh] bg-amber-500 absolute top-24 z-99 left-50 p-5 rounded-lg flex flex-col items-center">
                        <p className='text-2xl'> Press the button to auto detect the location</p>
                        <button className='mt-3 w-[10vw] bg-green-400 cursor-pointer p-2 rounded-lg shadow-2xl flex items-center justify-center' onClick={getLocation}>Detect Location</button>
                    </div>) : null
                }

            </div>
        </div>
    )
}

export default Navbar