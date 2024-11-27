// PrivacyPolicy.jsx
import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#b7d7a8]">Privacy Policy</h1>
        <p className="mb-4">
          At <span className="font-semibold">SortX</span>, your privacy is our top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>URLs you submit for shortening and their associated analytics.</li>
          <li>Basic account details like your name and email (if you create an account).</li>
          <li>Usage data such as IP addresses, browser type, and device information to improve our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To shorten URLs and provide custom links.</li>
          <li>To analyze link performance and improve user experience.</li>
          <li>To communicate updates or important notifications regarding our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Protect Your Information</h2>
        <p className="mb-4">
          We implement industry-standard security measures to safeguard your information from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell your personal data. However, we may share information with trusted third parties to improve our service or comply with legal requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You can delete your account and data at any time by contacting our support team.</li>
          <li>You can opt out of email notifications in your account settings.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Significant changes will be communicated to you through email or on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
          <a href="mailto:rudramunshi7@gmail.com" className="text-[#b7d7a8] underline">support@sortx.com</a>.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Last updated: 27/11/2024.
        </p>
      </div>
    </div>
  );
};

export default Privacy;

