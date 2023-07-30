
import React from "react";
import BottomItem from "./BottomItem";

const Bottomnav = () => {
  return (
    <div className="fixed w-screen bottom-2">
      <div className="inline-block p-2 transition-all border rounded-lg hover:px-4 border-gray-300/30 bg-gray-950/50">
        <div className="flex flex-row space-x-2">
        <BottomItem img={"/compass.png"} size={45} tooltipname={"Website"}/>
        <BottomItem img={"/mail.svg"} size={46} tooltipname={"Mail"}/>
        <BottomItem img={"/flutter.svg"} size={40} tooltipname={"Project"}/>
        <BottomItem img={"/calender.svg"} size={42} tooltipname={"Calender"}/>
        <BottomItem img={"/user.png"} size={44} tooltipname={"Contact"}/>
        </div>
      </div>
    </div>
  );
};

export default Bottomnav;
