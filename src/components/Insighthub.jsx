// import React from "react";
import React, { useEffect, useState } from 'react';
import about from "../assets/imgs/about.png";
import insight from "../assets/imgs/insight.png";
import whitepaper from "../assets/imgs/whitepaper.png";
import i1 from "../assets/imgs/i1.png";
import i2 from "../assets/imgs/i2.png";
import i3 from "../assets/imgs/i3.png";
import tag from "../assets/imgs/tag.png";
import getintouch from "../assets/imgs/getintouch.png";

function Insighthub() {
  const [rotatedText, setRotatedText] = useState('');

  useEffect(() => {
    const text = "BAO-LAND-BAO-LAND-BAO-LAND-BAO-LAND-";
    const splitText = text.split("");
    const rotatedChars = splitText.map((char, i) => (
      <span key={i} style={{ transform: `rotate(${i * (360 / text.length)}deg)` }}>{char}</span>
    ));
    setRotatedText(rotatedChars);
  }, []);
  return (
    <>
      <section className="md:p-[5%] p-[3%]" id="features">
        <div className="flex justify-between md:flex-row flex-col-reverse">
          <div className="flex md:w-[80%]  w-full">
            <img src={about} alt="" className="" />

            <div className="relative flex w-full">
              <h1
                className="text-white md:mt-1 mt-0 md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Baoland Insights Hub
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                Baoland Insights Hub
              </h1>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="relative flex justify-end">
              <h1
                className="text-white md:mt-1 -mt-[2px] md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                02
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                02
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-main_color flex justify-between md:mt-[150px] mt-[100px] md:flex-row flex-col-reverse">
          <div className="text-black lg:py-[80px] lg:pl-[80px] md:py-10 md:pl-10 pl-5 md:mb-0 mb-8 md:pr-0 pr-5">
            <h1 className="gilroy_extrabold lg:text-[56px] md:text-[30px] text-[23px]">
              Be the part of our pack.
            </h1>
            <p className="gilroy md:text-2xl text-base md:pt-5 pt-3">
              Join our pack at <span className="uppercase">Baoland</span> and
              unleash the power of community.
            </p>
            <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold md:mt-12 mt-5">
              Buy Baoland Coin
            </button>
          </div>
          <div className="lg:-mt-28 -mt-20">
            <img src={insight} alt="" className="w-full" />
          </div>
        </div>

        <div className="flex pt-8 gap-8 lg:flex-row flex-col">
          <div className="bg-text_color lg:w-2/4 w-full">
            <div className="pt-12 md:pl-20 pl-5">
              <h1 className="text-white gilroy_extrabold  md:text-[56px] text-[36px]">
                Whitepaper
              </h1>
              <button className="capitalize bg-main_color text-black  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold md:mt-10 mt-5">
                Buy Baoland Coin
              </button>
            </div>
            <div className="flex justify-end">
              <img src={whitepaper} alt="" />
            </div>
          </div>

          <div className="bg-text_color lg:w-2/4 w-full">
            <div className="pt-12 md:px-20 px-5">
              <h1 className="text-white gilroy_extrabold  md:text-[56px] text-[36px]">
                Charity
              </h1>
              <p className="gilroy text-white md:text-2xl text-base md:leading-[64px] leading-8 pt-5">
                Join us in our commitment to panda conservation. With every
                transaction, a portion of our proceeds goes directly to
                organizations dedicated to protecting these beloved creatures.
                Together, we can make a real difference in preserving the future
                of pandas and their natural habitats.
              </p>

              <div className="flex justify-between md:mt-[58px] mt-7 items-center">
                <div className="w-[30%]">
                  <img src={i1} alt="" className="" />
                </div>
                <div className="w-[30%]">
                  {" "}
                  <img src={i2} alt="" className="" />
                </div>
                <div className="w-[30%]">
                  {" "}
                  <img src={i3} alt="" className="" />
                </div>
              </div>
              <button className="capitalize bg-main_color text-black  mb-10 md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold xl:mt-[143px] lg:mt-[100px] mt-5 md:mt-[89px]">
                View Imapct
              </button>
            </div>
          </div>
        </div>

        <div className="bg-main_color flex justify-between mt-8 md:flex-row flex-col">
          <div className="lg:w-[25%] w-full">
            <img src={getintouch} alt="" className="w-full" />
          </div>
          <div className="text-black justify-center text-center flex flex-col lg:w-[50%] w-full md:mb-0 mb-14 ">
            <h1 className="gilroy_extrabold lg:text-[56px] md:text-[30px] text-2xl">
              Get In Touch
            </h1>
            <p className="gilroy md:text-2xl text-base md:pt-5 pt-3">
              Connect with us and let's make a difference together.
            </p>
          </div>
          <div className="lg:w-[25%] lg:block hidden"></div>
        </div>
        <div className="flex lg:justify-end  justify-center md:-mt-[80px] lg:-mt-[89px] -mt-10 md:mr-8 mr-0">
          <div className="circle">
            <div className="logo"></div>
            <div className="text">
              {rotatedText}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Insighthub;
