import React, { useState } from 'react';
import { Scroll, Shield, BookOpen, Scale, Phone, Mail, Globe, ChevronRight } from 'lucide-react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms', number: '1' },
    { id: 'overview', title: 'Services Overview', number: '2' },
    { id: 'membership', title: 'Membership', number: '3' },
    { id: 'responsibilities', title: 'User Responsibilities', number: '4' },
    { id: 'ip', title: 'Intellectual Property', number: '5' },
    { id: 'privacy', title: 'Privacy Policy', number: '6' },
    { id: 'refund', title: 'Refund Policy', number: '7' },
    { id: 'termination', title: 'Termination', number: '8' },
    { id: 'liability', title: 'Limitation of Liability', number: '9' },
    { id: 'indemnification', title: 'Indemnification', number: '10' },
    { id: 'disputes', title: 'Dispute Resolution', number: '11' },
    { id: 'law', title: 'Governing Law', number: '12' },
    { id: 'changes', title: 'Changes to Terms', number: '13' },
    { id: 'contact', title: 'Contact Us', number: '14' }
  ];

  const termsContent = {
    acceptance: {
      title: "1. Acceptance of Terms",
      content: `By using our Services, you confirm that you are at least 18 years old and have the legal capacity to enter into a binding agreement. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.`
    },
    overview: {
      title: "2. Services Overview",
      content: `SNBA Consumers offers a variety of services under one roof, including:

      • Supermarket (Aarna Mart): A wide range of grocery and household products with exclusive discounts.
      • Gym Services: State-of-the-art fitness facilities and professional guidance.
      • Salon Services: Beauty and wellness services designed to enhance your self-care routine.
      • Food Court: A dining experience offering a variety of food, restaurant, and sweet options.

      Each service is designed to provide convenience, quality and value to our customers.`
    },
    membership: {
      title: "3. Membership (₹99 Plan)",
      content: `SNBA Consumers offers a ₹99 Membership Plan that provides exclusive access to discounts and benefits across our supermarket, gym, salon, and food court services. By subscribing to this plan, you agree to the following:

      • Subscription Fee: A monthly fee of ₹99 will be charged to your account.
      • Auto-Renewal: Your membership will automatically renew each month unless cancelled.
      • Cancellation: You may cancel your membership at any time. Refunds will not be issued for already used months.
      • Eligibility: Membership benefits are non-transferable and may only be used by the account holder.`
    },
    responsibilities: {
      title: "4. User Responsibilities",
      content: `By using our Services, you agree to:

      • Provide accurate and complete information when creating an account or making a purchase.
      • Use the Services only for lawful purposes and in accordance with these Terms.
      • Not engage in any activity that may harm the reputation or operations of SNBA Consumers or its affiliates.
      • Not attempt to gain unauthorized access to SNBA Consumers' systems, data, or networks.`
    },
    ip: {
      title: "5. Intellectual Property",
      content: `• All trademarks, logos, branding, and proprietary knowledge associated with SNBA Consumers are the sole property of SNBA Consumers.
      • You may not use, copy, or modify any intellectual property without prior written consent from SNBA Consumers.
      • Any unauthorized use of SNBA Consumers' intellectual property may result in legal action.`
    },
    privacy: {
      title: "6. Privacy Policy",
      content: `Your use of the Services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our Services, you agree to the terms of our Privacy Policy.`
    },
    refund: {
      title: "7. Refund Policy",
      content: `SNBA Consumers strives to provide the best possible products and services. Refunds are eligible under the following conditions:

      Eligibility for Refunds:
      • Product or Service Defects: If you receive a defective or damaged product
      • Incorrect Product or Service: If you receive a product that doesn't match your order
      • Non-Delivery: If your product is not delivered within the stipulated time frame

      How to Request a Refund:
      • Contact our customer support team at +91-9109222890
      • Provide your order number and details
      • Return items in original condition with proof of purchase

      Non-Refundable Items:
      • Subscription services already accessed
      • Opened or used products
      • Services already rendered`
    },
    termination: {
      title: "8. Termination",
      content: `• SNBA Consumers reserves the right to terminate or suspend your access to the Services at any time, with or without notice, for any reason, including but not limited to violations of these Terms.
      • If your account is terminated, you must immediately cease using SNBA Consumers' Services.`
    },
    liability: {
      title: "9. Limitation of Liability",
      content: `• SNBA Consumers shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the Services.
      • SNBA Consumers' total liability to you for any claims arising out of these Terms or your use of the Services shall not exceed the amount you have paid to SNBA Consumers in the past six months.`
    },
    indemnification: {
      title: "10. Indemnification",
      content: `You agree to reimburse and hold SNBA Consumers harmless from any claims, damages, losses, or expenses (including legal fees) arising out of your use of the Services or your violation of these Terms.`
    },
    disputes: {
      title: "11. Dispute Resolution",
      content: `• Any disputes arising out of or related to these Terms or your use of the Services shall be resolved through binding arbitration.
      • The arbitration shall take place in Raipur, and the language of the arbitration shall be English.`
    },
    law: {
      title: "12. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.`
    },
    changes: {
      title: "13. Changes to Terms",
      content: `SNBA Consumers reserves the right to modify or update these Terms at any time. We will notify you of any changes by posting the updated Terms on our website. Your continued use of the Services after the changes take effect constitutes your acceptance of the revised Terms.`
    },
    contact: {
      title: "14. Contact Us",
      content: `If you have any questions or concerns about these Terms, please contact us at:

      SNBA Consumers
      📞 +91 910 09 222 890
      📧 info@snbaconsumers.com
      🌐 www.snbaconsumers.com`
    }
  };


  return (
    <div className="min-h-screen bg-black text-white relative ">
      {/* Hero Section */}
      <div className="relative overflow-hidden ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-red-500/10"
              style={{
                width: '300px',
                height: '300px',
                left: `${i * 15}%`,
                top: `${(i % 3) * 100}px`,
                transform: 'rotate(45deg)',
                animation: `float ${4 + i}s infinite ease-in-out alternate`
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-28 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Scale className="h-12 w-12 lg:w-16 lg:h-16 text-red-500 animate-pulse" />
                <div className="absolute -inset-2 border-2 border-red-500/20 rounded-full animate-ping" />
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>

            <p className="text-sm lg:text-xl mb-8 text-gray-300">
              Welcome to SNBA Consumers. Please read these terms carefully before using our services.
            </p>

            {/* Key Points Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <BookOpen className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Clear Guidelines</h3>
                <p className="text-sm text-gray-400">Comprehensive rules and policies for using our services</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <Shield className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Your Protection</h3>
                <p className="text-sm text-gray-400">Ensuring fair and secure service delivery</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Membership', 'Refunds', 'Privacy', 'Support'].map((item) => (
                <button
                  key={item}
                  className="p-3 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  <span className="text-sm font-medium">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center text-left px-4 py-3 rounded transition-colors ${activeSection === section.id
                        ? 'bg-red-600 text-white'
                        : 'hover:bg-red-900/50'
                      }`}
                  >
                    <span className="mr-2 text-sm">{section.number}.</span>
                    <span className="flex-1">{section.title}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Terms Content */}
          <div className="lg:w-3/4">
            <div className="prose prose-invert max-w-none">
              {Object.entries(termsContent).map(([key, section]) => (
                <section
                  key={key}
                  id={key}
                  className="mb-12 p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <h2 className="text-lg lg:text-2xl font-bold mb-6 text-red-500">
                    {section.title}
                  </h2>
                  <div className="text-sm lg:text-lg text-justify text-gray-300 whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;