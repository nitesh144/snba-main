
import { useState, useEffect } from "react";
import { ChevronUp, ArrowRight } from "lucide-react";
import gym1 from "../../assets/images/blog/gym/gym1.jpg";
import gymbg from '../../assets/images/blog/gym/gym-bg.jpg';
import cardio from '../../assets/images/blog/gym/cardio.jpg';
import yoga from '../../assets/images/blog/gym/yoga.jpg';
import aerobic from '../../assets/images/blog/gym/aerobics.jpg';
import personaltraining from '../../assets/images/blog/gym/personal-training.jpg';
import Zumba from '../../assets/images/blog/gym/zumba.jpg';
import grouptraining from '../../assets/images/blog/gym/grouptraining.jpg';

export default function AarnaGymBlog() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sections data
  const sections = [
    {
      id: "zumba",
      title: "Zumba",
      content: "Zumba is a high-energy, dance-based workout that blends upbeat music with easy-to-follow choreography. It's a fun and effective way to get your heart rate up, burn calories, and boost your mood—all while dancing in a vibrant, social atmosphere. Whether you're a beginner or a seasoned fitness enthusiast, Zumba offers a lively escape from routine workouts and brings rhythm and excitement to your fitness journey. Perfect for anyone looking to stay fit while having a blast!",
      image: Zumba
    },
    {
      id: "yoga",
      title: "Yoga",
      content: "Yoga is a holistic practice that nurtures both body and mind. Whether you're a beginner or an experienced yogi, our classes are tailored to improve flexibility, balance, posture, and inner focus. With guidance from our skilled instructors, you'll explore breathing techniques, mindful movement, and meditation to reduce stress and promote overall well-being. Step onto the mat and discover your inner strength, peace, and clarity—one pose at a time. Our sessions offer a calming yet empowering environment that encourages self-growth and mindfulness. Regular practice can enhance energy levels, improve sleep, and help manage anxiety.",
      image: yoga
    },
    {
      id: "cardio",
      title: "Cardio",
      content: "At Aarna Gym, we believe cardio is the heart of a healthy fitness routine—literally! Our cardio sessions are designed to boost your heart health, burn calories, and improve stamina. Whether you're aiming for weight loss, increased energy, or better endurance, our state-of-the-art equipment and guided sessions have you covered. From treadmills and cycling to HIIT circuits and aerobic classes, there's something for everyone—regardless of fitness level. Our trainers customize routines to help you hit your personal goals faster and safely.",
      image: cardio
    },
    {
      id: "aerobics",
      title: "Aerobics",
      content: "Aerobics at Aarna Gym is the perfect blend of energy, rhythm, and results! Our dynamic aerobics classes are designed to get your heart pumping, boost your stamina, and burn calories in a fun and motivating group environment. Set to upbeat music, each session includes a mix of cardio movements, strength training, and flexibility exercises that target your entire body. Whether you're a beginner or a fitness enthusiast, our certified instructors ensure that every move is easy to follow and effective. Aerobics not only helps with weight loss and toning but also improves coordination, heart health, and mental well-being.",
      image: aerobic
    },
    {
      id: "personal-training",
      title: "Personal Training",
      content: "At Aarna Gym, we believe that every fitness journey is unique. That's why our Personal Training program is tailored to meet your specific goals, whether you're looking to lose weight, build muscle, or improve overall fitness. Our certified personal trainers are experts in creating customized workout plans that focus on your individual needs, ensuring you get the most out of every session. We provide one-on-one attention, motivating you to push your limits while maintaining proper form and technique. With our personal trainers by your side, you'll see faster, more effective results, and feel confident in your progress every step of the way.",
      image: personaltraining
    },
    {
      id: "group-training",
      title: "Group Training",
      content: "At Aarna Gym, Group Training offers a fun, motivating, and dynamic way to achieve your fitness goals. Our group sessions bring together individuals of all fitness levels in a supportive, high-energy environment. Whether you're looking to improve strength, increase endurance, or enhance flexibility, our expert trainers design workouts that cater to everyone. In our group training, you'll enjoy the energy of a community that pushes you to give your best. With a variety of classes—from HIIT and circuit training to strength and cardio-focused sessions—there's something for everyone.",
      image: grouptraining
    }
  ];

  // Programs data
  const programs = [
    {
      title: "Nutrition Guidance",
      description: "At Aarna Gym, we believe that proper nutrition is key to achieving your fitness goals. Our expert nutritionists provide personalized meal plans based on your specific needs and fitness objectives. Whether you aim to build muscle, lose weight, or simply maintain a healthy lifestyle, our nutrition guidance ensures you're fueling your body correctly, enhancing performance, and speeding up recovery. We focus on balanced nutrition that aligns with your workout regime to maximize your results."
    },
    {
      title: "Weight Loss Program",
      description: "Struggling with weight loss? Aarna Gym's Weight Loss Program offers a comprehensive approach that combines personalized exercise routines with nutrition plans tailored to your goals. Our trainers and nutritionists work together to create a sustainable weight loss journey, focusing on fat-burning exercises and effective diet strategies. This program is designed to help you shed excess weight, boost metabolism, and develop healthy habits, ensuring long-term success without extreme measures."
    },
    {
      title: "Bodybuilding Programs",
      description: "Aarna Gym’s Bodybuilding Programs are designed for individuals who want to increase muscle mass, strength, and overall physique. Our experienced trainers tailor each workout to your body type and goals, focusing on progressive strength training, hypertrophy techniques, and optimal recovery strategies. Whether you are just starting or looking to push your limits, our bodybuilding program will guide you with structured workouts, ensuring that you make steady progress toward building a stronger, more sculpted body."
    },
    {
      title: "Flexibility & Mobility",
      description: "Enhance your flexibility and mobility with specialized training at Aarna Gym. Our programs focus on improving your range of motion, reducing the risk of injury, and improving overall performance. Whether you’re an athlete looking to boost your performance or someone looking to increase mobility for daily activities, our flexibility sessions will help you achieve your goals. With expert guidance, we’ll target key muscle groups to ensure better posture, mobility, and recovery, keeping you in peak condition."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans py-20">

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16 pb-32 py-16 bg-cover bg-center" style={{ backgroundImage: `url(${gymbg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-red-900 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center md:items-start max-w-4xl mx-auto md:mx-0">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center md:text-left">
                Transform Your <span className="text-red-600">Fitness Journey</span> with Aarna Gym
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-center md:text-left">
                Your Ultimate Destination for Health and Wellness in Raipur
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center">
                  Join Now
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-red-600">Aarna Gym</span>?</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8 p-5 rounded-xl border border-red-500">
            <div className="w-full md:w-1/2">
              <img src={gym1} alt="Gym Interior" className="overflow-hidden object-cover rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-justify">
              <p className="text-lg mb-6">
                At Aarna Gym, we believe fitness is not just about working out, but about building a lifestyle that promotes overall well-being. Our gym provides a welcoming atmosphere where you can focus on your goals while enjoying a variety of fitness services.
              </p>
              <p className="text-lg mb-6">
                We understand that the environment plays a vital role in your fitness success. That's why we've created a spacious, modern gym designed to inspire and motivate you at every step of your fitness journey.
              </p>
              <p className="text-lg">
                Our gym is equipped with the latest state-of-the-art fitness equipment, ensuring you have everything you need for a full-body workout in a clean, organized, and clutter-free space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-red-600">Services</span></h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {sections.map((section, index) => (
              <div key={section.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 flex h-80">
                <img src={section.image} alt={section.title} className="w-[480px] h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-600">{section.title}</h3>
                  <p className="text-gray-300 mb-4 text-justify">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Plans Section */}
      <section id="programs" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized <span className="text-red-600">Workout Plans</span></h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
            <p className="text-lg mt-4 max-w-2xl mx-auto">We understand that every fitness journey is unique, and that's why we offer specialized workout plans that cater to your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-900 border-t-4 border-red-600 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-red-600/20 hover:-translate-y-2">
                <h3 className="text-xl font-bold mb-3 text-white">{program.title}</h3>
                <p className="text-gray-300 text-justify">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-red-900 opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive <span className="text-red-600">Membership Offer</span></h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="text-6xl font-bold text-red-600">₹99</span>
                <p className="text-xl mt-2">Limited Time Offer!</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-red-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Access to all fitness classes</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>State-of-the-art equipment</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Professional fitness guidance</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-600 p-1 rounded-full mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Stress-free, spacious environment</span>
                </div>
              </div>
              
              <div className="text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  Sign Up Today
                </button>
                <p className="mt-4 text-sm text-gray-400">Limited time offer. Terms and conditions apply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-red-600">Members Say</span></h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">R</div>
                <div className="ml-4">
                  <h4 className="font-bold">Rahul S.</h4>
                  <p className="text-gray-400 text-sm">Member for 6 months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Joining Aarna Gym was the best decision I've made for my health. The trainers are knowledgeable and the atmosphere keeps me motivated. I've lost 15kg in just 6 months!"
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">P</div>
                <div className="ml-4">
                  <h4 className="font-bold">Priya M.</h4>
                  <p className="text-gray-400 text-sm">Member for 1 year</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I love the Zumba classes at Aarna Gym! The instructors are amazing and the energy is contagious. It never feels like a workout, it's more like a party!"
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-xl">A</div>
                <div className="ml-4">
                  <h4 className="font-bold">Amit K.</h4>
                  <p className="text-gray-400 text-sm">Member for 8 months</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The personal training at Aarna Gym is exceptional. My trainer understood my goals and designed a program that has helped me build muscle and increase my strength significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Aarna Gym today and take the first step towards becoming a healthier, stronger version of yourself!
          </p>
          <button className="bg-black text-white hover:bg-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Sign Up Now for Just ₹99
          </button>
        </div>
      </section>

     

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
}