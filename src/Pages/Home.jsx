import React, { useEffect } from 'react'
import Carousal from '../Components/Carousal';
import Category from '../Components/Category';
import { useData } from '../Context/Data';

const Home = () => {
  const { data, getProducts, getCategories } = useData();

  // const categories = []

  const category = getCategories(data, "category");

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='w-full h-full overflow-hidden'>
      <Carousal />
      <Category category={category} />
    </div>
  )
}

export default Home