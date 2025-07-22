import React from "react";
import { Check, X, Minus } from "lucide-react";

const CompareSection = () => {
  const features = [
    {
      feature: "Personalization Start",
      aiprof: "Adaptive Pathways (Interaction-based)",
      moocs: "Generic start / Basic pre-assessment",
      lms: "User profile / Role-based",
      authoring: "N/A (Content is static)",
      bootcamps: "Cohort-based",
    },
    {
      feature: "Learning Adaptation",
      aiprof: "Interactive AI Tutor (Interventions, Dialogue)",
      moocs: "Recommendations / Fixed paths",
      lms: "Rule-based paths",
      authoring: "Static content",
      bootcamps: "Instructor-led adaptation",
    },
    {
      feature: "Assessment Method",
      aiprof: "Bidirectional AI Chat + Standard (Continuous, Interactive)",
      moocs: "Quizzes, Assignments, Peer Review",
      lms: "Quizzes, SCORM tracking",
      authoring: "Basic quizzes",
      bootcamps: "Projects, Instructor eval",
    },
    {
      feature: "Assessment Authenticity",
      aiprof: "Very High (Hard to game dialogue)",
      moocs: "Moderate to Low (Quizzes easily cheated)",
      lms: "Moderate",
      authoring: "Low",
      bootcamps: "High (but resource-intensive)",
    },
    {
      feature: "Applied Skills Focus",
      aiprof: "Core Principle",
      moocs: "Varies, often theoretical",
      lms: "Depends on content",
      authoring: "Depends on design",
      bootcamps: "High",
    },
    {
      feature: "B2B Course Creation",
      aiprof: "Rapid AI-Powered Engine",
      moocs: "Content library focus",
      lms: "Basic / Manual",
      authoring: "Manual, time-consuming",
      bootcamps: "Manual, High-touch",
    },
    {
      feature: "Content Freshness (B2B)",
      aiprof: "Easy AI-assisted updates",
      moocs: "Library updates (slow)",
      lms: "Manual updates needed",
      authoring: "Manual updates needed",
      bootcamps: "Manual/Custom",
    },
    {
      feature: "Unified B2C/B2B Core",
      aiprof: "Yes (Synergistic)",
      moocs: "Separate business units / Different platforms",
      lms: "B2B focus primarily",
      authoring: "B2B focus primarily",
      bootcamps: "B2C focus primarily",
    },
  ];

  const getStatusIcon = (value: string, isAiProf: boolean = false) => {
    if (isAiProf) {
      return <Check className="w-4 h-4 text-blue-600" />;
    }

    const lowerValue = value.toLowerCase();
    if (
      lowerValue.includes("none") ||
      lowerValue.includes("low") ||
      lowerValue.includes("limited") ||
      lowerValue.includes("slow")
    ) {
      return <X className="w-4 h-4 text-red-500" />;
    }
    if (
      lowerValue.includes("minimal") ||
      lowerValue.includes("basic") ||
      lowerValue.includes("medium")
    ) {
      return <Minus className="w-4 h-4 text-yellow-500" />;
    }
    return <Check className="w-4 h-4 text-green-500" />;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why We're <span className="text-blue-600">Different?</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how ai.prof stacks up against traditional learning solutions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Feature
                </th>
                <th className="text-center py-4 px-6 font-semibold text-blue-600">
                  ai.prof
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">
                  MOOCs
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">
                  LMS/LXPs
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">
                  Authoring Tools
                </th>
                <th className="text-center py-4 px-6 font-semibold text-gray-600">
                  Bootcamps
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(item.aiprof, true)}
                      <span className="text-sm text-blue-600 font-medium">
                        {item.aiprof}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(item.moocs)}
                      <span className="text-sm text-gray-600">
                        {item.moocs}
                      </span>
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
                      <span className="text-sm text-gray-600">
                        {item.authoring}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(item.bootcamps)}
                      <span className="text-sm text-gray-600">
                        {item.bootcamps}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Superior Assessment
            </h3>
            <p className="text-sm text-gray-600">
              Comprehensive AI evaluation beats traditional testing
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Adaptive Learning
            </h3>
            <p className="text-sm text-gray-600">
              Personalized pathways vs one-size-fits-all
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Unified Platform
            </h3>
            <p className="text-sm text-gray-600">
              One AI-powered solution vs multiple systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
