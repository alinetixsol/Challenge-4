import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "./Store";
import "../App.css";
import logo from "../assets/ph_framer-logo.svg";
import logo1 from "../assets/bi_cart.png";
import logo2 from "../assets/Vector.svg";
import "../index.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { Cart } = useStore((state) => ({
    Cart: state.Cart,
  }));

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="w-full h-auto px-[1rem] md:px-[8rem] py-[1rem]">
        <div className="max-w-full h-auto grid grid-cols-2 container">
          <div className="w-full h-auto col-span-1 flex items-center justify-start">
            <div className="flex items-center justify-center gap-[0.5rem]">
              <img className="w-[1.3rem]" src={logo} alt="Ecommerce Logo" />
              <div
                className="ecommerce"
                style={{ fontFamily: "Mono Sans, sans-serif" }}
              >
                Ecommerce App
              </div>
            </div>
          </div>
          <div className="w-full h-auto col-span-1 flex items-center justify-end">
            <div className="flex items-center justify-center gap-[1rem]">
              <div className="bg-black hover:bg-green-500 duration-1000 text-white px-[0.7rem] py-[0.2rem] rounded-full cursor-pointer hidden md:block text-[1.1rem]">
                Contact us
              </div>
              <div className="hidden md:block">
                <div className="text-[1.1rem] flex items-center justify-center bg-black text-white px-[0.7rem] py-[0.2rem] rounded-full gap-[0.3rem] cursor-pointer hover:bg-green-500 duration-1000">
                  <img src={logo1} alt="Bi Cart" />
                  <div>({Cart.length})</div>
                </div>
              </div>
              <motion.div
                className="bg-[#DDDDDD] px-[0.5rem] py-[0.5rem] rounded-full cursor-pointer hamberg hover:bg-green-400"
                onClick={toggleMenu}
                animate={{ scale: isMenuOpen ? 0.9 : 1 }}
                transition={{ duration: 2 }}
              >
                <img className="w-[1.07rem]" src={logo2} alt="Vector" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 hamberg1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-white p-8">
              <div
                className="cursor-pointer absolute top-4 right-4 text-[1.6rem]"
                onClick={closeMenu}
              >
                X
              </div>
              <div className="w-full h-auto grid grid-cols-2 mt-12 gap-4">
                <div className="w-full h-auto col-span-1 border border-white px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover: text-white duration-1000 shadow-2xl hover:text-white hover:border-green-600 hover:rounded-full">
                  <p className="text-white md:text-[4rem]">Our Work</p>
                </div>
                <div className="w-full h-auto col-span-1 border border-white px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover: text-white duration-1000 shadow-2xl hover:text-white hover:border-green-600 hover:rounded-full">
                  <p className="text-white md:text-[4rem]">About Us</p>
                </div>
                <div className="w-full h-auto col-span-1 border border-white px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover: text-white duration-1000 shadow-2xl hover:text-white hover:border-green-600 hover:rounded-full">
                  <p className="text-white md:text-[4rem]">Processes</p>
                </div>
                <div className="w-full h-auto col-span-1 border border-white px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover: text-white duration-1000 shadow-2xl hover:text-white hover:border-green-600 hover:rounded-full hover:duration-700">
                  <p className="text-white md:text-[4rem]">Blog</p>
                </div>
                <div className="w-full h-auto col-span-2 md:col-span-1 mt-5">
                  <div className="flex items-center justify-start gap-20">
                    <div>
                      <div className="text-white font-semibold text-[1.6rem] mb-5">
                        Our Offices
                      </div>
                      <div
                        className="text-white
     font-semibold mb-1"
                      >
                        Copenhagen
                      </div>
                      <div>1 Carlsberg Gate</div>
                      <div>1260, København, Denmark</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-[1.6rem] mb-5 invisible">
                        Our Offices
                      </div>
                      <div
                        className="text-white
     font-semibold mb-1"
                      >
                        Billund
                      </div>
                      <div>24 Lego Allé</div>
                      <div>7190, Billund, Denmark</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
