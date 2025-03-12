import React from 'react'
import Layout from '../components/Layout'
import { car4 , hero2} from '../assets'

const Hero = () => {
  return (
    <div className='w-full md:h-screen h-auto pt-[9ch] relative flex items-center justify-between z-30'>
      <Layout className="flex items-center justify-between gap-16 z-50">
{/* Hero Content */}
<div className="md:w-[40%] w-full md:space-y-16 space-y-8">

    <div className="space-y-5">
        <div className="space-y-1">
            <h6 className="text-lg text-white font-medium uppercase">
                New Arrivals
            </h6>
            <h1 className="md:text-7xl sm:text-5xl text-4xl text-white font-bold uppercase leading-[1.3]">
                find your next dream <span className="text-yellow-300">car</span>

            </h1>
        </div>
    </div>

    <div className="flex items-center md:gap-5 gap-3 flex-wrap"></div>
</div>

{/* Hero Image */}
<div className="md:w-[55%] w-full h-auto">
    <img src={hero2} alt="" className="w-full" />
</div>

        </Layout> 

        {/*right car shadow circle */} 
        <div className="absolute md:flex hidden w-[1000px] h-[650px] rounded-full -top-24  -right-96 -rotate-[35deg] bg-gradient-to-r from-gold via-zinc-950 to-transparent"/>
    </div>
  )
}

export default Hero