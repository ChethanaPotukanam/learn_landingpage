import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  MessageCircle,
  Route,
  CheckCircle,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50"
      id="features"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            The Technology
            <br className="hidden sm:block" /> That Powers Your Journey
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Our vision is made real through cutting-edge AI designed to
            understand your learning style, adapt to your needs, and guide you
            forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={<MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Interactive AI Tutor"
            description="Our core innovation is an AI Tutor that does more than just answer questions. It actively engages you in a two-way dialogue, clarifies doubts, provides motivation, and even asks questions to ensure you truly understand the material."
            index={0}
          />
          <FeatureCard
            icon={<Route className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Adaptive Learning Pathways"
            description=" Your learning path is a living system, not a fixed track. It begins with an AI profile of your current skills and continuously evolves based on your performance, ensuring you're always focused on the most impactful areas for your growth."
            index={1}
          />
          <FeatureCard
            icon={<CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Continuous Assessment"
            description=" Beyond quizzes, your mastery is evaluated continuously through your dialogue with the AI Tutor. This authenticates your skills in a way that's harder to game, leading to highly credible certifications."
            index={2}
          />
          <FeatureCard
            icon={<Target className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Applied Skills Focus "
            description="Our curriculum emphasizes hands-on, practical application. We focus on ensuring the skills you learn are immediately usable, so you can apply your knowledge in real-world scenarios from day one."
            index={3}
          />
          <FeatureCard
            icon={<TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="Career-Focused Pathways"
            description="We map our courses to specific industry job roles, like AI Engineer or Data Analyst. This provides clarity, helping you select the right coursework to achieve your specific career goals."
            index={4}
          />
          <FeatureCard
            icon={<Award className="w-5 h-5 sm:w-6 sm:h-6" />}
            title="High-Quality Content"
            description="We offer curated, high-quality content that is platform-neutral. Our focus is on broadly applicable skills, not training for a specific vendor's tools, ensuring your knowledge is valuable everywhere."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
