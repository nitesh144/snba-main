import React, { useState } from 'react';
import gym from '../../assets/images/blog/gym.jpg';
import salon from '../../assets/images/blog/salon.jpg';
import food from '../../assets/images/blog/food.jpg'; 
import mart from '../../assets/images/blog/mart.jpg';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Annie Gym – Best Fitness Center for Strength, Cardio & Personal Training Near You",
      excerpt: "Discover the best gyms in Raipur with our comprehensive guide.",
      category: "Tips & Tricks",
      author: "Emma Wilson",
      date: "14 Apr 2025",
      image: gym,
      readTime: "4 min read",
      path:'/gym-blog'
    },
    {
      id: 2,
      title: "Annie Salon – Top Beauty Salon for Hair, Skin & Spa Services",
      excerpt: "Discover the best salon in Raipur with our comprehensive guide.",
      category: "Guides",
      author: "James Taylor",
      date: "15 Feb 2025",
      image: salon,
      readTime: "6 min read",
      path:'/salon-blog'
    },
    // {
    //   id: 3,
    //   title: "Community heroes: meet our top contributors",
    //   excerpt: "Celebrating the members who make our community special.",
    //   category: "Community",
    //   author: "Sarah Ahmed",
    //   date: "10 Feb 2025",
    //   image: mart,
    //   readTime: "5 min read",
    //   path:'/mart-blog'
    // },
    {
      id: 4,
      title: "Annie Food Court – Delicious Multi-Cuisine Dining & Street Food Experience",
      excerpt: "Discover the best restraunt in Raipur ",
      category: "News",
      author: "Daniel Park",
      date: "5 Feb 2025",
      image: food,
      readTime: "7 min read",
      path:'/foodcourt-blog'
    }
  ];
  
  const categories = ['All', 'Tips & Tricks', 'Guides', 'Community', 'News'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-red-900 text-white py-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to the Annie Consumers blog</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Discover tips, guides, and stories from our community</p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-3 px-4 pr-10 rounded-sm text-white bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600"
            />
            <span className="absolute right-3 top-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
        </div>
      </section>     
      
      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-white">
            {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-black border border-gray-800 overflow-hidden hover:border-red-800 transition duration-200 rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover overflow-hidden"
                />
                <div className="p-6">
                  <span className="inline-block bg-red-900 text-white px-3 py-1 text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                  </div>
                  <Link to={post.path}>
                    <button className="text-red-500 font-medium hover:text-red-400 transition-colors">
                    Read more →
                  </button>
                  </Link>
                  
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-transparent text-red-500 border border-red-700 font-medium py-3 px-8 hover:bg-red-900 hover:bg-opacity-20 transition duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-black to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Stay in the loop</h2>
          <p className="max-w-xl mx-auto mb-8">Get the latest Annie Consumer news, tips and community stories delivered straight to your inbox.</p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow py-3 px-4 bg-gray-800 border rounded-lg border-gray-700 md:rounded-r-none text-white mb-3 md:mb-0 focus:outline-none focus:border-red-600"
            />
            <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg md:rounded-l-none transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BlogPage;