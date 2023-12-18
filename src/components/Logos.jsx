import React from "react";
import { motion } from "framer-motion";
import A1 from "../assets/A1.svg";
import A2 from "../assets/A2.svg";
import A3 from "../assets/A3.svg";
import A4 from "../assets/A4.svg";
import A5 from "../assets/A5.svg";
import A6 from "../assets/A6.svg";
import A7 from "../assets/A7.svg";
import A8 from "../assets/A8.svg";

export default function Logos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const logosVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1 } },
  };

  return (
    <div className="w-full h-auto px-[0.6rem]">
      <motion.div
        className="max-w-full h-auto bg-black grid grid-cols-1 container rounded-2xl py-8 md:py-16 md:px-[8rem] px-[0.2rem] hover:bg-green-500 duration-1000 hover:shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:block hidden">
          <div className="w-full h-auto col-span-1 flex items-center justify-start px-[0.5rem] mb-10">
            <div className="flex items-center gap-5">
              <div className="text-white">
                We’ve worked with hundreds of amazing people
              </div>
              <hr className="text-white w-[687px]" />
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <div className="w-full h-auto col-span-1 flex items-center justify-center gap-6 px-[0.5rem] mb-5">
            <hr className="text-white w-[8rem]" />
            <div className="text-white text-center">
              We’ve worked with hundreds of amazing people
            </div>
            <hr className="text-white w-[8rem]" />
          </div>
        </div>
        <div className="w-full h-auto col-span-1 px-[0.5rem]">
          <motion.div
            className="w-full h-auto flex items-center justify-between flex-wrap mb-5"
            variants={logosVariants}
          >
            <motion.img
              className="w-[10rem]"
              src={A1}
              alt="A1"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              className="w-[10rem]"
              src={A2}
              alt="A2"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              className="w-[10rem]"
              src={A3}
              alt="A3"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              className="w-[10rem]"
              src={A4}
              alt="A4"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
          <motion.div
            className="w-full h-auto flex items-center justify-between flex-wrap"
            variants={logosVariants}
          >
            <motion.img
              className="w-[10rem]"
              src={A5}
              alt="A5"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              className="w-[10rem]"
              src={A6}
              alt="A6"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              className="w-[10rem]"
              src={A7}
              alt="A7"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              className="w-[10rem]"
              src={A8}
              alt="A8"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
