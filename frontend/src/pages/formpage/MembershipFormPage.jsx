import React, { useState } from "react";
import PaymentForm from "../PaymentPage";

const MembershipFormPage = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: '',
        termsAccepted: false
    });

    const [showPaymentForm, setShowPaymentForm] = useState(false);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.termsAccepted) {
            setShowPaymentForm(true);
        } else {
            alert('Please accept the terms and conditions to proceed.');
        }
    };
    
    return (
        <div className="fixed inset-0 flex justify-center items-center z-50 m-2 ">
            <div className="bg-white rounded-lg p-2 w-full max-w-xl lg:max-w-xl">
                {!showPaymentForm ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4 ">Membership Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="mobile"
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="address"
                                    name="address"
                                    rows="3"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            
                            <div className="mb-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    <span className="text-sm ">I accept the terms and conditions</span>
                                </label>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <button
                                    className="text-lg bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Proceed
                                </button>
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <PaymentForm formData={formData} onBack={() => setShowPaymentForm(false)} onClose={onClose} />
                )}
            </div>
        </div>
    );
};

export default MembershipFormPage;
