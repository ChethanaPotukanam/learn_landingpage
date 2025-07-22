import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-brockmann text-gray-900 tracking-tight">
            About Us
          </h2>
        </div>
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
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
