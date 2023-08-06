import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrFormClose,GrLanguage } from "react-icons/gr";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { GoShare } from "react-icons/go";
import { MdLanguage } from "react-icons/md";

const Contact = ({
  setaboutmodalanimation,
  setaboutmodal,
  setprojectmodal,
  setprojectmodalanimation,
  setcontactmodal,
  setcontactmodalanimation,
  contactmodalanimation,
}) => {
  return (
    <div
      style={{ zIndex: 100 }}
      className="fixed w-screen h-screen modal-backdrop"
    >
      <div className="flex items-center justify-center w-full h-full">
        <AnimatePresence>
          {contactmodalanimation && (
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
                      setcontactmodalanimation(false);
                      setTimeout(() => {
                        setcontactmodal(false);
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
                  <h1 className="text-center text-white">Contact</h1>
                </div>
                <div className="w-1/3"></div>
              </div>
              <div className="px-6 pb-4 xs:px-12">
                <div className=" items-center justify-evenly">
                  <div className="flex items-center justify-center w-full h-28">
                    <Image
                      src={"/og1.png"}
                      className="mx-auto"
                      alt="Omoji"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="w-full shrink-0 py-2">
                    <h1 className="text-xl shrink-0 font-semibold text-center text-white">
                      Kailash Rajput
                    </h1>
                    <h1 className="text-center shrink-0  text-white ">
                      Software Engineer
                    </h1>
                  </div>
                </div>
                <div className="flex space-x-4 my-3 justify-evenly">
                  <div>
                    <div className="bg-blue-600 items-center justify-center flex p-2 rounded-full">
                      <BiSolidPhoneCall color="#fff" size={20} />
                    </div>
                    <h1 className="text-blue-600 text-sm text-center">Call</h1>
                  </div>
                  <div>
                    <div className="bg-blue-600 items-center justify-center flex p-2 rounded-full">
                      <IoMdMail color="#fff" size={20} />
                    </div>
                    <h1 className="text-blue-600 text-sm text-center">Mail</h1>
                  </div>
                  <div>
                    <div className="bg-blue-600 items-center justify-center flex p-2 rounded-full">
                      <MdLanguage color="#fff" size={20} />
                    </div>
                    <h1 className="text-blue-600 text-sm text-center">Web</h1>
                  </div>
                  <div>
                    <div className="bg-blue-600 items-center justify-center flex p-2 rounded-full">
                      <GoShare color="#fff" size={20} />
                    </div>
                    <h1 className="text-blue-600 text-sm text-center">Share</h1>
                  </div>
                </div>
                <div className="">
                  <div className="flex space-x-2 ">
                    <div className="">
                      <h1 className="text-white text-end ">Phone</h1>
                    </div>
                    <div className="">
                      <h1 className="text-white">+91 8799312265</h1>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="">
                      <h1 className="text-white text-end">Email</h1>
                    </div>
                    <div className="">
                      <h1 className="text-white">kailashrajput8799@gmail.com</h1>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="">
                      <h1 className="text-white text-end">Website</h1>
                    </div>
                    <div className="">
                      <h1 className="text-white">kailashrajput.netlify.app</h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full my-3 space-x-2">
                  <h1
                    className="px-3 py-[1px] cursor-pointer rounded-md bg-neutral-500 text-white"
                    onClick={() => {
                      setcontactmodalanimation(false);
                      setTimeout(() => {
                        setcontactmodal(false);
                        setprojectmodal(true);
                        setprojectmodalanimation(true);
                      }, 500);
                    }}
                  >
                    My Projects
                  </h1>
                  <h1
                    className="px-3 py-[1px] cursor-pointer rounded-md bg-neutral-500 text-white"
                    onClick={() => {
                      setcontactmodalanimation(false);
                      setTimeout(() => {
                        setcontactmodal(false);
                        setaboutmodalanimation(true);
                        setaboutmodal(true);
                      }, 500);
                    }}
                  >
                    About
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

export default Contact;
