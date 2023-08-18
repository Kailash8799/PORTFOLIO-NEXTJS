import React from "react";
import BottomItem from "./BottomItem";
import Link from "next/link";

const Bottomnav = ({
  setprojectmodal,
  setprojectmodalanimation,
  setcontactmodal,
  setcontactmodalanimation,
}) => {
  return (
    <div className="fixed w-screen bottom-2">
      <div className="inline-block p-2 transition-all border rounded-lg hover:px-4 border-gray-300/30 bg-gray-950/50">
        <div className="flex-row hidden space-x-2 xs:flex">
          <Link href={"https://kailashrajput.netlify.app/"} target="_blank">
            <BottomItem
              img={"/compass.png"}
              size={45}
              tooltipname={"Website"}
            />
          </Link>

          <Link href={"mailto:kailashrajput8799@gmail.com"} target="_blank">
            <BottomItem img={"/mail.svg"} size={46} tooltipname={"Mail"} />
          </Link>
          <span
            onClick={() => {
              setprojectmodal(true);
              setprojectmodalanimation(true);
            }}
          >
            <BottomItem
              img={"/flutter.svg"}
              size={40}
              tooltipname={"Project"}
            />
          </span>
          <span
            onClick={() => {
              setprojectmodal(true);
              setprojectmodalanimation(true);
            }}
          >
            <BottomItem
              img={"/calender.svg"}
              size={42}
              tooltipname={"Calender"}
            />
          </span>
          <span
            onClick={() => {
              setcontactmodal(true);
              setcontactmodalanimation(true);
            }}
          >
            <BottomItem img={"/user.png"} size={44} tooltipname={"Contact"} />
          </span>
        </div>
        <div className="flex flex-row space-x-2 xs:hidden">
          <Link  href={"tel:+91"}>
            <div className="w-[55px] ml-1 rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-green-600 from-green-400">
              <BottomItem
                img={"/call.png"}
                size={40}
                tooltipname={"Call"}
              />
            </div>
          </Link>
          <Link href={"https://kailashrajput.netlify.app/"} target="_blank">
            <div className="w-[55px] ml-1 rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-purple-400 from-red-100">
              <BottomItem
                img={"/compass.png"}
                size={50}
                tooltipname={"Website"}
              />
            </div>
          </Link>

          <Link href={"mailto:kailashrajput8799@gmail.com"} target="_blank">
          <div className="w-[55px] ml-1 rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-blue-500 from-sky-300">
            <BottomItem img={"/mail.svg"} size={51} tooltipname={"Mail"} />
            </div>
          </Link>
          <span
            onClick={() => {
              setcontactmodal(true);
              setcontactmodalanimation(true);
            }}
          ><div className="w-[55px] ml-1 rounded-lg items-center justify-center flex h-[55px] bg-gradient-to-bl to-white from-pink-400">
            <BottomItem
              img={"/user.png"}
              size={48}
              tooltipname={"Contact"}
            />
            </div>
          </span>
          <span
            onClick={() => {
              setcontactmodal(true);
              setcontactmodalanimation(true);
            }}
          >
         
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bottomnav;
