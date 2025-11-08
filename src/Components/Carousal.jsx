import React, { useEffect } from 'react'
import Slider from "react-slick";
import { useData } from '../Context/Data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Category';
import { useCart } from '../Context/CartData';

const Carousal = () => {
    const { data, getProducts } = useData();
    const {addToCart} = useCart();

    useEffect(() => {
        getProducts();
    }, [])

    // console.log(data);
    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 1500,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='pt-10 rounded-lg '>
            <Slider {...settings}>

                {
                    data?.slice(0, 7)?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex  w-full h-[90vh] text-black">
                                    <div className="imageWrapper h-full w-[50%] flex items-center justify-center  ">
                                        <img
                                            className="w-[40%] h-full object-contain hover:scale-130 transition-all cursor-pointer duration-200"
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-[60%] desc  h-full flex p-3 justify-center items-center">
                                        {/* Description */}
                                        <div>
                                            <div className="title w-[80%] pb-2 inline-block  border-b-2 border-white line-clamp-2">
                                                <h1 className='text-[2vw]  text-black*'>{item.title}</h1>
                                            </div>

                                            <div className="text text-[1vw]  w-[80%] text-justify leading-[1.5vw] mt-7">
                                                {item.description}
                                            </div>
                                            <div className="shop">
                                                <button className='rounded-lg  mt-[4vw] cursor-pointer text-black  bg-zinc-700  p-3 active:translate-y-[4px] active:bg-zinc-800 active:shadow-2xl active:shadow-gray-500' onClick={() => (addToCart(item))}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <Category />
        </div>
    )
}

export default Carousal