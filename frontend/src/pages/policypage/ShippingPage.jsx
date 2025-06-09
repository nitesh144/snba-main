import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Truck, Package, MapPin, Clock, AlertCircle, Mail, Phone, Store } from 'lucide-react';

const ShippingPage = () => {
  const [openSection, setOpenSection] = useState(1);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const PolicySection = ({ id, title, icon, children }) => { 
    const isOpen = openSection === id;

    return (
      <div className="mb-6 border border-red-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-900/20">
        <button 
          onClick={() => toggleSection(id)}
          className={`w-full flex items-center justify-between p-4 text-left ${isOpen ? 'bg-red-900' : 'bg-black hover:bg-red-950'} transition-colors duration-300`}
        >
          <div className="flex items-center">
            <span className="mr-3 text-red-500">{icon}</span>
            <h2 className="text-sm lg:text-xl font-bold text-white">{title}</h2>
          </div>
          {isOpen ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
        </button>

        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-4 bg-black text-white">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const ShippingTable = ({ title, data }) => (
    <div className="mt-4 mb-6">
      <h3 className="text-lg font-semibold text-red-400 mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-900">
              {Object.keys(data[0]).map((key, index) => (
                <th key={index} className="p-2 text-left text-white border border-red-800">{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-black' : 'bg-red-950'}>
                {Object.values(row).map((value, valueIndex) => (
                  <td key={valueIndex} className="p-2 border border-red-800">
                    {typeof value === 'string' && value.toLowerCase() === 'free' ? (
                      <span className="font-bold text-red-400">{value}</span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const onlineShippingData = [
    { "Order Value/Weight": "Up to ₹999 or <1kg", "Standard Shipping": "₹50/Free Delivery", "Expedited Shipping": "₹100" },
    { "Order Value/Weight": "₹1000–₹2499 or 1–3kg", "Standard Shipping": "Free", "Expedited Shipping": "₹80" },
    { "Order Value/Weight": "₹2500+ or >3kg", "Standard Shipping": "Free", "Expedited Shipping": "₹50" },
  ];

  const localDeliveryData = [
    { "Order Value": "Up to ₹499", "Delivery Charges": "₹30" },
    { "Order Value": "₹500–₹999", "Delivery Charges": "Free Delivery" },
    { "Order Value": "₹1000+", "Delivery Charges": "Free Delivery" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-red-950 to-black py-20 px-4 sm:px-6 lg:px-8 h-[350px]">
        <div className="relative z-10 max-w-4xl mx-auto py-16">
          <div className="animate-fade-in-down">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-4">Shipping & Delivery Policy</h1>
            <p className="text-md lg:text-xl text-gray-300">At Annie Consumers, we are committed to delivering your orders promptly and efficiently—whether you shop online or at our physical grocery store. Please read our shipping and delivery policy carefully for details on processing times, shipping methods, costs, and more.</p>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 right-10 w-12 h-12 rounded-full bg-red-600/20 animate-float"></div>
        <div className="absolute bottom-10 left-1/4 w-20 h-20 rounded-full bg-red-800/10 animate-float-delay"></div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PolicySection 
          id={1} 
          title="Order Processing Time" 
          icon={<Clock size={24} />}
        >
          <ul className="list-disc pl-5 space-y-2 text-sm lg:text-lg">
            <li><span className="font-semibold text-red-400">Online Orders</span> are processed <span className="italic">Monday to Sunday</span>.</li>
            <li>Orders placed <span className="font-semibold text-red-400">before 10:00 AM IST</span> are processed the <span className="italic">same day</span>.</li>
            <li>Orders placed <span className="font-semibold text-red-400">after 12:00 PM IST</span> or on non-business days will be processed the <span className="italic">next business day</span>.</li>
            <li>For orders from our <span className="font-semibold text-red-400">MART</span> with local delivery, processing is typically done within <span className="italic">4–6 hours</span> of order confirmation.</li>
          </ul>
        </PolicySection>

        <PolicySection 
          id={2} 
          title="Shipping Methods & Delivery Options" 
          icon={<Truck size={24} />}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Online Store</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm lg:text-lg">
                <li><span className="font-semibold">Standard Shipping:</span> Delivery within 3–7 business days.</li>
                <li><span className="font-semibold">Expedited Shipping:</span> Delivery within 1–3 business days.</li>
                <li><span className="font-semibold">Carriers Used:</span> Delhivery, Blue Dart, India Post, FedEx (based on location and service availability).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Physical Mart (Local Delivery & Pickup)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm lg:text-lg">
                <li><span className="font-semibold">Local Delivery:</span> Within 10 km radius of our store. Orders delivered in 4–24 hours.</li>
                <li><span className="font-semibold">In-store Pickup:</span> Order online and pick up from our store during working hours (10 AM – 6 PM).</li>
                <li><span className="font-semibold">Same-Day Delivery:</span> Available for orders placed before 3 PM IST, subject to item availability.</li>
              </ul>
            </div>
          </div>
        </PolicySection>

        <PolicySection 
          id={3} 
          title="Shipping & Delivery Costs" 
          icon={<Package size={24} />}
        >
          <p className="mb-4 text-sm">Shipping charges are based on <span className="font-semibold text-red-400">order value</span> or <span className="font-semibold text-red-400">order weight</span>.</p>

          <ShippingTable 
            title="Online Orders" 
            data={onlineShippingData} 
          />

          <ShippingTable 
            title="Local Delivery (MART)" 
            data={localDeliveryData} 
          />

          <p className="text-sm italic text-gray-400 mt-2">Shipping/delivery fees are calculated at checkout or at the billing counter. Charges may vary during promotions or based on delivery distance.</p>
        </PolicySection>

        <PolicySection 
          id={4} 
          title="Tracking Orders" 
          icon={<MapPin size={24} />}
        >
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold text-red-400">Online Orders:</span> Tracking details will be emailed/SMS'd after dispatch. You can also track via our Track Order page.</li>
            <li><span className="font-semibold text-red-400">Local Delivery:</span> For grocery shop orders, our delivery executive will contact you once the order is out for delivery. Live tracking is currently not available for local deliveries.</li>
          </ul>
        </PolicySection>

        <PolicySection 
          id={5} 
          title="Lost or Damaged Packages" 
          icon={<AlertCircle size={24} />}
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>For <span className="font-semibold text-red-400">damaged deliveries</span>, report within 48 hours with clear photos of the packaging and product.</li>
            <li>For <span className="font-semibold text-red-400">lost packages</span>, contact us. If the package cannot be located, we will issue a replacement or full refund.</li>
            <li>Annie Consumers is not liable for delays due to courier issues but will assist you in resolving such matters.</li>
          </ul>
        </PolicySection>

        <PolicySection
          id={6} 
          title="Address Accuracy" 
          icon={<MapPin size={24} />}
        >
          <p>Please ensure all delivery addresses are <span className="font-semibold text-red-400">accurate and complete</span>. Incorrect addresses may lead to delays or non-delivery. For local grocery delivery, ensure a <span className="font-semibold text-red-400">valid contact number</span> is provided for smooth coordination.</p>
        </PolicySection>

        <PolicySection 
          id={7} 
          title="Contact Us" 
          icon={<Mail size={24} />}
        >
          <p className="mb-4">Need help? We're here for you.</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="mr-2 text-red-400" size={18} />
              <span><span className="font-semibold">Email:</span> info@annieconsumers.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-red-400" size={18} />
              <span><span className="font-semibold">Phone:</span>1800-2331112</span>
            </div>
            <div className="flex items-center">
              <Store className="mr-2 text-red-400" size={18} />
              <span><span className="font-semibold">Store Location:</span> Raipur Area</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 text-red-400" size={18} />
              <span><span className="font-semibold">Working Hours:</span> Mon–Sun, 10 AM – 6 PM IST</span>
            </div>
          </div>
        </PolicySection>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-white text-lg mb-2">Thank you for choosing Annie Consumers.</p>
          <p className="text-gray-300">Whether you shop online or visit our store, we are dedicated to delivering quality and convenience to your doorstep.</p>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @keyframes floatDelay {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: floatDelay 8s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        } 

      `}</style>
    </div>
  );
};

export default ShippingPage;