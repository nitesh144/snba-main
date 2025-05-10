// import React from "react";

// const Why = () => {
//   const features = [
//     {
//       title: "Diverse Range of Services",
//       description:
//         "From supermarkets and restaurants to salons and gyms, Aarna Groups brings multiple essential services under one roof, ensuring convenience and quality in every experience.",
//       icon: () => (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-8 h-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Customer-Centric Approach",
//       description:
//         "Your satisfaction is our priority. We take pride in providing the best possible service with dedicated before and after-sales support.",
//       icon: () => (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-8 h-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Unmatched Quality & Customer Satisfaction",
//       description:
//         "We prioritize customer satisfaction by offering premium services, top-quality products, and a seamless experience across all our businesses.",
//       icon: () => (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-8 h-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M13 10V3L4 14h7v7l9-11h-7z"
//           />
//         </svg>
//       ),
//     },
//     {
//       title: "Exclusive Discounts & Membership Benefits",
//       description:
//         "Enjoy exciting discounts ranging from 10% to 90% across various services, making luxury and comfort accessible to everyone.",
//       icon: () => (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-8 h-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
//           />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen lg:py-5 px-4 sm:px-6 lg:px-8 relative border-white">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl" />
//         <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-red-600/10 rounded-full blur-3xl" />
//       </div>

//       <div className="text-center mb-2 md:py-16 pt-10">
//         <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//           Why Choose Us
//         </h1>
//         <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
//       </div>

//       <div className="max-w-4xl mx-auto pb-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mb-5">
//           {features.map((feature, index) => {
//             // Calculate different border radius for each position
//             const topLeftStyles =
//               index === 0 ? "rounded-tl-[85px] rounded-bl-none rounded-tr-none rounded-br-none" : "";
//             const topRightStyles =
//               index === 1 ? "rounded-tr-[85px] rounded-br-none rounded-tl-none rounded-bl-none" : "";
//             const bottomLeftStyles =
//               index === 2 ? "rounded-bl-[85px] rounded-tl-none rounded-tr-none rounded-br-none" : "";
//             const bottomRightStyles =
//               index === 3 ? "rounded-br-[85px] rounded-tr-none rounded-tl-none rounded-bl-none" : "";

//             return (
//               <div
//                 key={index}
//                 className={`bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 p-5  ${topLeftStyles} ${topRightStyles} ${bottomLeftStyles} ${bottomRightStyles} shadow-md shadow-red-600`}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="lg:p-4 p-1 lg:m-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg shadow-red-500/20">
//                       <feature.icon />
//                     </div>
//                   </div>
//                   <div className="flex-1 lg:p-2">
//                     <h3 className="text-lg lg:text-2xl font-semibold text-white mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-xs lg:text-base text-gray-300 text-justify">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Why;


import React from "react";
import { ShieldCheck, Users, Zap, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

const fadeUpItem = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Diverse Range of Services",
      description:
        "From supermarkets and restaurants to salons and gyms, Aarna Groups brings multiple essential services under one roof, ensuring convenience and quality in every experience.",
      icon: ShieldCheck,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our priority. We take pride in providing the best possible service with dedicated before and after-sales support.",
      icon: Users,
    },
    {
      title: "Unmatched Quality & Customer Satisfaction",
      description:
        "We prioritize customer satisfaction by offering premium services, top-quality products, and a seamless experience across all our businesses.",
      icon: Zap,
    },
    {
      title: "Exclusive Discounts & Membership Benefits",
      description:
        "Enjoy exciting discounts ranging from 10% to 90% across various services, making luxury and comfort accessible to everyone.",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 top-0 w-1/2 h-1/2 bg-red-600/10 rounded-full " />
        <div className="absolute -left-1/4 bottom-0 w-1/2 h-1/2 bg-red-600/10 rounded-full " />
        <div className="absolute left-1/2 top-1/4 w-1/3 h-1/3 bg-red-600/5 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Choose <span className="text-red-500">Us</span>
          </motion.h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-1 bg-gray-700 rounded-full mx-2" />
            <div className="w-24 h-1 bg-red-600 rounded-full mx-2" />
            <div className="w-16 h-1 bg-gray-700 rounded-full mx-2" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
            Experience excellence across our services with benefits that set us apart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUpItem}
                key={index}
                className={`group transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg
                  ${isEven ? "hover:shadow-red-600" : "hover:shadow-red-500"}`}
              >
                <div className="bg-gray-900 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-800 hover:border-red-900/50 transition-colors duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className={`flex items-center justify-center w-16 h-16 rounded-lg 
                        ${isEven ? "bg-gradient-to-br from-red-600 to-red-800" : "bg-gradient-to-br from-red-500 to-red-700"}
                        shadow-md shadow-white transform group-hover:rotate-6 transition-transform duration-300`}>
                        <feature.icon size={28} className="text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm md:text-base flex-grow">
                      {feature.description}
                    </p>

                    <div className="mt-4 h-1 w-12 bg-red-600 rounded-full opacity-70 group-hover:w-24 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </div>
  );
};

export default WhyChooseUs;