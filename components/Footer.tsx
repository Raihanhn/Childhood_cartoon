import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className=' bg-[#0E1D34] ' >
        <div className=" container mx-auto pt-[50px] pb-[70px]  ">
            <div className=" flex gap-[30px] ">
                <div className=" basis-[30%] text-white  ">
                    <h1 className=" text-[30px] font-bold mb-[10px] ">Logo</h1>
                    <p className=" text-[14px] leading-[21px] font-normal mb-[30px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat.</p>
                    <div className=" flex items-center gap-[15px] ">
                        <div className=" h-[40px] w-[40px] border rounded-full cursor-pointer flex items-center justify-center "> <BsFacebook /> </div>
                        <div className=" h-[40px] w-[40px] border rounded-full cursor-pointer flex items-center justify-center "> <BsLinkedin /> </div>
                        <div className=" h-[40px] w-[40px] border rounded-full cursor-pointer flex items-center justify-center "> <BsTwitter /> </div>
                    </div>
                </div>
                <div className=" basis-[70%] grid grid-cols-3 gap-[30px] text-white ">
                    <div className=" space-y-[15px] ">
                        <h2 className=" text-[16px] leading-[19px] font-bold ">Useful Links</h2>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Home</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >About us</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Services</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Term of Services</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Privacy policy</p>
                    </div>
                    <div className="space-y-[15px]">
                        <h1 className=" text-[16px] leading-[19px] font-bold ">Our Services</h1>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Web Design</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >web Development</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Product management</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Marketing</p>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >Graphic Design</p>
                    </div>
                    <div className="space-y-[15px]">
                        <h2 className=" text-[16px] leading-[19px] font-bold " >Contact Us</h2>
                        <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' >A108 Adam Street
                            Chittagong, ctg 1204
                            Bangladesh
                        </p>
                        <div className="">
                            <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' ><span className=' font-bold ' > Phone:</span> +880 1716243690</p>
                            <p className=' text-[16px] leading-[19px] font-normal opacity-[0.8] ' ><span className=' font-bold ' > Email:</span> raihanhn20@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className = "container mx-auto flex items-center justify-center py-[15px] text-white ">
        <p   className = " text-[16px] leading-[19px] font-normal ">Copyright All Right Reserved |
        Designed by Raihan
        </p>
        </div>
    </div>
  )
}

export default Footer