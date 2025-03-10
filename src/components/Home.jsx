import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Users, HeartHandshake, Info, Heart } from 'lucide-react';
import Registration from './Registration';
import Footer from './Footer'
import EmergencyFundCard from './EmergencyFundCard';
import PatientStatisticsDisplay from './PatientStatisticsDisplay';

const HeroImage = () => (
  <svg viewBox="0 0 800 500" className="absolute inset-0 w-full h-full object-cover">
    <rect width="800" height="500" fill="#f0fdfa"/>
    <path d="M0 300 C200 250 400 350 800 250 L800 500 L0 500 Z" fill="#99f6e4" opacity="0.5"/>
    <path d="M0 350 C200 300 400 400 800 300 L800 500 L0 500 Z" fill="#5eead4" opacity="0.4"/>
    <path d="M400 200 C400 120 320 120 320 160 C320 200 400 240 400 240 C400 240 480 200 480 160 C480 120 400 120 400 200" fill="#0d9488" opacity="1"/>
   
  </svg>
);

const ServiceImages = {
  Medical: () => (
    <svg viewBox="0 0 400 300" className="w-full h-48 object-cover rounded-lg mb-4">
      <rect width="400" height="300" fill="#f0fdfa"/>
      <rect x="175" y="100" width="50" height="100" fill="#0d9488"/>
      <rect x="150" y="125" width="100" height="50" fill="#0d9488"/>
      <circle cx="200" cy="150" r="80" fill="none" stroke="#14b8a6" strokeWidth="8"/>
    </svg>
  ),
  Emotional: () => (
    <svg viewBox="0 0 400 300" className="w-full h-48 object-cover rounded-lg mb-4">
      <rect width="400" height="300" fill="#f0fdfa"/>
      <path d="M200 120 C200 80 160 80 160 100 C160 120 200 140 200 140 C200 140 240 120 240 100 C240 80 200 80 200 120" fill="#0d9488"/>
      <path d="M240 180 C240 140 200 140 200 160 C200 180 240 200 240 200 C240 200 280 180 280 160 C280 140 240 140 240 180" fill="#14b8a6" opacity="0.7"/>
    </svg>
  ),
  Home: () => (
    <svg viewBox="0 0 400 300" className="w-full h-48 object-cover rounded-lg mb-4">
      <rect width="400" height="300" fill="#f0fdfa"/>
      <path d="M200 80 L100 150 L100 250 L300 250 L300 150 Z" fill="#0d9488"/>
      <rect x="180" y="180" width="40" height="70" fill="#f0fdfa"/>
      <path d="M200 140 C200 120 180 120 180 130 C180 140 200 150 200 150 C200 150 220 140 220 130 C220 120 200 120 200 140" fill="#14b8a6"/>
    </svg>
  ),
  Equipment: () => (
    <svg viewBox="0 0 400 300" className="w-full h-48 object-cover rounded-lg mb-4">
      <rect width="400" height="300" fill="#f0fdfa"/>
      <rect x="150" y="100" width="100" height="150" fill="#0d9488" rx="10"/>
      <rect x="170" y="120" width="60" height="20" fill="#f0fdfa" rx="5"/>
      <rect x="170" y="150" width="60" height="20" fill="#f0fdfa" rx="5"/>
      <rect x="170" y="180" width="60" height="20" fill="#f0fdfa" rx="5"/>
      <circle cx="200" cy="80" r="20" fill="#14b8a6"/>
    </svg>
  )
};



const Home = () => {
  const navigate = useNavigate();
  const volunteerRef = useRef(null);
  const patientRef = useRef(null);

  const scrollToVolunteer = () => {
    volunteerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPatient = () => {
    patientRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <HeroImage />
        
        {/* Hero Content */}
        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-teal-50">
            Compassionate Care for Every Life
          </h1>
          <p className="text-xl md:text-2xl text-center mb-12 max-w-3xl text-white">
            Join us in our mission to provide comfort and support to those in need through dedicated palliative care services
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            <button
              onClick={() => navigate('/donate')}
              className="md:hidden flex items-center px-6 py-2.5 bg-teal-800 space-x-2 text-white rounded-full hover:bg-teal-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 animate-pulse"
            >
              <Heart size={20} />
              <span>Donate</span>
            </button>

            <button
              onClick={scrollToVolunteer}
              className="flex items-center space-x-2 bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-full transition duration-300"
            >
              <Users size={20} />
              <span>Join Us</span>
            </button>
            
            <button
              onClick={scrollToPatient}
              className="flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition duration-300"
            >
              <HeartHandshake size={20} />
              <span>Patient Registration</span>
            </button>
            
            <button
              onClick={() => navigate('/about')}
              className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-teal-900 px-6 py-3 rounded-full transition duration-300"
            >
              <Info size={20} />
              <span>About Us</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-40">
          <PatientStatisticsDisplay />
            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">25+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-teal-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same until Services section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ServiceImages.Medical />
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Medical Care</h3>
              <p className="text-gray-600">Professional medical support and pain management services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ServiceImages.Emotional />
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Emotional Support</h3>
              <p className="text-gray-600">Compassionate counseling and emotional care for patients and families</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ServiceImages.Home />
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Home Care</h3>
              <p className="text-gray-600">Dedicated home care services to ensure comfort in familiar surroundings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">
              Available Medical Equipment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our inventory of medical equipment available for patients in need. From mobility aids to specialized care equipment, we're here to support your care journey.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="bg-teal-50 p-8 rounded-lg max-w-md w-full hover:shadow-lg transition-all duration-300">
              <ServiceImages.Equipment />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">
                  View Available Equipment
                </h3>
                <p className="text-gray-600 mb-6">
                  Access our complete catalog of medical equipment, including wheelchairs, hospital beds, oxygen concentrators, and more.
                </p>
                <button
                  onClick={() => navigate('/equipment-display')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full transition duration-300"
                >
                  Browse Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={volunteerRef}>
        <Registration />
      </div>

      <div ref={patientRef} />
      <EmergencyFundCard/>
      <Footer/>
    </div>
  );
};

export default Home;
