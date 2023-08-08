import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsFillCloudDrizzleFill, BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai";
import { SiFlutter, SiAboutdotme, SiAdobeacrobatreader } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import Link from "next/link";

const Mainpage = ({
  setprojectmodal,
  fullscreen,
  setprojectmodalanimation,
  openFullscreen,
  setaboutmodal,
  setaboutmodalanimation,
  setcontactmodal,
  setcontactmodalanimation,
}) => {
  const [weather,setweather] = useState([1,2,3,4,5,6])
  const [location,setlocation] = useState("Banaskantha")
  const [temprature,settemprature] = useState("28°")
  const [hlvar,sethlvar] = useState("H: 31° L:26°")
  return (
    <div className="items-center justify-center text-white selection:bg-none">
      <div className="h-40 mx-5 mt-5 xs:hidden">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -50,
            opacity: 0,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="h-full p-3 space-y-1 rounded-lg bg-gray-800/40 modal-backdrop"
        >
          <div className="flex items-center justify-between space-x-1">
            <div className="flex items-center space-x-1">
              <h1 className="text-white">{location}</h1>
              <CiLocationArrow1 color="#fff" size={15} />
            </div>
            <div className="">
              <BsFillCloudDrizzleFill className="mx-2" color="#fff" size={20} />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-1">
            <div className="flex items-center space-x-1">
              <h1 className="text-3xl font-semibold text-white">{temprature}</h1>
            </div>
            <div className="">
              <h1 className="text-sm text-end">Patchy rain possible</h1>
              <h1 className="text-sm text-end">{hlvar}</h1>
            </div>
          </div>
          <div className="flex items-center justify-between ">
          {weather.map((item)=>{
            return <div key={item} className="items-center justify-center space-y-1">
              <h1 className="text-sm text-center">{18+item}</h1>
              <BsFillCloudDrizzleFill
                className="mx-auto"
                color="#fff"
                size={20}
              />
              <h1 className="text-sm text-center">{26+item}°</h1>
            </div>
          })}
          </div>
        </motion.div>
      </div>
      <div className="grid items-center grid-cols-3 mx-5 mt-5 space-y-4 sm:mx-10 xs:items-start xs:flex-col xs:flex">
        <div
          onClick={() => {
            setprojectmodal(true);
            setprojectmodalanimation(true);
          }}
          className="flex flex-col items-center justify-center w-16 mx-auto mt-5 space-y-1 cursor-pointer xs:mt-0 xs:mx-0"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-slate-400 from-white">
            <SiFlutter className="rounded-lg" size={36} color="#33ccff" />
          </div>
          <h1 className="inline-block text-sm text-center text-white">
            Projects
          </h1>
        </div>
        <div
          className="flex flex-col items-center justify-center w-16 mx-auto space-y-1 cursor-pointer xs:mx-0"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-red-700 from-red-400">
            <SiAdobeacrobatreader
              className="rounded-lg"
              size={36}
              color="#bdc3c7"
            />
          </div>
          <h1 className="inline-block text-sm text-center text-white">
            Resume
          </h1>
        </div>
       <Link href={"https://github.com/Kailash8799"} target="_blank"><div className="flex flex-col items-center justify-center w-16 mx-auto cursor-pointer xs:mx-0">
          <FaGithubSquare className="rounded-lg" size={60} color="#2E2E2E" />
          <h1 className="inline-block text-sm text-center text-white">
            Github
          </h1>
        </div></Link> 
        <Link href={"https://www.linkedin.com/in/thekailash8799/"} target="_blank"><div className="flex flex-col items-center justify-center w-16 mx-auto space-y-1 cursor-pointer xs:mx-0">
          <BsLinkedin className="rounded-lg " size={52} color="#4169E1" />
          <h1 className="inline-block text-sm text-center text-white">
            Linkedin
          </h1>
        </div></Link>
        <div
          onClick={() => {
            setaboutmodal(true);
            setaboutmodalanimation(true);
          }}
          className="flex flex-col items-center justify-center w-16 mx-auto space-y-1 cursor-pointer xs:hidden xs:mx-0"
        >
          <div
            onClick={() => {}}
            className="w-[55px]  rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-pink-400 from-orange-400"
          >
            <SiAboutdotme className="rounded-lg" size={36} color="#33ccff" />
          </div>
          <h1 className="inline-block text-sm text-center text-white">About</h1>
        </div>
        <div
          onClick={() => {
            setcontactmodal(true);
            setcontactmodalanimation(true);
          }}
          className="flex flex-col items-center justify-center w-16 mx-auto space-y-1 cursor-pointer xs:hidden xs:mx-0"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-green-300 from-green-500">
            <RiContactsFill className="rounded-lg" size={30} color="#fff" />
          </div>
          <h1 className="inline-block text-sm text-center text-white">
            Contact
          </h1>
        </div>
        <div
          onClick={() => {
            openFullscreen();
          }}
          className="flex flex-col items-center justify-center w-16 mx-auto space-y-1 cursor-pointer xs:mx-0"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-slate-400 from-white">
            {fullscreen ? (
              <AiOutlineShrink
                className="rotate-90 rounded-lg"
                size={36}
                color="#33ccff"
              />
            ) : (
              <AiOutlineExpandAlt
                className="rotate-90 rounded-lg"
                size={36}
                color="#33ccff"
              />
            )}
          </div>
          <h1 className="inline-block text-sm text-center text-white">
            Fullscreen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
