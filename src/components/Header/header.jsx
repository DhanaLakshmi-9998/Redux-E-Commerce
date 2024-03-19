import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../../redux/slices/productSlice";
import "../../index.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  //updated state is accessed by useSelector
  const { carts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuClick = (categoryname) => () => {
    setIsOpen(true);
    navigate(`/category/${categoryname}`);
    dispatch(fetchByCategory(categoryname));
  };

  return (
    <>
      <nav className="md:w-full px-0 py-1 sticky bg-white top-0 mx-auto shadow-lg md:px-20 md:py-2"  style={{zIndex:4}}>
        {/* logo and redux shopper for large devices */}
        <div className="flex m-auto justify-between items-center w-full h-12 md:hidden min-[280px]:hidden">
          <div className="flex-1 flex items-center ml-24">
            <img src={logo} alt="" className="w-14 rounded-full " />
            <Link to={"/"}>
              <h3 className="text-[#fd164c] text-2xl font-bold justify-center">
                REDUX SHOPPER
              </h3>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end mr-12">
            {/* login  */}

            <div>
              <Link className="py-0 px-3 mt-2 text-black uppercase text-md flex items-center justify-content-center gap-1" to={"/login"}>
                <FaUser/> Login
              </Link>
            </div>

            {/* cart icon */}
            <Link to={"/cart"}>
              <div className="block w-7 h-auto relative text-md cursor-pointer lg:mr-10">
                <span style={{backgroundColor:'var(--count)',borderRadius:'50%', zIndex:2}} className="w-4 h-4 text-center flex items-center justify-center font-bold p-1 text-xs absolute -top-1 right-0 text-white">
                  {carts.length}
                </span>
                <FaShoppingCart className="relative top-1 text-xl" style={{zIndex:1}} />
              </div>
            </Link>
          </div>
        </div>
        {/* for mobile and small devices */}

        <div className="wrapper-mob flex flex-1 justify-end justify-content-between items-center w-full m-auto md:flex max-[768px]:py-2 max-[768px]:pr-5 md:w-full">
          <div className="logo flex flex-1 items-center">
            <div
              className="menu-btn cursor-pointer hidden max-[768px]:flex max-[768px]:px-1 px-3"
              onClick={() => setIsOpen(false)}
            >
              <RiMenu2Fill size={20} />
            </div>
            <img className="w-14 rounded-full max-[768px]:hidden" src={logo} alt="" />
            <Link to="/">
              <h3 className=" heading text-2xl font-bold justify-center">
                REDUX
              </h3>
            </Link>
          </div>
          {/* login  */}
          <div className="flex flex-1 items-center justify-end">
            <div className="py-0 px-4 text-black text-uppercase flex items-center justify-content-center gap-1">
              <Link className="py-0 px-3 text-black uppercase flex items-center justify-center gap-1" to={"/login"}>
                <FaUser/> Login
              </Link>
            </div>

            {/* cart icon */}
            <Link to={"/cart"}>
              <div className="block w-7 h-7 relative text-xl">
                <span style={{backgroundColor:'var(--count)',borderRadius:'50%', zIndex:2}} className="rounded w-4 h-4 text-center font-bold text-xs items-center justify-center absolute block z-5 -top-1 right-0 text-white">
                  {carts.length}
                </span>
                <FaShoppingCart  className="relative top-1 text-xl" style={{zIndex:1}}/>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {/* categories */}
      <div className="p-4 max-w-full h-16 m-auto flex flex-col items-center justify-content-end max-[768px]:w-full ">
        <div
          className={
            isOpen
              ? "flex items-center max-[768px]:hidden"
              : "menu-container-view"
          }
        >
          <ul className="max-[768px]:flex  max-[768px]:flex-col max-[768px]:items-start max-[768px]:justify-start max-[768px]:w-80 max-[768px]:h-full max-[768px]:bg-white max-[768px]:p-2 max-[768px]:gap-7 max-[768px]:border-2 flex items-center justify-end gap-5">
            <div
              className="hidden max-[768px]:block cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <RxCross2 size={25}/>
            </div>
            <li className="p-2 text-lg font-medium text-gray-700 hover:text-rose-500"  onClick={handleMenuClick("men's clothing")}>
              <Link>Mens</Link>
            </li>
            {/* | */}
            <span className="max-[768px]:hidden">|</span>
            <li className="text-lg p-2 font-medium text-gray-700 hover:text-rose-500" onClick={handleMenuClick("women's clothing")}>
              <Link>Womens</Link>
            </li>
            {/* | */}
            <span className="max-[768px]:hidden">|</span>
            <li className="p-2 text-lg font-medium text-gray-700 hover:text-rose-500 " onClick={handleMenuClick("jewelery")}>
              <Link>jewlery</Link>
            </li>
            {/* | */}
            <span className="max-[768px]:hidden">|</span>
            <li className="text-lg font-medium text-gray-700 hover:text-rose-500 p-2" onClick={handleMenuClick("electronics")}>
              <Link>Electronics</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
