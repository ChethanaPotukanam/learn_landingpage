import React from "react";
import { Users } from "lucide-react";

// About Us component with ai.prof branding
const AboutUs = () => {
  return (
    <section id="about-us" className="w-full bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading outside the card */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-brockmann text-gray-900 tracking-tight">
            About Us
          </h2>
        </div>
        
        {/* Content Card with glassy effect */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="group relative rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="relative p-6 sm:p-8 md:p-10 min-h-[350px] flex flex-col justify-center rounded-3xl border-2 border-transparent hover:border-blue-600 transition-all duration-300"
                 style={{
                   background: "linear-gradient(135deg, rgba(219, 234, 254, 0.15) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 0.9) 100%)",
                   backdropFilter: "blur(10px)"
                 }}>
              
              {/* Icon at top center */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Mission content */}
              <div className="relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-brockmann">
                    Our mission is to dismantle the broken, one-size-fits-all model of online education. We are a team of educators, technologists, and AI researchers committed to unlocking human potential by building the future of learning—one that is truly interactive, personal, and authentic for everyone.
                  </p>
                </div>
              </div>
              
              {/* Bottom circle animation */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="mt-8 text-center">
            <div className="inline-block w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;