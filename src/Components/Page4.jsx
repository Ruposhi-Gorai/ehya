import React from "react";
import emoji from "../assets/images/emoji.png";
import tm from "../assets/images/tm.png";
import circles from "../assets/images/circles.png";

export default function Page4() {
  return (
    <>
      <div className=" flex md:flex-row flex-col w-full justify-center items-center  md:px-20 md:py-20 py-10">
        <div className="relative blue-gd flex md:flex-row flex-col gap-10 md:gap-5 px-10 py-10 items-center md:p-15 lg:w-[75%] overflow-hidden">
          <div className="md:px-10 flex-1 space-y-4">
            <h1 className="text-[36px] font-medium text-white">
              Grow your brand presence on social media <img src={emoji} alt="" className="inline"/>
            </h1>
            <p className="text-white">Join with more 1200+ happy customers</p>
            <img src={tm} alt="" />
          </div>
           <div className="px-10 flex-1">
            <div className="flex justify-end items-center w-full h-full">
            <button className="bg-white z-1 font-medium text-[#00B8D9] px-8 py-5">Get your trial Now</button>
          </div>
          </div>
          <span className="absolute top-0 right-0">
            <img src={circles} alt="w-full object-contain" />
         </span>
        </div>
      </div>
    </>
  );
}
