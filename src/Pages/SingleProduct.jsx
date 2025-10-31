import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarRating from '../Components/StarRating';
import { useCart } from '../Context/CartData';

const SingleProduct = () => {
    const params = useParams();
    const [singleProd, setSingleProd] = useState({});
    const [quantity, setQuantity] = useState(1);
    const {addToCart, cartItems} = useCart();

    console.log("cartItems", cartItems);

    const getSingleProduct = async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
            setSingleProd(response.data);

        } catch (error) {
            console.error("Error ", error);
        }
    } 

    console.log(singleProd);

    useEffect(() => {
        getSingleProduct();
    }, [])


  return (
    <div className='w-full h-[90vh] flex items-center justify-center p-5'>
        <div className="imageWrapper w-[50%] h-full flex items-center justify-center">
            <img className='w-full h-full object-contain' src={`${singleProd.image}`} alt="" />
        </div>
        <div className="rightDiv w-[60%] h-full px-10">
            <div className="title ">
                <h1 className=' text-5xl text-black font-bold leading-[3vw]' >{singleProd.title}</h1>
            </div>
            <div className="mt-[1.4vw] border-b-1 border-[#E5E4E2]">
                <p className='text-1.2xl font-semibold'>Category: <span className='text-black bg-gray-400 rounded-lg p-2 shadow-gray-800 shadow-2xs'>{singleProd.category}</span></p>
                <div className="rating mt-[1vw] flex gap-3">
                    <StarRating ratings={singleProd.rating?.rate} />
                    {singleProd.rating?.rate} star rating
                </div>
                <p className='text-black mt-[1vw] text-[1vw] flex items-center gap-2'><span className='text-2xl font-semibold'>{singleProd.rating?.count}</span> currently in stock !</p> 
            </div>
            <div className="prodDesc">
                <p className='text-justify text-[1.4vw] pt-6'>
                    {singleProd.description}
                </p>
                <div className="quantity mt-[2vw]">
                    <label htmlFor="input" className='text-2xl font-medium'>Quantity: </label>
                    <input type="number"  min={1} max={singleProd.rating?.count} className='border-1 rounded-lg outline-none p-2' value={quantity}   onChange={(e) => ((e.target.value >= 1 && e.target.value <= singleProd.rating?.count) && setQuantity(e.target.value))} />
                </div>

                <div className="price flex justify-between mt-[1.4vw] items-center">
                    <h1 className='text-[1.5vw] font-bold'>${singleProd.price}</h1>
                    <button className='p-2 bg-green-400 rounded-lg text-[1vw] cursor-pointer' onClick={() => (addToCart(singleProd))}>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct