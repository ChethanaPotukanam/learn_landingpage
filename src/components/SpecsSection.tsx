import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block bg-orange-50 border-2 border-orange-300 rounded-full px-8 py-4 shadow-sm">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-brockmann text-orange-900 tracking-tight">
              About Us
            </h2>
          </div>
        </div>
        {/* Header with badge and line */}
        {/* <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Specs</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div> */}
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Our mission is to dismantle the broken, one-size-fits-all model of
              online education. We are a team of educators, technologists, and
              AI researchers committed to unlocking human potential by building
              the future of learning—one that is truly interactive, personal,
              and authentic for everyone.
            </span>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
