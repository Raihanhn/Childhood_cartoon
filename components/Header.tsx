import React from 'react'

import dynamic from 'next/dynamic';

type Props = {}

const Header = (props: Props) => {
  const CountUp = dynamic(() => import('react-countup'), { ssr: false });
  
  return (
    <div className = 'bg-[#0E1D34]' >
    <div className = "container mx-auto pt-[20px] text-white">
    <div className = "flex items-center justify-between">
    <div className = "">
    <h1  className = 'text-[32px] font-semibold cursor-pointer' >Logo</h1>
            </div>
            <div   className = "flex items-center gap-[50px]">
            <ul    className = 'flex items-center gap-[40px] cursor-pointer font-semibold' >
            <li><a href      = "">Home</a></li>
            <li><a href      = "">About</a></li>
            <li><a href      = "">Service</a></li>
            <li><a href      = "">Pricing</a></li>
            <li><a href      = "">Dropdown</a></li>
            <li><a href      = "">Contact</a></li>
                </ul>
                <button className = 'bg-[#2756FF] py-[10px] px-[20px] text-[white] text-[16px] font-semibold tracking-[0.4px] cursor-pointer rounded-[7px] ' > Get a Quote</button>
            </div>
    </div>

        <div className = "grid grid-cols-2 mt-[40px] pb-[40px] ">
        <div className = "">
        <div className = "text-white">
            <h1 className=' text-[48px] leading-[58px] w-[60%] font-bold mt-[50px]  ' >Your Memorable Childhood All in one</h1>
            <p className=' text-[15px] leading-[23px] font-normal mt-[30px] w-[80%] ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam nisi architecto? Eum possimus ex deleniti pariatur ratione! Quibusdam quam iste, voluptates ratione vitae porro veritatis fuga repellendus harum consequuntur!</p>
            <div   className = " bg-white w-[60%] pr-[4px] rounded-[6px] flex items-center mt-[30px] ">
            <input type      = "text" className=' bg-white outline-none w-full text-black py-[17px] pl-[14px] ' placeholder='Favorite cartoon' />
              <button className=' bg-[#2756FF] py-[12px] px-[20px] text-white rounded-[4px]  ' >Search</button>
            </div>
          </div>
          <div className="grid grid-cols-4 mt-[30px] pl-[20px] ">
            <div className=" space-y-[10px] flex flex-col items-start justify-start ">
              <h2 className=' text-[32px] font-semibold ' ><CountUp start={0} end={1230} enableScrollSpy /></h2>
              <div className=" h-[4px] w-[20px] bg-[#2756FF] "></div>
              <p>Clients</p>
            </div>
            <div className=" space-y-[10px] flex flex-col items-start justify-start ">
              <h2 className=' text-[32px] font-semibold ' ><CountUp start={0} end={650} enableScrollSpy /></h2>
              <div className=" h-[4px] w-[20px] bg-[#2756FF] "></div>
              <p>Customer</p>
            </div>
            <div className=" space-y-[10px] flex flex-col items-start justify-start ">
              <h2 className=' text-[32px] font-semibold ' ><CountUp start={0} end={879} enableScrollSpy /></h2>
              <div className=" h-[4px] w-[20px] bg-[#2756FF] "></div>
              <p>Support</p>
            </div>
            <div className=" space-y-[10px] flex flex-col items-start justify-start ">
              <h2 className=' text-[32px] font-semibold ' ><CountUp start={0} end={1576} enableScrollSpy /></h2>
              <div className=" h-[4px] w-[20px] bg-[#2756FF] "></div>
              <p>Workers</p>
            </div>
          </div>

        </div>
        <div className = " flex items-center justify-end ">
        <img src       = "https://freepngimg.com/download/cartoon/36403-7-cartoon-photos.png" alt = "" />
          </div>
        </div>

        </div>
    </div>
  )
}

export default Header