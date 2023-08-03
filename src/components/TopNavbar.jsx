import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";

const TopNavbar = () => {
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
    <div className="sticky top-0 items-center py-1 bg-slate-700/30">
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center justify-center space-x-3">
          <div className="items-center cursor-pointer">
            <AiFillApple size={20} color="#fff" />
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
          <div className="items-center">
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
