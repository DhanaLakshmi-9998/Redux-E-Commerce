import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {
  return (
    <>
       {
          products.map(item=>{
            return(
                <div className='max-h-[400px] max-[768px]:w-[200px] w-64 bg-white border-2 hover:shadow-xl transition-all ease mt-5' key={`${item.id}`}>
              <Link className='text-black' to={`/products/${item.id}`}>
                <div className='w-full h-56 overflow-hidden p-1'>
                  <img className='w-full h-full object-contain ' src={item.image} alt=''/>
                </div>
                <div className='p-2 flex flex-col justify-start'>
                  <h3 className='text-[#fd164c] uppercase overflow-hidden whitespace-nowrap overflow-ellipsis m-0 ' >{item.category}</h3>
                  <p className='w-full text-sm font-medium color-black overflow-hidden sm:overflow-hidden whitespace-nowrap overflow-ellipsis '>{item.title}</p>
                  <h4 className='text-sm font-medium'>₹{((item.price)*70).toFixed(2)}</h4>
                </div>
              </Link>
            </div>
                
            )
          }
            )
        }
    </>
  )
}

export default ProductCard
