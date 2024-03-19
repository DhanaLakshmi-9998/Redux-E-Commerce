import React, { useEffect, useState } from "react";
import { ImPriceTag } from "react-icons/im";
import { FaCartPlus } from "react-icons/fa";
import {  useParams } from "react-router-dom";
import { AddToCart, fetchSingleProduct,removeCart } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import "../index.css";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id, dispatch]);
  const { products, loading } = useSelector((state) => state.products);
  const product = products[0];
  const { carts } = useSelector((state) => state.products);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const handleAddToCart=()=> {
    dispatch(AddToCart(product.id));
    setIsAddedToCart(true);
    toast.isActive("Added to cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    
  }
  const removeFromCart=()=>{
    dispatch(removeCart(product.id));
    toast.error("Removed from cart", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  const isItemInCart = carts.some((item) => item.id === product.id);

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (product) {
      setImage(product.image);
    }
  }, [product]);
  return (
    <>
      <div className="mt-20 mb-40 max-[768px]:mt-0">
        {/* {loading && <p style={{ textAlign: "center" }}>loading...</p>} */}
        {products.length > 0 ? (
          <div className="max-[768px]:w-11/12 max-[768px]:gap-5 max-[768px]:flex-col w-10/12 m-auto flex justify-center gap-3 items-center">
            <div className="details-left flex flex-1 flex-col h-full overflow-hidden max-[768px]:w-60 w-80 gap-2">
              <div className="prod-image flex justify-center w-full" style={{border:"1px solid rgb(218,216,216"}}>
                <img
                  className="overflow-hidden object-contain w-86 max-[768px]:w-54 h-96 max-[768px]:p-2"
                  src={!loading && image}
                  alt="loading..."
                />
              </div>
            </div>

            <div className=" flex-1 px-4 py-0">
              <div className=" flex flex-col gap-1">
                <h3
                  style={{ color: "var(--sub-txt)" }}
                  className="head-category uppercase font-medium text-xs overflow-hidden whitespace-nowrap text-ellipsis m-0 "
                >
                  {product.category}
                </h3>
                <h2 className="font-medium text-2xl max-[768px]:text-lg">
                  {product && product.title}
                </h2>
                <p className="text-slate-800 max-[768px]:text-sm">
                  {product && product.description}
                </p>
                <p className="flex items-center gap-1 font-normal text-sm text-white bg-black p-2 w-14 rounded justify-center">
                  {" "}
                  {product.rating.rate.toFixed(1)}
                  <AiFillStar className="text-white bg-black" />
                </p>
                <h3 className="font-medium text-lg">
                  Price: ₹ {((product && product.price) * 70).toFixed(2)}
                </h3>

                <h4 className="mt-2 font-medium"> Available offers:</h4>

                <p className=" flex gap-1">
                  <span>
                    <ImPriceTag />
                  </span>
                  Bank Offer: 5% Cashback on Flipkart Axis Bank Card T&C
                </p>
                <p className=" flex gap-1">
                  <span>
                    <ImPriceTag />
                  </span>
                  Buy this product and get extra ₹500 off T&C
                </p>

                {!isItemInCart ? (
                  <button
                    className="flex w-fit my-5 mx-0 items-center px-3 py-2 text-white cursor-pointer  text-center bg-[#fd164c]"
                    onClick={handleAddToCart}
                  >
                    <span className="pr-1">
                      <FaCartPlus />
                    </span>
                    ADD TO CART
                  </button>
                ) : (
                  <button
                        onClick={removeFromCart}
                        className="flex w-fit my-5 mx-0 items-center px-3 py-2 text-white cursor-pointer text-center bg-[#fd164c]"
                      >
                        <span className="pr-1">
                        <MdDelete/>
                        {/* <MdDeleteOutline /> */}
                        </span>
                        REMOVE
                      </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p style={{ textAlign: "center" }}>Sorry! data not found</p>
        )}
      </div>
      
    </>
  );
};

export default ProductDetails;
