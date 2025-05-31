// import React, { useState } from 'react';
// import { Camera, User, X, Phone, Mail, MapPin, Home, Hash } from "lucide-react";

// // RegistrationForm Component
// const RegistrationForm = ({ onClose = () => {} }) => {
//   // State variables to store form input values
//   const [fullName, setFullName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [postcode, setPostcode] = useState('');
//   const [photo, setPhoto] = useState(null); // Actual image file
//   const [photoPreview, setPhotoPreview] = useState(null); // Preview image URL

//   // This function is called when user selects a photo
//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0]; // Get the selected file
//     if (file) {
//       setPhoto(file); // Store the file

//       // Create a preview to show image in the form
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setPhotoPreview(e.target.result); // Show image preview
//       };
//       reader.readAsDataURL(file); // Convert file to base64 URL
//     }
//   };

//   // This function handles form submission
//   const handleSubmit = () => {
//     // Validate required fields
//     if (!fullName || !mobile || !email || !address || !city || !state || !postcode) {
//       alert('Please fill all required fields');
//       return;
//     }

//     // Create an object containing all the data
//     const formData = {
//       fullName,
//       mobile,
//       email,
//       address,
//       city,
//       state,
//       postcode,
//       photo
//     };

//     console.log('Form Data:', formData);
//     alert('Registration successful!');

//     // Clear the form fields after submission
//     setFullName('');
//     setMobile('');
//     setEmail('');
//     setAddress('');
//     setCity('');
//     setState('');
//     setPostcode('');
//     setPhoto(null);
//     setPhotoPreview(null);

//     onClose(); // Close the form popup
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
//       <div className="bg-gray-100 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-auto">

//         {/* Close Button */}
//         <div className="sticky top-0 bg-gray-100 p-4 rounded-t-2xl">
//           <button 
//             onClick={onClose}
//             className="absolute top-4 right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
//           >
//             <X className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Header */}
//         <div className="text-center px-6 pb-6">
//           <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
//             <User className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">User Registration</h1>
//           <p className="text-gray-600">Fill out the form below to register</p>
//         </div>

//         {/* Registration Form */}
//         <div className="bg-white mx-6 mb-6 p-6 rounded-xl shadow-lg space-y-4">

//           {/* Full Name Field */}
//           <InputField 
//             label="Full Name *" 
//             value={fullName}
//             onChange={setFullName}
//             placeholder="Enter your full name"
//             Icon={User}
//           />

//           {/* Mobile Number Field */}
//           <InputField 
//             label="Mobile Number *"
//             value={mobile}
//             onChange={setMobile}
//             placeholder="1234567890"
//             Icon={Phone}
//           />

//           {/* Email Field */}
//           <InputField 
//             label="Email Address *"
//             value={email}
//             onChange={setEmail}
//             placeholder="xyz@gmail.com"
//             Icon={Mail}
//             type="email"
//           />

//           {/* Address Field (Textarea) */}
//           <div>
//             <label className="block text-sm font-bold text-gray-700 mb-2">Address *</label>
//             <div className="relative">
//               <Home className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//               <textarea
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 placeholder="Enter your complete address"
//                 rows="2"
//                 className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-red-400 focus:outline-none resize-none"
//               />
//             </div>
//           </div>

//           {/* City and State (2-column grid) */}
//           <div className="grid grid-cols-2 gap-4">
//             <InputField 
//               label="City *"
//               value={city}
//               onChange={setCity}
//               placeholder="Your city"
//               Icon={MapPin}
//             />
//             <InputField 
//               label="State *"
//               value={state}
//               onChange={setState}
//               placeholder="Your state"
//               Icon={MapPin}
//             />
//           </div>

//           {/* Postcode Field */}
//           <InputField 
//             label="Postcode *"
//             value={postcode}
//             onChange={setPostcode}
//             placeholder="12345"
//             Icon={Hash}
//           />

