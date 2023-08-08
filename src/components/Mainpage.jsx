import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiFlutter,SiAdobeacrobatreader } from "react-icons/si";

const Mainpage = ({setprojectmodal,setprojectmodalanimation}) => {
  return (
    <div className="text-white">
      <div className="sm:mx-10 space-y-4 mx-5 mt-5 flex flex-col flex-wrap">
        <div onClick={()=>{
          setprojectmodal(true)
          setprojectmodalanimation(true)
        }} className="w-16 space-y-1 cursor-pointer items-center justify-center flex  flex-col">
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-slate-400 from-white">
            <SiFlutter className="rounded-lg" size={36} color="#33ccff" />
          </div>
          <h1 className="text-white text-center text-sm inline-block">Projects</h1>
        </div>
        <div onClick={()=>{
          setprojectmodal(true)
          setprojectmodalanimation(true)
        }} className="w-16 space-y-1 cursor-pointer items-center justify-center flex  flex-col">
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-red-700 from-red-400">
            <SiAdobeacrobatreader className="rounded-lg" size={36} color="#bdc3c7" />
          </div>
          <h1 className="text-white text-center text-sm inline-block">Resume</h1>
        </div>
        <div className="w-16 cursor-pointer items-center justify-center flex  flex-col">
          <FaGithubSquare className="rounded-lg" size={60} color="#2E2E2E" />
          <h1 className="text-white text-center text-sm inline-block">Github</h1>
        </div>
        <div className="w-16 cursor-pointer space-y-1 items-center flex  flex-col justify-center">
          <BsLinkedin className="rounded-lg " size={52} color="#4169E1" />
          <h1 className="text-white text-center text-sm inline-block">
            Linkedin
          </h1>
        </div>
        <div onClick={()=>{
          setprojectmodal(true)
          setprojectmodalanimation(true)
        }} className="w-16 space-y-1 cursor-pointer items-center justify-center flex  flex-col">
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-slate-400 from-white">
            <SiFlutter className="rounded-lg" size={36} color="#33ccff" />
          </div>
          <h1 className="text-white text-center text-sm inline-block">Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
