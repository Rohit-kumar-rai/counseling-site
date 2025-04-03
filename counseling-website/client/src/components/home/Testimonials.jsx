import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'MBA Student, IIM Bangalore',
      image: 'https://randomuser.me/api/portraits/women/40.jpg',
      quote: 'The guidance I received completely transformed my application process. My counselor provided insights that helped me stand out and secure admission to my dream business school.',
    },
    {
      name: 'Arjun Patel',
      role: 'Software Engineer at Microsoft India',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'After feeling stuck in my career, the personalized roadmap I received gave me clarity and direction. Within 6 months, I landed my dream job at a top tech company.',
    },
    {
      name: 'Ananya Reddy',
      role: 'Medical Student, AIIMS Delhi',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The interview preparation was invaluable. My counselor anticipated nearly every question I was asked and helped me craft authentic, compelling responses.',
    },
    {
      name: 'Rahul Verma',
      role: 'Investment Banking Analyst, Goldman Sachs India',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      quote: 'The resume and cover letter guidance I received was game-changing. I went from zero callbacks to multiple interviews within weeks.',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
        <svg className="absolute right-0 top-0 h-72 w-72 md:h-96 md:w-96 text-blue-200 opacity-20 transform translate-x-1/4 -translate-y-1/4" fill="currentColor" viewBox="0 0 600 600" aria-hidden="true">
          <path d="M600 300C600 465.685 465.685 600 300 600C134.315 600 0 465.685 0 300C0 134.315 134.315 0 300 0C465.685 0 600 134.315 600 300Z" />
        </svg>
        <svg className="absolute left-0 bottom-0 h-72 w-72 md:h-96 md:w-96 text-indigo-200 opacity-20 transform -translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 600 600" aria-hidden="true">
          <path d="M600 300C600 465.685 465.685 600 300 600C134.315 600 0 465.685 0 300C0 134.315 134.315 0 300 0C465.685 0 600 134.315 600 300Z" />
        </svg>
      </div>
      
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 3xl:px-32 relative z-10">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">Success Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-indigo-700 mb-6 sm:mb-8">What Our Clients Say</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Hear from students and professionals who transformed their careers with our guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 relative group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-100">
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="flex flex-col h-full">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed relative z-10">{testimonial.quote}</p>
                
                <div className="mt-auto flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-4 ring-blue-50 shadow-md">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial Video Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">See How We've Helped Transform Careers</h3>
                <p className="text-blue-100 text-lg mb-8">Watch testimonials from our clients who achieved their dream careers and academic goals with our personalized guidance.</p>
                <button className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Success Stories
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/40 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Video testimonial thumbnail" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 