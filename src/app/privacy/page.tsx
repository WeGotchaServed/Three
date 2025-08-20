import React from 'react';

export const metadata = {
  title: "Privacy Policy | We Gotcha Served LLC",
  description: "Our privacy policy details how we collect, use, and protect your information at We Gotcha Served LLC.",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Effective Date: June 2024</p>
      <p className="mb-4">We Gotcha Served LLC ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal Information: such as your name, email address, phone number, and address when you fill out forms or contact us.</li>
        <li>Usage Data: information about how you use our website, including IP address, browser type, and pages visited.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and maintain our services.</li>
        <li>To communicate with you and respond to your inquiries.</li>
        <li>To improve our website and services.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Sharing Your Information</h2>
      <p className="mb-4">We do not sell your personal information. We may share your information with service providers who assist us in operating our website and conducting our business, or as required by law.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="mb-4">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:Charlie@WeGotchaServed.com" className="text-blue-600 underline">Charlie@WeGotchaServed.com</a>.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Security</h2>
      <p className="mb-4">We implement reasonable measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Charlie@WeGotchaServed.com" className="text-blue-600 underline">Charlie@WeGotchaServed.com</a>.</p>
    </div>
  );
}
