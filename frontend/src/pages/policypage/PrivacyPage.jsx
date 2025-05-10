import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'intro', title: 'Introduction', number: '1', content: 'Welcome to SNBA Consumer! Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to the practices described in this policy.' },
    {
      id: 'collect', title: 'Information We Collect', number: '2', content: `
      **a. Information You Provide to Us:**
- Name, email address, phone number, and billing information.
- Account credentials (username, password).
- Preferences, feedback, and other information you provide voluntarily.

**b. Information We Collect Automatically:**
- Device information (IP address, browser type, operating system).
- Usage data (pages visited, time spent, clicks, and interactions).
- Location data, where permitted by law.

**c. Information from Third Parties:**
- Data from payment processors (e.g., transaction details).
- Information from social media platforms if you connect your accounts.`},
    {
      id: 'use', title: 'How We Use Your Information', number: '3', content: `
      We use your information for the following purposes:
●	To process transactions and deliver services.
●	To personalize your experience and offer relevant recommendations.
●	To communicate with you regarding updates, offers, or support.
●	To improve our website, app, and services.
●	To comply with legal obligations.
` },
    {
      id: 'share', title: 'How We Share Your Information', number: '4', content: `
      We do not sell your personal information. However, we may share it in the following cases:
●	With Service Providers: Third-party vendors who help us with payment processing, analytics, or marketing.
●	For Legal Reasons: To comply with laws, regulations, or court orders.
●	In Business Transfers: If we are involved in a merger, acquisition, or asset sale.
` },
    {
      id: 'cookies', title: 'Cookies and Tracking Technologies', number: '5', content: `
      We use cookies and similar technologies to enhance your experience. Cookies may collect data such as:
●	Preferences and settings.
●	Authentication information.
●	Analytics and performance data.
You can manage cookies through your browser settings or opt-out of certain types of tracking.
` },
    {
      id: 'security', title: 'Data Security', number: '6', content: `
      We implement technical and organizational measures to protect your personal information, including:
●	Secure servers and encryption.
●	Regular security audits and updates.
●	Restricted access to sensitive data.
Despite our efforts, no system is 100% secure, and we cannot guarantee the absolute security of your data.
` },
    {
      id: 'rights', title: 'Your Rights', number: '7', content: `
      Depending on your location, you may have the following rights:
●	Access: Request a copy of your data.
●	Correction: Update inaccurate or incomplete information.
●	Deletion: Request the deletion of your data.
●	Portability: Request your data in a portable format.
●	Opt-Out: Opt-out of marketing communications or data sharing for targeted ads.
To exercise your rights, contact us at snbaconsumers@gmail.com.
` },
    {
      id: 'third-party', title: 'Third-Party Links', number: '8', content: `
      Our app may contain links to third-party websites. We are not responsible for their privacy practices, so please review their policies before sharing your information.` },
    {
      id: 'retention', title: 'Data Retention', number: '9', content: `
      We retain your information only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations.` },
    { id: 'children', title: "Children's Privacy", number: '10', content: 'SNBA Consumer services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children without parental consent.' },
    { id: 'changes', title: 'Changes to This Policy', number: '11', content: 'We may update this Privacy Policy periodically. Changes will be posted on this page, and significant updates may be communicated via email or app notifications.' },
   
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 overflow-hidden">

      <div className="relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent" />
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute transform rotate-45 border border-red-500/20"
              style={{
                width: '200px',
                height: '200px',
                left: `${i * 20}%`,
                top: `${(i % 2) * 100}px`,
                animation: `float ${3 + i}s infinite ease-in-out alternate`
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative container mx-auto px-4 pt-20 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center space-x-4">
              <Shield className="text-red-500 lg:w-12 lg:h-12 animate-pulse" />
              <Lock className="text-red-500 lg:w-12 lg:h-12 animate-pulse delay-100" />
              <Eye className="text-red-500 lg:w-12 lg:h-12 animate-pulse delay-200" />
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>

            <p className="text-sm md:text-md lg:text-xl mb-8 text-gray-300">
              Your privacy is our priority. Learn how we protect, respect, and handle your personal information.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <Shield className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Secure Data</h3>
                <p className="text-sm text-gray-400">Your data is protected with industry-leading security measures</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <Lock className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-gray-400">We never sell or share your personal information</p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                <FileText className="w-8 h-8 text-red-500 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Full Transparency</h3>
                <p className="text-sm text-gray-400">Clear and simple explanations of our privacy practices</p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl bg-gray-900 p-8 overflow-hidden rounded-lg shadow-lg border border-red-600">
        <h1 className="text-4xl font-bold mb-4 text-center text-red-500">Privacy Policy</h1>
        <p className="text-center text-red-400 mb-8">SNBA Consumer</p>

        {/* Navigation Sidebar + Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 rounded transition-colors ${activeSection === section.id
                      ? 'bg-red-600 text-white'
                      : 'hover:bg-red-900'
                      }`}
                  >
                    <span className="font-medium">{section.number}. {section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="bg-gray-800 p-6 rounded-lg border border-red-500">
                <h2 className="text-2xl font-bold mb-4 text-red-600">{section.number}. {section.title}</h2>
                <p className="text-gray-300 text-sm lg:text-md text-justify">{section.content}</p>
              </section>
            ))}

            {/* Contact Section */}
            <section id="contact" className="bg-gray-800 p-6 rounded-lg border border-red-500">
              <h2 className="text-2xl font-bold mb-4 text-red-600"> Contact Us</h2>
              <div className="p-4 rounded-lg">
                <p className="mb-4 text-sm lg:text-lg">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                <div className="space-y-2 text-sm lg:text-lg">
                  <p><strong>Email:</strong> info@snbaconsumers.com</p>
                  <p><strong>Phone:</strong> 910922890</p>
                  <p><strong>Address:</strong> SNBA Consumers, 2nd floor, Mansarovar Bhavan, NIT Road, Raipur, 492010, Chhattisgarh, India</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
