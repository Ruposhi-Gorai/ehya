import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline as Checkmark } from "react-icons/io";
import mac from "../assets/images/macbook.png";
import cardData from "./cardData";

export default function Page2() {
  const [card, setCard] = useState(cardData);
  return (
    <>
      <div className="w-full mw-[1200px] md:my-20 mx-auto md:px-20 md:py-20 px-8 md:py-10">
        <div className="flex md:flex-row flex-col justify-center text-gray-500">
          <div className="p-10 ">
            <h1 className="text-[36px] font-medium py-10 text-blue-800">
              Schedule Your Post Whenever You Want
            </h1>
            <p>
              Publish your content automatically to ensure that your content
              reaches the right people. Built-in features such as
            </p>
            <ul className="leading-10 py-5">
              <li>
                <Checkmark
                  size={25}
                  className="text-blue-400 inline font-bold"
                />
                Best Time to Post
              </li>
              <li>
                <Checkmark
                  size={25}
                  className="text-blue-400 font-bold inline"
                />
                Geolocation
              </li>
              <li>
                <Checkmark
                  size={25}
                  className="text-blue-400 font-bold inline"
                />
                User Tag
              </li>
              <li>
                <Checkmark
                  size={25}
                  className="text-blue-400 font-bold inline"
                />
                Others benefit
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img src={mac} alt="mac" className="block" />
          </div>
        </div>
        <div className=" text-gray-500 md:px-20 md:py-20 space-y-4 mt-10">
          <h1 className="text-center text-[36px] text-black p-5 font-medium">
            Track any hashtag{"(s)"} Performance
          </h1>
          <p className="text-center">
            <p>
              {" "}
              Don’t waste time on search manual tasks. Let Automation do it for
              you.
            </p>
            <p> Simplify workflows, reduce errors, and save time.</p>
          </p>
          <div className="flex md:flex-row flex-wrap  flex-col gap-10 justify-center items-center md:p-10 text-[16px]">
            {card.map((v, i) => {
              return (
                <div className="p-8 rounded-lg md:h-[320px] shadow-lg bg- flex flex-col justify-center items-start space-y-6 sm:w-[80%]  lg:w-[300px] py-10">
                  <img src={v.icon} alt="" />
                  <h3 className="text-2xl text-gray-800 font-medium">
                    {v.title}
                  </h3>
                  <p>{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
