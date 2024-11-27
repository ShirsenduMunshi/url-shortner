// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#b7d7a8]">About SortX</h1>
        <p className="mb-4">
          Welcome to <span className="font-semibold">SortX</span>, your go-to solution for simplifying long, cumbersome URLs into sleek, shareable links. Whether you're an individual or a business, SortX helps you manage and track your links with ease and efficiency.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-4">
          At SortX, our mission is to make sharing links easier and smarter. We strive to provide a seamless and secure platform for URL shortening, complete with advanced analytics to help you understand your audience and improve your reach.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <span className="font-semibold">Simple URL Shortening:</span> Instantly shorten any URL with just a few clicks.
          </li>
          <li>
            <span className="font-semibold">Custom Links:</span> Create personalized, branded links for better engagement.
          </li>
          <li>
            <span className="font-semibold">Analytics:</span> Track clicks, geographic locations, and devices to understand your audience.
          </li>
          <li>
            <span className="font-semibold">Security:</span> Enjoy a safe platform with robust protection against spam and malicious links.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose SortX?</h2>
        <p className="mb-4">
          We understand the importance of effective link management in today’s digital age. SortX is designed to empower users with tools that are fast, reliable, and easy to use. From marketers to content creators, anyone can benefit from our URL shortening service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="mb-4">
          Our vision is to become the most trusted URL shortening service, known for innovation, reliability, and exceptional user experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Get in Touch</h2>
        <p className="mb-4">
          Have questions or feedback? We’d love to hear from you! Reach out to us at{' '}
          <a href="mailto:support@sortx.com" className="text-[#b7d7a8] underline">support@sortx.com</a> or connect with us on our social media platforms.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Thank you for choosing SortX. Let’s make your links smarter!
        </p>
      </div>
    </div>
  );
};

export default About;
