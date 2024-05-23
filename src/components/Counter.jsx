import React, { useEffect, useState } from 'react';
import bgcounter from "../assets/imgs/bgcounter.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import tag from "../assets/imgs/tag.png";

function Counter() {
  const [counterStart, setCounterStart] = useState(false);


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
    <br /><br />
      <section className="border-t-4 border-main_color shadow-lg">
        <div className="relative md:py-9 py-16">
          <img src={bgcounter} alt="" className="w-full md:block hidden" />

          <div className="md:p-[5%] p-[3%] absolute top-0 bottom-0 left-0 right-0">
           
              <ScrollTrigger
                onEnter={() => setCounterStart(true)}
                onExit={() => setCounterStart(false)}>
                  <div className="grid md:grid-cols-3 grid-cols-3">
                  <div className=" text-black 2xl:pl-40 lg:pl-28 pl-0">
                  <p className="gilroy_extrabold lg:text-[36px] md:text-2xl text-[13px] text-black">
                    Total Supply
                  </p>
                  <div className="relative flex w-full">
                    <h1
                      className="text-white md:mt-1 mt-0  md:-ml-[3px] -ml-[2px]  text-[28px] xl:text-[76px] md:text-[56px]  uppercase gilroy_extrabold"
                      style={{ WebkitTextStroke: "1px black" }}
                    >
                      {counterStart && (
                        <CountUp start={0} end={42} duration={2} delay={0} />
                      )}
                      +
                    </h1>
                    <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                      {counterStart && (
                        <CountUp start={0} end={42} duration={2} delay={0} />
                      )}
                      +
                    </h1>
                  </div>
                </div>
                <div className=" text-black 2xl:pl-40 lg:pl-28 pl-0">
                  <p className="gilroy_extrabold lg:text-[36px] md:text-2xl text-[13px] text-black">
                  Buy & Sale Tax
                  </p>
                  <div className="relative flex w-full">
                    <h1
                      className="text-white md:mt-1 mt-0  md:-ml-[3px] -ml-[2px]  text-[28px]  xl:text-[76px] md:text-[56px]  uppercase gilroy_extrabold"
                      style={{ WebkitTextStroke: "1px black" }}
                    >
                      {counterStart && (
                        <CountUp start={0} end={10} duration={2} delay={0} />
                      )}
                      %
                    </h1>
                    <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                      {counterStart && (
                        <CountUp start={0} end={10} duration={2} delay={0} />
                      )}
                      %
                    </h1>
                  </div>
                </div>
                <div className=" text-black 2xl:pl-40 lg:pl-28 pl-0">
                  <p className="gilroy_extrabold lg:text-[36px] md:text-2xl text-[13px] text-black">
                  Baoland Burned
                  </p>
                  <div className="relative flex w-full">
                    <h1
                      className="text-white md:mt-1 mt-0  md:-ml-[3px] -ml-[2px]  text-[28px]  xl:text-[76px] md:text-[56px]  uppercase gilroy_extrabold"
                      style={{ WebkitTextStroke: "1px black" }}
                    >
                      {counterStart && (
                        <CountUp start={0} end={50} duration={6} delay={0} />
                      )}
                      %
                    </h1>
                    <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                      {counterStart && (
                        <CountUp start={0} end={50} duration={6} delay={0} />
                      )}
                      %
                    </h1>
                  </div>
                </div>
                  </div>
                
              </ScrollTrigger>
            
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center md:-mt-[79px] -mt-[40px]">
      {/* <div className="box2 animated-2 infinite-2 rotate-full-2 md:w-40 md:h-40 w-20 h-20">
        <img src={tag} alt="" className="w-full" />
      </div> */}
  
        <div className="circle">
            <div className="logo"></div>
            <div className="text">
              {rotatedText}
            </div>
          </div>
       
    </div>
    </>
  );
}

export default Counter;
