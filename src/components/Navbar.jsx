


// import { useState, useEffect } from 'react';
// import logo from "../assets/imgs/logo.png";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <section className={`${isScrolled ? ' fixed top-0 left-0 right-0 z-50 bg-main_color_bg' : ''}`}>
//         <nav className="lg:flex hidden 2xl:p-7 md:p-3 w-full">
//           <div className="w-1/5 flex justify-center">
//             <a href=""><img src={logo} alt="" className="" /></a>
//           </div>
//           <div className="lg:w-3/5 w-full flex justify-center items-center">
//             <ul className="flex space-x-12 gilroy_light text-lg text-text_color ">
//               <a href="" className="gilroy_extrabold  ">
//                 <li>Home</li>
//               </a>
//               <a href="" className=''>
//                 <li>About</li>
//               </a>
//               <a href="" className=''>
//                 <li>Features</li>
//               </a>
//               <a href="" className=''>
//                 <li>Merch Store</li>
//               </a>
//               <a href="" className=''>
//                 <li>Whitepaper</li>
//               </a>
//             </ul>
//           </div>
//         </nav>


        
//         <nav className=" p-4 lg:hidden w-full">
//           <div className="flex items-center justify-between">
//             <div className="">
//               <a href=""><img src={logo} alt="" className='w-1/2'/></a>
//             </div>
//             <button
//               className="flex text-black focus:outline-none"
//               onClick={toggleMenu}
//             >
//               {isOpen ? (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           <div
//             className={`${isOpen ? 'block' : 'hidden'} lg:items-center text-center mt-6`}>
//               <ul className='items-center justify-between capitalize gilroy_light text-lg  text-text_color font-medium space-y-8'>
//               <a href="" className="gilroy_extrabold">
//                 <li>Home</li>
//               </a>
//               <a href="">
//                 <li>About</li>
//               </a>
//               <a href="">
//                 <li>Features</li>
//               </a>
//               <a href="">
//                 <li>Merch Store</li>
//               </a>
//               <a href="">
//                 <li>Whitepaper</li>
//               </a>
//               </ul>
//           </div>
//         </nav>
//       </section>
//     </>
//   );
// }

// export default Navbar;












import React, { useState, useEffect } from 'react';
import logo from "../assets/imgs/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-main_color_bg' : ''}`}>
      <nav className="lg:flex hidden 2xl:p-7 md:p-3 w-full">
        <div className="w-1/5 flex justify-center">
          <a href="#"><img src={logo} alt="" className="" /></a>
        </div>
        <div className="lg:w-3/5 w-full flex justify-center items-center">
          <ul className="flex space-x-12 gilroy_light text-lg text-text_color">
            <a href="#" className="gilroy_extrabold">
              <li>Home</li>
            </a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
              <li>About</li>
            </a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')}>
              <li>Features</li>
            </a>
            <a href="#merch" onClick={(e) => handleScroll(e, 'merch')}>
              <li>Merch Store</li>
            </a>
            <a href="#whitepaper" onClick={(e) => handleScroll(e, 'whitepaper')}>
              <li>Whitepaper</li>
            </a>
           
          </ul>
        </div>
      </nav>
      <nav className="p-4 lg:hidden w-full">
        <div className="flex items-center justify-between">
          <div>
            <a href="#"><img src={logo} alt="" className='w-1/2' /></a>
          </div>
          <button
            className="flex text-black focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:items-center text-center mt-6`}>
          <ul className='items-center justify-between capitalize gilroy_light text-lg text-text_color font-medium space-y-8'>
            <a href="#" className="gilroy_extrabold">
              <li>Home</li>
            </a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
              <li>About</li>
            </a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')}>
              <li>Features</li>
            </a>
            <a href="#merch" onClick={(e) => handleScroll(e, 'merch')}>
              <li>Merch Store</li>
            </a>
            <a href="#whitepaper" onClick={(e) => handleScroll(e, 'whitepaper')}>
              <li>Whitepaper</li>
            </a>
           
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
