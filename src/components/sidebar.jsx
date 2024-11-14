import React, { useState } from "react";
import { ImageComp } from "./image";

export const SideBar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="flex relative ">
      <div
        className={`  ${
          open ? "sm:w-64" : "sm:w-16"
        } sm:shadow  sm:bg-white sm:h-screen  ${
          open ? "w-64 bg-white" : "bg-slate-100  w-4"
        }`}
      >
        <button onClick={() => setopen(!open)}>|||</button>
      </div>
      <div className=" bg-slate-100 w-full h-screen">
        <div className="  sm:bg-blue-900 sm:h-28">‎</div>
        <div className=" grid grid-cols-10 gap-8">
          <div className="sm:ml-5 sm:bg-white sm:h-72 sm:shadow-xl sm:col-span-2 sm:-translate-y-5 sm:rounded-xl sm:block hidden">
            <div className="flex justify-center mt-10">
              <ImageComp size={90} roundness={10} />
            </div>
            <p className="flex justify-center mt-2 font-bold">Chika Fujiwara</p>
            <p className="flex justify-center mt-2 text-gray-500">
              chika27@gmail.com
            </p>
            <p className=" flex justify-center text-gray-500 mt-2">
              9878985548
            </p>
            <p className="flex justify-center mt-2 text-gray-500">
              Tokyo, Japan
            </p>
          </div>

          <div className="sm:mt-0 mt-16 sm:col-span-5 col-span-10">
            <div>
              <p className="font-bold">Hi,1st october</p>
              <p className=" text-blue-950 sm:w-full font-bold sm:text-3xl  text-2xl">
                Good Morning Fujiwara! 👋
              </p>
            </div>
            <div className=" bg-blue-300 mt-6 sm:mt-4 h-80 sm:mr-0 mr-2 shadow-xl rounded-xl "></div>
          </div>
          <div className=" bg-green-300 sm:h-40  h-60 mr-2  sm:mt-20 mt-5 col-span-10 sm:col-span-3 shadow-xl rounded-xl "></div>
        </div>
      </div>
    </div>
  );
};
