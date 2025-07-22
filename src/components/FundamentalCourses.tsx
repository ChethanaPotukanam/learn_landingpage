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
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#3B82F6] shadow-sm hover:shadow-md transition-all duration-300 ease-out p-6 group cursor-pointer flex flex-col h-full"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${course.color} mb-4 transition-all duration-200`}>
                {course.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {course.title}
              </h3>
              
              <div className="flex-grow mb-4">
                <p className="text-gray-600 text-sm line-clamp-3">
                  {course.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{course.students}</span>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg transition-all duration-200 ease-out font-medium border border-gray-300 text-gray-700 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:border-[#3B82F6]">
                  <Lock className="w-4 h-4" />
                  <span>Unlock Course</span>
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