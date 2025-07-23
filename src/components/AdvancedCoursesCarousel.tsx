import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const AdvancedCoursesCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect if device supports touch
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Auto-resume after pause on touch devices
  useEffect(() => {
    if (isTouchDevice && isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
      }, 3000); // Resume after 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isPaused, isTouchDevice]);

  const advancedCourses = [
    {
    id: 1,
    title: "Reasoning Models",
    description: "Explore AI models that mimic human thought for complex problem-solving.",
    duration: "12 weeks",
    tag: "Advanced AI",
    tagColor: "bg-blue-500",
    locked: true
  },
  {
    id: 2,
    title: "Data Engineering and Big Data",
    description: "Master database fundamentals, SQL, and integration with ML tools.",
    duration: "10 weeks",
    tag: "Data & MLOps",
    tagColor: "bg-yellow-500",
    locked: true
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description: "Apply advanced techniques like Transformers and BERT to real-world NLP applications.",
    duration: "8 weeks",
    tag: "Advanced AI",
    tagColor: "bg-blue-500",
    locked: true
  },
  {
    id: 4,
    title: "AI in Medical Research and Drug Discovery",
    description: "Dive into how AI is accelerating the pipeline for new therapeutics.",
    duration: "10 weeks",
    tag: "AI in Healthcare",
    tagColor: "bg-green-500",
    locked: true
  },
  {
    id: 5,
    title: "Computer Vision",
    description: "Gain hands-on experience with CNNs, YOLO, and transfer learning for practical applications.",
    duration: "12 weeks",
    tag: "Advanced AI",
    tagColor: "bg-blue-500",
    locked: true
  },
  {
    id: 6,
    title: "Python Programming",
    description: "Build the essential coding skills required for data analysis and AI development.",
    duration: "6 weeks",
    tag: "Foundational",
    tagColor: "bg-indigo-500",
    locked: true
  },
    {
      id: 7,
      title: "Natural Language Processing",
      description: "Advanced course covering specialized topics in nlp.",
      duration: "8 weeks",
      tag: "Advanced AI",
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 8,
      title: "Reinforcement Learning",
      description: "Advanced course covering specialized topics in ml.",
      duration: "14 weeks",
      tag: "Advanced AI",
      tagColor: "bg-blue-500",
      locked: true
    }
  ];

  // Duplicate the courses for seamless looping
  const duplicatedCourses = [...advancedCourses, ...advancedCourses];

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsPaused(false);
    }
  };

  const handleTouchStart = () => {
    if (isTouchDevice) {
      setIsPaused(true);
    }
  };

  const CourseCard = ({ course }) => (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full border border-gray-100">
        {/* Header with tag */}
        <div className="p-4 pb-3">
          <div className="flex items-center justify-between mb-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium text-white ${course.tagColor}`}>
              {course.tag}
            </span>
            <span className="text-xs text-gray-500 font-medium">{course.duration}</span>
          </div>
          
          <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-xs leading-relaxed">
            {course.description}
          </p>
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-orange-500" />
              <span className="text-xs font-medium text-orange-600">Locked</span>
            </div>
            <span className="text-xs text-gray-500">Complete foundations first</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unlock Your Potential: The Full Course Library
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our extensive library offers specialized tracks to build deep expertise after you complete the foundational program.
          </p>
        </div>
        
        <div 
          className="relative max-w-7xl mx-auto overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
        >
          <div 
            className="flex scrolling-container"
            style={{
              animation: 'scroll 40s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              width: 'fit-content'
            }}
          >
            {duplicatedCourses.map((course, index) => (
              <CourseCard key={`${course.id}-${index}`} course={course} />
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
          
          {/* Touch device indicator */}
          {isTouchDevice && isPaused && (
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              Resuming in 3s...
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default AdvancedCoursesCarousel;