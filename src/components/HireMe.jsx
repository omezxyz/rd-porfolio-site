import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import hiremeImage from "./images/hireme.webp"; // Import image

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template parameters must match the variables in your EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.projectDetails,
    };

    emailjs
      .send(
        "service_egcntvh", // Your EmailJS Service ID
        "template_eniwkf4", // Your EmailJS Template ID
        templateParams, // Template parameters
        "PusiNMoMTzcMP4uRf" // Your EmailJS Public Key
      )
      .then(
        () => {
          setMessage("Your inquiry has been sent successfully!");
        },
        () => {
          setMessage("There was an error. Please try again.");
        }
      );

    setFormData({ name: "", email: "", projectDetails: "" });
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-white via-gray-50 to-gray-200 text-gray-800"
      id="hire-me"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text and Illustration */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Let’s Collaborate!
          </h2>
          <p className="text-xl text-gray-700">
            Hire me for your next project and bring your creative vision to life!
          </p>
          <div className="flex justify-center lg:justify-start">
            <img
              src={hiremeImage} // Use imported image
              alt="Hire Me Illustration"
              className="w-3/4 lg:w-2/3"
            />
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Send an Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="projectDetails"
              >
                Project Details
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
              Submit Inquiry
            </button>
          </form>
          {message && (
            <p className="text-center mt-4 text-green-500 font-medium">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HireMe;
