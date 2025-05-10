import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PaymentForm = ({ formData, onBack, onClose }) => {
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [animateCard, setAnimateCard] = useState(false);

    useEffect(() => {
        // Trigger card animation after component mounts
        setTimeout(() => setAnimateCard(true), 100);
    }, []);

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsComplete(true);
        }, 2000);
    };

    if (isComplete) {
        return (
            <motion.div
                className="text-center py-8 bg-white rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                    <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 className="text-3xl font-bold mb-4 text-green-600">Payment Successful!</h2>
                    <p className="mb-6 text-gray-700">Thank you for purchasing your membership.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
                        onClick={onClose}
                    >
                        Close
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-y-auto max-h-[500px] w-full"
        >
            <h2 className="text-2xl font-bold mb-6 text-red-600 border-b-2 border-red-600 pb-2">Payment Details</h2>
            <p className="mb-6 text-gray-800 font-medium">Completing purchase for: <span className="text-red-600 font-bold">{formData.name}</span></p>

            <div className="mb-6">
                <p className="block text-black font-bold mb-3">Select Payment Method</p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {['upi','debitCard', 'creditCard' ].map((method) => (
                        <motion.button
                            key={method}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-3 border-2 rounded-lg transition-all duration-300 flex flex-col items-center justify-center ${
                                paymentMethod === method
                                    ? 'bg-red-600 border-red-700 text-white shadow-lg'
                                    : 'bg-white border-gray-300 text-black hover:border-red-500'
                            }`}
                            onClick={() => setPaymentMethod(method)}
                        >
                            <span className="text-sm font-semibold">
                                {method === 'creditCard' ? 'Credit Card' : method === 'debitCard' ? 'Debit Card' : 'UPI'}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <motion.form
                onSubmit={handlePaymentSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {paymentMethod === 'creditCard' || paymentMethod === 'debitCard' ? (
                    <motion.div
                        className="relative"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className={`bg-gradient-to-r from-black to-red-900 text-white p-6 rounded-xl shadow-xl mb-6 overflow-hidden ${animateCard ? 'transform-none' : '-translate-x-full'}`}
                            animate={{ rotateY: animateCard ? 0 : 180 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ transition: "transform 0.8s ease-out" }}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="text-xs uppercase tracking-wider">
                                    {paymentMethod === 'creditCard' ? 'Credit Card' : 'Debit Card'}
                                </div>
                                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 9H20M7 15H9M13 15H15M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="font-mono text-lg tracking-wider mb-4">
                                xxxx xxxx xxxx xxxx
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-xs">CARD HOLDER NAME</div>
                                <div className="text-xs">VALID THRU</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="font-medium truncate max-w-[70%]">{formData.name || 'YOUR NAME'}</div>
                                <div className="font-mono">MM/YY</div>
                            </div>
                        </motion.div>

                        <div className="mb-4">
                            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="cardNumber">
                                Card Number
                            </label>
                            <input
                                className="shadow-sm appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-red-500 focus:shadow-outline transition-colors duration-300"
                                id="cardNumber"
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                required
                            />
                        </div>

                        <div className="flex space-x-4 mb-4">
                            <div className="w-1/2">
                                <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="expiryDate">
                                    Expiry Date
                                </label>
                                <input
                                    className="shadow-sm appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-red-500 focus:shadow-outline transition-colors duration-300"
                                    id="expiryDate"
                                    type="text"
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="cvv">
                                    CVV
                                </label>
                                <input
                                    className="shadow-sm appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-red-500 focus:shadow-outline transition-colors duration-300"
                                    id="cvv"
                                    type="text"
                                    placeholder="123"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="nameOnCard">
                                Name on Card
                            </label>
                            <input
                                className="shadow-sm appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-red-500 focus:shadow-outline transition-colors duration-300"
                                id="nameOnCard"
                                type="text"
                                required
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="mb-6"
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-black p-6 rounded-xl shadow-xl mb-6 text-white">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-xs uppercase tracking-wider">UPI Payment</div>
                                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="text-center text-sm mt-2">Enter your UPI ID to pay instantly</div>
                        </div>

                        <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="upiId">
                            UPI ID
                        </label>
                        <input
                            className="shadow-sm appearance-none border-2 border-gray-200 rounded-lg w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-red-500 focus:shadow-outline transition-colors duration-300"
                            id="upiId"
                            type="text"
                            placeholder="yourname@upi"
                            required
                        />
                    </motion.div>
                )}

                <div className="flex items-center justify-between mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 ${isProcessing ? 'opacity-75' : ''}`}
                        type="submit"
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <div className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </div>
                        ) : 'Complete Payment'}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
                        type="button"
                        onClick={onBack}
                    >
                        Back
                    </motion.button>
                </div>
            </motion.form>
        </motion.div>
    );
};

export default PaymentForm;
