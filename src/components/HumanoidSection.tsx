import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: "60vh",
    maxHeight: "600px",
    borderRadius: "20px",
    transition:
      "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
    willChange: "transform, opacity",
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;

        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;

          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(
              1,
              Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance)
            );
          }

          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <section
        className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white"
        id="why-humanoid"
      >
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2 text-center">
              Our Mission
            </h2>
          </div>

          <div
            ref={cardsContainerRef}
            className="relative flex-1 perspective-1000"
          >
            {/* First Card */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${
                isFirstCardVisible ? "animate-card-enter" : ""
              }`}
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${
                  isFirstCardVisible ? "90px" : "200px"
                }) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0,
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay",
                }}
              ></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium font-brockmann">The Problem</span>
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-8 md:p-12 h-full flex items-center">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white font-bold leading-relaxed mb-4">
                    Learning is Broken. Your Potential is Trapped.<br></br>
                    <br></br>Today's online learning is a maze of passive video
                    lectures, one-size-fits-all curricula, and tests that
                    measure memory, not mastery. Your potential is trapped in a
                    model that was never built for you.<br></br> <br></br>We
                    knew there had to be a better way.
                  </h3>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${
                isSecondCardVisible ? "animate-card-enter" : ""
              }`}
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${
                  isSecondCardVisible
                    ? activeCardIndex === 1
                      ? "55px"
                      : "45px"
                    : "200px"
                }) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? "auto" : "none",
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              ></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium font-brockmann">Our Solution</span>
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-8 md:p-12 h-full flex items-center">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white font-bold leading-relaxed mb-4">
                    A Smarter Pathway Forward<br></br>
                    <br></br>We replace the traditional monologues with engaging
                    podcast-style lessons. Our Interactive AI Tutor is a chat
                    away 24/7 —clarifying doubts, providing targeted
                    interventions, and ensuring you never get stuck. It's
                    learning that is interactive, personal, and designed to keep
                    you moving forward.<br></br>
                    <br></br>Conversations that build competence.
                  </h3>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div
              className={`absolute inset-0 overflow-hidden shadow-xl ${
                isThirdCardVisible ? "animate-card-enter" : ""
              }`}
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${
                  isThirdCardVisible
                    ? activeCardIndex === 2
                      ? "15px"
                      : "0"
                    : "200px"
                }) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? "auto" : "none",
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay",
                }}
              ></div>

              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium font-brockmann">The Outcome</span>
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-8 md:p-12 h-full flex items-center">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-lg text-white sm:text-xl md:text-2xl font-display font-bold leading-relaxed mb-4">
                    From Knowledge to Know-How <br></br>
                    <br></br>
                    <span className="text-white">
                      In a world being reshaped by AI, staying ahead is
                      everything. Our goal isn't just course completion - it's
                      building real capability. Continuous assessment and a
                      focus on applied skills mean you don't just finish a
                      course—you emerge with a deep, proven understanding you
                      can confidently apply from day one.<br></br>A Foundation
                      for Lifelong Growth.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
