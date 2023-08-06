import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { GrFormClose } from "react-icons/gr";

const Project = ({
  projectmodal,
  setprojectmodal,
  projectmodalanimation,
  setprojectmodalanimation,
}) => {

    const projects = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div
      className="fixed w-screen h-screen modal-backdrop"
      style={{ zIndex: 100 }}
    >
      <div className="flex items-center justify-center w-full h-full">
        <AnimatePresence>
          {projectmodalanimation && (
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
              className="rounded-lg max-h-[560px] relative mx-2 overflow-y-auto min-h-[300px] bg-neutral-700 shadow-inner max-w-7xl shadow-slate-900 selection:bg-none"
            >
              <div
                style={{ zIndex: 100 }}
                className="sticky  top-0 flex items-center h-8 px-3 bg-slate-600/10 modal-backdrop"
              >
                <div className="flex items-center w-full space-x-1">
                  <h1
                    onClick={() => {
                      setprojectmodalanimation(false);
                      setTimeout(() => {
                        setprojectmodal(false);
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
              </div>
              <div className="mx-6 mt-3">
                <h1 className="text-white text-3xl font-bold">My Projects</h1>
              </div>
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 mx-6 my-5">
               {projects.map((item)=>{
                return  <div key={item} className="mb-5">
                  <div className="flex justify-between items-center mx-2 my-2">
                    <div className="flex overflow-hidden items-center space-x-3">
                      <div className="h-20 w-20 overflow-hidden rounded-lg">
                        <div class="relative cursor-pointer overflow-hidden ">
                          <img
                            src="https://res.cloudinary.com/dyyonlqge/image/upload/v1685327821/bxgrtnyp2rt4uynge9nx.webp"
                            className=" transition aspect-square rounded-lg object-fill hover:scale-105"
                            alt=""
                            style={{ zIndex: 40 }}
                          />
                        </div>
                      </div>
                      <div>
                        <h1 className="text-lg text-white font-semibold">
                          Portfolio
                        </h1>
                        <h1 className="text-sm text-white font-semibold">
                          Portfolio
                        </h1>
                        <h1 className="text-sm text-white font-medium">
                          Designed for ios & android
                        </h1>
                      </div>
                    </div>
                    <div><h1 className="text-blue-700 bg-white rounded-3xl px-4 py-0.5">SEE</h1></div>
                  </div>
                  <div class="group cursor-pointer">
                    <div class="gap2 flex w-full flex-col">
                      <div class="aspect-square sm:aspect-auto w-full relative overflow-hidden rounded-xl">
                        <img
                          src="https://res.cloudinary.com/dyyonlqge/image/upload/v1685327821/bxgrtnyp2rt4uynge9nx.webp"
                          className="h-full w-full transition hover:scale-105"
                          alt=""
                          style={{ zIndex: 40 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
               })}
               
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
