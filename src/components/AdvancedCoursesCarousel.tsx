import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";

const AdvancedCoursesCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const advancedCourses = [
    {
      id: 1,
      title: "Conversational AI",
      description: "Advanced course covering specialized topics in nlp.",
      duration: "8 weeks",
      tag: "NLP",
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 2,
      title: "AI in Drug Discovery",
      description: "Advanced course covering specialized topics in healthcare.",
      duration: "10 weeks",
      tag: "Healthcare",
      tagColor: "bg-green-500",
      locked: true
    },
    {
      id: 3,
      title: "Autonomous Systems",
      description: "Advanced course covering specialized topics in robotics.",
      duration: "12 weeks",
      tag: "Robotics",
      tagColor: "bg-purple-500",
      locked: true
    },
    {
      id: 4,
      title: "AI Art & Creativity",
      description: "Advanced course covering specialized topics in creative.",
      duration: "14 weeks",
      tag: "Creative",
      tagColor: "bg-pink-500",
      locked: true
    },
    {
      id: 5,
      title: "Deep Learning Fundamentals",
      description: "Advanced course covering specialized topics in machine learning.",
      duration: "12 weeks",
      tag: "Machine Learning",
      tagColor: "bg-indigo-500",
      locked: true
    },
    {
      id: 6,
      title: "Computer Vision Applications",
      description: "Advanced course covering specialized topics in cv.",
      duration: "10 weeks",
      tag: "CV",
      tagColor: "bg-teal-500",
      locked: true
    },
    {
      id: 7,
      title: "Natural Language Processing",
      description: "Advanced course covering specialized topics in nlp.",
      duration: "8 weeks",
      tag: "NLP",
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 8,
      title: "Reinforcement Learning",
      description: "Advanced course covering specialized topics in ml.",
      duration: "14 weeks",
      tag: "ML",
      tagColor: "bg-red-500",
      locked: true
    }
  ];

  // Duplicate the courses for seamless looping
  const duplicatedCourses = [...advancedCourses, ...advancedCourses];

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
          
          <h3 className="text-base font-semibold text-gray-900 mb-2 leading-tight line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
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
            63+ Advanced Courses Await You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock these specialized courses after completing the foundational program
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div 
            className="flex"
            style={{
              animation: isPaused ? 'none' : 'scroll 40s linear infinite',
              width: 'fit-content'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedCourses.map((course, index) => (
              <CourseCard key={`${course.id}-${index}`} course={course} />
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Hover to pause • Continuous scrolling
          </p>
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