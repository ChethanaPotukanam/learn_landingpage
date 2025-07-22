import React from "react";

// About Us component with ai.prof branding
const AboutUs = () => {
  return (
    <section id="about-us" className="w-full bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="relative p-6 sm:p-8 md:p-12 min-h-[400px] sm:min-h-[500px] flex flex-col justify-between"
               style={{
                 background: "linear-gradient(135deg,  #2563eb 0%, #3b82f6 30%, #7dd3fc 60%, #bae6fd  80%, #f0f9ff 100%)"
               }}>
            
            {/* Logo and brand section */}
            <div className="flex items-center text-white mb-8">
              <div className="flex items-center mr-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base">AI</span>
                </div>
              </div>
            </div>
            
            {/* Section heading */}
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                About Us
              </h2>
            </div>
            
            {/* Mission content */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-8">
              <div className="max-w-4xl text-center">
                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium">
                  Our mission is to dismantle the broken, one-size-fits-all model of online education. 
                  We are a team of educators, technologists, and AI researchers committed to unlocking 
                  human potential by building the future of learning—one that is truly interactive, 
                  personal, and authentic for everyone.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <div className="w-16 h-16 rounded-full bg-white/20"></div>
            </div>
            <div className="absolute bottom-20 left-8 opacity-10">
              <div className="w-24 h-24 rounded-full bg-white/20"></div>
            </div>
            
            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;