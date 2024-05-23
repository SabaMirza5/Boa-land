import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import about from "../assets/imgs/about.png";
import card1 from "../assets/imgs/card1.png";
import card2 from "../assets/imgs/card2.png";
import card3 from "../assets/imgs/card3.png";
import brushstroke from "../assets/imgs/brushstroke.png";
import arrowright from "../assets/imgs/arrowright.png";
import arrowleft from "../assets/imgs/arrowleft.png";
function About() {
  return (
    <>
      <section className="md:p-[5%] p-[3%] md:mt-96 mt-32" id="about">
        <div className="flex justify-between items-center">
          <div className="flex w-[80%] items-center">
            <img src={about} alt="" className="" />
            <div className="relative flex w-full">
              <h1
                className="text-white md:mt-1 mt-0 md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                About Us
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                About Us
              </h1>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="relative flex justify-end">
              <h1
                className="text-white md:mt-1 -mt-[2px] -ml-[3px]   xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                01
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                01
              </h1>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
            loop:true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
  
          modules={[Pagination]}
          className="mySwiper mt-7 mb-5"
        >
          <SwiperSlide>
          <div className="flip">
   
          <div className="2xl:p-10 p-3 border-gradient front">
              <div className="flex justify-end">
                <img src={arrowright} alt="" />
              </div>

              <img src={card1} alt="" />
              <div className="flex justify-between pt-[80px]">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  01
                </h1>
              </div>
            </div>
            <div className="2xl:p-10 p-3 border-gradient back">
              <div className="flex justify-start">
                <img src={arrowleft} alt="" />
              </div>
              <div className="flex justify-between pt-5">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  01
                </h1>
              </div>
              <img src={brushstroke} alt="" className="relative" />
              <div className="absolute top-[144px] md:left-5 md:right-5 2xl:left-[47px] 2xl:right-[47px] ">
                <p className="gilroy font-normal md:text-[23px] text-lg md:leading-[60px] leading-7 2xl:line-clamp-6 xl:line-clamp-4 line-clamp-4">
                  Introducing Baoland Card – the ultimate solution for accessing
                  your crypto funds in the real world. Load your Baoland tokens
                  and other cryptocurrencies onto our virtual prepaid card,
                  allowing you to spend them anywhere fiat is accepted. Load
                  Now!
                </p>
              </div>
              <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold">
                shop now
              </button>
            </div>
</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flip">
   
          <div className="2xl:p-10 p-3 border-gradient front">
              <div className="flex justify-end">
                <img src={arrowright} alt="" />
              </div>

              <img src={card2} alt="" />
              <div className="flex justify-between pt-[80px]">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  02
                </h1>
              </div>
            </div>
            <div className="2xl:p-10 p-3 border-gradient back">
              <div className="flex justify-start">
                <img src={arrowleft} alt="" />
              </div>
              <div className="flex justify-between pt-5">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  02
                </h1>
              </div>
              <img src={brushstroke} alt="" className="relatives" />
              <div className="absolute top-[144px] md:left-5 md:right-5 2xl:left-[47px] 2xl:right-[47px] ">
                <p className="gilroy font-normal md:text-[23px] text-lg md:leading-[60px] leading-7 2xl:line-clamp-6 xl:line-clamp-4 line-clamp-4">
                  Introducing Baoland Card – the ultimate solution for accessing
                  your crypto funds in the real world. Load your Baoland tokens
                  and other cryptocurrencies onto our virtual prepaid card,
                  allowing you to spend them anywhere fiat is accepted. Load
                  Now!
                </p>
              </div>
              <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold">
                shop now
              </button>
            </div>
</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flip">
   
          <div className="2xl:p-10 p-3 border-gradient front">
              <div className="flex justify-end">
                <img src={arrowright} alt="" />
              </div>

              <img src={card3} alt="" />
              <div className="flex justify-between pt-[80px]">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  03
                </h1>
              </div>
            </div>
            <div className="2xl:p-10 p-3 border-gradient back">
              <div className="flex justify-start">
                <img src={arrowleft} alt="" />
              </div>
              <div className="flex justify-between pt-5">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  03
                </h1>
              </div>
              <img src={brushstroke} alt="" className="relatives" />
              <div className="absolute top-[144px] md:left-5 md:right-5 2xl:left-[47px] 2xl:right-[47px] ">
                <p className="gilroy font-normal md:text-[23px] text-lg md:leading-[60px] leading-7 2xl:line-clamp-6 xl:line-clamp-4 line-clamp-4">
                  Introducing Baoland Card – the ultimate solution for accessing
                  your crypto funds in the real world. Load your Baoland tokens
                  and other cryptocurrencies onto our virtual prepaid card,
                  allowing you to spend them anywhere fiat is accepted. Load
                  Now!
                </p>
              </div>
              <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold">
                shop now
              </button>
            </div>
</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flip">
   
          <div className="2xl:p-10 p-3 border-gradient front">
              <div className="flex justify-end">
                <img src={arrowright} alt="" />
              </div>

              <img src={card1} alt="" />
              <div className="flex justify-between pt-[80px]">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  04
                </h1>
              </div>
            </div>
            <div className="2xl:p-10 p-3 border-gradient back">
              <div className="flex justify-start">
                <img src={arrowleft} alt="" />
              </div>
              <div className="flex justify-between pt-5">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  04
                </h1>
              </div>
              <img src={brushstroke} alt="" className="relatives" />
              <div className="absolute top-[144px] md:left-5 md:right-5 2xl:left-[47px] 2xl:right-[47px] ">
                <p className="gilroy font-normal md:text-[23px] text-lg md:leading-[60px] leading-7 2xl:line-clamp-6 xl:line-clamp-4 line-clamp-4">
                  Introducing Baoland Card – the ultimate solution for accessing
                  your crypto funds in the real world. Load your Baoland tokens
                  and other cryptocurrencies onto our virtual prepaid card,
                  allowing you to spend them anywhere fiat is accepted. Load
                  Now!
                </p>
              </div>
              <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold">
                shop now
              </button>
            </div>
</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flip">
   
          <div className="2xl:p-10 p-3 border-gradient front">
              <div className="flex justify-end">
                <img src={arrowright} alt="" />
              </div>

              <img src={card2} alt="" />
              <div className="flex justify-between pt-[80px]">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  05
                </h1>
              </div>
            </div>
            <div className="2xl:p-10 p-3 border-gradient back">
              <div className="flex justify-start">
                <img src={arrowleft} alt="" />
              </div>
              <div className="flex justify-between pt-5">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  05
                </h1>
              </div>
              <img src={brushstroke} alt="" className="relatives" />
              <div className="absolute top-[144px] md:left-5 md:right-5 2xl:left-[47px] 2xl:right-[47px] ">
                <p className="gilroy font-normal md:text-[23px] text-lg md:leading-[60px] leading-7 2xl:line-clamp-6 xl:line-clamp-4 line-clamp-4">
                  Introducing Baoland Card – the ultimate solution for accessing
                  your crypto funds in the real world. Load your Baoland tokens
                  and other cryptocurrencies onto our virtual prepaid card,
                  allowing you to spend them anywhere fiat is accepted. Load
                  Now!
                </p>
              </div>
              <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold">
                shop now
              </button>
            </div>
</div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flip">
   
          <div className="2xl:p-10 p-3 border-gradient front">
              <div className="flex justify-end">
                <img src={arrowright} alt="" />
              </div>

              <img src={card3} alt="" />
              <div className="flex justify-between pt-[80px]">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  06
                </h1>
              </div>
            </div>
            <div className="2xl:p-10 p-3 border-gradient back">
              <div className="flex justify-start">
                <img src={arrowleft} alt="" />
              </div>
              <div className="flex justify-between pt-5">
                <h1 className="gilroy_extrabold text-black lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5 font-normal">
                  Baoland AI
                </h1>
                <h1 className="gilroy font-extrabold lg:text-[36px] md:text-2xl text-base md:leading-[44px] leading-5">
                  06
                </h1>
              </div>
              <img src={brushstroke} alt="" className="relatives" />
              <div className="absolute top-[144px] md:left-5 md:right-5 2xl:left-[47px] 2xl:right-[47px] ">
                <p className="gilroy font-normal md:text-[23px] text-lg md:leading-[60px] leading-7 2xl:line-clamp-6 xl:line-clamp-4 line-clamp-4">
                  Introducing Baoland Card – the ultimate solution for accessing
                  your crypto funds in the real world. Load your Baoland tokens
                  and other cryptocurrencies onto our virtual prepaid card,
                  allowing you to spend them anywhere fiat is accepted. Load
                  Now!
                </p>
              </div>
              <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold">
                shop now
              </button>
            </div>
</div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default About;





