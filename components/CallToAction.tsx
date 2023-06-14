import React from 'react'

type Props = {}

const CallToAction = (props: Props) => {
  return (
    <div className=' h-[40vh]  ' >
       <img src="https://i.pinimg.com/originals/72/21/5d/72215da5a12b09ecc6e5ab64ff906dc4.jpg" alt="" className='w-full h-[100%] fixed top-[0%] left-0 z-[-10] ' />
       <div className="w-full h-[100%] bg-black/[0.6] flex justify-center items-center ">
        <div className=" text-white flex items-center justify-center flex-col space-y-[15px]  ">
            <h1 className=" text-[24px] font-bold  ">Call To Action</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt reiciendis illum a similique ratione ea suscipit fugiat modi magni delectus?</p>
            <button className=' border-white border-[1.5px] py-[10px] px-[20px] rounded-[4px] ' >Call To Action</button>
        </div>
       </div>
    </div>
  )
}

export default CallToAction