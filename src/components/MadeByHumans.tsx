import React from "react";
import { Users } from "lucide-react";

// About Us component with ai.prof branding
const AboutUs = () => {
  return (
    <section id="about-us" className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Heading outside the card */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-brockmann text-gray-900 tracking-tight">
            About Us
          </h2>
        </div>
        
        {/* Content Card with glassy effect */}
        <div className="w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <div className="group relative rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl">
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 min-h-[320px] sm:min-h-[320px] md:min-h-[350px] flex flex-col justify-center rounded-2xl sm:rounded-3xl border-2 border-transparent hover:border-blue-600 transition-all duration-300"
                 style={{
                   background: "linear-gradient(135deg, rgba(219, 234, 254, 0.15) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 0.9) 100%)",
                   backdropFilter: "blur(10px)"
                 }}>
              
              {/* Icon at top center */}
              <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
              </div>

              {/* Mission content */}
              <div className="relative z-10 text-center pt-12 sm:pt-0 pb-12 sm:pb-0">
                <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed font-brockmann px-2 sm:px-0">
                    Our mission is to dismantle the broken, one-size-fits-all model of online education. We are a team of educators, technologists, and AI researchers committed to unlocking human potential by building the future of learning—one that is truly interactive, personal, and authentic for everyone.
                  </p>
                </div>
              </div>
              
              {/* Bottom circle animation */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="inline-block w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;