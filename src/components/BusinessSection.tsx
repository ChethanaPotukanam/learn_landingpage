import React from 'react';
import { TrendingUp, Zap, BarChart3, Users } from 'lucide-react';

const BusinessSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Upskill at Scale",
      description: "Deploy our extensive course library to build critical AI capabilities across your workforce, with adaptive pathways for every employee."
    },
    {
      icon: Zap,
      title: "Rapid Custom Content Creation",
      description: "Leverage our AI-Powered Content Creation Engine to build and update your own bespoke training in a fraction of the time."
    },
    {
      icon: BarChart3,
      title: "Measure What Matters",
      description: "Move beyond completion rates with authentic, dialogue-based assessment that provides deep insights into employee capabilities and training ROI."
    },
    {
      icon: Users,
      title: "Boost Engagement & Retention",
      description: "Demonstrate a commitment to employee growth with a modern, effective learning experience that boosts morale and builds a more capable workforce."
    }
  ];

  return (
    <section id="forbusiness" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4 font-brockmann">
            Address Your Most Pressing L&D Challenges
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-brockmann">
            From content staleness and slow creation to fragmented systems and a lack of authentic assessment, 
            we provide a unified, intelligent solution.
          </p>
        </div>
        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-transparent border-2 border-blue-300 text-blue-600 font-semibold font-brockmann py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 backdrop-blur-sm hover:backdrop-blur-md">
            Enterprise Solutions
          </button>
        </div>
        <br/><br/>
        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-b from-blue-50/80 to-blue-100/80 border-2 border-blue-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-400/70 backdrop-blur-sm"
                style={{
                  borderTopLeftRadius: '100px',
                  borderTopRightRadius: '100px',
                  borderBottomLeftRadius: '0',
                  borderBottomRightRadius: '0'
                }}
              >
                <div className="p-8 h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-6 p-3 rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-tight font-brockmann">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow font-brockmann">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;