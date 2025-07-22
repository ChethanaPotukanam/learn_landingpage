import React from "react";
import { Check, X, Minus } from "lucide-react";

const CompareSection = () => {
  const features = [
    {
      category: "Learning Experience",
      items: [
        { feature: "Adaptive Pathways", aiprof: "interaction-based", moocs: "Fixed sequence", lms: "Rule-based", authoring: "Manual setup", bootcamps: "Instructor-led" },
        { feature: "Interactive AI Tutor", aiprof: "24/7 conversational", moocs: "None", lms: "Basic chatbots", authoring: "None", bootcamps: "Limited hours" },
        { feature: "Personalization", aiprof: "Deep AI understanding", moocs: "Minimal", lms: "Rule-based", authoring: "Manual config", bootcamps: "One-size-fits-all" }
      ]
    },
    {
      category: "Assessment & Validation",
      items: [
        { feature: "Assessment Type", aiprof: "Reflections AI Graded", moocs: "Multiple choice", lms: "Mixed formats", authoring: "Custom quizzes", bootcamps: "Projects" },
        { feature: "Authenticity", aiprof: "Very High (Hand to brain)", moocs: "Low", lms: "Variable", authoring: "Medium", bootcamps: "High" }
      ]
    },
    {
      category: "Real-time Feedback",
      items: [
        { feature: "Real-time Feedback", aiprof: "Instant AI analysis", moocs: "Automated scoring", lms: "Basic feedback", authoring: "Pre-programmed", bootcamps: "Delayed" }
      ]
    },
    {
      category: "Content Management",
      items: [
        { feature: "Content Creation", aiprof: "Rapid AI-Powered", moocs: "Professional production", lms: "Template-based", authoring: "Manual creation", bootcamps: "Curriculum design" },
        { feature: "Content Updates", aiprof: "Easy AI-updated", moocs: "Slow/expensive", lms: "Manual updates", authoring: "Time-intensive", bootcamps: "Curriculum revision" }
      ]
    },
    {
      category: "Scalability",
      items: [
        { feature: "Scalability", aiprof: "Unlimited", moocs: "High", lms: "Platform-dependent", authoring: "Resource-limited", bootcamps: "Instructor-limited" }
      ]
    },
    {
      category: "Business Integration",
      items: [
        { feature: "Internal Knowledge", aiprof: "Unified SOC/BIM core", moocs: "External only", lms: "Separate systems", authoring: "Manual integration", bootcamps: "Limited integration" }
      ]
    },
    {
      category: "Enterprise Features",
      items: [
        { feature: "Enterprise Features", aiprof: "Built-in", moocs: "Add-on", lms: "Core feature", authoring: "Variable", bootcamps: "Limited" }
      ]
    },
    {
      category: "Cost Efficiency",
      items: [
        { feature: "Cost Efficiency", aiprof: "High ROI", moocs: "Low cost, low value", lms: "Medium cost", authoring: "High upfront", bootcamps: "Very expensive" }
      ]
    }
  ];

  const getStatusIcon = (value: string, isAiProf: boolean = false) => {
    if (isAiProf) {
      return <Check className="w-4 h-4 text-blue-600" />;
    }
    
    const lowerValue = value.toLowerCase();
    if (lowerValue.includes('none') || lowerValue.includes('low') || lowerValue.includes('limited') || lowerValue.includes('slow')) {
      return <X className="w-4 h-4 text-red-500" />;
    }
    if (lowerValue.includes('minimal') || lowerValue.includes('basic') || lowerValue.includes('medium')) {
      return <Minus className="w-4 h-4 text-yellow-500" />;
    }
    return <Check className="w-4 h-4 text-green-500" />;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How Do We <span className="text-blue-600">Compare?</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how ai.prof stacks up against traditional learning solutions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-4 px-6 font-semibold text-blue-600">ai.prof</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">MOOCs</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">LMS/LXPs</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">Authoring Tools</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">Bootcamps</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-50">
                    <td colSpan={6} className="py-3 px-6 font-semibold text-gray-900 text-sm">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(item.aiprof, true)}
                          <span className="text-sm text-blue-600 font-medium">{item.aiprof}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(item.moocs)}
                          <span className="text-sm text-gray-600">{item.moocs}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(item.lms)}
                          <span className="text-sm text-gray-600">{item.lms}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(item.authoring)}
                          <span className="text-sm text-gray-600">{item.authoring}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {getStatusIcon(item.bootcamps)}
                          <span className="text-sm text-gray-600">{item.bootcamps}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Superior Assessment</h3>
            <p className="text-sm text-gray-600">Comprehensive AI evaluation beats traditional testing</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Adaptive Learning</h3>
            <p className="text-sm text-gray-600">Personalized pathways vs one-size-fits-all</p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Unified Platform</h3>
            <p className="text-sm text-gray-600">One AI-powered solution vs multiple systems</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;