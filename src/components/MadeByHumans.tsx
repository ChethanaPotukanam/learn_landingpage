import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white pt-0 pb-0 mt-0 mb-0">
      <div className="section-container opacity-100 animate-on-scroll pb-0">
        {/* Decreased height only */}
        <div className="w-full rounded-t-2xl sm:rounded-t-3xl overflow-hidden relative mt-0 sm:mt-2">
          <div 
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[180px] sm:min-h-[220px] flex flex-col justify-between rounded-t-2xl sm:rounded-t-3xl" 
            style={{
              backgroundImage: "url('/background-section3.png')"
            }}
          >
            <div className="flex items-center text-white">
              {/* Removed invert class to keep original blue color */}
              <img src="/ai_prof.png" alt="Logo" className="h-9 sm:h-8 w-auto mr-3" />
              <span className="text-white text-xl font-medium">
              </span>
            </div>
            
            <div style={{
              overflow: "hidden",
              maxHeight: "80px",
              marginTop: "40px"
            }}>
              <h2 
                style={{
                  marginBottom: "-30px",
                  padding: "0px 0px 100px"
                }} 
                className="sm:text-5xl font-playfair text-white italic mt-0 mx-0 font-thin text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl"
              >
                AI * Human
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;