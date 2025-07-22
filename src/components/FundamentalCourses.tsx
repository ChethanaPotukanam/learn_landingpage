import React from "react";
import { Star, Users, MessageSquare, Stethoscope, Lock } from "lucide-react";

const FundamentalCourses = () => {
  const courses = [
    {
      id: 1,
      title: "AI for Everyone",
      description: "Provides a comprehensive, non-technical overview of AI fundamentals, key concepts, and real-world applications across various industries.",
      level: "Beginner",
      duration: "8 hours",
      rating: 4.9,
      students: "12,500+ students",
      icon:  <Users className="w-6 h-6 text-purple-500" />,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 2,
      title: "Generative AI",
      description: "Explores the foundations and advancements of Generative AI, moving from basic concepts to the latest models like GPT-4 and Stable Diffusion.",
      level: "Intermediate",
      duration: "4 hours",
      rating: 4.8,
      students: "18,200+ students",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 3,
      title: "Intro to AI in Healthcare",
      description: "A specialized course exploring the transformative impact of AI in the healthcare and pharmaceutical sectors, from drug discovery to patient care.",
      level: "Beginner",
      duration: "6 hours",
      rating: 4.9,
      students: "8,900+ students",
      icon: <Stethoscope className="w-6 h-6 text-green-500" />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      title: "Mastering Prompt Engineering",
      description: "A practical, hands-on course focused on communicating effectively with large language models (LLMs) to achieve desired, accurate outputs.",
      level: "Intermediate",
      duration: "3 hours",
      rating: 4.7,
      students: "25,400+ students",
      icon:<MessageSquare className="w-6 h-6 text-blue-500" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="courses" className="py-16 lg:py-24 bg-gradient-to-br from-sky-50 to-blue-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
            Foundational Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-brockmann">
            Build your AI foundation with our expertly crafted courses designed for every skill level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#3B82F6] shadow-sm hover:shadow-md transition-all duration-300 ease-out p-6 group cursor-pointer flex flex-col h-full font-brockmann"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${course.color} mb-4 transition-all duration-200`}>
                {course.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 font-brockmann">
                {course.title}
              </h3>
              
              <div className="flex-grow mb-4">
                <p className="text-gray-600 text-sm line-clamp-3 font-brockmann">
                  {course.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-brockmann ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500 font-brockmann">{course.duration}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 font-brockmann">{course.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-brockmann">{course.students}</span>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg transition-all duration-200 ease-out font-medium border border-gray-300 text-gray-700 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-[#3B82F6] font-brockmann">
                  <span>Explore Course</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundamentalCourses;