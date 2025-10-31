import React, { useState } from 'react'
import { useData } from '../Context/Data'

const FilterSidebar = ({rate, setRate, price, setPrice, checkedCategory, setCheckedCategory, handleCategoryChange, search, handleSearchChange}) => {
    const { data, getProducts, getCategories } = useData();
    // const [isChecked, setIsChecked] = useState(false);
    // const toggleCheck = () => (setIsChecked(~isChecked))

    const category = getCategories(data, "category");

    return (
        <div className='w-[20vw] h-full bg-gray-500 rounded-lg' >
            <div className=" w-full flex items-center justify-center text-3xl font-bold p-5 " style={{ borderBottomColor: "#3B3B3B", borderBottomWidth: 2 }}>
                Filter Products
            </div>
            <div className="options p-2 w-full">
                <input type="text" placeholder='Search...' value={search} onChange={(e) => (handleSearchChange(e))} className='p-2  outline-none w-full bg-zinc-800' style={{ borderWidth: 2, borderColor: 'black' }} />
                {/**Category based */}

                <div className="category">
                    <h2 className='text-3xl font-bold mt-3 ' style={{ color: 'black' }}>
                        Category
                    </h2>
                    {/* <input type="checkbox" value={"ALL"} name='ALL'/> */}
                    <div className='mt-5'>
                        {
                            category?.map((item, index) => {
                                return (
                                    <div key={index} className='flex gap-3 text-2xl pt-3'>
                                        <input type='checkbox' className='w-[1vw] accent-red-500' checked={item === checkedCategory}   onChange={() => (handleCategoryChange(item))}/>
                                        <button className='cursor-pointer'>{item}</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* rating based */}
                <div className="rating mt-8">
                    <h2 className='text-3xl font-bold mt-3 ' style={{ color: 'black' }}>
                        Rating 1 - 5
                    </h2>
                    {/* <input type="checkbox" value={"ALL"} name='ALL'/> */}
                    <div className='mt-5'>
                        <input type="range" min={1} max={5} step={.5} className='w-full' value={rate} onChange={(e) => (setRate(e.target.value))} />
                        <h3 className='text-1.5xl'>Greater than {rate}</h3>
                    </div>
                </div>

                {/* price based */}
                <div className="pricing mt-8">
                    <h2 className='text-3xl font-bold mt-3 ' style={{ color: 'black' }}>
                        Price $0 - $1000
                    </h2>
                    {/* <input type="checkbox" value={"ALL"} name='ALL'/> */}
                    <div className='mt-5'>
                        <input type="range" min={0} max={1000} step={.5} className='w-full' value={price} onChange={(e) => (setPrice(e.target.value))} />
                        <h3 className='text-1.5xl'>Price upto ${price}</h3>
                    </div>
                </div>

                <div className="buttonWrapper mt-[4vh]">
                        <button className='bg-red-600 p-2 rounded-lg cursor-pointer text-1xl' onClick={() => (setRate(1), setPrice(1000), setCheckedCategory("men's clothing")  )}>Reset Filter</button>
                </div>                        

            </div>
        </div>
    )
}

export default FilterSidebar