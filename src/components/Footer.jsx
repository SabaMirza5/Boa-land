import React from 'react'
import footer1 from '../assets/imgs/footer1.png'
import footer2 from '../assets/imgs/footer2.png'

function Footer() {
  return (
    <>
      <section className=" bg-black flex md:justify-evenly justify-center md:mt-96 mt-20 p-5">
<div className="2xl:-mt-[150px] lg:-mt-[114px] -mt-[57px] md:w-[10%] w-[20%]">
  <img src={footer1} alt=""  className=''/>
</div>
<div className="flex items-center md:w-[70%] w-[50%] justify-center">
  <h1 className='text-main_color lg:text-2xl md:text-base text-sm  gilroy font-normal'>© 2024 baoland. all rights reserved.</h1>
</div>
<div className="2xl:-mt-[121px] lg:-mt-[95px] -mt-[45px] md:w-[10%] w-[20%]">
  <img src={footer2} alt=""  className=''/>
</div>
      </section>
    </>
  )
}

export default Footer
