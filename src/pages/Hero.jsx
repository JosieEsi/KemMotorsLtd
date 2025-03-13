// import React from 'react'
// import Layout from '../components/Layout'
// import { car4 , hero2} from '../assets'

// const Hero = () => {
//   return (
//     <div className='w-full md:h-screen h-auto pt-[9ch] relative flex items-center justify-between z-30'>
//       <Layout className="flex items-center justify-between gap-16 z-50 sm:gap-4 ">
// {/* Hero Content */}
// <div className="md:w-[40%] w-full md:space-y-16 space-y-8 ">

//     <div className="space-y-5">
//         <div className="space-y-1">
//             <h6 className="text-lg text-white font-medium uppercase max-sm:text-base">
//                 New Arrivals
//             </h6>
//             <h1 className="md:text-5xl max-sm:text-3xl text-4xl text-white font-bold uppercase leading-[1.3]">
//                 find your next dream <span className="text-yellow-300">car</span>

//             </h1>
//         </div>
//     </div>

//     <div className="flex items-center md:gap-5 gap-3 flex-wrap"></div>
// </div>

// {/* Hero Image */}
// <div className="md:w-[55%] w-full h-auto">
//     <img src={hero2} alt="" className="w-full" />
// </div>

//         </Layout> 

//         {/*right car shadow circle */} 
//         <div className="absolute md:flex hidden w-[1000px] h-[650px] rounded-full -top-24  -right-96 -rotate-[35deg] bg-gradient-to-r from-gold via-zinc-950 to-transparent"/>
//     </div>
//   )
// }

// export default Hero

// import React from 'react';
// import Layout from '../components/Layout';
// import { car4, hero2 } from '../assets';

// const Hero = () => {
//   return (
//     <div className="w-full min-h-screen pt-[9ch] relative flex items-center justify-center z-30">
//       <Layout className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 z-50">
        
//         {/* Hero Content */}
//         <div className="md:w-[45%] w-full text-center md:text-left space-y-8">
//           <div className="space-y-3">
//             <h6 className="text-lg text-white font-medium uppercase max-sm:text-base">
//               New Arrivals
//             </h6>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase leading-tight">
//               Find your next dream <span className="text-yellow-300">car</span>
//             </h1>
//           </div>

//           <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
//             {/* Add CTA buttons here if needed */}
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="md:w-[50%] w-full h-auto flex justify-center">
//           <img src={hero2} alt="Car" className="w-[90%] md:w-full max-w-[700px]" />
//         </div>

//       </Layout>

//       {/* Right car shadow circle */}
//       <div className="absolute hidden md:block w-[700px] lg:w-[900px] xl:w-[1100px] h-[500px] lg:h-[650px] rounded-full -top-20 lg:-top-24 -right-48 lg:-right-72 xl:-right-96 -rotate-[35deg] bg-gradient-to-r from-gold via-zinc-950 to-transparent opacity-50" />
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import Layout from '../components/Layout';
// import { car4, hero2 } from '../assets';

// const Hero = () => {
//   return (
//     <div className="w-full min-h-screen pt-[9ch] relative flex items-center justify-center z-30">
//       {/* Shadow Circle (Visible on all screens) */}
//       <div className="absolute w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 
//           rounded-full -top-10 sm:-top-16 md:-top-24 -right-24 md:-right-48 xl:-right-96 
//           -rotate-[35deg] bg-gradient-to-r from-gold via-zinc-950 to-transparent opacity-40 sm:opacity-50 z-0" />

//       <Layout className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 z-50 relative">
        
//         {/* Hero Content */}
//         <div className="md:w-[45%] w-full text-center md:text-left space-y-8">
//           <div className="space-y-3">
//             <h6 className="text-lg text-white font-medium uppercase max-sm:text-base">
//               New Arrivals
//             </h6>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase leading-tight">
//               Find your next dream <span className="text-yellow-300">car</span>
//             </h1>
//           </div>

//           <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
//             {/* Add CTA buttons here if needed */}
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="md:w-[50%] w-full h-auto flex justify-center">
//           <img src={hero2} alt="Car" className="w-[90%] sm:w-[80%] md:w-full max-w-[700px]" />
//         </div>

//       </Layout>
//     </div>
//   );
// };

// export default Hero;


// import React, { useState, useEffect } from 'react';
// import Layout from '../components/Layout';
// import { car1, car2, car3, car4, hero2 } from '../assets';

// const Hero = () => {
//   // Add more images to the array if needed
//   const images = [hero2, car4, car3, car2, car1];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-change slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div className="w-full min-h-screen pt-[9ch] relative flex items-center justify-center z-30">
//       {/* Shadow Circle (Visible on all screens) */}
//       <div className="absolute w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 
//           rounded-full -top-10 sm:-top-16 md:-top-24 -right-24 md:-right-48 xl:-right-96 
//           -rotate-[35deg] bg-gradient-to-r from-gold via-zinc-950 to-transparent opacity-40 sm:opacity-50 z-0" />

//       <Layout className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 z-50 relative">
        
//         {/* Hero Content */}
//         <div className="md:w-[45%] w-full text-center md:text-left space-y-8">
//           <div className="space-y-3">
//             <h6 className="text-lg text-white font-medium uppercase max-sm:text-base">
//               New Arrivals
//             </h6>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase leading-tight">
//               Find your next dream <span className="text-yellow-300">car</span>
//             </h1>
//           </div>
//           <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
//             {/* Add CTA buttons here if needed */}
//           </div>
//         </div>

//         {/* Hero Slideshow */}
//         <div className="md:w-[50%] w-full h-auto flex justify-center relative">
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index}`}
//               className={`absolute transition-opacity duration-1000 ease-in-out w-[90%] sm:w-[80%] md:w-full max-w-[700px] ${
//                 index === currentIndex ? 'opacity-100' : 'opacity-0'
//               }`}
//             />
//           ))}
//         </div>

//       </Layout>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { car1, car2, car3, car4, car6, hero2 } from '../assets';

const Hero = () => {
  // Array of images for the slideshow
  const images = [hero2, car3, car2, car1,];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center z-30">
      {/* Shadow Circle (Visible on all screens) */}
      <div className="absolute pointer-events-none w-[400px] h-[300px] sm:w-[600px] sm:h-[450px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1500px]
          rounded-full -top-10 sm:-top-16 md:-top-24 -right-24 md:-right-48 xl:-right-96 
          -rotate-[35deg] bg-gradient-to-r from-gold via-zinc-950 to-transparent opacity-40 sm:opacity-50 z-0" />



      <Layout className="flex flex-col-reverse md:flex-row items-center justify-between max-sm:gap-0 gap-10 md:gap-20 z-50 relative">
        
        {/* Hero Content */}
        <div className="md:w-[45%] w-full text-center md:text-left space-y-4">
          <div className="space-y-1">
            <h6 className="text-lg text-white font-medium uppercase max-sm:text-base">
              New Arrivals
            </h6>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold uppercase leading-tight">
              Find your next dream <span className="text-yellow-300">car</span>
            </h1>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
            {/* Add CTA buttons here if needed */}
          </div>
        </div>

        {/* Hero Slideshow */}
        <div className="md:w-[50%] w-full flex justify-center relative">
          {/* Container with fixed dimensions */}
          <div className="relative w-[90%] sm:w-[80%] md:w-full max-w-[700px] h-80 sm:h-[400px] md:h-[450px]">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`absolute inset-0 object-contain transition-opacity duration-1000 ease-in-out w-full h-full ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

      </Layout>
    </div>
  );
};

export default Hero;