//           {/* Upload Profile Photo */}
//           <div>
//             <label className="block text-sm font-bold text-gray-700 mb-2">
//               Profile Photo
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handlePhotoChange}
//               className="hidden"
//               id="photo-upload"
//             />
//             <label
//               htmlFor="photo-upload"
//               className="flex items-center justify-center w-full py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 bg-gray-50"
//             >
//               {photoPreview ? (
//                 <div className="text-center space-y-2">
//                   <img 
//                     src={photoPreview} 
//                     alt="Preview" 
//                     className="w-16 h-16 rounded-full mx-auto object-cover"
//                   />
//                   <p className="text-sm text-gray-600">Click to change photo</p>
//                 </div>
//               ) : (
//                 <div className="text-center space-y-2">
//                   <Camera className="w-8 h-8 text-gray-400 mx-auto" />
//                   <p className="text-sm text-gray-600">Upload Photo</p>
//                 </div>
//               )}
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4 border-t border-gray-200">
//             <button 
//               onClick={handleSubmit}
//               className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors"
//             >
//               Register User
//             </button>
//             <p className="text-xs text-gray-500 mt-3 text-center">
//               * By registering, you agree to our Terms of Service and Privacy Policy
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Reusable input field component
// const InputField = ({ label, value, onChange, placeholder, Icon, type = "text" }) => (
//   <div>
//     <label className="block text-sm font-bold text-gray-700 mb-2">{label}</label>
//     <div className="relative">
//       <Icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:border-red-400 focus:outline-none"
//       />
//     </div>
//   </div>
// );

// export default RegistrationForm;

import { Camera, User, X } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  RegisterWithOtp,
  VerifyOtp,
} from "../../redux/authSlice";
import { checkExistingUser } from '../../redux/registrationApi';

