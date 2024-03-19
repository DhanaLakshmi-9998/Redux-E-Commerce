import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import ProductCard from '../components/productCard/productCard';
import { fetchByCategory } from '../redux/slices/productSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import '../index.css'

const CategoryResults = () => {
  
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchByCategory(category));
  }, [category, dispatch]);
  return (
    <div className="search-container w-4/5 my-20 mx-auto mt-9">
      <h3 className="head text-xl my-4 mx-0 font-medium uppercase">{category}
      </h3>
      <section className="search-section flex justify-center items-center flex-wrap gap-5 mt-10 py-6 px-0 bg-gray-100">
        {loading && <p style={{ textAlign: "center" }}>loading...</p>}
        {!loading && (!products || !products.length) ? (
          <>
            <div className="empty m-auto flex flex-col items-center justify-center h-[300px]">
              <p style={{color:"var(--cart-btn)"}} className='text-xl font-medium m-3'>No products found</p>
              <Link to="/" className="text-black flex items-center gap-1 underline">
                <BiArrowBack /> Back to home
              </Link>
            </div>{" "}
          </>
        ) : (
          <ProductCard products={products} />
        )}
      </section>
    </div>
  )
}

export default CategoryResults
