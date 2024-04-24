import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import Arqitel from "../assets/Arqitel.mp4";
import Cula from "../assets/CULA.mp4";
import YIR from "../assets/YIR.mp4";
import TTR from "../assets/TTR.mp4";

const Products = () => {
  var Products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {Products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="w-full h-full top-0 absolute pointer-events-none">
        <motion.div
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem`, x: "-50%" }}
          className="rounded-2xl w-[28rem] h-[23rem] absolute left-[46%] -translate-x-[50%] overflow-hidden"
        >
          <motion.video
            autoPlay
            loop
            muted
            src={Arqitel}
            duration
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full object-cover"
          ></motion.video>
          <motion.video
            autoPlay
            loop
            muted
            src={Cula}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full object-cover"
          ></motion.video>
          <motion.video
            autoPlay
            loop
            muted
            src={YIR}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full object-cover"
          ></motion.video>
          <motion.video
            autoPlay
            loop
            muted
            src={TTR}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full object-cover"
          ></motion.video>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