const RegistrationForm = ({ onClose }) => {
 const dispatch =useDispatch()

  const { otpSent, otpVerified } = useSelector((state) => state.auth);
   const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
    const [fileName, setFileName] = useState('')
    const [errors, setErrors] = useState({});
   
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

    // otp send
    const handleVerifyOtp = async () => {
    console.log(phone);
    setSection(sellerDetails.segment);
    const result = await dispatch(
      VerifyOtp({ phoneNumber: phone, token: otp })
    );
    if (VerifyOtp.rejected.match(result)) {
      // ❌ OTP failed (wrong or expired)
      alert(`OTP verification failed: ${result.payload}`);
    } else {
      // ✅ OTP verified successfully
      alert("OTP verified successfully!");
    }
  };

 const handleSendOtp = async () => {
    const phone_no = phone.slice(-10);

    if (phone.length !== 10) {
      alert("Phone Number should be 10 digits");
      return;
    }

    const existing = await checkExistingUser(phone_no);
    if (existing && existing.length > 0) {
      console.log("Employee already exists:", existing);
      alert("Employee Already Exist");
      toast.warn("Employee Already Exist");
    } else {
      await dispatch(RegisterWithOtp(phone_no));
      console.log("New employee — continue with registration");
    }
  };
    //otp verify
   

    // form validation
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
            setFileName(file.name)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to server
        const newErrors = ValidateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            toast.error('Please fil all the details!');
            return;
        }
        console.log('Form submitted:', formData);
        // validation
        toast.success('Registration successful!');
        onClose();

         useEffect(() => {
    setFormData((prev) => ({ ...prev, phone: phone }));
  }, [phone]);

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

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden'>
            {/* main */}
            <div className='bg-gray-200 rounded-lg overflow-auto p-4 max-h-[90%] w-full lg:w-1/2 m-3 hide-scrollbar'>
                {/* close button */}
                <div className='relative mb-4'>
                    <button className='absolute top-0 right-0 bg-red-600 rounded-full p-1 hover:bg-red-800 transition-colors duration-200 '
                        onClick={onClose} aria-label='Close Registration Form'>
                        <X className='h-5 w-5 text-white' />
                    </button>
                </div>
                {/* header */}
                <div className='text-center'>
                    <div className='h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto'>

                        <User className='h-8 w-8 mx-auto text-white' />
                    </div>
                    <h1 className='text-2xl font-bold mt-5'>User Registration Form</h1>
                    <p className='text-sm mt-3'>Fill out the form below to register</p>
                </div>

                {/* form */}
                <form action="">

                    {/* before otp verification */}
                    <div className='flex'>
                        <div className='flex flex-col space-y-4 mb-6'>
                            <div>
                                <label className='block font-semibold ml-2'>Mobile Number</label>
                                <input
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='Enter mobile number'
                                    className='bg-gray-50 p-2 rounded-xl mb-2' />
                            </div>
                            <button
                                type='button'
                                onClick={handleSendOtp}
                                className='text-white font-semibold bg-green-600 px-4 py-2 rounded-xl'
                            >
                                Send OTP
                            </button>
                        </div>
                        {/* OTP verification */}
                        {otpSent && (
                            <div className='flex flex-col'>
                                <label className='block font-semibold'>OTP Verification</label>
                                <input type="number"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className='bg-gray-50 p-2 rounded-xl mb-2'
                                    placeholder='Enter OTP' />
                                <button
                                    type='button'
                                    onClick={handleVerifyOtp}
                                    className='text-white font-semibold bg-green-600 px-4 py-2 rounded-xl'>Verify OTP</button>
                            </div>
                        )}
                    </div>

                    {/* after otp verification, user will be redirected to this form */}
                    {otpVerified && (
                        <div className='mt-6 space-y-4'>
                            <div>
                                <label className='block font-semibold ml-2 text-gray-700'>Full Name</label>
                                <input required
                                    type="text"
                                    name='fullName'
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className='p-2 rounded-xl bg-gray-50 w-full '
                                    placeholder='Enter your name' />
                                {
                                    errors.fullName && (
                                        <p className='text-red-500 text-xs'>{errors.fullName}</p>
                                    )}
                            </div>

                            <div>
                                <label className='block font-semibold ml-2'>Mobile Number</label>
                                <input required
                                    type="number"
                                    name='phonr'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className='p-2 rounded-xl bg-gray-50 w-full'
                                    placeholder='Ex. 1234567890' />
                                {errors.phone && (
                                    <p className='text-red-500 text-xs'>{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className='block font-semibold ml-2'>Email</label>
                                <input required
                                    type="email"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className='p-2 rounded-xl bg-gray-50 w-full'
                                    placeholder='xyz@gmail.com' />
                                {errors.email && (
                                    <p className='text-red-500 text-xs'>{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className='block font-semibold ml-2'>Address</label>
                                <textarea required
                                    name='address'
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className='p-2 rounded-xl bg-gray-50 w-full'
                                    placeholder='Enter your complete address'
                                    rows="4"></textarea>
                                {errors.address && (
                                    <p className='text-red-500 text-xs'>{errors.address}</p>
                                )}
                            </div>

                            <div className='grid grid-cols-2 gap-3'>
                                <div>
                                    <label className='block font-semibold ml-2'>City</label>
                                    <input required
                                        type="text"
                                        name='city'
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className='p-2 rounded-xl bg-gray-50 w-full'
                                        placeholder='Enter city' />
                                    {errors.city && (
                                        <p className='text-red-500 text-xs'>{errors.city}</p>
                                    )}
                                </div>
                                <div>
                                    <label className='block font-semibold ml-2'>Pin Code</label>
                                    <input required
                                        type="number"
                                        name='pinCode'
                                        value={formData.pinCode}
                                        onChange={handleInputChange}
                                        className='p-2 rounded-xl bg-gray-50 w-full'
                                        placeholder='Ex. 123456' />
                                    {errors.pinCode && (
                                        <p className='text-red-500 text-xs'>{errors.pinCode}</p>
                                    )}
                                </div>

                            </div>

                            <div>
                                <label className='block font-semibold ml-2'>State</label>
                                <input required
                                    type="text"
                                    name='state'
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className='p-2 rounded-xl bg-gray-50 w-full'
                                    placeholder='Your state' />
                                {errors.state && (
                                    <p className='text-red-500 text-xs'>{errors.state}</p>
                                )}
                            </div>

                            {/* photo upload */}
                            <div>
                                <label className='block font-semibold ml-2'>Profile Photo</label>
                                <input required
                                    type="file"
                                    accept='image/*'
                                    className='hidden'
                                    id='photo-upload'
                                    onChange={handleFileChange} />
                                {errors.photo && (
                                    <p className='text-red-500 text-xs'>{errors.photo}</p>
                                )}
                                <label htmlFor='photo-upload' className='flex items-center justify-center w-full py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 bg-gray-50'>
                                    <div className='text-center space-y-2'>
                                        <Camera className='h-8 w-8 text-gray-400 mx-auto' />
                                        <p className='text-sm text-gray-600'>
                                            {fileName ? fileName : 'Upload Photo'}
                                        </p>
                                    </div>
                                </label>
                            </div>
                            {/* submit button */}
                            <div>
                                <button
                                    type='submit'
                                    onClick={handleSubmit}
                                    className='bg-red-600 w-full text-white py-2 rounded-lg font-semibold text-lg'>Register User</button>
                                <p className='mt-2 text-sm'>
                                    <span className='text-red-500'>*</span>By registering, you agree to aur Terms of Service and Privacy Policy</p>
                            </div>
                        </div>)}
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm