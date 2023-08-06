import React from "react";

const OneProject = ({
  selectedProject,
  setselectedProject,
  id,
  setselectedProjectanimation,
}) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setTimeout(() => {
          setselectedProject(id);
        }, 600);
        setselectedProjectanimation(true);
      }}
    >
      <div className="mb-5">
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
              <h1 className="text-lg text-white font-semibold">Portfolio</h1>
              <h1 className="text-sm text-white font-semibold">Portfolio</h1>
              <h1 className="text-sm text-white font-medium">
                Designed for ios & android
              </h1>
            </div>
          </div>
          <div className="cursor-pointer">
            <h1 className="text-blue-700 bg-white rounded-3xl px-4 py-0.5">
              SEE
            </h1>
          </div>
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
    </div>
  );
};

export default OneProject;
