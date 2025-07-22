import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    fetch("/loop-header.lottie")
      .then((response) => response.json())
      .then((data) => setLottieData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      className="overflow-hidden relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center justify-center"
      id="hero"
      style={{
        backgroundPosition: "center 30%",
        padding: isMobile ? "100px 12px 40px" : "120px 20px 60px",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-400/25 rounded-full blur-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
        
        {/* Animated Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-300/25 to-pink-300/25 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-500/40 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-indigo-500/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-cyan-500/40 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1
            className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight opacity-0 animate-fade-in flex items-center justify-center flex-wrap gap-3 sm:gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <span>
              Future-proof Your Career
            </span>
          </h1>

          <p
            style={{ animationDelay: "0.5s" }}
            className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-brockmann text-base sm:text-lg"
          >
            The AI-Powered Personalized Learning Platform that guides you from
            foundational knowledge to demonstrable mastery.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in justify-center"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#"
              className="flex items-center justify-center group w-full sm:w-auto text-center font-brockmann"
              style={{
                backgroundColor: "#0066FF",
                borderRadius: "1440px",
                boxSizing: "border-box",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: "20px",
                padding: "16px 24px",
                border: "1px solid white",
              }}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax"
        data-speed="0.05"
      ></div>
    </section>
  );
};

export default Hero;