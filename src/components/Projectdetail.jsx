import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Projectdetail = ({ setselectedProject,setselectedProjectanimation }) => {
  return (
    <div>
      <div className="h-10 sticky  top-8 flex items-center px-3 bg-slate-600/10 modal-backdrop">
        <IoIosArrowBack
          size={30}
          color="#fff"
          onClick={() => {
            setselectedProjectanimation(false)
            setselectedProject(null);
          }}
        />
      </div>
    </div>
  );
};

export default Projectdetail;
