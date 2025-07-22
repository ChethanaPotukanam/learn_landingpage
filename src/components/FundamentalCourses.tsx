import React from "react";
import { Star, Users, MessageSquare, Stethoscope, Lock } from "lucide-react";

const FundamentalCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Generative AI Mastery",
      description: "Master the fundamentals of generative AI, including GPT models, image generation, and prompt engineering...",
      level: "Intermediate",
      duration: "8 hours",
      rating: 4.9,
      students: "12,500+ students",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      id: 2,
      title: "Prompt Engineering Fundamentals",
      description: "Learn to craft effective prompts for AI systems, optimize responses, and build reliable AI workflows.",
      level: "Beginner",
      duration: "4 hours",
      rating: 4.8,
      students: "18,200+ students",
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 3,
      title: "Intro to AI in Healthcare",
      description: "Explore AI applications in healthcare, from diagnostic tools to personalized treatment recommendations.",
      level: "Beginner",
      duration: "6 hours",
      rating: 4.9,
      students: "8,900+ students",
      icon: <Stethoscope className="w-6 h-6 text-green-500" />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      title: "AI for Everyone",
      description: "Non-technical introduction to AI concepts, applications, and implications for business and society.",
      level: "Beginner",
      duration: "3 hours",
      rating: 4.7,
      students: "25,400+ students",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="courses" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Fundamental Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Build your AI foundation with our expertly crafted courses designed for every skill level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl border border-transparent shadow-sm hover:shadow-xl hover:border-[#3B82F6] hover:-translate-y-3 transition-all duration-500 ease-out p-6 group cursor-pointer flex flex-col relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)',
                height: '420px'
              }}
            >
              {/* Subtle blue glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#3B82F6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${course.color} mb-4 group-hover:scale-110 transition-transform duration-300 ease-out`}>
                  {course.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#3B82F6] transition-colors duration-300 min-h-[56px] flex items-start">
                  {course.title}
                </h3>
                
                <div className="flex-grow mb-6">
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 line-clamp-4">
                    {course.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-transform duration-200 group-hover:scale-105 ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-200">
                      <Star className="w-4 h-4 text-yellow-400 fill-current group-hover:text-yellow-500 transition-colors duration-200" />
                      <span className="text-sm font-medium text-gray-900 group-hover:text-[#3B82F6] transition-colors duration-300">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{course.students}</span>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2.5 px-4 rounded-lg transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg transform relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Lock className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10 font-medium">Unlock Course</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundamentalCourses;