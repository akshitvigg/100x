import React, { useState } from "react";
import { ImageComp } from "./image";
import calicon from "../assets/calendar.png";
import down from "../assets/down.png";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import live from "../assets/live.png";
import liveb from "../assets/liveblue.png";
import cal2 from "../assets/cal2.png";
import plus from "../assets/plus.png";
import video from "../assets/video.png";

export const SideBar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="flex relative ">
      <div
        className={` transition-all duration-500  ${
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
              <ImageComp
                size={90}
                roundness={10}
                link={"https://pbs.twimg.com/media/EqqUVVsXAAEyT1b.jpg"}
              />
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
            {/* 2nd box */}
            <div>
              <p className="font-bold">Hi,1st october</p>
              <p className=" text-blue-950 sm:w-full font-bold sm:text-3xl  text-2xl">
                Good Morning Fujiwara! 👋
              </p>
            </div>
            <div className=" bg-white mt-6 sm:mt-4 h-80 sm:mr-0 mr-2 shadow-xl rounded-xl ">
              <div className="flex justify-between">
                <div className="flex">
                  <div className=" sm:m-5 mt-4 ml-5">
                    <ImageComp link={calicon} size={25} />
                  </div>
                  <div className="sm:ml-5 sm:mr-5 mt-5 sm:text-lg text-sm ml-3 mr-3 font-bold">
                    Monday, 14 October 2024
                  </div>
                  <div className="sm:mt-7 mt-6">
                    <ImageComp link={down} size={15} />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-5 mt-5">
                    <ImageComp link={left} size={20} />
                  </div>
                  <div className="mr-5 mt-5">
                    <ImageComp link={right} size={20} />
                  </div>
                </div>
              </div>
              <div className="flex sm:mt-2 mt-4">
                <div className="h-16  w-32 border-r border-b border-gray-200 ">
                  <p className=" sm:text-xl mt-2 text-lg text-center ">
                    11 :30AM
                  </p>
                  <p className=" sm:text-sm text-gray-500 text-sm text-center ">
                    12 :30PM
                  </p>
                </div>
                <div className=" border-b border-gray-200 w-full">
                  <div className="flex ml-2">
                    <p className="mr-2 text-gray-500">Live</p>
                    <ImageComp link={live} size={20} />
                  </div>
                  <p className=" ml-2 text-lg font-bold pt-2">UX Webinar</p>
                </div>
              </div>
              <div className="flex sm:mt-2 mt-4">
                <div className="h-16  w-32 border-r border-b border-gray-200 ">
                  <p className=" sm:text-xl mt-2 text-lg text-center ">
                    11 :30AM
                  </p>
                  <p className=" sm:text-sm text-gray-500 text-sm text-center ">
                    12 :30PM
                  </p>
                </div>
                <div className=" border-b border-gray-200 w-full">
                  <div className="flex ml-2">
                    <p className="mr-2 text-gray-500">Upcoming</p>
                    <ImageComp link={liveb} size={20} />
                  </div>
                  <p className=" ml-2 text-lg font-bold pt-2">
                    My first Webinar
                  </p>
                </div>
              </div>
              <div className="flex sm:mt-2 mt-4">
                <div className="h-16  w-32 border-r border-b border-gray-200 ">
                  <p className=" sm:text-xl mt-2 text-lg text-center ">
                    11 :30AM
                  </p>
                  <p className=" sm:text-sm text-gray-500 text-sm text-center ">
                    12 :30PM
                  </p>
                </div>
                <div className=" border-b border-gray-200 w-full">
                  <div className="flex ml-2">
                    <p className="mr-2 text-gray-500">Upcoming</p>
                    <ImageComp link={liveb} size={20} />
                  </div>
                  <p className=" ml-2 text-lg font-bold pt-2">
                    Important Webinar
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd box */}
          <div className=" bg-white sm:h-52  h-60 mr-2  sm:mt-20 mt-5 col-span-10 sm:col-span-3 shadow-xl rounded-xl ">
            <div className="flex justify-around mt-4">
              <div className=" bg-teal-400 rounded-lg w-12 mt-4">
                <img src={cal2} width={60} style={{ padding: 10 }} />
              </div>
              <div className=" bg-teal-400 rounded-lg w-12 mt-4">
                <img src={plus} width={60} style={{ padding: 10 }} />
              </div>
            </div>
            <div className="flex justify-around">
              <p className="text-sm font-bold">Schedule a Webinar</p>
              <p className="text-sm font-bold">join a Webinar</p>
            </div>
            <div className="ml-16 sm:mt-5 mt-8">
              <div className=" bg-teal-400 rounded-lg w-12 mt-4">
                <img src={video} width={60} style={{ padding: 10 }} />
              </div>
            </div>
            <p className="  ml-8 text-sm font-bold">Upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
};
