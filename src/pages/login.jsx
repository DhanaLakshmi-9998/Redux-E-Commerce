import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const LoginPage = () => {
  return (
    <>
      <div className=" flex items-center justify-center h-screen w-full bg-gray-100">
        {/* auth card */}
        <div className=" flex overflow-hidden bg-white w-[50rem] rounded-xl shadow-lg  sm:h-[550px]  py-3 max-[768px]:flex-col-reverse max-[768px]:h-[800px] max-[768px]:mt-7">
          {/* left */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-col-reverse">
              <div className="flex flex-col items-center justify-between gap-5 ">
              <p className=" text-5xl font-semibold text-[#fd164c]"> Redux Store</p>
              <img
                src="https://i.postimg.cc/BZRNJ5tQ/Pngtree-shopping-on-mobile-5354478.png"
                alt=""
                className="w-[280px]"
              />
              </div>
              
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex items-center justify-center">
            <div className=" flex flex-col gap-8">
              <h3 className=" text-4xl font-semibold">Sign in</h3>
              <form action="submit" className=" flex flex-col gap-6">
                <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                  <MdEmail />
                  <input type="email" name="email" placeholder="Email" id="" />
                </div>
                <div className=" flex items-center space-x-4 border-b-[1px] border-black py-2">
                  <FaLock />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id=""
                  />
                </div>
              </form>
              <Link
                to="/"
                className=" bg-[#fd164c] w-full text-center py-2 px-4 text-white text-base rounded-md"
              >
                Login
              </Link>
              <div className=" flex flex-col space-y-1">
                
                <Link className=" text-sm font-medium hover:text-primary" to="/register">
                  New user? <span className="pl-1 underline text-[#fd164c]"> Sign up </span>
                </Link>
                <Link to="/" className="py-4 font-medium text-lg flex items-center justify-center">
              <IoMdHome/><span> Home</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
