import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { motion } from "framer-motion";

const TopNavbar = ({modal, setModal}) => {
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let month_names_short = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [day, setday] = useState(`${weekday[new Date().getDay()]}`);
  const [month, setMonth] = useState(
    `${month_names_short[new Date().getMonth()]}`
  );
  const [date, setDate] = useState(new Date().getDate());
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-GB", { hour12: true, timeStyle: "short" })
  );

  setInterval(() => {
    setday(`${weekday[new Date().getDay()]}`);
    setMonth(`${month_names_short[new Date().getMonth()]}`);
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().getDate());
  }, 60000);
  return (
    <div className="sticky top-0 items-center hidden py-1 xs:block bg-slate-700/30">
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center justify-center space-x-3">
          <div className="relative items-center cursor-pointer">
            <AiFillApple size={20} onClick={(e)=>{
              e.stopPropagation()
              setModal(!modal)}} color="#fff" />
            {modal && (
              <motion.div
                onClick={(e)=>{e.stopPropagation()}}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                style={{zIndex:30}}
                className="absolute w-28 modal-backdrop rounded-md -left-1 bg-zinc-600/30 border-[1px] px-4 space-y-2 border-gray-600/30 top-7 h-24 items-center justify-center"
              >
                <h1 className="mt-2 text-sm text-white">About me</h1>
                <h1 className="text-sm text-white">Contact me</h1>
                <h1 className="text-sm text-white">My projects</h1>
              </motion.div>
            )}
          </div>
          <div className="flex items-center cursor-pointer">
            <h1 className="font-medium text-white">Kailash</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="cursor-pointer">
              <h1 className="text-sm font-normal text-white">About Me</h1>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-sm font-normal text-white">Contact</h1>
            </div>
            <div className="cursor-pointer">
              <h1 className="text-sm font-normal text-white">My Projects</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="px-1 py-0 text-sm text-gray-500 bg-white rounded-md cursor-pointer">
              {"EN"}
            </h1>
          </div>
          <div className="items-center hidden sm:block">
            <h1 className="text-sm font-medium text-white">
              {day}, {month} {date} {time}{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
