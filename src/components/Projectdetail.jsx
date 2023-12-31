import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PiUserRectangleBold } from "react-icons/pi";
import { RiEnglishInput } from "react-icons/ri";
import { MdLanguage, MdOutlineSportsBasketball } from "react-icons/md";
import { DiApple } from "react-icons/di";
import Image from "next/image";

const Projectdetail = ({
  setselectedProject,
  setselectedProjectanimation,
  selectedProject,
  setaboutmodal,
  setaboutmodalanimation
}) => {
  const [imageloaded, setImageloaded] = useState(false);
  const [imagetop, setimagetop] = useState("");
  const [projectname, setprojectname] = useState("");
  const [projectcat, setprojectcat] = useState("");
  const [projectplat, setprojectplat] = useState("");
  const [company, setcompany] = useState("");
  const [projectab, setprojectab] = useState("");
  const [timedu, settimedu] = useState("");
  const [desc, setdesc] = useState("");
  const [website, setwebsite] = useState("");
  const imag =
    "https://res.cloudinary.com/dyyonlqge/image/upload/v1685327821/bxgrtnyp2rt4uynge9nx.webp";
  return (
    <div className="  ">
      <div
        style={{ zIndex: 70 }}
        className="h-10 sticky  top-8 flex items-center px-3 bg-slate-600/10 modal-backdrop"
      >
        <IoIosArrowBack
          size={30}
          className="cursor-pointer hover:modal-backdrop"
          color="#fff"
          onClick={() => {
            setselectedProjectanimation(false);
            setselectedProject(null);
          }}
        />
      </div>
      <div className="mx-3 md:mx-11">
        <div>
          <div className="flex justify-between items-center mx-2 my-2">
            <div className="flex overflow-hidden items-center space-x-3">
              <div className="h-20 w-20 overflow-hidden rounded-lg">
                <div class="relative cursor-pointer overflow-hidden ">
                  {/* <img
                  src={imag}
                  className=" transition aspect-square rounded-lg object-fill hover:scale-105"
                  alt=""
                  style={{ zIndex: 40 }}
                /> */}
                  <Skeleton
                    height={80}
                    width={80}
                    direction="ltr"
                    enableAnimation={true}
                    baseColor="#cbd5e1"
                    highlightColor="#f8fafc"
                    borderRadius={8}
                  />
                </div>
              </div>
              <div>
                {projectname.length ? (
                  <h1 className="text-lg text-white font-semibold">
                    {projectname}
                  </h1>
                ) : (
                  <Skeleton
                    direction="ltr"
                    enableAnimation={true}
                    baseColor="#cbd5e1"
                    highlightColor="#f8fafc"
                    width={150}
                  />
                )}
                {projectname.length ? (
                  <h1 className="text-lg text-white font-semibold">
                    {projectname}
                  </h1>
                ) : (
                  <Skeleton
                    direction="ltr"
                    enableAnimation={true}
                    baseColor="#cbd5e1"
                    highlightColor="#f8fafc"
                    width={150}
                  />
                )}
                {projectname.length ? (
                  <h1 className="text-lg text-white font-semibold">
                    {projectname}
                  </h1>
                ) : (
                  <Skeleton
                    direction="ltr"
                    enableAnimation={true}
                    baseColor="#cbd5e1"
                    highlightColor="#f8fafc"
                    width={150}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-full h-[1px] my-4 bg-gray-600/50" />
        <div className="w-full">
          <div
            id="liaddshapes"
            className="space-x-3 whitespace-break-spaces flex  items-center overflow-y-scroll md:justify-evenly"
          >
            <div className="h-28 shrink-0 items-center justify-center space-y-1 flex-col w-28 rounded-lg">
              <h1 className="text-gray-500 mt-2 font-medium text-center">
                COMPANY
              </h1>
              <PiUserRectangleBold
                size={35}
                className="mx-auto"
                color="#4B5563"
              />
              <h1 className="text-gray-400 font-medium text-center">Linkage</h1>
            </div>
            <div className="h-28 w-[1px] border bg-gray-600/50 border-gray-600/50" />

            <div className="h-28 shrink-0 items-center justify-center space-y-1 flex-col w-28  rounded-lg">
              <h1 className="text-gray-500 mt-2 font-medium text-center">
                COUNTRIES
              </h1>
              <h1 className="text-gray-600 font-bold text-center text-3xl">
                IN
              </h1>
              <h1 className="text-gray-400 font-medium text-center">
                +10 more
              </h1>
            </div>
            <div className="h-28 w-[1px] border bg-gray-600/50 border-gray-600/50" />

            <div className="h-28 shrink-0 items-center justify-center space-y-1 flex-col w-28  rounded-lg">
              <h1 className="text-gray-500 mt-2 font-medium text-center">
                LANGUAGE
              </h1>
              <RiEnglishInput size={35} className="mx-auto" color="#4B5563" />
              <h1 className="text-gray-400 font-medium text-center">
                {"English"}{" "}
              </h1>
            </div>
            <div className="h-28 w-[1px] border bg-gray-600/50 border-gray-600/50" />

            <div className="h-28 shrink-0 items-center justify-center space-y-1 flex-col w-28  rounded-lg">
              <h1 className="text-gray-500 mt-2 font-medium text-center">
                CATEGORY
              </h1>
              <MdOutlineSportsBasketball
                size={35}
                className="mx-auto"
                color="#4B5563"
              />
              <h1 className="text-gray-400 font-medium text-center">
                {"SPORTS"}
              </h1>
            </div>
            <div className="h-28 w-[1px] border bg-gray-600/50 border-gray-600/50" />

            <div className="h-28 shrink-0 items-center justify-center space-y-1 flex-col w-28  rounded-lg">
              <h1 className="text-gray-500 mt-2 font-medium text-center">
                PLATFORMS
              </h1>
              <DiApple size={35} className="mx-auto" color="#4B5563" />
              <h1 className="text-gray-400 font-medium text-center">
                {"DC Tech"}
              </h1>
            </div>
          </div>
        </div>
        <h1 className="w-full h-[1px] my-4 bg-gray-600/50" />
        <div>
          <h1 className="text-xl md:text-2xl font-medium text-white">
            About this project
          </h1>
          <h1 className="text-gray-400">Jan 2023 - May 2023</h1>
          <h1 className="text-gray-300 my-3">Live result and more</h1>
        </div>
        <h1 className="w-full h-[1px] my-4 bg-gray-600/50" />
        <div id="liaddshapes" className=" overflow-y-hidden flex flex-shrink-0 items-center overflow-x-auto w-full">
          <div className="shrink-0">
            <Image src={"/mb2.png"} className="shrink-0" style={{flexShrink:'initial'}} height={400} width={400} alt="Image" />
          </div>
          <div className=" shrink-0">
            <Image src={"/mb2.png"} height={400} width={400} alt="Image" />
          </div>
          <div className="shrink-0">
            <Image src={"/mb2.png"} height={400} width={400} alt="Image" />
          </div>
          <div className=" shrink-0">
            <Image  src={"/mb2.png"} height={400} width={400} alt="Image" />
          </div>
        </div>
        <h1 className="w-full h-[1px] my-4 bg-gray-600/50" />
        <div className="">
          <div className="md:flex  md:items-center md:justify-between">
            <div className="md:w-3/4">
              <h1 className="text-white">
                With over 5 years of experience working with Flutter, I possess
                a deep understanding of designing and developing mobile
                applications, with a focus on the finer details. My skillset
                encompasses Flutter and UI/UX principles, which enable me to
                create elegant and user-friendly solutions from complex
                requirements.
              </h1>
            </div>
            <div className="md:block hidden w-1/4">
              <div onClick={()=>{
                setaboutmodalanimation(true)
                setaboutmodal(true)
              }} className="flex space-x-2 cursor-pointer items-center justify-end">
                <h1 className="text-[#0000FF] text-sm">Devloper</h1>
                <h1 className="text-[#0000FF] text-base md:text-start text-end">
                  {"< >"}
                </h1>
              </div>
              <div className="flex cursor-pointer items-center justify-end space-x-2">
                <h1 className="text-[#0000FF] text-sm">
                  <a href="https://kailashrajput.netlify.app/" target="_blank">
                    Website
                  </a>
                </h1>
                <h1 className="text-[#0000FF] text-base md:text-start text-end">
                  <a href="https://kailashrajput.netlify.app/" target="_blank">
                    <MdLanguage
                      className="hover:animate-pulse"
                      color="#0000FF"
                      size={20}
                    />
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-full h-[1px] my-4 bg-gray-600/50" />
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-white">Information</h1>
          <div className="md:flex justify-between space-y-3 mt-1">
            <div className="md:w-1/2 ml-2 md:ml-0 space-y-3">
              <div className="md:hidden">
                <div className="flex md:block items-center justify-between">
                  <h1 className="text-[#0000FF] text-sm">Devloper</h1>
                  <h1 className="text-[#0000FF] text-base md:text-start text-end">
                    {"< >"}
                  </h1>
                </div>
                <div className="flex md:block items-center justify-between">
                  <h1 className="text-[#0000FF] text-sm">Website</h1>
                  <h1 className="text-[#0000FF] text-base md:text-start text-end">
                    <MdLanguage
                      className="hover:animate-pulse"
                      color="#0000FF"
                      size={20}
                    />
                  </h1>
                </div>
              </div>
              <div className="flex md:block items-center justify-between">
                <h1 className="text-gray-400 text-sm">Role</h1>
                <h1 className="text-gray-300 text-base md:text-start text-end">
                  Student of Computer Engineering
                </h1>
              </div>
              <div className="flex md:block items-center justify-between">
                <h1 className="text-gray-400 text-sm">Team size</h1>
                <h1 className="text-gray-300 text-base md:text-start text-end">
                  1
                </h1>
              </div>
              <div className="flex md:block items-center justify-between">
                <h1 className="text-gray-400 text-sm">Language</h1>
                <h1 className="text-gray-300 text-base md:text-start text-end">
                  English
                </h1>
              </div>
            </div>
            <div className="md:w-1/2 ml-2 md:ml-0  space-y-3">
              <div className="flex md:block items-center justify-between">
                <h1 className="text-gray-400 text-sm">Client</h1>
                <h1 className="text-gray-300 text-base md:text-start text-end">
                  DC Tech
                </h1>
              </div>
              <div className="flex md:block items-center justify-between">
                <h1 className="text-gray-400 text-sm">Duration</h1>
                <h1 className="text-gray-300 text-base md:text-start text-end">
                  4 months
                </h1>
              </div>
              <div className="flex md:block items-center justify-between">
                <h1 className="text-gray-400 text-sm">Countries</h1>
                <h1 className="text-gray-300 text-base md:text-start text-end">
                  India and 10 More
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdetail;
