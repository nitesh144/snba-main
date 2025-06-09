import React, { useState } from "react";
import { Search, Briefcase, MapPin, Clock, X } from "lucide-react";
import Card from "@/components/ui/card";
import CardContent from "@/components/ui/cardcontent";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import career from "../assets/images/Career.png";

const CareerPage = () => {
  const jobCategories = ["All", "Engineering", "Design", "Marketing", "Sales"];
  const locations = ["All", "Remote", "India", "USA", "Singapore"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
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
      description: "We are looking for a skilled Flutter Mobile App Developer...",
      requirements: [
        "0-5 years of mobile development experience",
        "Strong knowledge of Flutter and Dart",
        "Experience with state management solutions",
        "Understanding of CI/CD pipelines"
      ]
    },
    {
      id: 2,
      role: "Graphic Designer",
      category: "Design",
      location: "Raipur",
      type: "Full-time",
      salary: "Up to 40k",
      description: "We need a creative Designer to design intuitive interfaces...",
      requirements: [
        "0-5 years of design experience",
        "Expertise in Photoshop, Illustrator and CorelDRAW",
        "Strong portfolio of web and mobile designs",
        "Experience with user research and testing"
      ]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
    const matchesSearch =
      job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-1 lg:gap-8">
            {/* Text */}
            <div className=" space-y-6 mt-5 max-w-3xl mx-auto">
              <h1 className="text-3xl lg:text-5xl font-bold text-white m-5">
                We are <span className="text-red-500 text-5xl">Hiring</span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-bold text-white ">
                Bring your talent to Annie Consumers
                <span className="text-red-500"> and make an impact!</span>
              </h2>

            </div>
            {/* Image */}
            <div className="w-full ">
              <div className="rounded-lg overflow-hidden ml-5 ">
                <img
                  src={career}
                  alt="Annie Consumers"
                  className=" h-[350px] lg:h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Search and Filters */}
      <div className="max-w-5xl mx-auto px-4">
        <Card className="bg-gray-900 border border-gray-800 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-red-500" />
              <Input
                placeholder="Search jobs..."
                className="pl-10 bg-gray-800 text-white border-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {jobCategories.map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
        </Card>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8">
        {filteredJobs.map(job => (
          <Card key={job.id} className="bg-gray-900 border border-gray-800 p-6 hover:shadow-xl">
            <CardContent>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-xl font-bold mb-2">{job.role}</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-red-900/30 border border-red-700 text-red-300 flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {job.category}
                    </Badge>
                    <Badge className="bg-red-900/30 border border-red-700 text-red-300 flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </Badge>
                    <Badge className="bg-red-900/30 border border-red-700 text-red-300 flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {job.type}
                    </Badge>
                  </div>
                </div>

              </div>

              <p className="text-gray-400 mt-4">{job.description}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {job.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
              </ul>
            </CardContent>
            <Button onClick={() => handleApply(job)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md lg:ml-[900px]">
              Apply Now
            </Button>
          </Card>
        ))}
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <Card className="w-full max-w-2xl bg-gray-900 border border-gray-800 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Apply for {selectedJob?.role}</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm mb-1 capitalize">{field}</label>
                    <Input
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-800 text-white border-gray-700"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm mb-1">Portfolio URL (optional)</label>
                  <Input
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-gray-800 text-white border-gray-700 rounded-md h-32"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Resume</label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="bg-gray-800 text-white border-gray-700"
                  />
                  <p className="text-xs text-gray-400 mt-1">Accepted: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                <div className="flex justify-end gap-4">
                  <Button onClick={() => setIsModalOpen(false)} className="bg-gray-700 hover:bg-gray-600">
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Submit
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