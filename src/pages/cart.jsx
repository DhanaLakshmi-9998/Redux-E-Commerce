import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { removeCart } from "../redux/slices/productSlice";
import { toast } from "react-toastify";

const Cart = () => {
  //updated state is accessed by useSelector
  const { carts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const totalPrice = carts.reduce((accum, current) => {
    return accum + current.price;
  }, 0);

  const discountAmount = (totalPrice * 0.1).toFixed(2);
  const finalAmount = (totalPrice - discountAmount).toFixed(2);

  return (
    <>
      {/* navbar */}
      <div className=" w-full m-auto mt-14 mb-20 flex gap-5 bg-gray-100 p-3 min-h-80 max-[768px]:flex-col-reverse sm:p-2 sm:mt-10 max-[768px]:mt-0">
        <div className="md:w-[400px] flex-1 flex flex-col gap-2 max-[768px]:w-auto max-[768px]:h-auto">
          {carts && Object.keys(carts).length > 0 ? (
            <>
              {carts.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" p-3
                  border-[1px] flex items-center md:w-full bg-white transition-all hover:shadow-lg"
                  >
                    <Link to={`/products/${item.id}`}>
                      <img
                        className="w-[120px] h-[150px] m-auto object-contain mr-1 max-[768px]:w-[100px]"
                        src={item.image}
                        alt=""
                      />
                    </Link>
                    {/* title */}
                    <div className=" w-full flex items-center justify-around gap-2 py-0 px-2 max-[768px]:flex-col">
                      <div className=" flex-2 flex flex-col md:w-[280px] max-[768px]:w-[60px] max-[768px]:truncate gap-2">
                        <p className="md:w-full text-sm font-medium color-black overflow-hidden sm:overflow-hidden whitespace-nowrap overflow-ellipsis  ">{item.title}</p>
                      </div>
                      {/*  price*/}
                      <div>
                        <h5 className="text-center font-medium text-[14px]">
                          ₹{(item.price * 70).toFixed(2)}
                        </h5>
                      </div>
                      <button
                        onClick={() => {
                          dispatch(removeCart(item.id));
                          toast.error("Removed from cart", {
                            position: toast.POSITION.BOTTOM_RIGHT,
                          });
                        }}
                        className=" m-2 flex items-center justify-center text-white bg-[#fd164c]  w-[28px] h-[28px] text-center rounded-2xl cursor-pointer text-lg"
                      >
                        <MdDeleteOutline />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="empty m-auto flex flex-col items-center justify-center ">
              <p className="text-[20px] m-3">Your cart is empty</p>
              <Link
                to="/"
                className="text-black underline flex items-center gap-1"
              >
                <BiArrowBack /> Back to shopping
              </Link>
            </div>
          )}
        </div>
        {/* total price */}
        <div className="cart-total-price flex-2 max-[768px]:w-auto bg-white md:sticky top-20 right-1 p-3 w-[300px] border h-[200px] ">
          <h4 className="uppercase text-lg font-medium">Price Details</h4>
          <div className="price-count flex flex-col mt-2">
            <p>
              price({carts.length} items) :{" "}
              <span>₹ {(totalPrice * 70).toFixed(2)}</span>
            </p>
            <p>
              discount : <span> 10%</span>
            </p>

            <h4 className="font-medium mt-2 ">
              Final Price : <span>₹ {(finalAmount * 70).toFixed(2)}</span>
            </h4>
            <button
              onClick={() => alert("Your order confirmed.")}
              className="order-btn mt-4 bottom-3 p-2 font-medium text-[17px] text-white cursor-pointer uppercase bg-[#fd164c]"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
