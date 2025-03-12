// import React from 'react';
// import { Link } from 'react-router-dom';

// const UnderConstruction = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white px-6 text-center relative">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 bg-[url('/path-to-your-background-image.jpg')] bg-cover bg-center opacity-10"></div>
      
//       {/* Content */}
//       <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse">Page Under Construction</h1>
//       <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
//         We're working hard to bring this page to life. Stay tuned for updates!
//       </p>
      
//       {/* Home Button */}
//       <Link to="/" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
//         Go Back Home
//       </Link>
//     </div>
//   );
// };

// export default UnderConstruction;


import { useNavigate } from "react-router-dom";
import { puc } from "../assets";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white px-6 text-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${puc})` }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse">
        Page Under Construction
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
        We're working hard to bring this page to life. Stay tuned for updates!
      </p>

      {/* Navigate Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-gold text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default UnderConstruction;

