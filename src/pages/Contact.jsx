import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true); // Set loading to true when submitting the form

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '4ef8cd12-a14b-4c09-b826-295a298d1371', // Replace with your Web3Forms Access Key
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, message: result.message || 'Failed to send the message' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'An unexpected error occurred' });
    } finally {
      setLoading(false); // Reset loading state after the process
    }
  };

  return (
    <div className="bg-[#0b1120] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#b7d7a8]">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-[#132238] p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-md bg-[#0b1120] text-white border border-gray-700 focus:outline-none focus:border-[#b7d7a8]"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-md bg-[#0b1120] text-white border border-gray-700 focus:outline-none focus:border-[#b7d7a8]"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              required
              className="w-full px-4 py-2 rounded-md bg-[#0b1120] text-white border border-gray-700 focus:outline-none focus:border-[#b7d7a8]"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full py-2 mt-4 font-semibold rounded-md transition ${
              loading
                ? 'bg-gray-500 cursor-not-allowed text-gray-200'
                : 'bg-[#b7d7a8] text-[#0b1120] hover:bg-[#a3c59c]'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-sm ${
              status.success ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

