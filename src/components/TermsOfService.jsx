import React from 'react';
import { FileText, UserCheck, AlertCircle, Heart, Scale, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <Scale className="text-teal-600 w-12 h-12" />
          </div>
          
          <h1 className="text-3xl font-bold text-center text-teal-900 mb-8">
            Terms of Service
          </h1>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700">
                By accessing or using the services provided by Palliative Care Clinic, you agree to be bound by these Terms of Service. These terms apply to all patients, family members, caregivers, and visitors who access our services or facilities.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Our Services</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We provide palliative care services including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Medical care and pain management</li>
                <li>Emotional and psychological support</li>
                <li>Family and caregiver support</li>
                <li>Equipment lending services</li>
                <li>Home care services</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <UserCheck className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Patient Responsibilities</h2>
              </div>
              <p className="text-gray-700 mb-4">
                As a patient or family member, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and complete information about health conditions</li>
                <li>Follow the agreed-upon care plan</li>
                <li>Treat staff and other patients with respect</li>
                <li>Provide notice of appointment cancellations</li>
                <li>Handle equipment with care and return when no longer needed</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Liability and Disclaimers</h2>
              </div>
              <p className="text-gray-700 mb-4">
                While we strive to provide the highest quality care:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>We cannot guarantee specific outcomes</li>
                <li>We are not liable for events beyond our reasonable control</li>
                <li>Equipment is provided "as is" with no warranties</li>
                <li>Users assume responsibility for following care instructions</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="text-teal-600 w-5 h-5" />
                <h2 className="text-xl font-semibold text-teal-900">Contact Information</h2>
              </div>
              <p className="text-gray-700">
                For questions about these terms or our services, please contact us at:
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

export default TermsOfService;
