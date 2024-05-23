import React, { useEffect, useState } from 'react';
import headerimg from "../assets/imgs/headerimg.png";
import tag from "../assets/imgs/tag.png";
import line from "../assets/imgs/line.png";


function Header() {
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
    <br /><br /><br />
      <section className="p-[5%]">
        <div className="relative justify-center flex">
          <h1
            className="text-white md:mt-1 mt-0 -ml-[3px]   xl:text-[76px] md:text-[56px] text-[30px] uppercase gilroy_extrabold"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Welcome to
          </h1>
          <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[30px] uppercase gilroy_extrabold">
            Welcome to
          </h1>
        </div>

        <div className=" flex flex-col justify-center items-center -mt-11">
          <div className="flex md:w-[54%] w-full">
            <img src={headerimg} alt="" className="-mb-6 md:ml-0 -ml-7" />
          </div>

          <div className="bg-main_color relative justify-center flex md:w-[54%] w-full transform -skew-y-3">
            <h1
              className="text-transparent md:mt-1 mt-0 -ml-[3px]  xl:text-[76px] md:text-[56px] text-[36px]  uppercase gilroy_extrabold"
              style={{ WebkitTextStroke: "1px black" }}
            >
              Baoland
            </h1>
            <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[36px] uppercase gilroy_extrabold ">
              Baoland
            </h1>
          </div>
        </div>

        <div className="relative justify-center flex text-center">
          <h1
            className="text-white md:mt-1 mt-0 md:-ml-[3px] -ml-[2px] xl:text-[76px] md:text-[56px] text-[30px] uppercase gilroy_extrabold"
            style={{ WebkitTextStroke: "1px black" }}
          >
            Where Pandas Meet Crypto!
          </h1>
          <h1 className="absolute  text-black xl:text-[76px] md:text-[56px] text-[30px] uppercase gilroy_extrabold">
            Where Pandas Meet Crypto!
          </h1>
        </div>
        <div className="flex lg:justify-start justify-center">
        <div className="circle">
            <div className="logo"></div>
            <div className="text">
              {rotatedText}
            </div>
          </div>
        </div>
         
        
       
      </section>
      <img src={line} alt=""  className="w-full absolute pc:-mt-[289px] md:-mt-[98px]  z-30 lg:block hidden"/>

































  
    </>
  );
}

export default Header;










// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   // Get initial theme value from localStorage or default to system preference
//   const getInitialTheme = () => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) {
//       return storedTheme;
//     } else {
//       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     }
//   };

//   // State to manage the theme
//   const [theme, setTheme] = useState(getInitialTheme);

//   // Effect to apply the theme
//   useEffect(() => {
//     if (theme === 'dark') {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else if (theme === 'light') {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     } else {
//       localStorage.removeItem('theme');
//       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         document.documentElement.classList.add('dark');
//       } else {
//         document.documentElement.classList.remove('dark');
//       }
//     }
//   }, [theme]);

//   // Handler to toggle theme
//   const toggleTheme = () => {
//     if (theme === 'dark') {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   };

//   // Handler to revert to system theme
//   const removeTheme = () => {
//     setTheme('system');
//   };

//   return (
//     <div>
//       <button className="js-theme-toggle dark:text-red-400" onClick={toggleTheme}>
//         Toggle Theme
//       </button>
//       <button className="js-theme-remove" onClick={removeTheme}>
//         Revert to System Theme
//       </button>
//     </div>
//   );
// };

// export default Header;
