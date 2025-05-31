import React from "react";

const Contact = () => {
 return (
  <div className="min-h-screen bg-[#E38580] flex items-center justify-center py-12 px-4">
   <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
    <h2 className="text-3xl font-bold text-[#E38580] mb-2 text-center">Contact RuhMate</h2>
    <p className="text-gray-600 mb-6 text-center">
     We'd love to hear from you! Fill out the form below and our team will get in touch soon.
    </p>
    <form className="space-y-4">
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
       type="text"
       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E38580]"
       placeholder="Your Name"
       required
      />
     </div>
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
       type="email"
       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E38580]"
       placeholder="you@example.com"
       required
      />
     </div>
     <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
       className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E38580]"
       rows={4}
       placeholder="Type your message..."
       required
      />
     </div>
     <button
      type="submit"
      className="w-full bg-[#E38580] text-white font-semibold py-2 rounded-md hover:bg-[#d16c67] transition"
     >
      Send Message
     </button>
    </form>
    <div className="mt-6 text-center text-gray-500 text-sm">
     Or email us at <a href="mailto:support@ruhmate.com" className="text-[#E38580] underline">support@ruhmate.com</a>
    </div>
   </div>
  </div>
 );
};

export default Contact;