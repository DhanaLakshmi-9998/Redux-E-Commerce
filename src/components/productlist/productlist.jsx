import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchByCategory } from '../../redux/slices/productSlice';
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import ProductCard from '../productCard/productCard';
const ProductList = () => {
  const [items,setItems]=useState([]);
  const [category,setCategory]=useState("");
  const dispatch=useDispatch();
  const {products,loading}=useSelector((state)=>state.products)
  const handleOnClick=(value)=>{
    setCategory(value);
  }
  useEffect(() => {
    const fetchProducts =async () => {
      let products;

      if (category) {
        products =await dispatch(fetchByCategory(category));
      } else {
        products =await dispatch(fetchAllProducts());
      }

      setItems(products);
    };
      // fetchProducts().then(res=>console.log(res.data))
     fetchProducts().catch(console.error);
  }, [ category]);
 

  return (
    <div id='prod-section' className='w-10/12 my-20 mx-auto'>
      <h3 className='font-medium uppercase my-4 mx-0 text-2xl'>{
        category? `${category.toUpperCase()}`:'All Products'
        }</h3>
        <div className='hidden gap-1'>
          <button className='font-medium p-2 cursor-pointer' onClick={()=>handleOnClick("")}>
            All
          </button>
          <button className='font-medium p-2 cursor-pointer' onClick={()=>handleOnClick("men's clothing")}>
            Mens
          </button>
          <button className='font-medium p-2 cursor-pointer' onClick={()=>handleOnClick("women's clothing")}>
            Womens
          </button>
          <button className='font-medium p-2 cursor-pointer' onClick={()=>handleOnClick("jewelery")}>
            Jewelery
          </button>
          <button className='font-medium p-2 cursor-pointer' onClick={()=>handleOnClick("electronics")}>
            Electronics
          </button>
        </div>
        <section className="flex justify-center items-center flex-wrap gap-8 mt-10 p-5 bg-slate-100 border-2">
        {loading && <div className='min-h-screen w-full flex justify-center items-center '>
           <Circles height='120' color='rgb(210,20,20)' width={'120'} visible={'true'}/>
         </div>}
        {!loading && (!products || !products.length) ? (
          <>
            <div>
              <p>No products found</p>
              <Link to="/">
                <BiArrowBack /> Back to home
              </Link>
            </div>
          </>
        ) : (
          <ProductCard products={products} />
        )}
      </section>
       
    </div>
  )
}

export default ProductList
