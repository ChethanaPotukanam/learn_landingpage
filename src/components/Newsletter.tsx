import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    companySize: "",
    phoneNumber: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Please fill in required fields",
        description: "Full name and email are required",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for joining our waitlist!",
        description: "You'll receive updates about Hitloop Herald soon."
      });
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        jobTitle: "",
        companySize: "",
        phoneNumber: "",
        additionalInfo: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div id="joinwaitlist" className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-brockmann">
          Be the First to Experience the Future of Learning
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 font-brockmann">
          We're rolling out access to a limited number of users. Join the waitlist to secure your spot and be among the first to transform your skills with Hitloop Herald.
        </p>
      </div>
      
      <div className="w-full max-w-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 p-6">
        
        <div className="space-y-4">
          {/* Row 1: Full Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-brockmann">
            <div className="group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30"
                required
              />
            </div>
            <div className="group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30"
                required
              />
            </div>
          </div>

          {/* Row 2: Company Name and Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30"
              />
            </div>
            <div className="group">
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30"
              />
            </div>
          </div>

          {/* Row 3: Company Size and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group">
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30 appearance-none cursor-pointer"
              >
                <option value="">Company Size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>
            <div className="group">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30"
              />
            </div>
          </div>

          {/* Row 4: Additional Information */}
          <div className="group">
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Additional Information (Optional)"
              rows={3}
              className="w-full px-6 py-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/50 to-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 group-hover:bg-gradient-to-r group-hover:from-blue-100/50 group-hover:to-blue-50/30 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold font-brockmann rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transform active:scale-95 min-w-[200px]"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2 ">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                "Join Waitlist"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;