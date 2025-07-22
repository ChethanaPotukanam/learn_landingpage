const Footer = () => {
  return (
    <footer className="w-full bg-white py-2">
      <div className="section-container">
        {/* ai.prof logo in footer */}
        <div className="flex justify-center mb-3">
          <img src="/ai_prof.png" alt="ai.prof logo" className="h-8 w-auto" />
        </div>

        {/* Attribution text */}
        <p className="text-center text-gray-600 text-base mb-2 font-brockmann">
          © Hitloop 2025. All rights reserved.
        </p>

        {/* Additional branding line */}
        <div className="text-center">
          <p className="text-sm text-blue-500 font-brockmann  ">
            Made By AI &amp; Human → AI * Human
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;