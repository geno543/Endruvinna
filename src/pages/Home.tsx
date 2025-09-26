import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

interface CardProps {
  title: string;
  description: string;
  link: string;
  children: ReactNode;
}

const Card = ({ title, description, link, children }: CardProps) => (
  <Link to={link} className="group">
    <div className="bg-mars-brown rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full border border-mars-gray/30 hover:border-mars-red/50 transform hover:-translate-y-2 hover:scale-105">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mars-red to-mars-orange rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        {children}
      </div>
      <h3 className="text-xl font-bold text-mars-white mb-3 group-hover:text-mars-orange transition-colors">
        {title}
      </h3>
      <p className="text-mars-white/70 leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center text-mars-red font-medium group-hover:translate-x-2 transition-transform duration-300 group-hover:text-mars-orange">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mars-red via-mars-vermilion to-mars-orange text-white py-24 overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <Spline 
            scene="https://prod.spline.design/3vQxRnTZvYGI9p9U/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-mars-black/50 z-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-mars-white">
            Endruvinna
            <span className="block text-3xl md:text-4xl font-light text-mars-white/80 mt-2">
              Mission to Mars
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-mars-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering sustainable waste management solutions for Mars exploration through innovative technology and engineering excellence.
          </p>
          
          {/* Mission Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-mars-black/30 backdrop-blur-sm rounded-lg p-4 border border-mars-white/20 hover:border-mars-orange/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-mars-white">2025</div>
              <div className="text-sm text-mars-white/70">Mission Year</div>
            </div>
            <div className="bg-mars-black/30 backdrop-blur-sm rounded-lg p-4 border border-mars-white/20 hover:border-mars-orange/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-mars-white">18</div>
              <div className="text-sm text-mars-white/70">Month Duration</div>
            </div>
            <div className="bg-mars-black/30 backdrop-blur-sm rounded-lg p-4 border border-mars-white/20 hover:border-mars-orange/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-mars-white">5</div>
              <div className="text-sm text-mars-white/70">Crew Members</div>
            </div>
            <div className="bg-mars-black/30 backdrop-blur-sm rounded-lg p-4 border border-mars-white/20 hover:border-mars-orange/50 transition-colors duration-300">
              <div className="text-3xl font-bold text-mars-white">100%</div>
              <div className="text-sm text-mars-white/70">Waste Recycled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-mars-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Explore Our Mission
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Discover the innovative solutions and cutting-edge technology that will make sustainable life on Mars possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Mission Overview"
              description="Learn about our comprehensive approach to Mars colonization and sustainable living solutions."
              link="/mission"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Card>

            <Card
              title="Equipment & Tools"
              description="Explore the advanced technology and specialized equipment designed for Mars operations."
              link="/equipment"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Card>

            <Card
              title="NASA Challenge"
              description="Discover how we're addressing NASA's Mars waste management challenge with innovative solutions."
              link="/challenge"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </Card>

            <Card
              title="Contact Team"
              description="Get in touch with our mission specialists and learn how you can contribute to Mars exploration."
              link="/contact"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-mars-vermilion to-mars-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-mars-white">
            Ready to Explore Mars?
          </h2>
          <p className="text-xl text-mars-white/90 mb-8 leading-relaxed">
            Join us on this groundbreaking mission to establish sustainable human presence on Mars through innovative waste management solutions.
          </p>
          <Link
            to="/mission"
            className="inline-flex items-center px-8 py-4 bg-mars-white text-mars-vermilion font-bold rounded-lg hover:bg-mars-white/90 hover:text-mars-red transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Mission Briefing
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;