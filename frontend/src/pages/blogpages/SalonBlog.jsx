import { useState } from 'react';
import { ChevronDown, ChevronUp, Scissors, Sparkles, Heart, Calendar, Star, Phone } from 'lucide-react';

// Main Salon Blog Page Component
export default function SalonBlog() {
  const [activeSections, setActiveSections] = useState({
    benefits: true,
    skinCare: true,
    hairCare: true,
    makeup: true,
    nailCare: true,
    spa: true
  });

  const toggleSection = (section) => {
    setActiveSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700">
      {/* Header */}
      <header className="bg-red-800 text-white py-8 px-4 md:px-8 h-96">
        <div className="max-w-6xl mx-auto py-32">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Transform Your Look: All the Services You Need</h1>
          <p className="text-center text-lg md:text-xl italic mb-6">Expert stylists & beauticians at Aarna Salon offer the latest trends in haircuts, coloring, skincare & more. Book your personalized salon experience now!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">The Ultimate Guide to Personal Grooming: Salon Services You Can't Miss + Special Offers from Aarna Groups</h2>
          
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 mb-4 text-lg md:text-xl">
              Personal grooming and self-care are essential aspects of maintaining a healthy lifestyle and boosting confidence. Whether you're looking to rejuvenate your skin, enhance your hair, or indulge in a pampering spa treatment, visiting a professional salon offers countless benefits. In this guide, we'll walk you through the various salon services available, including skin care, hair care, makeup, pedicure, manicure, and more. Plus, don't miss out on the exclusive discounts and offers from <strong>Aarna Groups</strong> to make your grooming experience even more special!
            </p>
          </div>

          {/* Benefits of Personal Grooming */}
          <SectionContainer 
            title="1. Benefits of Personal Grooming" 
            isOpen={activeSections.benefits}
            toggle={() => toggleSection('benefits')}
            icon={<Heart className="h-6 w-6 text-red-500" />}
            
          >
            <p className="mb-4 md:text-lg">Personal grooming is more than just a luxury; it's an essential part of self-care that contributes to your overall well-being. Regular grooming helps improve your physical appearance and boosts your mental health, enhancing your mood and confidence. From skincare routines to haircuts, each service has its own unique benefits. Here are just a few:</p>
            
            <ul className="mb-4 space-y-2 md:text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Boosted Confidence:</strong> Looking good can make you feel good. Grooming enhances your appearance, boosting your self-esteem and making you more confident in social and professional settings.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Stress Relief:</strong> Spa treatments and massages promote relaxation, helping to reduce stress and anxiety. Taking time for grooming offers mental clarity and a sense of calm.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Better Health:</strong> Regular skin and hair care help prevent common issues like acne, dandruff, and split ends. Grooming also helps you detect skin changes or conditions early.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Enhanced Relaxation:</strong> Self-care treatments like facials or body massages not only improve your appearance but also help your body relax, reducing tension and promoting well-being.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Positive Mindset:</strong> Taking time for yourself through grooming reinforces a positive self-image and mindset, boosting emotional well-being.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Increased Productivity:</strong> When you feel good about your appearance, it leads to improved focus and motivation, helping you stay productive and on top of your goals.</span>
              </li>
            </ul>
          </SectionContainer>

          {/* Skin Care Services */}
          <SectionContainer 
            title="2. Skin Care Services at Salons" 
            isOpen={activeSections.skinCare}
            toggle={() => toggleSection('skinCare')}
            icon={<Sparkles className="h-6 w-6 text-pink-500" />}
          >
            <p className="mb-4 md:text-lg">Healthy, glowing skin starts with a great skincare routine, and salons are the perfect place to receive expert care. Services like facials, skin treatments, and exfoliation help revitalize your skin, leaving it smooth and refreshed. Here are some popular skin care services:</p>

            <h4 className="text-xl font-semibold mb-2 text-red-700">Facials:</h4>
            <p className="mb-4 md:text-lg">Facials are designed to deeply cleanse, exfoliate, and hydrate your skin. They can address specific skin concerns like acne, dryness, or aging while leaving your skin refreshed and rejuvenated.</p>
            
            <ul className="mb-6 space-y-2 md:text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>HydraFacial:</strong> HydraFacial is a multi-step treatment that cleanses, exfoliates, and hydrates the skin with specialized serums. It's non-irritating and gives an immediate glow, making it ideal for all skin types.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>LED Light Therapy:</strong> LED light therapy uses different wavelengths of light to target specific skin concerns. Red light helps stimulate collagen production for anti-aging, while blue light targets acne-causing bacteria to reduce breakouts.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Oxygen Facials:</strong> Oxygen facials deliver oxygen directly into the skin along with nutrient-rich serums. This helps hydrate, plump, and rejuvenate the skin, providing an instant healthy glow and reducing signs of aging.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Acne Treatments:</strong> Acne treatments at salons include deep cleansing facials, extractions, and specialized masks. These help reduce inflammation, clear up breakouts, and prevent future acne issues, leaving your skin calm and clear.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Anti-Aging Treatments:</strong> Anti-aging treatments such as collagen masks, microcurrent facials, and skin tightening therapies help to reduce wrinkles, fine lines, and sagging. They promote firmer, smoother skin and a youthful appearance.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Hydrating Masks:</strong> Hydrating masks provide deep moisture to dry and dehydrated skin. They nourish and rejuvenate, leaving the skin feeling soft, smooth, and balanced, especially after sun exposure or harsh weather.</span>
              </li>
            </ul>

            <p className="mb-4">Whether you're looking for acne treatments or anti-aging solutions, professional skin care can make a significant difference.</p>
            
            <p className="font-semibold mb-6"><strong>Aarna Groups</strong> offers a variety of skincare services, and with current <strong>special discounts</strong>, now's the perfect time to treat your skin to the care it deserves.</p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <img src="/api/placeholder/650/433" alt="Skincare services" className="w-full rounded-lg mb-2" />
            </div>
          </SectionContainer>

          {/* Hair Care Services */}
          <SectionContainer 
            title="3. Hair Care and Hair Treatments" 
            isOpen={activeSections.hairCare}
            toggle={() => toggleSection('hairCare')}
            icon={<Scissors className="h-6 w-6 text-pink-500" />}
          >
            <p className="mb-4 md:text-lg">Healthy hair is a reflection of good grooming. Salon hair care services go beyond just cutting and styling -- they also include nourishing treatments to maintain your hair's health and vitality. Here are some key hair care services offered:</p>
            
            <ul className="mb-6 space-y-2 md:text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Haircuts and Styling:</strong> From trendy cuts to classic styles, salons offer professional hairstyling for any occasion.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Hair Coloring:</strong> Add a pop of color with highlights, balayage, or full color treatments.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Hair Treatments:</strong> Deep conditioning and keratin treatments restore moisture and shine to your hair.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Scalp Treatments:</strong> Revitalize your scalp with treatments designed to improve circulation, balance oil production, and address dandruff or dryness, promoting healthy hair growth.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Hair Extensions:</strong> Add length, volume, or thickness with natural-looking hair extensions, available in various textures and shades to match your desired style.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Keratin Smoothing Treatment:</strong> Reduce frizz and add shine with a keratin smoothing treatment that leaves your hair silky, smooth, and more manageable for weeks.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Heat Protection and Styling:</strong> Protect your hair from heat damage with professional-grade heat protection products, followed by expert styling to achieve your desired look without the worry of breakage.</span>
              </li>
            </ul>
            
            <p className="font-semibold mb-6">With <strong>Aarna Groups' latest offers</strong> on hair care packages, you can pamper your hair without breaking the bank!</p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <img src="/api/placeholder/650/432" alt="Hair care services" className="w-full rounded-lg mb-2" />
            </div>
          </SectionContainer>

          {/* Makeup Services */}
          <SectionContainer 
            title="4. Makeup Services" 
            isOpen={activeSections.makeup}
            toggle={() => toggleSection('makeup')}
            icon={<Sparkles className="h-6 w-6 text-pink-500" />}
          >
            <p className="mb-4 md:text-lg ">Whether it's for a special occasion or just a day out, professional makeup can elevate your look. Salons offer a wide range of makeup services, including:</p>
            
            <ul className="mb-6 space-y-2 md:text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Bridal Makeup:</strong> Get flawless makeup for your big day with the help of expert artists.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Party Makeup:</strong> From soft glam to bold looks, professional makeup artists ensure you look your best.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Makeup Lessons:</strong> Learn how to enhance your features with personalized makeup lessons.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Evening or Glam Makeup:</strong> Perfect for a night out or special event, this service includes bold, dramatic looks that highlight your features for a stunning, head-turning effect.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Airbrush Makeup:</strong> Achieve a flawless, lightweight finish with airbrush makeup, ideal for long-lasting wear and a smooth, natural look.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Makeup for Photoshoots:</strong> Professional makeup tailored for high-definition photography, ensuring you look radiant and picture-perfect in every shot.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Men's Grooming Makeup:</strong> Subtle yet effective makeup to enhance natural features for men, perfect for special occasions or photo-ready looks without a heavy appearance.</span>
              </li>
            </ul>
            
            <p className="font-semibold mb-6"><strong>Aarna Groups</strong> has some <strong>exclusive deals</strong> on makeup services, making it the perfect time to book your next appointment.</p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <img src="/api/placeholder/650/555" alt="Makeup services" className="w-full rounded-lg mb-2" />
            </div>
          </SectionContainer>

          {/* Nail Care Services */}
          <SectionContainer 
            title="5. Pedicure and Manicure: Nail Care at Its Best" 
            isOpen={activeSections.nailCare}
            toggle={() => toggleSection('nailCare')}
            icon={<Sparkles className="h-6 w-6 text-pink-500" />}
          >
            <p className="mb-4 md:text-lg">A salon-quality manicure and pedicure don't just make your nails look beautiful; they also contribute to better nail health. Regular manicures and pedicures remove dead skin cells, prevent nail infections, and promote circulation. Here's what you can expect:</p>
            
            <ul className="mb-6 space-y-2">
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Classic Manicure & Pedicure:</strong> Get nails shaped, cuticles treated, and your skin exfoliated.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Gel Nails:</strong> Long-lasting, chip-resistant nails with vibrant colors.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Nail Art:</strong> Express your creativity with custom nail designs.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Acrylic Nails:</strong> Achieve length and strength with acrylic nails, perfect for those looking for a durable and flawless finish.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Paraffin Wax Treatment:</strong> Indulge in a warm paraffin wax treatment that softens your hands and feet, providing deep hydration and soothing dry skin.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>French Manicure & Pedicure:</strong> A timeless classic, this service gives your nails a clean, polished look with a natural base and crisp white tips.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Nail Strengthening Treatment:</strong> Strengthen weak or damaged nails with a nourishing treatment that promotes healthy growth and prevents breakage.</span>
              </li>
            </ul>
            
            <p className="font-semibold mb-6">With <strong>Aarna Groups' special offers</strong>, now is the best time to book a pampering nail care session.</p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <img src="/api/placeholder/650/433" alt="Nail care services" className="w-full rounded-lg mb-2" />
            </div>
          </SectionContainer>

          {/* Spa Services */}
          <SectionContainer 
            title="6. Spa Services for Ultimate Relaxation" 
            isOpen={activeSections.spa}
            toggle={() => toggleSection('spa')}
            icon={<Heart className="h-6 w-6 text-pink-500" />}
          >
            <p className="mb-4 md:text-lg">A spa day is the perfect way to unwind and de-stress. From massages to body treatments, a trip to the spa rejuvenates both body and mind. Some popular spa services include:</p>
            
            <ul className="mb-6 space-y-2">
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Aromatherapy Massages:</strong> Relax with soothing oils that relieve tension.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Hot Stone Therapy:</strong> Experience muscle relaxation through heated stones.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Body Scrubs and Wraps:</strong> Exfoliate and hydrate your skin with natural ingredients.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Facial Treatments:</strong> Revitalize your skin with customized facials that cleanse, hydrate, and rejuvenate your face, leaving you glowing and refreshed.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Reflexology:</strong> Focus on pressure points in the feet or hands to promote relaxation and improve overall wellness.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Mud or Clay Therapy:</strong> Detoxify and nourish your skin with natural mud or clay masks that help draw out impurities while providing deep hydration.</span>
              </li>
              <li className="flex items-start md:text-lg">
                <span className="mr-2 text-pink-500 font-bold">•</span>
                <span><strong>Scalp Massage:</strong> Relieve tension in your head and neck with a soothing scalp massage, which also promotes hair growth and relaxation.</span>
              </li>
            </ul>
            
            <p className="font-semibold mb-4 md:text-lg">Aarna Groups also offers <strong>discounted spa packages</strong> to ensure you get the most relaxation for your money!</p>
          </SectionContainer>
        </section>

        {/* Aarna Salon Promotion */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Aarna Salon: The Best Beauty Destination in Raipur</h2>
          
          <p className="mb-6 md:text-lg">For those looking for premium beauty treatments, <strong>Aarna Salon in Raipur</strong> is the perfect choice. Whether you need a refreshing facial, a trendy haircut, or a relaxing spa session, <strong>Aarna Salon</strong> provides top-tier services tailored to your needs.</p>

          <div className="bg-red-900 bg-opacity-30 p-6 rounded-lg mb-6">
            <h3 className="text-xl md:text-3xl font-bold mb-4">Exclusive Offer — 75% OFF!</h3>
            <p className="mb-2 md:text-xl">To make beauty services more accessible, <strong>Aarna Salon in Raipur</strong> is offering an <strong>exclusive 75% discount</strong> on its premium services.</p>
            <p className="text-xl font-bold">Additionally, you can grab a <span className="text-yellow-300">membership for just 99 INR</span>, unlocking access to high-quality beauty treatments at an unbeatable price!</p>
          </div>

          <h3 className="md:text-3xl font-bold mb-3">Why Choose Aarna Salon in Raipur?</h3>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start md:text-xl">
              <Star className="h-5 w-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Professional Stylists & Beauticians</strong> — Get expert advice and styling from trained professionals.</span>
            </li>
            <li className="flex items-start md:text-xl">
              <Star className="h-5 w-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Premium Beauty Treatments</strong> — Indulge in facials, hair treatments, and spa sessions tailored to your needs.</span>
            </li>
            <li className="flex items-start md:text-xl">
              <Star className="h-5 w-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Hygienic & Relaxing Environment</strong> — A clean, comfortable setting to ensure the best experience.</span>
            </li>
            <li className="flex items-start md:text-xl">
              <Star className="h-5 w-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Affordable Membership Plans</strong> — Enjoy beauty services at discounted rates with exclusive memberships.</span>
            </li>
            <li className="flex items-start md:text-xl">
              <Star className="h-5 w-5 text-yellow-300 mr-2 mt-1 flex-shrink-0" />
              <span><strong>Convenient Location</strong> — Located in <strong>Raipur</strong>, making it easily accessible for all beauty enthusiasts.</span>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-4">Conclusion: Get the Best Deals with Aarna Groups!</h2>
          
          <p className="mb-4 md:text-lg">At Aarna Groups, we believe in making grooming and self-care accessible to everyone. With <strong>exclusive discounts</strong> and seasonal offers, there's never been a better time to indulge in professional salon services. From skincare to makeup, hair care, and nail treatments, we've got everything you need to look and feel your best.</p>
          
          <p className="mb-6 md:text-xl">Don't miss out on our <strong>limited-time offers</strong> — book your appointment with Aarna Groups today and take advantage of amazing deals!</p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-red-500 hover:bg-red-800 text-white py-3 px-6 rounded-full font-bold flex items-center justify-center md:text-xl">
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full font-bold flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-purple-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Aarna Salon & Spa</h2>
          <p className="mb-4">Experience the best in beauty and wellness services</p>
          <p className="mb-2">© 2025 Aarna Groups. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white hover:text-pink-300">Privacy Policy</a>
            <a href="#" className="text-white hover:text-pink-300">Terms of Service</a>
            <a href="#" className="text-white hover:text-pink-300">Contact Us</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

// Section Component with Toggle Functionality
function SectionContainer({ title, children, isOpen, toggle, icon }) {
  return (
    <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between bg-purple-100 p-4 hover:bg-purple-200 transition-colors"
      >
        <div className="flex items-center">
          {icon}
          <h3 className="text-xl md:text-2xl font-bold text-red-800 ml-2">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-red-700" />
        ) : (
          <ChevronDown className="h-5 w-5 text-red-700" />
        )}
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

// import { useState, useEffect } from 'react';
// import { Heart, Calendar, MapPin, Phone, ChevronRight, ChevronDown, Star, Sparkles } from 'lucide-react';

// const SalonBlog=()=> {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [animatePromo, setAnimatePromo] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
    
//     const timer = setTimeout(() => {
//       setAnimatePromo(true);
//     }, 2000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   const faqs = [
//     {
//       question: "What products do you use for sensitive skin?",
//       answer: "We use hypoallergenic products free from harsh chemicals, fragrances, and dyes. We prioritize natural and organic ingredients that are gentle on sensitive skin."
//     },
//     {
//       question: "How often should I get a facial for sensitive skin?",
//       answer: "For sensitive skin, we recommend facials every 6-8 weeks. This gives your skin enough time to heal and prevents over-stimulation."
//     },
//     {
//       question: "Do you offer patch tests before treatments?",
//       answer: "Yes! We always offer patch tests before any treatment to ensure you don't have an adverse reaction to the products we use."
//     },
//     {
//       question: "How long does a sensitive skin treatment take?",
//       answer: "Our sensitive skin treatments typically take 60-75 minutes, including consultation, cleansing, treatment, and post-care advice."
//     }
//   ];

//   const toggleFaq = (index) => {
//     setActiveFaq(activeFaq === index ? null : index);
//   };

//   return (
//     <div className="bg-black text-white min-h-screen font-sans">
      

//       {/* Enhanced Hero Section with parallax effect */}
//       <section className={`py-20 px-4 md:px-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
        
//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2">
//               <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
//                 Premium Skin Care
//               </div>
//               <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//                 <span className="text-red-600">Pamper,</span> Don't Panic: <br />
//                 <span className="relative">
//                   <span className="relative z-10">Sensitive Skin Care</span>
//                   <span className="absolute bottom-2 left-0 w-full h-3 bg-red-600 opacity-20 rounded"></span>
//                 </span>
//               </h2>
//               <p className="text-lg mb-8 text-gray-300 leading-relaxed">
//                 Sensitive skin can feel like a constant balancing act. At Aarna Salon, we understand 
//                 the delicate nature of sensitive skin and offer specialized services designed to nourish 
//                 and protect, not irritate.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-all hover:scale-105 flex items-center justify-center shadow-lg shadow-red-900/30">
//                   Book Treatment <ChevronRight className="ml-2" size={18} />
//                 </button>
//                 <button className="border border-red-600 hover:bg-red-600/10 px-8 py-4 rounded-full transition-all hover:text-red-400 flex items-center justify-center">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className="md:w-1/2 relative">
//               <div className="absolute -top-6 -right-6 w-64 h-64 bg-red-600 rounded-full -z-10 blur-3xl opacity-30"></div>
//               <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative group">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
//                 <img src="/api/placeholder/600/400" alt="Sensitive skin treatment" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
//                 <div className="absolute bottom-4 left-4 z-20 flex items-center">
//                   <div className="flex">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
//                     ))}
//                   </div>
//                   <span className="ml-2 text-sm">Trusted by 1000+ clients</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Promo Bar */}
//       <div className={`fixed bottom-0 left-0 w-full bg-red-600 py-3 px-4 flex justify-center items-center z-50 transition-all duration-500 ${animatePromo ? 'translate-y-0' : 'translate-y-full'}`}>
//         <Sparkles size={20} className="mr-2" />
//         <p className="font-medium">Limited Time Offer: 75% OFF your first sensitive skin treatment!</p>
//         <button className="ml-4 bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
//           Book Now
//         </button>
//       </div>

//       {/* Enhanced Understanding Sensitive Skin */}
//       <section className={`py-24 px-4 md:px-16 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold">Understanding <span className="text-red-600">Sensitive Skin</span></h2>
//             <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { title: "Environmental Factors", content: "Sun exposure, harsh weather, and pollution can trigger sensitivity and inflammation.", icon: "☀️" },
//               { title: "Product Ingredients", content: "Fragrances, dyes, sulfates, and certain preservatives often cause irritation.", icon: "🧪" },
//               { title: "Stress", content: "Emotional and physical stress can exacerbate skin sensitivity and lead to flare-ups.", icon: "😓" },
//               { title: "Underlying Conditions", content: "Eczema, rosacea, and allergies can contribute to chronic skin sensitivity.", icon: "🔬" }
//             ].map((item, index) => (
//               <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-600 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-red-900/20 group">
//                 <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
//                 <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">{item.title}</h3>
//                 <p className="text-gray-400">{item.content}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Treatments Section */}
//       <section className={`py-24 px-4 md:px-16 bg-gradient-to-b from-gray-900 to-black relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="absolute top-20 right-0 w-96 h-96 bg-red-600 rounded-full -z-10 blur-3xl opacity-5"></div>
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="text-red-600 font-medium">EXPERT CARE</span>
//             <h2 className="text-4xl font-bold mt-2">Our <span className="text-red-600">Specialized Treatments</span></h2>
//             <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Tailored approaches for sensitive skin care at Aarna Salon, designed to nourish and protect without causing irritation</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Personalized Consultation",
//                 description: "We begin with a detailed consultation to understand your specific concerns and identify potential triggers for your unique skin.",
//                 image: "/api/placeholder/400/300"
//               },
//               {
//                 title: "Gentle Cleansing & Exfoliation",
//                 description: "We use hypoallergenic cleansers and gentle enzyme peels to remove impurities without stripping the skin's natural protective barrier.",
//                 image: "/api/placeholder/400/300"
//               },
//               {
//                 title: "Hydrating Facial Therapy",
//                 description: "Our hydrating facials restore moisture and soothe irritated skin with calming ingredients like aloe vera, chamomile, and hyaluronic acid.",
//                 image: "/api/placeholder/400/300"
//               },
//             ].map((treatment, index) => (
//               <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300 group">
//                 <div className="relative">
//                   <img src={treatment.image} alt={treatment.title} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//                 </div>
//                 <div className="p-8">
//                   <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">{treatment.title}</h3>
//                   <p className="text-gray-400 mb-6">{treatment.description}</p>
//                   <a href="#" className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors">
//                     Learn more <ChevronRight size={16} className="ml-1" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Promotion Section */}
//       <section className={`py-24 px-4 md:px-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-3xl p-12 md:p-16 relative overflow-hidden">
//             <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
//             <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
            
//             <div className="relative z-10 max-w-2xl">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
//                   <Sparkles className="text-red-600" />
//                 </div>
//                 <h3 className="text-xl font-bold ml-4">Limited Time Offer</h3>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience The <br/> <span className="text-white">Aarna Difference</span></h2>
//               <p className="text-xl mb-8 opacity-90">
//                 For a limited time, enjoy <span className="font-bold text-2xl underline decoration-white decoration-2 underline-offset-4">75% OFF</span> your first sensitive skin facial treatment!
//               </p>
              
//               <div className="flex items-center mb-8 bg-red-800/40 p-4 rounded-xl">
//                 <Heart className="text-white mr-3" fill="white" />
//                 <span>Experience gentle, effective skincare with our expert aestheticians</span>
//               </div>
              
//               <button className="bg-white text-red-700 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-red-900/30 flex items-center">
//                 Book Your Discounted Treatment <ChevronRight className="ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced FAQ Section */}
//       <section className={`py-24 px-4 md:px-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="text-red-600 font-medium">ANSWERS</span>
//             <h2 className="text-4xl font-bold mt-2">Frequently Asked <span className="text-red-600">Questions</span></h2>
//             <p className="text-gray-400 mt-4">Everything you need to know about our sensitive skin treatments</p>
//           </div>
          
//           <div className="space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="border border-gray-800 rounded-xl overflow-hidden group">
//                 <button 
//                   className="w-full px-8 py-5 flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition-colors" 
//                   onClick={() => toggleFaq(index)}
//                 >
//                   <span className="font-medium text-left">{faq.question}</span>
//                   {activeFaq === index ? 
//                     <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
//                       <ChevronDown size={18} />
//                     </div> : 
//                     <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-red-600/50 transition-colors">
//                       <ChevronRight size={18} />
//                     </div>
//                   }
//                 </button>
//                 <div className={`transition-all duration-300 overflow-hidden bg-gray-900/50 ${activeFaq === index ? 'max-h-48 py-6 px-8' : 'max-h-0'}`}>
//                   <p className="text-gray-300">{faq.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Contact Section */}
//       <section className={`py-24 px-4 md:px-16 bg-gradient-to-b from-black to-gray-900 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row gap-16">
//             <div className="md:w-1/2">
//               <span className="text-red-600 font-medium">WHY US</span>
//               <h2 className="text-4xl font-bold mt-2 mb-8">The <span className="text-red-600">Aarna Salon</span> Difference</h2>
//               <ul className="space-y-6">
//                 {[
//                   "Experienced and certified aestheticians with specialized training in sensitive skin care",
//                   "Premium hypoallergenic products free from common irritants and allergens",
//                   "Personalized treatments tailored to your unique skin needs and concerns",
//                   "Relaxing and welcoming atmosphere designed for your comfort and peace of mind"
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
//                       <div className="w-2 h-2 bg-white rounded-full"></div>
//                     </div>
//                     <span className="text-lg">{item}</span>
//                   </li>
//                 ))}
//               </ul>
              
//               <div className="mt-12 bg-gray-900 p-8 rounded-2xl border border-gray-800">
//                 <div className="flex flex-col space-y-4">
//                   <div className="flex items-center">
//                     <MapPin className="text-red-600 mr-3" size={20} />
//                     <span>Visit Us at Aarna Salon</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Phone className="text-red-600 mr-3" size={20} />
//                     <span>9109222890</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Calendar className="text-red-600 mr-3" size={20} />
//                     <span>Open Mon-Sat: 10AM - 8PM</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 relative">
//               <div className="relative overflow-hidden rounded-2xl h-full min-h-96">
//                 <img src="/api/placeholder/600/800" alt="Aarna Salon Interior" className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 w-full p-8">
//                   <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-900/30 text-lg font-medium">
//                     Book Your Appointment Today
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// }

// export default SalonBlog