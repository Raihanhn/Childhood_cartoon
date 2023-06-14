import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const Description = (props: Props) => {
  return (
    <div className=' bg-white pt-[80px]  ' >
      <div className=" container mx-auto space-y-[120px] ">
        <div className=" pr-[15%]  ">
           <div className=" flex gap-[30px] ">
           <motion.div
           initial={{
                opacity: 0,
                x: -100
            }}
            whileInView={{opacity: 1, x: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
           className=" flex justify-end items-end ">
            <img src="https://d2lv662meabn0u.cloudfront.net/boomerang/dynamic/show/00000000/424/1613e065dc7bbe507fae5420de701799802bd327_1576260693.jpg" alt="" className=' w-[75%]  ' />
           </motion.div>
           <motion.div
           initial={{
                opacity: 0,
                
            }}
            whileInView={{opacity: 1,}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
           className="">
             <h2 className=" text-[26px] leading-[23px] font-semibold mb-[10px]  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
             <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa modi voluptatibus. Assumenda, illum eius.</p>
             <ul className=' mt-[10px] space-y-[15px] ' >
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
             </ul>
           </motion.div>
           </div>
        </div>
        <div className=" pl-[10%] ">
          <div className=" flex gap-[20px] ">
            <motion.div
            initial={{
                opacity: 0,
                
            }}
            whileInView={{opacity: 1,}}
            animate={{opacity: 1}}
            transition={{duration: 0.9}}
            viewport={{once: true}}
            className=" flex justify-start items-start flex-col pt-[20px] ">
            <h2 className=" text-[26px] leading-[23px] font-semibold mb-[10px]  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
             <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa modi voluptatibus.</p>
             <p className=" mt-[10px] w-[700px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium voluptas esse sit, harum culpa ipsa non eligendi earum. Maxime nam culpa perspiciatis. Ipsam alias sint consectetur a iste! Nobis, ratione.</p>
            </motion.div>
            <motion.div
            initial={{
                opacity: 0,
                x: 100
            }}
            whileInView={{opacity: 1, x: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="">
              <img src="https://wallpaperaccess.com/full/2023280.jpg" className=' w-[75%] ' alt="" />
            </motion.div>
          </div>
        </div>

        <div className=" pr-[20%]  ">
           <div className=" flex gap-[50px] ">
           <motion.div
           initial={{
                opacity: 0,
                x: -100
            }}
            whileInView={{opacity: 1, x: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
           className=" flex justify-end items-end ">
            <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/04/07/Weekend/Images/Film_Review_Rio_2-04e59.jpg?t=20170517" alt="" className=' w-[75%]  ' />
           </motion.div>
           <motion.div
           initial={{
                opacity: 0,
                
            }}
            whileInView={{opacity: 1,}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
           className="">
             <h2 className=" text-[26px] leading-[23px] font-semibold mb-[10px]  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
             <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa modi voluptatibus. Assumenda, illum eius.</p>
             <ul className=' mt-[10px] space-y-[15px] ' >
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
             </ul>
           </motion.div>
           </div>
        </div>
        <div className=" pl-[10%] ">
          <motion.div
          initial={{
                opacity: 0,
                
            }}
            whileInView={{opacity: 1, }}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
          className=" flex gap-[20px] ">
            <div className=" flex justify-start items-start flex-col pt-[20px] ">
            <h2 className=" text-[26px] leading-[23px] font-semibold mb-[10px]  ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
             <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto culpa modi voluptatibus.</p>
             <p className=" mt-[10px] w-[700px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium voluptas esse sit, harum culpa ipsa non eligendi earum. Maxime nam culpa perspiciatis. Ipsam alias sint consectetur a iste! Nobis, ratione.</p>
            </div>
            <motion.div
            initial={{
                opacity: 0,
                x: 100
            }}
            whileInView={{opacity: 1, x: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="">
              <img src="https://img.wallpapic.com/i6256-129-733/medium/animated-cartoon-movie-cartoons-animation-wallpaper.jpg" className=' w-[75%] ' alt="" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Description