// TermsAndConditions.jsx
import React from 'react';

const Terms = () => {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#b7d7a8]">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to <span className="font-semibold">SortX</span>. By using our services, you agree to comply with these Terms and Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, you may not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Our Services</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You are solely responsible for the content of the URLs you shorten using SortX.</li>
          <li>Do not use SortX for any unlawful, harmful, or offensive purposes.</li>
          <li>You agree not to abuse, overload, or disrupt our systems and infrastructure.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prohibited Content</h2>
        <p className="mb-4">
          You may not use our service to shorten links that:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Promote illegal activities or violate applicable laws.</li>
          <li>Contain harmful or malicious software.</li>
          <li>Distribute spam, phishing attempts, or scams.</li>
          <li>Violate intellectual property rights or personal privacy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Account Responsibilities</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>If you create an account, you are responsible for maintaining the confidentiality of your login information.</li>
          <li>You agree to notify us immediately of any unauthorized use of your account.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or suspend your account or access to our services at any time, without notice, for any violation of these terms or for any reason we deem necessary.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          SortX is not responsible for any damages or losses resulting from your use of our services. All services are provided "as is," without warranty of any kind.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Modifications to Terms</h2>
        <p className="mb-4">
          We may update these Terms and Conditions from time to time. Changes will be effective immediately upon posting. It is your responsibility to review the terms regularly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
          <a href="mailto:rudramunshi7@gmail.com" className="text-[#b7d7a8] underline">support@sortx.com</a>.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Last updated: 27/11/2024.
        </p>
      </div>
    </div>
  );
};

export default Terms;
