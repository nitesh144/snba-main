import { X } from "lucide-react";


const RegistrationForm = ({ onClose }) => {
    return (
        // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        //   <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md relative">
        //     {/* <button
        //       onClick={onClose}
        //       className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        //     >
        //       ✕
        //     </button> */}
        //     <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
        //     <form>
        //       {/* Form Fields */}
        //     </form>
        //   </div>
        // </div>
        <div className="fixed inset-0 flex items-center z-50">
            <div className="bg-white w-full h-full max-w-7xl mx-auto p-6 ">
                <div className="w-full justify-between flex">
                    <h1>Registration Form</h1>
                    <X className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;