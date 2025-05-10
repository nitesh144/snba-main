
import React, { useState } from 'react';
import { RefreshCw, Phone, Mail, Globe, ChevronRight, ArrowLeftRight, Clock, Shield, CreditCard } from 'lucide-react';

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { id: 'eligibility', title: 'Eligibility for Refunds', number: '1' },
    { id: 'request', title: 'How to Request a Refund', number: '2' },
    { id: 'contact', title: 'Contact Us', number: '3' }
  ];

  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Hero Section */}
      <div className="relative overflow-hidden p-16">
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

        <div className="relative container mx-auto px-4 pt-20 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <RefreshCw className="w-12 h-12 lg:w-16 lg:h-16 text-red-500 animate-pulse" />
                <div className="absolute -inset-2 border-2 border-red-500/20 rounded-full animate-ping" />
              </div>
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Refund Policy
              </span>
            </h1>

            <p className="text-sm lg:text-xl mb-8 text-gray-300">
              At SNBA Consumers, we strive to ensure your complete satisfaction with our products and services.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 ">
                <Clock className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Quick Processing</h3>
                <p className="text-sm text-gray-400">7-10 business days refund processing</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <Shield className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Secure Returns</h3>
                <p className="text-sm text-gray-400">Safe and hassle-free return process</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <CreditCard className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Easy Refunds</h3>
                <p className="text-sm text-gray-400">Original payment method refunds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center text-left px-4 py-3 rounded transition-colors ${
                      activeSection === section.id
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

          {/* Content Sections */}
          <div className="lg:w-3/4">
            <div className="space-y-8">
              {/* Eligibility Section */}
              <section id="eligibility" className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-red-500/10 hover:border-red-500/20 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-red-500">1. Eligibility for Refunds</h2>
                <div className="space-y-4 text-gray-300 text-justify">
                  <p>Refund requests will be considered under the following circumstances:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Product or Service Defects:</strong> If you have received a defective or damaged product, or if a service was not delivered as promised.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Incorrect Product or Service:</strong> If you received a product or service that does not match your order.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span><strong>Non-Delivery:</strong> If your product or service is not delivered within the stipulated time frame.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Request Section */}
              <section id="request" className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-red-500/10 hover:border-red-500/20 transition-all duration-300 text-justify">
                <h2 className="text-2xl font-bold mb-6 text-red-500 ">2. How to Request a Refund</h2>
                <div className="space-y-4 text-gray-300">
                  <p>To initiate a refund request, please follow these steps:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Contact our customer support team with your request</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Provide order details and description of the issue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Return items in original condition with proof of purchase</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Additional sections... */}

              {/* Contact Section */}
              <section id="contact" className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-red-500/10 hover:border-red-500/20 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-red-500">3. Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-500" />
                    <span>+91-9109222890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-500" />
                    <span>support@snbaconsumers.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-red-500" />
                    <span>www.snbaconsumers.com</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;