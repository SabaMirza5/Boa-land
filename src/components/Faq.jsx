
import React, { useState } from "react";
import minus from '../assets/imgs/minus.png'
import plus from '../assets/imgs/plus.png'
import about from "../assets/imgs/about.png";
import border from '../assets/imgs/border.png'

function Faq() {
  const [isOpen, setIsOpen] = useState(0); 

  const handleAccordion = (index) => {
    setIsOpen(index === isOpen ? -1 : index);
  };
  const faqs = [
    {
      question: "What are the Baoland tokens?",
      answer:
        "The Baoland token is a utility token used for NFTs and GameFi for everyone who loves <br class='hidden 2xl:inline'/> pandas.It is a panda meme coin built on Binance Smart Chain.",
    },
    {
      question: "Does the Baoland token guarantee value?",
      answer:
      "The Baoland token is a utility token used for NFTs and GameFi for everyone who loves <br class='hidden 2xl:inline'/> pandas.It is a panda meme coin built on Binance Smart Chain.",
    },
    {
      question: "How can I help panda?",
      answer:
      "The Baoland token is a utility token used for NFTs and GameFi for everyone who loves <br class='hidden 2xl:inline'/> pandas.It is a panda meme coin built on Binance Smart Chain.",
    },
    {
      question: "What do you mean by decentralized?",
      answer:
      "The Baoland token is a utility token used for NFTs and GameFi for everyone who loves <br class='hidden 2xl:inline'/> pandas.It is a panda meme coin built on Binance Smart Chain.",
    },
  ];

  return (
    <>
      <section className="p-[5%] md:p-[3%]" id="whitepaper">
        <div className="flex justify-between md:flex-row flex-col-reverse">
          <div className="flex md:w-[80%]  w-full items-center justify-center">
            <img src={about} alt="" className="" />
            <div className="relative flex w-full">
              <h1 className="text-white md:mt-1 mt-0 md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold" style={{ WebkitTextStroke: "1px black" }}>
                FAQ’s.
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                FAQ’s.
              </h1>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="relative flex justify-end">
              <h1 className="text-white md:mt-1 -mt-[2px] md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold" style={{ WebkitTextStroke: "1px black" }}>
                04
              </h1>
              <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[28px] uppercase gilroy_extrabold">
                04
              </h1>
            </div>
          </div>
        </div>

        <div className="faq-container md:pt-12 pt-0 m-auto md:w-[70%] w-full">
          {faqs.map((faq, index) => (
            <div className="accordion" key={index}>
              <div className="accordion-item md:pt-12  pt-8">
                <div className="accordion-title flex md:gap-7 gap-4 items-center" onClick={() => handleAccordion(index)}>
                  {isOpen === index ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                  <p className={`capitalize lg:text-[26px] text-base gilroy font-semibold ${isOpen === index ? 'text-black' : 'text-faq'}`}>
                    {faq.question}
                  </p>
                </div>
                {isOpen === index && (
                  <div className="accordion-content flex md:pt-7 pt-5 md:pl-[80px] pl-7 transform origin-center transition duration-200 ease-out gap-7">
                    <img src={border} alt="" />
                    <p className="text-black font-medium md:text-[23px] text-sm md:leading-[60px] leading-6 2xl:whitespace-pre-line whitespace-normal 2xl:break-words break-normal gilroy" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq;
