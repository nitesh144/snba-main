
import React, { useState } from "react";
import { Search, Briefcase, MapPin, Clock, X } from "lucide-react";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/cardcontent";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import career from "../assets/images/Career.png"

const CareerPage = () => {
  const jobCategories = ["All", "Engineering", "Design", "Marketing", "Sales"];
  const locations = ["All Locations", "Remote", "India", "USA", "Singapore"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    portfolio: ""
  });

  const jobs = [
    {
      id: 1,
      role: "Fresher/Senior Flutter Developer",
      category: "Engineering",
      location: "Raipur",
      type: "Full-time",
      salary: "10k-30k",
      description:
        "We are looking for a skilled Flutter Mobile App Developer to join our team and help build amazing user interfaces. You'll work on cutting-edge projects and collaborate with a talented team.",
      requirements: [
        "0-5 years of mobile development experience",
        "Strong knowledge of Flutter and Dart",
        "Experience with state management solutions",
        "Understanding of CI/CD pipelines"
      ]
    },
    {
      id: 3,
      role: "Graphic Designer",
      category: "Design",
      location: "Raipur",
      type: "Full-time",
      salary: "upto 40k",
      description:
        "We need a creative Designer to design intuitive and user-friendly interfaces. You'll be responsible for creating beautiful, functional designs that delight our users.",
      requirements: [
        "0-5 years of design experience",
        "Expertise in Photoshop,illustrator and corel draw",
        "Strong portfolio of web and mobile designs",
        "Experience with user research and testing"
      ]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
    const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Application submitted successfully!");
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
      portfolio: ""
    });
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative w-screen h-[400px] md:h-[600px] overflow-hidden bg-cover " style={{ backgroundImage: `url(${career})` }}>
  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-black"></div> */}

  {/* Hero Content */}
  {/* <div className="relative z-10 flex flex-col lg:justify-center items-start h-full text-red-500 pl-12">
    <h1 className="text-xl mt-36 md:text-5xl font-bold text-left mb-6 tracking-tight">
      Join Our Growing Team
    </h1>
    <p className="text-lg md:text-xl text-red-500 max-w-3xl">
      Discover your next career opportunity with us.
    </p>
  </div> */}
</div>

      {/* Search and Filter Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Card className="p-8 bg-gray-900 border-gray-800 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-red-500 " />
              <Input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="p-2 bg-gray-800 border-gray-700 text-white rounded-md focus:border-red-500 focus:ring-red-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {jobCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="p-2 bg-gray-800 border-gray-700 text-white rounded-md focus:border-red-500 focus:ring-red-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </Card>
      </div>

      {/* Jobs List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="bg-gray-900 border-gray-800 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {job.role}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-red-900/30 text-red-300 border-red-700 flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.category}
                      </Badge>
                      <Badge className="bg-red-900/30 text-red-300 border-red-700 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </Badge>
                      <Badge className="bg-red-900/30 text-red-300 border-red-700 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </Badge>
                      {/* <Badge className="bg-red-600 text-white border-red-500">{job.salary}</Badge> */}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleApply(job)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white text-lg">Requirements:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="text-gray-300">{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-800">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
                <h2 className="text-2xl font-bold text-white">
                  Apply for {selectedJob?.role}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Portfolio URL (Optional)
                  </label>
                  <Input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 border-gray-700 text-white rounded-md h-32 focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Resume
                  </label>
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="bg-gray-800 border-gray-700 text-white focus:border-red-500 focus:ring-red-500"
                    required
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-gray-700">
                  <Button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-800 hover:bg-gray-700 text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CareerPage;