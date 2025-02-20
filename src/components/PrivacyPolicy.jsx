import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Shield className="text-teal-600 w-12 h-12" />
          </div>
          
          <h1 className="text-3xl font-bold text-center text-teal-900 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Information We Collect</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We collect personal and medical information necessary to provide palliative care services, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Personal identification information (name, address, contact details)</li>
                <li>Medical history and current health conditions</li>
                <li>Emergency contact information</li>
                <li>Insurance and payment information where applicable</li>
                <li>Information about family members and caregivers</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Your information is used exclusively for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Providing and improving our palliative care services</li>
                <li>Communicating with you about your care</li>
                <li>Coordinating with other healthcare providers</li>
                <li>Emergency response situations</li>
                <li>Legal and regulatory compliance</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Information Security</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We implement strict security measures to protect your personal and medical information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Encrypted data storage and transmission</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on privacy and security procedures</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <UserCheck className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Request corrections to your information</li>
                <li>Receive a copy of your medical records</li>
                <li>Be informed about how your information is used</li>
                <li>File a complaint about privacy practices</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Contact Us</h2>
              </div>
              <p className="text-gray-700">
                If you have questions about our privacy practices or wish to exercise your rights, please contact our Privacy Officer at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Palliative Care Clinic</p>
                <p>Pookkottumpadam, Kerala, India</p>
                <p>Email: palliativeppm@gmail.com</p>
                <p>Phone: 94475 31225</p>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
