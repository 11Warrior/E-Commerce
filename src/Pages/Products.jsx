import React, { useEffect, useState } from 'react'
import { useData } from '../Context/Data'
import FilterSidebar from '../Components/FilterSidebar';
import ProductCard from '../Components/ProductCard';

const Products = () => {
  const { data, getProducts } = useData();
  // console.log(data);
  const [rate, setRate] = useState(1);
  const [price, setPrice] = useState(1000);
  const [checkedCategory, setCheckedCategory] = useState("men's clothing");
  const [search, setSearch] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const handleCategoryChange = (category) => {
    setCheckedCategory(prev => prev === category ? null : category);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length > 0) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }

  const filterdData = data.filter((item) => {

    const filteredCat = checkedCategory ? (item.category === checkedCategory) : true;
    const filteredRate = item.rating?.rate >= rate;
    const filterdPrice = item.price <= price;
    // const filteredSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return filteredCat && filteredRate && filterdPrice;
  }
  )

  const filteredSearchData = data.filter((item) => (item.title.toLowerCase().includes(search.toLowerCase())));

  // console.log(filterdData);

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='w-full h-full '>
      {
        data.length > 0 ?
          (
            <div className='flex gap-[5vw] w-full h-full '>
              <div className=' py-5 px-5'>
                <FilterSidebar rate={rate} setRate={setRate} price={price} setPrice={setPrice} checkedCategory={checkedCategory} setCheckedCategory={setCheckedCategory} handleCategoryChange={handleCategoryChange} search={search} handleSearchChange={handleSearchChange} />
              </div>
              <div className=' flex flex-wrap gap-10 w-full  h-[90vh] overflow-y-scroll py-5 px-5'>
                {
                  (isSearching ? filteredSearchData : filterdData)?.map((item, index) => (
                    <div key={index}>
                      <ProductCard item={item} />
                    </div>
                  ))
                }
              </div>
            </div>
          )
          : (<div>
            No Products Found
          </div>)
      }
    </div>
  )
}

export default Products