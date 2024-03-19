import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,removeCart } from '../../redux/slices/cart-slice'


const ProductCard = ({productitem}) => {
  const dispatch=useDispatch()
  const {cart}=useSelector(state=>state);

  function handleAddtoCart(){
    dispatch(addToCart(productitem)) //dispatch will call the actions in slicer.
  }
  function handleRemoveCart(){
    dispatch(removeCart(productitem.id))
  
  }
  return (
    <div>
    <div className='group flex flex-col items-center border-2 border-slate-700 gap-3 p-4 mb-3 h-[360px] ml-5 rounded-xl'>
      <div className='h-[180px]'>
        <img src={productitem?.image} alt={productitem?.title} className='object-cover h-full w-full'/>
      </div>
      {/* title */}
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {productitem?.title}
        </h1>
      </div>
      {/* button */}
      <div className='flex items-center justify-center w-full mt-5'>
      <button onClick={cart.some(item=>item.id===productitem.id)? handleRemoveCart : handleAddtoCart} className="bg-slate-800 text-white border-2 rounded-lg p-4 ">
        {
          cart.some(item=>item.id===productitem.id)? "Remove" : "Add to cart"
        }
      </button>
      </div>
      
    </div>
    </div>
  )
}

export default ProductCard
