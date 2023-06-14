import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const Ourservices = (props: Props) => {
  return (
    <div className='bg-white' >
        <div className="container mx-auto pt-[80px] pb-[80px]  ">
            <div className="flex items-center justify-center flex-col ">
                <h1 className=" text-[32px] font-bold text-[#0E1D34] ">Our Services</h1>
                <div className=" h-[4px] w-[40px] mt-[8px] bg-[#0E1D34] "></div>
            </div>
            <div className="grid grid-cols-3 gap-[30px] mt-[50px]  ">
                <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{opacity: 1, y: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7}}
                viewport={{once: true}}
                className=" border shadow-lg p-[5px]  ">
                    <img src="https://i0.wp.com/auralcrave.com/wp-content/uploads/2022/07/Up-Quotes.jpeg?fit=1200%2C675&ssl=1" alt="" />
                    <h2 className=" text-[24px] font-semibold pl-[15px] pt-[15px]  ">Up</h2>
                    <p className=" text-[15px] text-gray-600 pl-[15px] pb-[10px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deleniti, perferendis eaque delectus omnis veritatis repellat sint vitae voluptates.</p>
                </motion.div>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{opacity: 1, y: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7, delay:0.2}}
                viewport={{once: true}}
                className=" border shadow-lg p-[5px]  ">
                    <img src="https://variety.com/wp-content/uploads/2015/02/spider-mannew.jpeg" alt="" />
                    <h2 className=" text-[24px] font-semibold pl-[15px] pt-[15px]  ">Spiderman</h2>
                    <p className=" text-[15px] text-gray-600 pl-[15px] pb-[10px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deleniti, perferendis eaque delectus omnis veritatis repellat sint vitae voluptates.</p>
                </motion.div>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{opacity: 1, y: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7, delay:0.4}}
                viewport={{once: true}}
                className=" border shadow-lg p-[5px]  ">
                    <img src="https://images3.alphacoders.com/723/72397.jpg" alt="" />
                    <h2 className=" text-[24px] font-semibold pl-[15px] pt-[15px]  ">Batman</h2>
                    <p className=" text-[15px] text-gray-600 pl-[15px] pb-[10px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deleniti, perferendis eaque delectus omnis veritatis repellat sint vitae voluptates.</p>
                </motion.div>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{opacity: 1, y: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7, delay:0.4}}
                viewport={{once: true}}
                className=" border shadow-lg p-[5px]  ">
                    <img src="https://images.hdqwalls.com/wallpapers/superman-2020-07.jpg" alt="" />
                    <h2 className=" text-[24px] font-semibold pl-[15px] pt-[15px]  ">Superman</h2>
                    <p className=" text-[15px] text-gray-600 pl-[15px] pb-[10px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deleniti, perferendis eaque delectus omnis veritatis repellat sint vitae voluptates.</p>
                </motion.div>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{opacity: 1, y: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7, delay:0.3}}
                viewport={{once: true}}
                className=" border shadow-lg p-[5px]  ">
                    <img src="https://wallpaperaccess.com/full/1198092.jpg" alt="" />
                    <h2 className=" text-[24px] font-semibold pl-[15px] pt-[15px]  ">Tom & Jerry</h2>
                    <p className=" text-[15px] text-gray-600 pl-[15px] pb-[10px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deleniti, perferendis eaque delectus omnis veritatis repellat sint vitae voluptates.</p>
                </motion.div>
                <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{opacity: 1, y: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.7, delay:0.3}}
                viewport={{once: true}}
                className=" border shadow-lg p-[5px]  ">
                    <img src="https://sportshub.cbsistatic.com/i/2023/05/19/196e9120-5ac0-4b28-8640-2f43f5632a10/ben-10.jpg" alt="" />
                    <h2 className=" text-[24px] font-semibold pl-[15px] pt-[15px]  ">Ben 10</h2>
                    <p className=" text-[15px] text-gray-600 pl-[15px] pb-[10px] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi amet deleniti, perferendis eaque delectus omnis veritatis repellat sint vitae voluptates.</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Ourservices