import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'JEE/NEET Preparation',
      description: 'Expert guidance for engineering and medical entrance exams with personalized study plans and comprehensive coaching.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      features: [
        'Subject-wise preparation strategy',
        'Mock test series',
        'Previous year paper analysis',
        'Doubt clearing sessions',
        'Performance tracking'
      ]
    },
    {
      id: 2,
      title: 'GATE/UPSC Coaching',
      description: 'Comprehensive preparation for GATE and UPSC examinations with expert faculty and proven study materials.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        'Structured study plan',
        'Current affairs updates',
        'Interview preparation',
        'Group discussions',
        'Personality development'
      ]
    },
    {
      id: 3,
      title: 'Study Abroad Guidance',
      description: 'Complete assistance for international education including university selection, visa process, and financial planning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'University shortlisting',
        'IELTS/TOEFL coaching',
        'Visa documentation',
        'Education loan guidance',
        'Pre-departure orientation'
      ]
    },
    {
      id: 4,
      title: 'Career Counseling',
      description: 'Professional guidance for career selection, skill development, and job placement in various sectors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'Career aptitude test',
        'Industry analysis',
        'Skill gap assessment',
        'Resume building',
        'Interview preparation'
      ]
    },
    {
      id: 5,
      title: 'Banking & SSC Exams',
      description: 'Specialized coaching for banking and SSC examinations with comprehensive study materials and practice tests.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      features: [
        'Quantitative aptitude',
        'General awareness',
        'English language',
        'Reasoning ability',
        'Mock test series'
      ]
    },
    {
      id: 6,
      title: 'MBA Entrance Coaching',
      description: 'Expert guidance for CAT, XAT, and other MBA entrance examinations with personalized coaching.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'CAT preparation',
        'GD/PI training',
        'Profile building',
        'College selection',
        'Application guidance'
      ]
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-purple-700 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bg-white/5 h-[1px]"></div>
          <svg className="absolute right-0 bottom-0 w-2/3 h-auto text-white opacity-5 transform translate-x-1/4 translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.3,-76.2C58.2,-69.7,70.8,-58.8,79.6,-45.1C88.5,-31.3,93.5,-15.7,92.8,-0.5C92.1,14.8,85.6,29.5,76.4,42.1C67.3,54.6,55.4,65,41.8,71.7C28.1,78.4,14.1,81.3,-0.5,82.2C-15.1,83.1,-30.1,82,-43.7,76.1C-57.2,70.2,-69.3,59.6,-76.6,46.2C-83.9,32.7,-86.5,16.4,-85.3,0.7C-84.1,-15,-79.2,-30,-70.3,-42.4C-61.5,-54.8,-48.8,-64.7,-35.1,-71.5C-21.5,-78.3,-7.8,-82.1,5.3,-91.2C18.4,-100.3,30.4,-82.8,44.3,-76.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">Our Counseling Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We offer a comprehensive range of educational and career counseling services tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Personalized Solutions for Your Success</h2>
            <p className="text-gray-600 text-lg">
              Each of our services is designed to address specific needs in your educational and career journey, 
              providing you with the tools and knowledge to make informed decisions.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 flex justify-center">
                  {service.icon}
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8 mt-auto">
                  <Link 
                    to="/booking" 
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Counseling Process</h2>
            <p className="text-gray-600 text-lg">
              We follow a structured yet flexible approach to ensure you receive the most effective guidance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl relative shadow-md">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">Initial Consultation</h3>
                <p className="text-gray-700">We discuss your goals, assess your current situation, and identify areas where you need guidance.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl relative shadow-md">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">Personalized Plan</h3>
                <p className="text-gray-700">We develop a customized strategy tailored to your unique strengths, interests, and objectives.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl relative shadow-md">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">Implementation</h3>
                <p className="text-gray-700">We guide you through executing your plan with ongoing support, resources, and advice.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl relative shadow-md">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">4</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">Follow-up</h3>
                <p className="text-gray-700">We track your progress, make adjustments as needed, and celebrate your achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Have questions about our services? Find answers to common inquiries below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">How long does a typical counseling session last?</h3>
                <p className="text-gray-700">Most of our counseling sessions last between 45 to 60 minutes. The initial consultation may be longer, typically 60 to 90 minutes, to allow for a comprehensive assessment of your needs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">How many sessions will I need?</h3>
                <p className="text-gray-700">The number of sessions varies based on your specific needs and goals. Some clients achieve their objectives in just a few sessions, while others benefit from ongoing support throughout their educational or career transition.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Do you offer virtual consultations?</h3>
                <p className="text-gray-700">Yes, we offer both in-person and virtual consultations to accommodate different preferences and geographical constraints. Our virtual sessions are conducted through secure video conferencing platforms.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">What age groups do you work with?</h3>
                <p className="text-gray-700">We work with clients of all ages, from high school students planning for college to professionals seeking career transitions or advancement. Our counselors specialize in different age groups and career stages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Take the first step towards achieving your educational and career goals by scheduling a consultation with our expert counselors.
          </p>
          <Link
            to="/booking"
            className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition duration-300 inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services; 