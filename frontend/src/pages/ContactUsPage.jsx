
import { Mail, Phone, Globe, MapPin, Send, User, MessageSquare } from 'lucide-react';
import Card from '@/components/ui/card';
import { motion } from 'framer-motion';
import CardContent from '@/components/ui/cardcontent'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Annie Consumers, Mansarowar Bhawan, NIT Road, Raipur, Chhattisgarh – 492010"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: [
        {  number: "info@annieconsumers.com" },
        {  number: "annieconsumers@gmail.com" }
      ],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: [
        { label: "Mobile No.", number: "+91 9685522890" },
        { label: "Landline No.", number: "0771 2992508" },
        { label: "Toll-Free", number: "18002331112" }
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Browse",
      content: "www.annieconsumers.com"
    }
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-5xl font-bold text-white mb-1">Get in Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full mb-2"></div>
              <p className="text-gray-400 text-sm lg:text-lg max-w-2xl mx-auto">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="h-full"
              >
                <Card className="group bg-gray-900 backdrop-blur-sm border-gray-800 hover:border-red-500 transition-all duration-300 h-full shadow-inner shadow-red-600">
                  <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 p-0.5 group-hover:scale-110 transition-transform duration-300">
                        <div initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay:0.6 }}
                        className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <div
                          initial={{ opacity: 0, x: 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay:0.6 }} 
                          className="text-red-600 group-hover:text-red-300 transition-colors">
                            {info.icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                      {Array.isArray(info.content) ? (
                        <div className="space-y-2">
                          {/* Render each contact detail with its label */}
                          {info.content.map((item, idx) => (
                            <div key={idx} className="text-gray-400 group-hover:text-gray-300 transition-colors">
                              <strong>{item.label} </strong>{item.number}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.content}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-1 gap-8 items-stretch">
            {/* Map Section */}
            <div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <Card className="bg-gray-800 backdrop-blur-sm border-gray-800 hover:border-red-500 transition-all duration-300 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-red-500" />
                    Visit Our Office
                  </h3>
                  <div className="rounded-lg overflow-hidden border border-gray-800 flex-grow">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7838532437113!2d81.59869717472006!3d21.240418080476356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28df628721f923%3A0x46160af4c09b69fe!2sSNBA%20Consumers%20Raipur!5e0!3m2!1sen!2sin!4v1736769380768!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full min-h-[300px] object-cover"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
