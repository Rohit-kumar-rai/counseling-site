import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 md:w-[800px] md:h-[800px] bg-indigo-500 rounded-full opacity-10 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-300 rounded-full opacity-10 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        
        <svg className="absolute left-0 top-1/4 h-24 w-24 md:h-40 md:w-40 text-white opacity-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.5 12.59l.63-.79c.99.4 2.03.82 3.09 1.24l-2.05 2.56 3.1 2.48c-1.41.79-2.87 1.61-4.13 2.31l-.53-3.43-3.97.67c.06-1.62.12-3.29.17-4.99l3.72-1.61-.63-3.43c1.41.39 2.87.79 4.13 1.13l-.84 3.86zm-10.03 5.2l3.03-3.86-1.74-3.87c1.25.35 2.53.7 3.66 1.01l1.46-3.08c1.08.84 2.19 1.7 3.03 2.35l1.46-2.89c.7 1.32 1.42 2.67 2.05 3.85l-1.95 2.51 2.93 2.31c-1.31.7-2.67 1.4-3.86 2.02l-.52-3.22-3.72.7c.04-1.51.09-3.07.13-4.55l3.39-1.42-.57-3.16c1.36.34 2.74.7 3.97.97l-.84 3.75 3.93-1.36c-.18 1.55-.36 3.13-.54 4.64l-3.9 1.7.38 3.86c-1.38.33-2.81.64-4.08.92l.05-3.97-4.05.7c.9-1.3 1.85-2.67 2.66-3.85z" />
        </svg>
        
        <svg className="absolute right-0 bottom-1/4 h-32 w-32 md:h-48 md:w-48 text-white opacity-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.687-6 6s2.687 6 6 6c2.739 0 5.05-1.84 5.777-4.352.246-.852-.399-1.648-1.27-1.648h-2.507c-.57 0-1.166.186-1.166-.644 0-.836.597-1.356 1.166-1.356h2.507c.871 0 1.516-.796 1.27-1.648-.727-2.512-3.038-4.352-5.777-4.352z" />
        </svg>
      </div>
      
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">Start Your Journey Today</span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Future With Expert Guidance
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl">
            Schedule a free consultation with our expert counselors and discover how we can help you achieve your educational and career goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16">
            <Link 
              to="/booking" 
              className="px-8 py-4 bg-white text-blue-700 hover:text-blue-800 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm hover:bg-blue-500/30 text-white border border-white/30 rounded-lg font-bold text-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
        
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {[
            { number: "95%", text: "Success Rate" },
            { number: "500+", text: "Students Admitted" },
            { number: "50+", text: "University Partners" },
            { number: "100%", text: "Satisfaction Guaranteed" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-center transform hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-white/20">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 