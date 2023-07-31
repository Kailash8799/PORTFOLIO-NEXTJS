import Image from "next/image";
import React, { useState } from "react";

const BottomItem = ({ img, size, tooltipname }) => {
  const [tooltip, settooltip] = useState(false);
  return (
    <div>
      <div className="relative">
        {tooltip && (
          <div className="absolute py-2 text-gray-300 rounded-lg w-28 -left-8 -top-14 bg-gray-950/30">
            {tooltipname}
          </div>
        )}
        <Image
          src={img}
          className="transition-all focus:bg-none hover:bg-none cursor-pointer hover:scale-125"
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
