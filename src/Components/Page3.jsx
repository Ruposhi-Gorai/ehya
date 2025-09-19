import React, { useState } from "react";
import line from "../assets/images/blue-lines.png";
import star1 from "../assets/images/star.png";
import pic from "../assets/images/pic.png";
import arrow from "../assets/images/bluearrow.png";
import { GoDotFill } from "react-icons/go";

export default function Page3() {
  const [star, setStar] = useState(Array(5).fill(star1));
  return (
    <div className="bg-[#EFFBFF] w-full mw-[1200px]  md:px-20 md:py-20 px-8 py-10 flex md:flex-row flex-col mx-auto ">
      <div className="text-gray-500 flex-1 py-20 md:px-15">
        <h1 className="text-blue-500  text-[36px] font-medium">
          Powering the growth of 100+ business & retailers in Indonesia.
        </h1>
        <p>From single store, startups, to large multi-store brands.</p>
      </div>
      <div className="flex-1 py-20  md:px-20">
        <div className="flex gap-1 p-5 items-end">
          <span>
            <img src={line} alt="" />
          </span>
          {star.map((v, i) => {
            return (
              <span>
                <img src={v} alt="" key={i} className="w-full object-contain" />
              </span>
            );
          })}
        </div>
        <p className="italic text-gray-500 px-15">
          “With Ehya, we’re able to easily track our performance in full detail.
          It’s become an essential tool for us to grow and engage with our
          audience.”
        </p>
        <div className="relative flex py-10 text-gray-500 justify-start gap-2 px-15">
          <div className="w-[50px]">
            {" "}
            <img src={pic} alt="" className="rounded-full  object-contain" />
          </div>
          <div>
            <h4 className="text-[20px] text-blue-800">Jaquon Hart</h4>
            <p>Digital Marketing Executive, Hypebeast</p>
          </div>
          <div className="absolute right-0 bottom-0">
            <img src={arrow} alt="" />
          </div>
        </div>
        <span className="flex px-15">
          <GoDotFill size={18} fill="#034D82" />
          <GoDotFill size={18} fill="#E2ECF4" />
          <GoDotFill size={18} fill="#E2ECF4" />
          <GoDotFill size={18} fill="#E2ECF4" />
        </span>
      </div>
    </div>
  );
}
