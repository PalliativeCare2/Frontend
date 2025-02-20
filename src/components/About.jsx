import React, { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Award, Target, Shield, Phone, Mail, MapPin, Clock, Stethoscope, Activity } from 'lucide-react';


const AboutUs = () => {
  const missionPoints = [
    {
      icon: <Heart size={24} className="text-red-500" />,
      title: "Compassionate Care",
      description: "Providing empathetic and comprehensive palliative care services to patients with serious illnesses, ensuring dignity and comfort in every interaction."
    },
    {
      icon: <Target size={24} className="text-blue-500" />,
      title: "Community Support",
      description: "Building a strong support network within Pookkottumpadam and surrounding areas, helping patients and families navigate challenging health situations."
    },
    {
      icon: <Shield size={24} className="text-green-500" />,
      title: "Quality Healthcare",
      description: "Maintaining the highest standards of medical care through our experienced team of healthcare professionals and modern facilities."
    }
  ];

  const committeeMembers = [
    {
      name: "V.HMASA HAJI",
      role: "Chairman",
    },
    {
      name: "RIYAS BABU A",
      role: "General Secretary",
    },
    {
      name: "K.ABDUL JALEEL",
      role: "Treasurer"
    },
    {
      name: "Sreenivasan P",
      role: "Member"
    },
    {
      name: "Ashraf pothangodan",
      role: "Member"
    },
    {
      name: "Saleem Melethil",
      role: "Member"
    },
    {
      name: "Basheerali Vp",
      role: "Member"
    },
    {
      name: "Muhammad kunikkadan",
      role: "Member"
    },
    {
      name: "Mehaboob Adukkath",
      role: "Member"
    },
    {
      name: "Siddik hassan Adukkath",
      role: "Member"
    },
    {
      name: "Abdur Rahiman CP",
      role: "Member"
    },
    {
      name: "Yousuf.ali Alukkal",
      role: "Member"
    },
    {
      name: "Unnimoideen Pulath",
      role: "Member"
    },
    {
      name: "Junais TP",
      role: "Member"
    },
    {
      name: "Abdul Salam P",
      role: "Member"
    },
    {
      name: "Abdul Jamal P",
      role: "Member"
    },
    {
      name: "Shoukathali K",
      role: "Member"
    },
    {
      name: "Manojkumar A",
      role: "Member"
    },
    {
      name: "Alavikuty M",
      role: "Member"
    },
    {
      name: "Naser paramban",
      role: "Member"
    },
    {
      name: "Mijlad",
      role: "Member"
    },
    {
      name: "Abdulla Master",
      role: "Member"
    }
  ];
  const services = [
    {
      icon: <Stethoscope size={24} className="text-purple-500" />,
      title: "Pain Management",
      description: "Specialized treatment for chronic pain using modern medical techniques and medications."
    },
    {
      icon: <Activity size={24} className="text-orange-500" />,
      title: "Symptom Control",
      description: "Expert management of symptoms associated with serious illnesses and chronic conditions."
    },
    {
      icon: <Heart size={24} className="text-red-500" />,
      title: "Emotional Support",
      description: "Professional counseling and emotional support for patients and their families."
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: "./PalliativeCare1.jpeg",
      alt: "Clinic Image 1",
    },
    {
      src: "./PalliativeCare3.jpeg",
      alt: "Clinic Image 3",
    },
    {
      src: "./PalliativeCare4.jpeg",
      alt: "Clinic Image 4",
    },
    {
      src: "./PalliativeCare7.jpeg",
      alt: "Clinic Image 7",
    },
    
    // Add more images as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const [expandedNews, setExpandedNews] = useState(null);

  const newsItems = [
    {
      title: "What is Palliative Care?",
      summary: "Learn about palliative care and how it can help patients and families dealing with serious illnesses...",
      fullContent: "Palliative care is specialized medical care for people living with serious illnesses. It focuses on providing relief from symptoms, pain, and stress of a serious illness - whatever the diagnosis. The goal is to improve quality of life for both the patient and the family.\n\nOur team of doctors, nurses, and other specialists work together with a patient's other doctors to provide an extra layer of support. It is appropriate at any age and at any stage in a serious illness, and can be provided along with curative treatment.\n\nOur services include:\n- Pain and symptom management\n- Emotional and spiritual support\n- Family counseling and support\n- Coordination of care with other healthcare providers\n- Help with medical decision-making and establishing goals of care"
    },
    {
      title: "Our Home Care Services",
      summary: "Understanding our comprehensive home care program and how we support patients in their homes...",
      fullContent: "Our home care program brings essential palliative care services directly to patients in their homes. We understand that many patients are more comfortable receiving care in familiar surroundings, surrounded by family.\n\nOur home care services include:\n- Regular visits by our medical team\n- Pain management and symptom control\n- Training for family caregivers\n- Medication management\n- Basic nursing care\n- Emotional support for both patient and family\n- 24/7 emergency phone support\n\nTo arrange home care services, families can contact our office at 9846530721. Our team will assess each case and create a personalized care plan."
    },
    {
      title: "Community Support Programs",
      summary: "Discover the various support programs available to patients and families in our community...",
      fullContent: "We offer several community support programs to help patients and families dealing with serious illnesses:\n\n1. Monthly Medical Camps:\n- Free health check-ups\n- Medicine distribution\n- Basic palliative care consultations\n\n2. Family Support Groups:\n- Regular meetings for caregivers\n- Emotional support and counseling\n- Experience sharing and community building\n\n3. Education Programs:\n- Awareness sessions about palliative care\n- Training for family caregivers\n- Community health workshops\n\n4. Equipment Loan Program:\n- Wheelchairs\n- Hospital beds\n- Oxygen concentrators\n- Other medical equipment\n\nAll our programs are designed to provide comprehensive support to both patients and their families. Contact us to learn more about how you can benefit from or contribute to these programs."
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="./PalliativeCare1.jpeg"
            alt="Palliative Care Center"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Palliative Care Clinic Pookkottumpadam
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Providing compassionate palliative care and support to our community Since 2005
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-white py-8 border-b">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center space-x-3">
        <Phone className="text-teal-600" />
        <span>24/7 Emergency: +91 9447531225</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="text-teal-600" />
        <span>palliativeppm@gmail.com</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="text-teal-600" />
        <a 
          href="https://maps.google.com/?q=11.247225,76.302209" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-teal-600 transition-colors"
        >
          Pookkottumpadam, Kerala, India
        </a>
      </div>
    </div>
  </div>
</div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Center</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Palliative Care Clinic Pookkottumpadam stands as a beacon of hope and healing in our 
                  community. Founded in 2005, we've grown from a small team of dedicated volunteers into 
                  a comprehensive palliative care center, serving hundreds of patients annually.
                </p>
                <p>
                  Our center specializes in providing expert palliative care services, focusing on 
                  improving the quality of life for patients with serious illnesses and their families. 
                  We offer a holistic approach to healthcare, combining medical expertise with 
                  emotional and spiritual support.
                </p>
                <p>
                  Located in the heart of Pookkottumpadam, our facility is equipped with modern 
                  medical equipment and staffed by experienced healthcare professionals who are 
                  dedicated to providing compassionate care to all our patients.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="./PalliativeCare2.jpeg"
                alt="Our Center"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{point.title}</h3>
                <p className="text-gray-600 text-center">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Team Section */}
      
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Committee Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {committeeMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
            <p className="text-teal-600 font-medium">{member.role}</p>
            {member.contact && (
              <p className="text-gray-600 text-sm mt-2">{member.contact}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Clinic in Pictures</h2>
      <div className="relative h-[500px] rounded-lg overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <p className="text-lg text-center">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

      {/* Statistics Section */}
      <div className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">620+</div>
              <div className="text-lg">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Emergency Care</div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Guide to Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">
                {expandedNews === index ? item.fullContent : item.summary}
              </p>
              <button
                onClick={() => setExpandedNews(expandedNews === index ? null : index)}
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                {expandedNews === index ? "Show Less ↑" : "Read More ↓"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

      {/* Contact Information Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-teal-50 rounded-lg">
  <div className="flex justify-center mb-4">
    <MapPin size={32} className="text-teal-600" />
  </div>
  <h3 className="text-xl font-semibold mb-2">Location</h3>
  <a 
    href="https://maps.google.com/?q=11.247225,76.302209" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-teal-600 transition-colors"
  >
    Palliative Care Clinic Center<br />
    Pookkottumpadam<br />
    Malappuram, Kerala, India
  </a>
</div>
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <Clock size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Sunday: 9:00 AM - 5:00 PM<br />
                Home Care: 24/7<br />
              </p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <div className="flex justify-center mb-4">
                <Phone size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
              <p className="text-gray-600">
                Emergency: +91 9447531225<br />
                Office: +91 94475 31225<br />
                Email: palliativeppm@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO-friendly Footer Content */}
      <div className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">About Palliative Care</h2>
              <div className="space-y-4 text-teal-100">
                <p>
                  Palliative care is specialized medical care for people living with serious illness. It focuses 
                  on providing relief from the symptoms and stress of the illness with the goal of improving 
                  quality of life for both the patient and their family.
                </p>
                <p>
                  Our center in Pookkottumpadam provides comprehensive palliative care services including pain 
                  management, symptom control, psychological support, and family counseling. We work with patients 
                  suffering from cancer, chronic diseases, and other serious illnesses.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Commitment</h2>
              <div className="space-y-4 text-teal-100">
                <p>
                  At Palliative Care Clinic Pookkottumpadam, we are committed to providing high-quality, 
                  compassionate care to all our patients. Our team of experienced healthcare professionals 
                  works tirelessly to ensure that each patient receives personalized attention and care.
                </p>
                <p>
                  We believe in a holistic approach to healthcare, addressing not just the physical symptoms 
                  but also the emotional, social, and spiritual needs of our patients and their families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-teal-800 text-teal-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Palliative Care Clinic Pookkottumpadam. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
