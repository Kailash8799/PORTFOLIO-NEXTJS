import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const TopAlert = ({
  setAlertmodal,
  setAlertmodalanimation,
  alertmodalanimation,
}) => {
  return (
    <div style={{ zIndex: 50 }} className="fixed w-screen">
      <div className="fixed flex justify-center w-full px-4 xs:top-8 top-2">
        <AnimatePresence>
          {alertmodalanimation && (
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
              className="p-3 rounded-lg bg-gray-800/40 modal-backdrop"
            >
              <div className="flex items-center space-x-1">
                <FaLightbulb color="#fff" size={15} />
                <h1 className="text-white">Did you know?</h1>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <h1 className="text-sm text-white xs:text-base">
                    This portfolio will also look great on{" "}
                    <b className="inline xs:hidden">laptop</b>
                    <b className="hidden xs:inline-block">mobile</b>
                  </h1>
                </div>
                <div>
                  <h1
                    onClick={() => {
                      setAlertmodalanimation(false);
                      setTimeout(() => {
                        setAlertmodal(false);
                      }, 300);
                    }}
                    className="px-2 pr-3 py-[2px] text-sm font-medium text-white rounded-[4px] cursor-pointer bg-slate-600/30"
                  >
                    OK
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

export default TopAlert;
