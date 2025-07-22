import React from "react";

// Updated MadeByHumans component with ai.prof branding
const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="relative p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
               style={{
                 background: "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 30%, #7dd3fc 60%, #3b82f6 80%, #2563eb 100%)"
               }}>
            
            {/* Logo and brand section */}
            <div className="flex items-center text-white">
              {/* ai.prof logo image */}
              <div className="flex items-center mr-4">
                <img 
                  src="/ai_prof.png" 
                  alt="ai.prof logo" 
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </div>
            
            {/* Main heading */}
            <div style={{
              overflow: "hidden",
              maxHeight: "80px",
              marginTop: "40px"
            }}>
              <h2 style={{
                marginBottom: "-30px",
                padding: "0px 0px 100px"
              }} className="sm:text-5xl font-bold text-white mt-0 mx-0 text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl">
                Made By AI & Human
              </h2>
            </div>
            
            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;