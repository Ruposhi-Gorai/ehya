import React from "react";
import image from "../assets/images/vector.png";
import image2 from "../assets/images/Group 19.png";
import image3 from "../assets/images/List.png";

export default function Page1() {
  return (
    <>
      <div className="flex w-full mw-[1200px] mx-auto px-20 justify-center text-white">
        <div className="w-[40%] space-y-10 ps-20 ">
          <h1 className="text-[64px]  relative leading-20  mt-25 text-white font-medium flex flex-col flex-wrap">
            We help you grow your business faster
            <span>
              <img
                className="absolute bottom-[-22px] rotate-x-12 left-0"
                src={image}
                alt=""
              />
            </span>
          </h1>
          <p className="py-5 font-light">Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .</p>
          <button className="bg-white px-4 py-3 text-cyan-500">See how it Works</button>
        </div>
        <div className=" w-[70%]">
            <img src={image2} alt="" className=" w-full object-contain" />
        </div>
      </div>
      <div className="w-full mw-[1000px] flex justify-center mx-auto px-20 py-1 0 ">
      <img src={image3} alt="" className=" block object-contain" />
      </div>
    </>
  );
}
