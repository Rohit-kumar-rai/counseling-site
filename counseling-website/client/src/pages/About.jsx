import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & Lead Counselor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'Ph.D. in Educational Psychology with over 15 years of experience helping students achieve their academic goals.'
    },
    {
      name: 'Michael Robertson',
      role: 'Career Development Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'Former HR director with expertise in career planning, resume building, and interview preparation.'
    },
    {
      name: 'Emily Chen',
      role: 'International Education Advisor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'Specialized in international college applications with experience in multiple education systems across the globe.'
    },
    {
      name: 'James Wilson',
      role: 'Student Success Coach',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      bio: 'Dedicated to helping students develop effective study strategies and overcome academic challenges.'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-800 to-purple-800 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bg-white/5 h-[1px]"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-72 bg-white/10 blur-3xl rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Mission</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We're passionate about guiding students towards their ideal educational and career paths through personalized counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Our team in a meeting" 
                  className="rounded-lg shadow-xl z-10 relative"
                />
                <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-100 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-100 rounded-lg -z-10"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, our counseling service began with a simple mission: to provide personalized guidance to students navigating the complex world of higher education and career planning.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                What started as a small practice has grown into a comprehensive counseling service that has helped thousands of students achieve their academic and professional goals. Our approach combines industry expertise with a deep understanding of each student's unique strengths and aspirations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to evolve our services to meet the changing needs of students in an increasingly competitive and global educational landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Mission & Core Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower students with the knowledge, skills, and confidence they need to make informed decisions about their education and career paths, leading to fulfilling and successful futures.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Personalization:</strong> We tailor our guidance to each student's unique strengths and goals.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Excellence:</strong> We strive for the highest standards in all our services.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Integrity:</strong> We provide honest and ethical guidance to every student.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Empowerment:</strong> We believe in enabling students to make informed decisions independently.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our team of experienced professionals is dedicated to helping you achieve your educational and career goals.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Connect with our team of experts today and take the first step towards a brighter future.
          </p>
          <Link 
            to="/booking" 
            className="bg-white text-blue-700 font-bold py-3 px-10 rounded-full hover:bg-blue-50 transition duration-300 inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default About; 