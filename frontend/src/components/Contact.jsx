import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
