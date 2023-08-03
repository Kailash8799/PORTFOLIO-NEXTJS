import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BottomItem = ({ img, size, tooltipname }) => {
  const [tooltip, settooltip] = useState(false);
  return (
    <div>
      <div className="relative gooey-selected">
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="absolute py-2 text-gray-300 rounded-lg w-28 -left-8 -top-14 bg-gray-950/30"
          >
            {tooltipname}
          </motion.div>
        )}
        <Image
          src={img}
          loading="eager"
          className="transition-all cursor-pointer gooey-selected focus:bg-none hover:bg-none hover:scale-125"
          alt="Compass Image"
          onMouseEnter={() => {
            settooltip(true);
          }}
          onMouseOut={() => {
            settooltip(false);
          }}
          width={size}
          height={size}
        />
      </div>
    </div>
  );
};

export default BottomItem;
