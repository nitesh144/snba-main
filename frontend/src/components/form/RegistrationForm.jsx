
import { Camera, User, X, Phone, Mail, MapPin, CheckCircle, Clock } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
    RegisterWithOtp,
    VerifyOtp,
} from "../../redux/authSlice";
import { checkExistingUser } from '../../redux/registrationApi';
import { userRegister } from '../../redux/registrationFormSlice';

const RegistrationForm = ({ onClose }) => {
    
    const dispatch = useDispatch()
    const { otpSent, otpVerified } = useSelector((state) => state.auth); // Your actual useSelector

    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [fileName, setFileName] = useState('')
    const [errors, setErrors] = useState({});

    // handleVerifyOtp function
    const handleVerifyOtp = async () => {
        console.log(phone);
        const result = await dispatch(
            VerifyOtp({ phoneNumber: phone, token: otp })
        );
        if (VerifyOtp.rejected.match(result)) {
            // ❌ OTP failed (wrong or expired)
            toast.error(`OTP verification failed: ${result.payload}`);
        } else {
            // ✅ OTP verified successfully
            toast.success("OTP verified successfully!");
        }
    };

    // Your original handleSendOtp function
    const handleSendOtp = async () => {
        const rawPhone = phone.trim();

        if (rawPhone.length !== 10 || !/^\d{10}$/.test(rawPhone)) {
            toast.error("Phone Number should be 10 digits");
            return;
        }

        // Your existing user check and OTP dispatch logic
        const existing = await checkExistingUser(rawPhone);
        if (existing && existing.length > 0) {
            console.log("User already exists:", existing);
            toast.error("User Already Exists");
            return;
        }

        // Proceed with OTP dispatch if no existing user
        await dispatch(RegisterWithOtp(rawPhone));
        console.log("New user — continue with registration");
    };

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        pinCode: '',
        photo: null
    });

    // Your original form validation
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setFormData((prev) => ({ ...prev, photo: file }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = ValidateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error('Please fill all the details!');
            return;
        }

        // Your original Redux dispatch
        dispatch(userRegister(formData))
        // console.log('Form submitted:', formData);
        toast.success('Registration successful!');
        onClose();

        setFormData({
            fullName: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            state: '',
            pinCode: '',
            photo: null
        });
        setFileName('');
    }

    const ValidateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Name is required!';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Mobile number is required!';
        } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Enter valid mobile number!';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required!';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter valid email address!';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required!';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required!';
        }

        if (!formData.state.trim()) {
            newErrors.state = 'State is required!';
        }

        if (!formData.pinCode.trim()) {
            newErrors.pinCode = 'Pin Code is required!';
        }

        return newErrors;
    }

    useEffect(() => {
        setFormData((prev) => ({ ...prev, phone: phone }));
    }, [phone]);

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4'>
            {/* Enhanced Modal Container */}
            <div className='bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-lg max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300'>
                
                {/* Modern Header with Gradient */}
                <div className='bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-8 relative overflow-hidden'>
                    {/* Background Pattern */}
                    <div className='absolute inset-0 opacity-10'>
                        <div className='absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16'></div>
                        <div className='absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12'></div>
                    </div>
                    
                    {/* Close Button */}
                    <button 
                        className='absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2.5 transition-all duration-200 hover:scale-105'
                        onClick={onClose} 
                        aria-label='Close Registration Form'
                    >
                        <X className='h-5 w-5 text-white' />
                    </button>
                    
                    {/* Header Content */}
                    <div className='relative text-center text-white'>
                        <div className='h-20 w-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                            <User className='h-10 w-10' />
                        </div>
                        <h1 className='text-3xl font-bold mb-2'>Create Account</h1>
                        <p className='text-white/90 text-lg'>Join us today and get started</p>
                    </div>
                </div>

                {/* Form Content */}
                <div className='p-8'>
                    {/* OTP Section - Enhanced Design */}
                    <div className='space-y-6 mb-8'>
                        {/* Phone Input Section */}
                        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100'>
                            <div className='flex items-center mb-4'>
                                <Phone className='h-5 w-5 text-blue-600 mr-2' />
                                <h3 className='font-semibold text-gray-800'>Phone Verification</h3>
                                {otpSent && <CheckCircle className='h-5 w-5 text-green-500 ml-auto' />}
                            </div>
                            
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='flex-1'>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>Mobile Number</label>
                                    <input
                                        type="number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder='Enter mobile number'
                                        className='w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200'
                                    />
                                </div>
                                <div className='flex items-end'>
                                    <button
                                        type='button'
                                        onClick={handleSendOtp}
                                        className='bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5'
                                    >
                                        Send OTP
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* OTP Input Section */}
                        {otpSent && (
                            <div className='bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 animate-fadeIn'>
                                <div className='flex items-center mb-4'>
                                    <Clock className='h-5 w-5 text-amber-600 mr-2' />
                                    <h3 className='font-semibold text-gray-800'>Enter Verification Code</h3>
                                </div>
                                
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <div className='flex-1'>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>6-Digit OTP</label>
                                        <input 
                                            type="number"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className='w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-center text-lg tracking-wider focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200'
                                            placeholder='000000'
                                        />
                                    </div>
                                    <div className='flex items-end'>
                                        <button
                                            type='button'
                                            onClick={handleVerifyOtp}
                                            className='bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5'
                                        >
                                            Verify OTP
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Main Registration Form */}
                    {otpVerified && (
                        <div className='space-y-6 animate-fadeIn'>
                            {/* Success Message */}
                            <div className='bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex items-center'>
                                <CheckCircle className='h-5 w-5 text-green-600 mr-3' />
                                <span className='text-green-800 font-medium'>Phone verified successfully! Complete your profile below.</span>
                            </div>

                            {/* Personal Information */}
                            <div className='bg-gray-50 rounded-xl p-6 space-y-4'>
                                <h3 className='font-semibold text-gray-800 text-lg mb-4 flex items-center'>
                                    <User className='h-5 w-5 mr-2 text-gray-600' />
                                    Personal Information
                                </h3>

                                {/* Full Name */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                                    <input
                                        type="text"
                                        name='fullName'
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                                            errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                        placeholder='Enter your full name'
                                    />
                                    {errors.fullName && (
                                        <p className='text-red-500 text-sm mt-1 flex items-center'>
                                            <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                            {errors.fullName}
                                        </p>
                                    )}
                                </div>

                                {/* Mobile Number (Pre-filled) */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>Mobile Number</label>
                                    <input
                                        type="number"
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-gray-100 border rounded-xl transition-all duration-200 ${
                                            errors.phone ? 'border-red-300' : 'border-gray-200'
                                        }`}
                                        placeholder='1234567890'
                                        readOnly
                                    />
                                    {errors.phone && (
                                        <p className='text-red-500 text-sm mt-1 flex items-center'>
                                            <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2 flex items-center'>
                                        <Mail className='h-4 w-4 mr-1' />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                                            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                        placeholder='your@email.com'
                                    />
                                    {errors.email && (
                                        <p className='text-red-500 text-sm mt-1 flex items-center'>
                                            <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className='bg-gray-50 rounded-xl p-6 space-y-4'>
                                <h3 className='font-semibold text-gray-800 text-lg mb-4 flex items-center'>
                                    <MapPin className='h-5 w-5 mr-2 text-gray-600' />
                                    Address Details
                                </h3>

                                {/* Address */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>Complete Address</label>
                                    <textarea
                                        name='address'
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none ${
                                            errors.address ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                        placeholder='Enter your complete address'
                                        rows="3"
                                    />
                                    {errors.address && (
                                        <p className='text-red-500 text-sm mt-1 flex items-center'>
                                            <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                            {errors.address}
                                        </p>
                                    )}
                                </div>

                                {/* City and Pin Code */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>City</label>
                                        <input
                                            type="text"
                                            name='city'
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-white border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                                                errors.city ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                            }`}
                                            placeholder='Your city'
                                        />
                                        {errors.city && (
                                            <p className='text-red-500 text-sm mt-1 flex items-center'>
                                                <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                                {errors.city}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>Pin Code</label>
                                        <input
                                            type="number"
                                            name='pinCode'
                                            value={formData.pinCode}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 bg-white border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                                                errors.pinCode ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                            }`}
                                            placeholder='123456'
                                        />
                                        {errors.pinCode && (
                                            <p className='text-red-500 text-sm mt-1 flex items-center'>
                                                <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                                {errors.pinCode}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* State */}
                                <div>
                                    <label className='block text-sm font-medium text-gray-700 mb-2'>State</label>
                                    <input
                                        type="text"
                                        name='state'
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 bg-white border rounded-xl transition-all duration-200 focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                                            errors.state ? 'border-red-300 bg-red-50' : 'border-gray-200'
                                        }`}
                                        placeholder='Your state'
                                    />
                                    {errors.state && (
                                        <p className='text-red-500 text-sm mt-1 flex items-center'>
                                            <span className='w-1 h-1 bg-red-500 rounded-full mr-2'></span>
                                            {errors.state}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Photo Upload */}
                            <div className='bg-gray-50 rounded-xl p-6'>
                                <h3 className='font-semibold text-gray-800 text-lg mb-4 flex items-center'>
                                    <Camera className='h-5 w-5 mr-2 text-gray-600' />
                                    Profile Photo
                                </h3>
                                
                                <input
                                    type="file"
                                    accept='image/*'
                                    className='hidden'
                                    id='photo-upload'
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor='photo-upload'
                                    className='flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-red-400 hover:bg-red-50 transition-all duration-200 bg-white'
                                >
                                    <div className='text-center space-y-3'>
                                        <div className='h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto'>
                                            <Camera className='h-8 w-8 text-gray-400' />
                                        </div>
                                        <div>
                                            <p className='text-lg font-medium text-gray-700'>
                                                {fileName || 'Upload Profile Photo'}
                                            </p>
                                            <p className='text-sm text-gray-500 mt-1'>
                                                PNG, JPG up to 5MB
                                            </p>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className='pt-4'>
                                <button
                                    type='button'
                                    onClick={handleSubmit}
                                    className='w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 text-lg'
                                >
                                    Complete Registration
                                </button>
                                
                                <p className='mt-4 text-sm text-gray-500 text-center leading-relaxed'>
                                    <span className='text-red-500'>*</span>
                                    By registering, you agree to our 
                                    <span className='text-red-600 hover:text-red-700 cursor-pointer'> Terms of Service</span> and 
                                    <span className='text-red-600 hover:text-red-700 cursor-pointer'> Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .scrollbar-thin {
                    scrollbar-width: thin;
                }
                .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
                    background-color: #d1d5db;
                    border-radius: 0.375rem;
                }
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
            `}</style>
        </div>
    )
}

export default RegistrationForm