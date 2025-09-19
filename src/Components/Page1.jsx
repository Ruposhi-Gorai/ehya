import React from "react";
import vector from "../assets/images/Vector.png";
import image2 from "../assets/images/group19.png";
import image3 from "../assets/images/List.png";
import Header from "./Header";

export default function Page1() {
  return (
    <>
      <div className="homepage">
        <Header />
        <div className="flex  md:flex-row flex-col w-full mw-[1200px] mx-auto  md:px-20 md:py-10 px-10  justify-center items-center md:items-start text-white">
          <div className="lg:w-[40%] md:space-y-10 lg:px-20 pb-10 flex flex-col  flex-wrap items-center lg:items-start">
            <h1 className="text-[64px]  leading-20  mt-25 text-white font-medium ">
              We help you grow your business <span className="relative">faster
              
                <img
                  className="absolute bottom-[-10px]  rotate-x-12 left-0"
                  src={vector}
                  alt="vector"
                />
              
              </span>
            </h1>
            <p className="py-5 font-light">
              Ehya is the Instagram analytics platform teams use to stay focused
              on the goals, track engagement for report your business .
            </p>
            <button className="bg-white px-4 py-3 text-cyan-500">
              See how it Works
            </button>
          </div>
          <div className=" w-full lg:w-[70%] sm:py-20 lg:py-1">
            <img src={image2} alt="" className=" w-full object-cover" />
          </div>
        </div>
        
      </div>
      <div className="w-full mw-[1000px] flex md:flex-row flex-col justify-center items-center mx-auto md:px-20 md:py-10  mt-20">
          <img src={image3} alt="" className=" block object-contain" />
        </div>
    </>
  );
}
