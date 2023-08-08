import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Projectdetail from "./Projectdetail";
import OneProject from "./OneProject";
import { RotatingLines } from "react-loader-spinner";

const Project = ({
  projectmodal,
  setprojectmodal,
  projectmodalanimation,
  setprojectmodalanimation,
  setaboutmodal,
  setaboutmodalanimation,
}) => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedProject, setselectedProject] = useState(null);
  const [selectedProjectanimation, setselectedProjectanimation] =
    useState(false);
  const [loading, setloading] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  if (!mounted) return;
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
              className="xs:rounded-lg h-full xs:max-h-[560px] relative xs:mx-2 overflow-y-auto min-h-[560px] bg-neutral-700 shadow-inner w-full xs:max-w-7xl shadow-slate-900 selection:bg-none"
            >
              {loading ? (
                <div className="items-center w-full justify-center flex h-full">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="40"
                    visible={true}
                  />
                </div>
              ) : (
                <div>
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
                  {!selectedProjectanimation && selectedProject === null && (
                    <motion.div
                      initial={{ opacity: 0, x: -1000 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      exit={{
                        opacity: 0,
                        x: -1000,
                      }}
                    >
                      <div className="mx-6 mt-3">
                        <h1 className="text-white text-3xl font-bold">
                          My Projects
                        </h1>
                      </div>
                      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 mx-6 my-5">
                        {projects.map((item) => {
                          return (
                            <OneProject
                              selectedProject={selectedProject}
                              setselectedProject={setselectedProject}
                              setselectedProjectanimation={
                                setselectedProjectanimation
                              }
                              src={
                                "https://res.cloudinary.com/dyyonlqge/image/upload/v1685327821/bxgrtnyp2rt4uynge9nx.webp"
                              }
                              key={item}
                              id={item}
                            />
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                  {selectedProjectanimation && selectedProject !== null && (
                    <motion.div
                      initial={{ opacity: 0, x: 1000 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      exit={{
                        opacity: 0,
                        x: 1000,
                      }}
                    >
                      <Projectdetail
                        selectedProject={selectedProject}
                        setselectedProjectanimation={
                          setselectedProjectanimation
                        }
                        setaboutmodal={setaboutmodal}
                        setaboutmodalanimation={setaboutmodalanimation}
                        setselectedProject={setselectedProject}
                      />
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;
