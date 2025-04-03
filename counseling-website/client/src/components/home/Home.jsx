import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
import Features from './Features';
import CallToAction from './CallToAction';

const Home = () => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-blue-100/40 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 -left-24 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-indigo-100/40 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-48 left-1/4 w-80 h-80 lg:w-[600px] lg:h-[600px] bg-purple-100/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 3xl:py-40 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-16 2xl:gap-20">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 max-w-3xl">
              <div className="mb-8 inline-block">
                <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">Premium Career Counseling</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 leading-tight">
                Shape Your Future With Expert Guidance
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-10 lg:mb-12">
                Personalized career counseling to help you discover your potential, make informed decisions, and achieve your dreams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  to="/booking"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Book Free Consultation
                </Link>
                
                <Link
                  to="/services"
                  className="bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-300 font-bold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Explore Services</span>
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              <div className="mt-10 lg:mt-16 flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-md">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${20 + item}.jpg`}
                        alt={`User ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-600">500+ satisfied clients</div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-gray-600 text-sm">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl transform -rotate-6"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Career Counseling Session"
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating Accent Elements */}
              <div className="absolute -top-6 -right-6 bg-blue-100 rounded-xl p-3 shadow-lg transform rotate-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6.343 17.657l-.707.707" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-indigo-100 rounded-xl p-3 shadow-lg transform -rotate-6">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-16">
            {[
              { number: "500+", label: "Successful Admissions" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "University Partners" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Features />
      <Testimonials />
      <CallToAction />
    </section>
  );
};

export default Home; 