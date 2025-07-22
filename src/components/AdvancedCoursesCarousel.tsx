import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Lock, Eye, Brain, Code, Languages, Zap, Activity, Bot, Palette, Cpu } from "lucide-react";

const AdvancedCoursesCarousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 3,
      title: "Autonomous Systems",
      description: "Advanced course covering specialized topics in robotics.",
      duration: "12 weeks",
      tag: "Robotics",
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 4,
      title: "AI Art & Creativity",
      description: "Advanced course covering specialized topics in creative.",
      duration: "14 weeks",
      tag: "Creative",
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 5,
      title: "Deep Learning Fundamentals",
      description: "Advanced course covering specialized topics in machine learning.",
      duration: "12 weeks",
      tag: "Machine Learning",
      tagColor: "bg-blue-500",
      locked: true
    },
    {
      id: 6,
      title: "Computer Vision Applications",
      description: "Advanced course covering specialized topics in cv.",
      duration: "10 weeks",
      tag: "CV",
      tagColor: "bg-blue-500",
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
      tagColor: "bg-blue-500",
      locked: true
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Auto-scroll functionality
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

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
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {advancedCourses.map((course) => (
                <CarouselItem key={course.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full border border-gray-100 max-w-sm">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index + 1 === current
                    ? "bg-blue-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedCoursesCarousel;