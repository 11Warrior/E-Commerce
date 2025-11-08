import React from 'react'
import { useCart } from '../Context/CartData'
import { ImBin } from "react-icons/im";
import { LuNotebookText } from "react-icons/lu";
import { GiScooter } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Cart = () => {
  const { cartItems, removeProduct, setCartItems } = useCart();
  console.log(cartItems);

  const totalPrice = () => {
    return cartItems.reduce((price, item) => price + (item.price * item.quantity), 0)
  }

  const handleIncDec = (action, product) => {
    //to be imp
    let updatedCart = cartItems.map((item) => {
      if (item.id === product.id) {
        const updatedQuantity = action === "+" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    }).filter((item) => item.quantity > 0);


    setCartItems(updatedCart);
  }

  return (
    <div className=''>
      {
        cartItems.length > 0 ?
          (
            <>
              {cartItems?.map((item, index) => {
                return (
                  <div key={index} className='px-20 py-10 '>
                    <div className='flex justify-between items-center mt-[2vw] w-full h-[50vh]  bg-gray-100 p-3 rounded-lg'>
                      <div className=" flex  h-full w-[30vw] items-center justify-center gap-2">
                        <div className="imageWrapper bg-gray-300 rounded-lg overflow-hidden p-5 flex items-center justify-center w-[50vw] h-[60%]">
                          <img className='object-contain w-full h-full' src={`${item.image}`} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1 className='line-clamp-2 text-2xl font-semibold text-black'>{item.title}</h1>
                          <p className='text-justify text-2xl font-semibold'>${item.price}</p>
                        </div>
                      </div>
                      <div className='text-2xl'>
                        X {item.quantity}
                      </div>
                      <div className="counter w-[8vw] h-[5vh] bg-red-500 rounded-lg flex items-center justify-between p-3 text-white text-[4vw] overflow-hidden">
                        <button className='cursor-pointer' onClick={() => (handleIncDec("+", item))}>+</button>
                        |
                        <button className='cursor-pointer' onClick={() => (handleIncDec("-", item))}>-</button>
                      </div>

                      <div className="deleteWrapper text-[3vw] text-white cursor-pointer">
                        <ImBin onClick={() => (removeProduct(item))} />
                      </div>

                    </div>
                  </div>
                )
              })}

              <div className="lower bg-gray-400 flex gap-8 items-center justify-center h-[90vh]">
                <div className='bg-gray-600 shadow-2xs p-2 rounded-lg h-[40%]'>
                  <h1 className='text-xl text-black'>Name</h1>
                  <input type="text" className='p-1 space-y-2 border-2 outline-none rounded-lg' />

                  <h1 className='text-xl text-black mt-[1vw] border-b-1 pb-4'>Address</h1>
                  <div className='grid grid-cols-2 gap-8 mt-[2vw] '>
                    <div className='space-y-4'>
                      <div>
                        <label htmlFor="country" >Country: </label>
                        <input name='country' type="text" className='p-1 space-y-2 border-2 outline-none rounded-lg' />
                      </div>

                      <label htmlFor="city" >City: </label>
                      <input name='city' type="text" className='p-1 space-y-2 border-2 outline-none rounded-lg' />
                    </div>
                    <div className='space-y-4'>
                      <div>
                        <label htmlFor="state" >State: </label>
                        <input name='state' type="text" className='p-1 space-y-2 border-2 outline-none rounded-lg' />
                      </div>

                      <label htmlFor="postal" >PostalCode: </label>
                      <input name='postal' type="number" className='p-1 space-y-2 border-2 outline-none rounded-lg' style={{

                      }} />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-600 shadow-2xs p-2 rounded-lg h-[40%] w-[30%]">
                  <h1 className='text-2xl'>Billing Details</h1>
                  <div className='space-y-3 mt-3 border-t-1 pt-1 border-b-1 pb-1'>
                    <div className='flex justify-between text-2xl'>
                      <LuNotebookText />
                      {totalPrice()}
                    </div>
                    <div className='flex justify-between text-2xl'>
                      <GiScooter />
                      <p><span className='line-through pr-2'>FREE</span>$20</p>
                    </div>
                    <div className='flex justify-between text-2xl'>
                      <MdOutlineShoppingBag />
                      $5
                    </div>
                  </div>
                  <div className='flex justify-between text-2xl'>
                    <h1>Grand Total</h1>
                    <p>${totalPrice() + 5 + 20}</p>
                  </div>
                  <button className='bg-red-500 w-full p-2 rounded-lg cursor-pointer text-2xl mt-[4vw] active:bg-red-900 active:shadow-gray-600 active:shadow-2xs active:translate-y-1.5'>Proceed to checkout</button>
                </div>
              </div>

            </>
          ) : (
            <div className='flex justify-center items-center w-full h-full'>

              <div className='w-[85%]  object-cover'>
                <DotLottieReact
                  src="cartIsEmpty.lottie"
                  loop
                  autoplayh-full
                />
                <h2 className='text-center text-8xl text-red-600'>Cart is Empty !</h2>
              </div>
            </div>)
      }

    </div>
  )
}

export default Cart