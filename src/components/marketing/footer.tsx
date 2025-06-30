import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#09090B] text-white px-6 py-12 flex flex-col items-center justify-center text-sm relative">
      {/* Top Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img 
               src="/Quide.png" 
               alt="Quide Logo" 
               className="w-6 h-6 object-contain"
            />
            <span className="font-semibold text-white text-base">Quide</span>
          </div>
          <p className="text-muted text-zinc-200 text-sm">
            Quide is a desktop app designed to help job seekers ace
            technical interviews by providing real-time assistance with coding
            questions.
          </p>

          {/* Blinking Status */}
          <div className="flex items-center gap-2 mt-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-white text-xs">All systems online</span>
          </div>

          <p className="text-gray-500 text-xs mt-6">
            © {new Date().getFullYear()} Quide. All rights reserved.
          </p>
        </div>
      </div>

      {/* Giant BG Title (Optional - for effect only) */}
      <h1 className="absolute bottom-0 left-0 right-0 text-[10rem] md:text-[12rem] font-bold text-white/5 text-center select-none pointer-events-none leading-none">
         Quide
      </h1>
    </footer>
  );
};

export default Footer;
