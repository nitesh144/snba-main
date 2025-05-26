
import React, { useState } from 'react';
import { RefreshCw, Phone, Mail, Globe, ChevronRight, ArrowLeftRight, Clock, Shield, CreditCard, ShieldAlert, Check, ArrowDown, Package, HelpCircle } from 'lucide-react';

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
      <div className="relative overflow-hidden p-4">
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

        <div className="relative container mx-auto px-4 pt-20 pb-10">
          <div className="lg:max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <RefreshCw className="w-12 h-12 lg:w-16 lg:h-16 text-red-500 animate-pulse" />
                <div className="absolute -inset-2 border-2 border-red-500/20 rounded-full animate-ping" />
              </div>
            </div>

            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Refund & Return Policy – Aarna Groups
              </span>
            </h1>

            <p className="text-sm lg:text-lg text-gray-300 text-justify">
              At Aarna Groups, we prioritize your satisfaction. Our goal is to provide you with high-quality products and a smooth shopping experience. If for any reason you’re not completely happy with your purchase, our clear and customer-friendly refund and return policy ensures that your concerns are addressed quickly and efficiently.
              We believe in building trust through transparency, and our team is always ready to support you at every step. Whether it's a damaged item or a mismatch in your order, we’re here to make it right — promptly and professionally.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-black rounded-lg shadow p-6 lg:max-w-7xl mx-auto mb-4">
        <div className="flex items-center mb-4">
          <ShieldAlert className="h-6 w-6 lg:h-8 lg:w-8 text-red-500 mr-2" />
          <h2 className="text-xl lg:text-2xl font-semibold text-white">Eligibility for Returns & Refunds</h2>
        </div>
        <p className="mb-4 text-gray-200 text-sm lg:text-lg">
          You can <span className="font-bold">request a return or refund on the same day of product delivery</span> under the following conditions:
        </p>
        <ul className="space-y-2 text-gray-200 text-sm lg:text-lg">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>The product you received is <span className="font-bold">damaged</span>, <span className="font-bold">defective</span>, or <span className="font-bold">not working as intended</span>.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>You received the <span className="font-bold">wrong product</span>, <span className="font-bold">different variant</span>, or <span className="font-bold">wrong quantity</span> from what you ordered.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>The product is <span className="font-bold">expired</span>, <span className="font-bold">leaking</span>, <span className="font-bold">unhygienic</span>, or <span className="font-bold">spoiled</span> upon arrival.</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Items that are delivered in an unsealed, opened, or tampered condition.</span>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-gray-700 text-red-800 rounded-md text-sm  ">
          <p className="text-sm lg:text-lg text-white">
            <strong>Note:</strong> Returns/refunds will not be applicable for <span className="font-bold">change of mind</span>, <span className="font-bold">wrong selection by the user</span>, or <span className="font-bold">products purchased during clearance sales</span>, unless the product is defective or damaged.
          </p>
        </div>
      </div>

      <div className=" rounded-lg shadow p-6 lg:max-w-7xl mx-auto mb-4">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-xl lg:text-2xl font-semibold text-white">Same-Day Refund Claim</h2>
        </div>
        <p className="mb-4 text-gray-200 text-sm lg:text-lg">
          To ensure quick resolution, customers must initiate their <span className="font-bold">refund or return request on the same day of delivery</span>. This helps us process your concern while the product condition is still verifiable and avoids misuse of the policy.
        </p>
        <ul className="space-y-2 text-gray-200">
          <li className="flex items-start text-sm lg:text-lg">
            <ArrowDown className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>Claims made <span className="font-bold">after the same day</span> may be reviewed but are <span className="font-bold">subject to approval</span> by Aarna Groups' customer care team.</span>
          </li>
          <li className="flex items-start text-sm lg:text-lg">
            <ArrowDown className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
            <span>Requests must include <span className="font-bold">order number</span>, <span className="font-bold">clear images</span> of the product, and a brief <span className="font-bold">description of the issue</span>.</span>
          </li>
        </ul>
      </div>

      {/* Return Conditions */}
            <div className="rounded-lg shadow p-6 max-w-7xl mx-auto mb-4">
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 lg:w-8 lg:h-8 text-red-500 mr-2" />
                <h2 className="text-xl lg:text-2xl font-semibold text-white">Return Conditions</h2>
              </div>
              <p className="mb-4 text-gray-200 text-sm lg:text-lg">
                For a product to be eligible for return:
              </p>
              <ul className="space-y-2 text-gray-200 text-sm lg:text-lg">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>The item must be <span className="font-bold">unused</span>, <span className="font-bold">unopened</span>, and in its <span className="font-bold">original packaging</span> with all seals, labels, and accessories intact.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Returned items must be in a <span className="font-bold">resellable condition</span>; used or damaged products will not be accepted unless the issue is reported immediately after delivery.</span>
                </li>
                <li className="flex items-start">
                  <ShieldAlert className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-bold">Perishable goods</span> like dairy, fruits, vegetables, or frozen items are <span className="font-bold">non-returnable</span> unless proven to be <span className="font-bold">spoiled or damaged</span> at the time of delivery.</span>
                </li>
                <li className="flex items-start">
                  <ShieldAlert className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><span className="font-bold">Personal care and hygiene products</span> (like razors, undergarments, opened skincare) are <span className="font-bold">non-returnable</span> due to health and safety regulations.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-gray-700 text-yellow-800 rounded-md">
                <p className="text-sm lg:text-lg text-white">
                  Products sent back to us without an approved return request will not be processed for refund or replacement.
                </p>
              </div>
            </div>

            {/* Refund Processing */}
            <div className=" rounded-lg shadow p-6 lg:max-w-7xl mx-auto pb-10">
              <div className="flex items-center mb-4">
                <RefreshCw className="h-6 w-6 lg:h-8 lg:w-8 text-red-500 mr-2" />
                <h2 className="text-xl lg:text-2xl font-semibold text-white">Refund Processing Timeline</h2>
              </div>
              <p className="mb-4 text-gray-200 text-sm lg:text-lg">
                Once your return is approved and the product is received and verified by our team:
              </p>
              <ul className="space-y-2 text-gray-100 text-sm lg:text-lg">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-2 mt-1.5 flex-shrink-0" />
                  <span>A refund will be <span className="font-bold">initiated within 3-5 business days</span>. You will receive an email or SMS notification once the refund has been processed from our end.</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-2 mt-1.5 flex-shrink-0" />
                  <span>Refunds are made to the <span className="font-bold">original payment method</span> used during purchase (UPI, debit/credit card, net banking, etc.).</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-500 mr-2 mt-1.5 flex-shrink-0" />
                  <span>For <span className="font-bold">Cash on Delivery (COD)</span> orders, we'll request your <span className="font-bold">bank details or UPI ID</span> to complete the refund process securely.</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className=" rounded-lg shadow p-3 lg:max-w-7xl mx-auto pb-8">
              <div className="flex items-center mb-4">
                <HelpCircle className="h-6 w-6 text-red-500 mr-2" />
                <h2 className="text-xl font-semibold text-white">Need Help?</h2>
              </div>
              <p className="mb-4 text-gray-200">
                If you have questions or need support regarding your order, feel free to reach out:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" text-sm lg:text-lg flex rounded-md gap-2">
                  <p className="font-semibold">Email:</p>
                  <p className="text-red-500">info@snbaconsumers.com</p>
                </div>
                <div className=" rounded-md text-sm lg:text-lg flex gap-2">
                  <p className="font-semibold">Phone</p>
                  <p className="text-red-500">7400866821</p>
                  
                </div>
                <p className="text-sm text-gray-200">(9 AM – 7 PM, Monday to Saturday)</p>
              </div>
            </div>
    </div>
  );
};

export default RefundPolicy;