import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      title: 'Personalized Counseling',
      description: 'One-on-one guidance tailored to your specific needs, goals, and circumstances.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 md:h-14 lg:h-16 w-10 sm:w-12 md:w-14 lg:w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: 'Admission Guidance',
      description: 'Expert assistance with college applications, essay writing, and interview preparation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 md:h-14 lg:h-16 w-10 sm:w-12 md:w-14 lg:w-16 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Career Roadmaps',
      description: 'Customized plans to help you navigate your career path and achieve your professional goals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 md:h-14 lg:h-16 w-10 sm:w-12 md:w-14 lg:w-16 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: 'Live Webinars',
      description: 'Engaging online sessions with industry experts sharing insights, trends, and answering your questions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 md:h-14 lg:h-16 w-10 sm:w-12 md:w-14 lg:w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Resume Building',
      description: 'Professional resume crafting services to highlight your skills and stand out to employers.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 md:h-14 lg:h-16 w-10 sm:w-12 md:w-14 lg:w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive coaching to help you excel in admission and job interviews.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 md:h-14 lg:h-16 w-10 sm:w-12 md:w-14 lg:w-16 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50">
        <div className="absolute -top-24 -left-24 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-blue-100/40 filter blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 lg:w-[500px] lg:h-[500px] rounded-full bg-indigo-100/40 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 lg:w-[600px] lg:h-[600px] rounded-full bg-blue-50/40 filter blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 mb-6 sm:mb-8">Our Services</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive services to guide you through every stage of your academic and professional journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-16 sm:mb-20 md:mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden p-8 sm:p-10 border border-gray-100 hover:border-blue-100 flex flex-col">
              <div className="mb-6 sm:mb-8 w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 group-hover:text-gray-700 transition-colors duration-300 flex-grow">{feature.description}</p>
              <Link to="/services" className="mt-auto inline-flex items-center text-blue-600 font-medium text-base sm:text-lg group-hover:text-blue-800 transition-colors duration-300">
                Learn more
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg sm:text-xl font-bold py-4 px-8 sm:px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features; 