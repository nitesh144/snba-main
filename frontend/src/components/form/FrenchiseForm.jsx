import React, { useState } from "react";
import { X } from "lucide-react";

const FranchiseForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    franchiseType: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    location: "",
    message: "",
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission with Mailjet integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Call our Express backend API
      const response = await fetch(`${import.meta.env.VITE_SERVER_API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send email');
      }

      // Show success message
      setShowSuccess(true);
    } catch (err) {
      console.error('Error sending email:', err);
      setError("Failed to send your enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close the success message and reset form
  const handleSuccessClose = () => {
    setShowSuccess(false);
    setFormData({
      franchiseType: "",
      name: "",
      mobile: "",
      email: "",
      address: "",
      location: "",
      message: "",
    });
    onClose();
  };

  // If the popup is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-auto bg-white rounded-xl shadow-2xl">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-900 hover:text-gray-700 bg-white rounded-full"
          onClick={!showSuccess ? onClose : handleSuccessClose}
        >
        <X size={25}/>
        </button>

        {!showSuccess ? (
          <>
            {/* Form Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-t-xl">
              <h2 className="text-2xl font-bold text-center text-white">
                Franchise Enquiry Form
              </h2>
              <p className="text-center text-white text-sm mt-1">
                Fill out the form below to start your franchise journey
              </p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 text-black">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Select Franchise Type *
                </label>
                <select
                  name="franchiseType"
                  value={formData.franchiseType}
                  onChange={handleChange}
                  className="w-full p-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  required
                >
                  <option value="">-- Select One --</option>
                  <option value="Gym">Aarna Gym</option>
                  <option value="Mart">Aarna Mart</option>
                  <option value="Unisex Salon">Aarna Unisex Salon</option>
                  <option value="Food Court">Aarna FoodCourt</option>
                  <option value="Select All">Select All</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Mobile Number *
                </label>
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Preferred Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Where do you want to open the franchise?"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional details you'd like to share..."
                  className="w-full p-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-red-500 outline-none transition-all"
                  rows="3"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg text-white font-medium mt-2 transition-all
                  ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="p-6 flex flex-col items-center">
            {/* Success animation - checkmark circle */}
            <div className="relative mb-4">
              {/* Outer circle animation */}
              <div className="w-24 h-24 rounded-full border-4 border-green-500 opacity-20 animate-ping absolute"></div>

              {/* Inner circle with checkmark */}
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center relative">
                <svg
                  className="w-16 h-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    className="animate-draw"
                    style={{
                      strokeDasharray: 65,
                      strokeDashoffset: 65,
                      animation: "draw 0.6s ease-in-out 0.3s forwards"
                    }}
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-green-600 mb-2">
              Thank You!
            </h2>

            <p className="text-center text-gray-600 mb-6">
              Your franchise enquiry has been submitted successfully.
              Our team will contact you shortly.
            </p>

            <div className="w-16 h-1 bg-gray-200 rounded-full mb-6"></div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-6">
                Franchise Type: <span className="font-medium text-gray-700">{formData.franchiseType}</span>
              </p>
            </div>

            <button
              onClick={handleSuccessClose}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FranchiseForm;
