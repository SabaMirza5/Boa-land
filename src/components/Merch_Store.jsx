
import mug from "../assets/imgs/mug.png";
import tshirt3 from "../assets/imgs/tshirt3.png";
import about from "../assets/imgs/about.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

function Merch_Store() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  
  return (
    <>
      <section className="md:p-[5%] p-[3%]" id="merch">
        <div className="flex md:flex-row flex-col">
          <div className="relative flex md:w-[20%] w-full items-center">
            <h1
              className="text-white md:mt-1 -mt-[2px] md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold"
              style={{ WebkitTextStroke: "1px black" }}
            >
              03
            </h1>
            <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
              03
            </h1>
          </div>

          <div className="flex md:w-[80%] w-full">
            <div className="relative flex w-full justify-end items-center">
              <h1
                className="text-white md:mt-1 mt-[4px] md:-ml-[3px] -ml-[4px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Merch Store.
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                Merch Store.
              </h1>
            </div>
            <img src={about} alt="" className="" />
          </div>
        </div>
        <div className="md:text-center text-start">
          <p className="gilroy md:text-lg text-base  lg:leading-[80px] md:leading-[60px] leading-8 font-medium text-[#666666]">
            Browse through our diverse selection of high-quality merchandise,
            meticulously designed to capture the essence of panda adoration.
            <br className="2xl:block hidden" />
            Whether you're searching for trendy clothing, cute accessories, or
            unique gifts, our store has something special for everyone. Every{" "}
            <br className="2xl:block hidden" /> purchase contributes to our
            ongoing efforts in panda conservation, making each item not just a
            fashion statement, but also a symbol of{" "}
            <br className="2xl:block hidden" /> your commitment to protecting
            these cherished creatures. Shop now and join us in making a
            difference for pandas worldwide!
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper2 md:pt-32 pt-9 md:pb-12 pb-7 merch-store "
          onSlideChange={handleSlideChange}
          onActiveIndexChange={(swiper) => {
            const centerIndex = Math.floor(swiper.slides.length / 2);
            swiper.slides.forEach((slide, index) => {
              if (index === centerIndex) {
                slide.classList.add("centered-slide");
              } else {
                slide.classList.remove("centered-slide");
              }
            });
          }}
        >
          <SwiperSlide>
            <div className="2xl:p-10 p-3 md:m-0 m-8 border-gradient  flex justify-center items-center 2xl:h-[600px] md:h-[400px] h-[300px]">
              <img src={mug} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:p-10 p-3 md:m-0 m-8 border-gradient  flex justify-center items-center 2xl:h-[600px] md:h-[400px] h-[300px]">
              <img src={tshirt3} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="2xl:p-10 p-3 md:m-0 m-8 border-gradient  flex justify-center items-center 2xl:h-[600px] md:h-[400px] h-[300px]">
              <img src={mug} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" md:p-10 p-3  md:m-0 m-8 border-gradient  flex justify-center items-center 2xl:h-[600px] md:h-[400px] h-[300px]">
              <img src={tshirt3} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="2xl:p-10 p-3 md:m-0 m-8 border-gradient 2xl:h-[600px] md:h-[400px] h-[300px] flex justify-center items-center">
              <img src={tshirt3} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="2xl:p-10 p-3 md:m-0 m-8 border-gradient 2xl:h-[600px] md:h-[400px] h-[300px] flex justify-center items-center">
              <img src={mug} alt="" className="w-full h-full" />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center items-center">
          <button className="capitalize bg-black text-main_color  md:text-xl text-base md:py-4 py-2 px-[30px] gilroy_extrabold md:mt-12 mt-5">
            shop now
          </button>
        </div>
      </section>
    </>
  );
}

export default Merch_Store;
