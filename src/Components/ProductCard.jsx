import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartData';

const ProductCard = ({ item }) => {
    const navigate = useNavigate();
    const {addToCart} = useCart();

    return (
        <div className='w-[20vw] h-[60vh] bg-gray-800 rounded-lg p-7'>
            <div className="title w-full  line-clamp-1 text-2xl text-black">{item.title}</div>
            <div className="imageWrapper  h-[34vh] overflow-hidden flex items-center justify-center ">
                <img className='object-contain  w-[50%] hover:scale-120 transition-all cursor-pointer' style={{ objectFit: 'contain' }} src={`${item.image}`} onClick={() => (navigate(`/products/${item.id}`))} alt="" />
            </div>
            <div className="description line-clamp-4 text-justify">
                <p>{item.description}</p>
            </div>

            <div className="price flex justify-between items-center mt-7">
                <div className='text-2xl font-bold text-black' ><span>$</span><span className='text-black'>{item.price}</span></div>
                <button className='bg-yellow-50 rounded-lg p-3  cursor-pointer active:translate-y-2  active:bg-zinc-800 active:shadow-2xl active:shadow-gray-500' style={{color: 'black'}} onClick={() => (addToCart(item))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard