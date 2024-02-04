import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const Heading = () => {
  const [count, setCount] = useState(0);
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  useEffect(() => {
    setCount(cartItems?.length);
  }, [cartItems?.length]);

  return (
    <div className="bg-white pt-4 pb-7 md:pt-[20px] md:pb-[40px] lg:pt-[34px] lg:pb-[80px]">
      <header className="container flex items-center justify-between">
        <div className="flex items-center gap-[30px]">
          <Link to="/" className="flex items-center gap-[10px]">
            <img className="w-6 h-6" src="/images/logo.png" alt="logo" />
            <h1 className="text-heading text-xl font-medium">pizza</h1>
          </Link>
          <div className="flex items-center gap-[10px]">
            <div className="bg-green-500 w-3 h-3 rounded-full" />
            <div className="flex items-center gap-2">
              <h1 className="text-heading">Dhaka</h1>
              <FaAngleDown />
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex items-center gap-[30px]">
            <li>
              <Link
                to="/"
                className="text-lg hover:text-primary transition-all duration-200"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-lg hover:text-primary transition-all duration-200"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-lg hover:text-primary transition-all duration-200"
              >
                Login
              </Link>
            </li>
            <li className="relative">
              <Link to="/cart">
                <FaBasketShopping className="text-2xl hover:text-primary transition-all duration-200" />
              </Link>
              {cartItems?.length > 0 && (
                <div className="absolute bottom-3 w-5 h-5 flex items-center justify-center left-4 bg-primary rounded-full">
                  <span className="text-white text-xs font-extrabold ">
                    {count}
                  </span>
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[10px]">
          <IoCall className="text-2xl" />
          <h1 className="font-bold">+91 9800 098 998</h1>
        </div>
      </header>
    </div>
  );
};

export default Heading;
