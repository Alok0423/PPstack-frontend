import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

// 1. Correct Import: The function in dbService is named 'saveContactMessage'
import { saveContactMessage } from "../services/dbService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Optional, can be removed if not needed
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // 2. Call the correct function
      await saveContactMessage(formData);
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or platform? We're here to help.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6 lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-gray-600 mt-1">support@ppstack.com</p>
                <p className="text-gray-500 text-sm mt-1">We usually reply within 24h</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-xl text-green-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Visit Us</h3>
                <p className="text-gray-600 mt-1">123 Tech Avenue</p>
                <p className="text-gray-500 text-sm mt-1">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h2>
              
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-800 p-6 rounded-xl flex flex-col items-center justify-center text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p>Thanks for reaching out. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-green-700 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2">
                      <AlertCircle size={20} />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;