import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesurls,direction }) => {

  return (
    <div className="flex w-full overflow-hidden ">
      <motion.div initial={{x:direction==="left"? "0" : "-100%"}} animate={{x:direction==="left"? "-100%" : "0"}} transition={{ease:"linear",duration: 35,repeat:Infinity}} className="flex flex-shrink-0 gap-32 py-10 pr-32">
        {imagesurls.map((url, i) => (
          <img key={i} src={url}/>
        ))}
      </motion.div>
      <motion.div initial={{x:direction==="left"? "0" : "-100%"}} animate={{x:direction==="left"? "-100%" : "0"}} transition={{ease:"linear",duration: 35,repeat:Infinity}} className="flex flex-shrink-0 gap-32 py-10 pr-32">
        {imagesurls.map((url, i) => (
          <img key={i} src={url}/>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
