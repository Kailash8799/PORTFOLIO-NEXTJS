import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai";
import { SiFlutter,SiAboutdotme, SiAdobeacrobatreader } from "react-icons/si";

const Mainpage = ({
  setprojectmodal,
  fullscreen,
  setprojectmodalanimation,
  openFullscreen,
  setaboutmodal,
  setaboutmodalanimation,
  setcontactmodal,
  setcontactmodalanimation
}) => {
  return (
    <div className="text-white selection:bg-none items-center justify-center">
      <div className="xs:hidden mt-5 h-40 mx-5 border"></div>
      <div className="sm:mx-10 space-y-4 mx-5 mt-5 grid-cols-3 xs:items-start items-center xs:flex-col  xs:flex grid">
        <div
          onClick={() => {
            setprojectmodal(true);
            setprojectmodalanimation(true);
          }}
          className="w-16 xs:mt-0 mt-5 space-y-1 cursor-pointer items-center justify-center flex  mx-auto xs:mx-0  flex-col"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-slate-400 from-white">
            <SiFlutter className="rounded-lg" size={36} color="#33ccff" />
          </div>
          <h1 className="text-white  text-center text-sm inline-block">
            Projects
          </h1>
        </div>
        <div
          onClick={() => {
            setprojectmodal(true);
            setprojectmodalanimation(true);
          }}
          className="w-16 mx-auto xs:mx-0  space-y-1 cursor-pointer items-center justify-center flex  flex-col"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-red-700 from-red-400">
            <SiAdobeacrobatreader
              className="rounded-lg"
              size={36}
              color="#bdc3c7"
            />
          </div>
          <h1 className="text-white text-center text-sm inline-block">
            Resume
          </h1>
        </div>
        <div className="w-16 mx-auto xs:mx-0  cursor-pointer items-center justify-center flex  flex-col">
          <FaGithubSquare className="rounded-lg" size={60} color="#2E2E2E" />
          <h1 className="text-white text-center text-sm inline-block">
            Github
          </h1>
        </div>
        <div className="w-16 mx-auto xs:mx-0  cursor-pointer space-y-1 items-center flex  flex-col justify-center">
          <BsLinkedin className="rounded-lg " size={52} color="#4169E1" />
          <h1 className="text-white text-center text-sm inline-block">
            Linkedin
          </h1>
        </div>
        <div
          onClick={() => {
           setaboutmodal(true)
           setaboutmodalanimation(true)
          }}
          className="w-16 mx-auto xs:mx-0 space-y-1 cursor-pointer items-center justify-center flex  flex-col"
        >
          <div onClick={()=>{}} className="w-[55px] xs:hidden rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-pink-400 from-orange-400">
            
              <SiAboutdotme
                className="rounded-lg"
                size={36}
                color="#33ccff"
              />
          </div>
          <h1 className="text-white text-center text-sm inline-block">
            About
          </h1>
        </div>
        <div
          onClick={() => {
            setcontactmodal(true)
            setcontactmodalanimation(true)
          }}
          className="w-16 xs:hidden mx-auto xs:mx-0 space-y-1 cursor-pointer items-center justify-center flex  flex-col"
        >
          <div className="w-[55px] rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-green-300 from-green-500">
            
              <RiContactsFill
                className="rounded-lg"
                size={30}
                color="#fff"
              />
          </div>
          <h1 className="text-white text-center text-sm inline-block">
            Contact
          </h1>
        </div>
        <div
          onClick={() => {
            openFullscreen();
          }}
          className="w-16  mx-auto xs:mx-0 space-y-1 cursor-pointer items-center justify-center flex  flex-col"
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
          <h1 className="text-white text-center text-sm inline-block">
            Fullscreen
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
