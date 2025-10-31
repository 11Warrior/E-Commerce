import React, { useEffect } from 'react'

const Category = ({category}) => {
    // console.log("category", category);
    
    return (
        <div className='categoryData w-full  h-[4vh] flex items-center justify-center gap-[10vw] pb-12'>
            {
                category?.map((currCat, index) => {
                    return (
                        <div key={index} className='bg-green-300 p-3 rounded-lg cursor-pointer '>
                            {currCat}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Category