import React, { useState } from 'react';
import { Camera, User, X, Phone, Mail, MapPin, Home, Hash } from "lucide-react";

// RegistrationForm Component
const RegistrationForm = ({ onClose = () => {} }) => {
  // State variables to store form input values
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [photo, setPhoto] = useState(null); // Actual image file
  const [photoPreview, setPhotoPreview] = useState(null); // Preview image URL

  // This function is called when user selects a photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setPhoto(file); // Store the file

      // Create a preview to show image in the form
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result); // Show image preview
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  // This function handles form submission
  const handleSubmit = () => {
    // Validate required fields
    if (!fullName || !mobile || !email || !address || !city || !state || !postcode) {
      alert('Please fill all required fields');
      return;
    }

    // Create an object containing all the data
    const formData = {
      fullName,
      mobile,
      email,
      address,
      city,
      state,
      postcode,
      photo
    };

    console.log('Form Data:', formData);
    alert('Registration successful!');

    // Clear the form fields after submission
    setFullName('');
    setMobile('');
    setEmail('');
    setAddress('');
    setCity('');
    setState('');
    setPostcode('');
    setPhoto(null);
    setPhotoPreview(null);

    onClose(); // Close the form popup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div className="bg-gray-100 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto">

        {/* Close Button */}
        <div className="sticky top-0 bg-gray-100 p-4 rounded-t-2xl">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header */}
        <div className="text-center px-6 pb-6">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">User Registration</h1>
          <p className="text-gray-600">Fill out the form below to register</p>
        </div>

        {/* Registration Form */}
        <div className="bg-white mx-6 mb-6 p-6 rounded-xl shadow-lg space-y-4">
          
          {/* Full Name Field */}
          <InputField 
            label="Full Name *" 
            value={fullName}
            onChange={setFullName}
            placeholder="Enter your full name"
            Icon={User}
          />

          {/* Mobile Number Field */}
          <InputField 
            label="Mobile Number *"
            value={mobile}
            onChange={setMobile}
            placeholder="1234567890"
            Icon={Phone}
          />

          {/* Email Field */}
          <InputField 
            label="Email Address *"
            value={email}
            onChange={setEmail}
            placeholder="xyz@gmail.com"
            Icon={Mail}
            type="email"
          />

          {/* Address Field (Textarea) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Address *</label>
            <div className="relative">
              <Home className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your complete address"
                rows="2"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-red-400 focus:outline-none resize-none"
              />
            </div>
          </div>

          {/* City and State (2-column grid) */}
          <div className="grid grid-cols-2 gap-4">
            <InputField 
              label="City *"
              value={city}
              onChange={setCity}
              placeholder="Your city"
              Icon={MapPin}
            />
            <InputField 
              label="State *"
              value={state}
              onChange={setState}
              placeholder="Your state"
              Icon={MapPin}
            />
          </div>

          {/* Postcode Field */}
          <InputField 
            label="Postcode *"
            value={postcode}
            onChange={setPostcode}
            placeholder="12345"
            Icon={Hash}
          />

          {/* Upload Profile Photo */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="flex items-center justify-center w-full py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 bg-gray-50"
            >
              {photoPreview ? (
                <div className="text-center space-y-2">
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    className="w-16 h-16 rounded-full mx-auto object-cover"
                  />
                  <p className="text-sm text-gray-600">Click to change photo</p>
                </div>
              ) : (
                <div className="text-center space-y-2">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto" />
                  <p className="text-sm text-gray-600">Upload Photo</p>
                </div>
              )}
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-gray-200">
            <button 
              onClick={handleSubmit}
              className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
            >
              Register User
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
              * By registering, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable input field component
const InputField = ({ label, value, onChange, placeholder, Icon, type = "text" }) => (
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <Icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-red-400 focus:outline-none"
      />
    </div>
  </div>
);

export default RegistrationForm;
