// my code


import React from "react";
import Star from "../assets/imgs/Star.png";

function Mymarquee() {
  return (
    <>
      <section className="lg:mt-36 mt-5">
        <div className="relative">
          <marquee
            behavior="scroll"
            direction="right"
            className=" transform -skew-y-6 bg-black z-30 absolute top-0 left-0 right-0 mrq"
          >
            <div className="flex space-x-8 py-2 items-center justify-center">
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>
              <img src={Star} alt="" className="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>
            </div>
          </marquee>
          <marquee
            behavior="scroll"
            direction="left"
           
            className="transform mrq skew-y-6 bg-black z-30 absolute top-0 left-0 right-0"
          >
            <div className="flex space-x-8 py-2 justify-center items-center">
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>
              <img src={Star} alt="" className="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>
              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>

              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>

              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>

              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                BAO.LAND
              </h1>

              <img src={Star} alt="" />
              <h1 className="gilroy_extrabold md:text-[34px] text-base text-white uppercase">
                CRYPTO
              </h1>

              <img src={Star} alt="" />
            </div>
          </marquee>
        </div>
      </section>
    </>
  );
}

export default Mymarquee;



















