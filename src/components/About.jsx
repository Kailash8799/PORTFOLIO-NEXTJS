import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import Image from "next/image";

const About = ({
  aboutmodalanimation,
  setaboutmodalanimation,
  setaboutmodal,
  setprojectmodal,
  setprojectmodalanimation,
  setcontactmodal,
  setcontactmodalanimation,
}) => {
  return (
    <div
      style={{ zIndex: 150 }}
      className="fixed w-screen h-screen modal-backdrop"
    >
      <div className="flex items-center justify-center w-full h-full">
        <AnimatePresence>
          {aboutmodalanimation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
              }}
              id="liaddshapes"
              className="rounded-lg relative mx-2 overflow-y-auto  max-h-[560px] min-h-[300px] bg-neutral-700 max-w-lg shadow-inner shadow-slate-900 selection:bg-none"
            >
              <div className="sticky top-0 flex items-center h-8 px-3 bg-slate-600/10 modal-backdrop">
                <div className="flex items-center w-1/3 space-x-1">
                  <h1
                    onClick={() => {
                      setaboutmodalanimation(false);
                      setTimeout(() => {
                        setaboutmodal(false);
                      }, 500);
                    }}
                    className="items-center justify-center flex text-white cursor-pointer w-4 h-4 text-[8px] rounded-full bg-red-700"
                  >
                    <span>
                      <GrFormClose size={13} />
                    </span>
                  </h1>
                  <h1 className="w-4 h-4 rounded-full bg-slate-400"></h1>
                  <h1 className="w-4 h-4 rounded-full bg-slate-400"></h1>
                </div>
                <div className="w-1/3">
                  <h1 className="text-center text-white">About me</h1>
                </div>
                <div className="w-1/3"></div>
              </div>
              <div className="px-3 pb-4 xs:px-8">
                <div className="flex items-center justify-center w-full h-28">
                  <Image
                    src={"/omoji.png"}
                    className="mx-auto"
                    alt="Omoji"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-full py-2">
                  <h1 className="text-xl font-semibold text-center text-white">
                    Kailash Rajput
                  </h1>
                  <h1 className="text-center text-white ">Software Engineer</h1>
                </div>
                <div>
                  <div className="flex space-x-2">
                    <div className="w-1/3">
                      <h1 className="text-white text-end">Experience</h1>
                    </div>
                    <div className="w-2/3">
                      <h1 className="text-white">5+ years</h1>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-1/3 ">
                      <h1 className="text-white text-end">Skills</h1>
                    </div>
                    <div className="w-2/3 ">
                      <h1 className="text-white">Flutter, Dart</h1>
                      <h1 className="text-white">C++, Java</h1>
                      <h1 className="text-white">Javascript, Typescript</h1>
                      <h1 className="flex-row flex-shrink-0 text-white">
                        NodeJS, ReactJS, NextJS, ExpressJS
                      </h1>
                      <h1 className="text-white">Mongodb, ReactNative</h1>
                      <h1 className="text-white">Python, ReactNative</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full my-3 space-x-2">
                  <h1
                    className="px-3 py-[1px] cursor-pointer rounded-md bg-neutral-500 text-white"
                    onClick={() => {
                      setaboutmodalanimation(false);
                      setTimeout(() => {
                        setaboutmodal(false);
                        setprojectmodal(true);
                        setprojectmodalanimation(true)
                      }, 500);
                    }}
                  >
                    My Projects
                  </h1>
                  <h1
                    className="px-3 py-[1px] cursor-pointer rounded-md bg-neutral-500 text-white"
                    onClick={() => {
                      setaboutmodalanimation(false);
                      setTimeout(() => {
                        setaboutmodal(false);
                        setcontactmodalanimation(true)
                        setcontactmodal(true);
                      }, 500);
                    }}
                  >
                    Contact
                  </h1>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default About;
