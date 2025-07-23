import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        // On mobile when menu is open, always show solid background
        isMenuOpen 
          ? "bg-white shadow-sm md:bg-white/80 md:backdrop-blur-md" 
          : isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="ai.prof"
        >
          <img 
            src="/ai_prof.png" 
            alt="ai.prof Logo" 
            className="h-12 sm:h-14" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 font-brockmann">
            <a 
              href="#" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a href="#ourmission" className="nav-link font-brockmann">Our Mission</a>
            <a href="#courses" className="nav-link font-brockmann">Courses</a>
            <a href="#forbusiness" className="nav-link font-brockmann">For Business</a>
            <a href="#joinwaitlist" className="nav-link font-brockmann">Join Waitlist</a>
          </nav>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-brockmann">
              Login
            </button>
          </div>
        </div>

        {/* Mobile menu button - increased touch target */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none relative z-50" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 font-brockmann" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              closeMenu();
            }}
          >
            Home
          </a>
          <a 
            href="#ourmission" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 font-brockmann" 
            onClick={closeMenu}
          >
            Our Mission
          </a>
          <a 
            href="#courses" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 font-brockmann" 
            onClick={closeMenu}
          >
            Courses
          </a>
          <a 
            href="#forbusiness" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 font-brockmann" 
            onClick={closeMenu}
          >
            For Business
          </a>
          <a 
            href="#joinwaitlist" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100 font-brockmann" 
            onClick={closeMenu}
          >
            Join Waitlist
          </a>
          <div className="flex flex-col space-y-4 w-full">
            <button 
              className="bg-blue-600 text-white text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-blue-700 font-brockmann"
              onClick={closeMenu}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;