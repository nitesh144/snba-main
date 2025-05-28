import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from '../form/RegistrationForm';
import MembershipFormPage from '../../pages/formpage/MembershipFormPage';

const CallToAction = () => {
    const [showUserForm, setShowUserForm] = useState(false);

    return (
        <>
            <div>
                < motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className='fixed right-5 bottom-2 md:right-12 md:bottom-2 lg:right-[120px] lg:bottom-1 z-20'>
                    <button
                        className=' h-9 lg:h-10 p-2 lg:py-0 py-2 font-semibold text-xs md:text-md lg:text-md xl:text-xl rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-300'
                        aria-label="Call to Action Button"
                        onClick={() => setShowUserForm(true)}
                    >
                        Buy Membership
                    </button>
                </motion.div>
                {showUserForm && <MembershipFormPage onClose={() => setShowUserForm(false)} />}
            </div>
        </>
    );
};

export default CallToAction



