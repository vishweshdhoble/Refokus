import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para ,hover="hover:bg-[#3E3E46]" ,bg}) => {
  return (
    <motion.div whileHover={{padding:"25px"}} className={`${bg} transition p-5 rounded-xl ${hover} ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-md">Get in Touch</h3>
          <IoIosArrowRoundForward className="text-2xl" />
        </div>
        <h1 className="text-3xl font-medium mt-6">Whatever heading</h1>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border-zinc-50 border-[1px] text-lg mt-5">
              Contact us
            </button>
          </>
        )}
        {para === true ? (
          <>
            <p className=" text-md text-zinc-400 w-1/2">
              From Brands to Websites, our work speaks for itself.
            </p>
          </>
        ) : null}
      </div>
    </motion.div>
  );
};

export default Card;
