/**
 * Functional component that displays a collection of products with filter options.
 * @returns JSX element displaying the collection of products with filter options.
 */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem'


const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter]= useState(false);

  const [filterProducts,setFilterProducts]= useState([]);
  // const [filterBy, setFilterBy] = useState({});
  // const [filterByPrice, setFilterByPrice] = useState({});
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  /**
   * Toggle the category based on the event target value.
   * If the category already includes the target value, remove it from the category.
   * If the category does not include the target value, add it to the category.
   * @param {Event} e - The event object containing the target value.
   * @returns None
   */
  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  /**
   * Toggles the subcategory based on the event target value.
   * If the subcategory already includes the target value, it removes it from the list.
   * If the subcategory does not include the target value, it adds it to the list.
   * @param {Event} e - The event object
   * @returns None
   */
  const toggleSubCategory =(e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev=> [...prev, e.target.value])
    }
  }

  /**
   * Applies filters to the products list based on selected categories and subcategories.
   * Updates the filtered products state with the filtered list.
   * @returns None
   */
  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }


  useEffect(()=>{
    applyFilter();
  },[category,subCategory])

  // useEffect(()=>{
  // console.log(subCategory);
  // },[subCategory])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Option */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdown_icon}/>
        </p>
      {/* Category Filter */}
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3 accent-black'type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3 accent-black'type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
          </p>
          <p className='flex gap-2'>
            <input className='w-3 accent-black'type='checkbox' value={'Kids'} onChange={toggleCategory}/>Kids
          </p>

        </div>
      </div>
      {/* Sub-Category Filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3 accent-black'type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3 accent-black'type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3 accent-black'type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
          </p>

        </div>
      </div>
      </div>
      {/* Right side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
      {/* Product Sort */}
            <select className='border border-gray-300 text-sm px-2'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
      {/* Map Product */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
                filterProducts.map((item,index)=>(
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default Collection
