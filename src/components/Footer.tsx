import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 py-6">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/ai_prof.png" 
              alt="AI.Prof Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2025 HITLOOP. All rights reserved.
          </p>
          
          {/* Tagline */}
          <p className="text-gray-400 text-sm text-center max-w-md">
            Empowering educational excellence with AI-driven learning and training solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;