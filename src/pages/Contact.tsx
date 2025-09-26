import { type ReactNode } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  email: string;
  children: ReactNode;
}

const TeamMember = ({ name, role, expertise, email, children }: TeamMemberProps) => (
  <div className="bg-mars-brown rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-mars-gray/30 hover:border-mars-red/50">
    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-mars-red to-mars-orange rounded-full mx-auto mb-4">
      {children}
    </div>
    <h3 className="text-xl font-bold text-mars-white mb-2">{name}</h3>
    <p className="text-mars-red font-semibold mb-2">{role}</p>
    <p className="text-mars-white/70 text-sm mb-4">{expertise}</p>
    <a 
      href={`mailto:${email}`}
      className="inline-flex items-center text-mars-red hover:text-mars-orange transition-colors text-sm font-medium"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      {email}
    </a>
  </div>
);

interface ContactCardProps {
  title: string;
  description: string;
  contact: string;
  children: ReactNode;
}

const ContactCard = ({ title, description, contact, children }: ContactCardProps) => (
  <div className="bg-mars-brown rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-mars-gray/30 hover:border-mars-red/50">
    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mars-red to-mars-orange rounded-lg mb-4">
      {children}
    </div>
    <h3 className="text-xl font-bold text-mars-white mb-3">{title}</h3>
    <p className="text-mars-white/70 mb-4 leading-relaxed">{description}</p>
    <p className="text-mars-red font-semibold">{contact}</p>
  </div>
);

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-mars-vermilion via-mars-red to-mars-vermilion text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Our Team
            </h1>
            <p className="text-xl md:text-2xl text-mars-white/90 max-w-4xl mx-auto leading-relaxed">
              Connect with the Endruvinna mission specialists and learn how you can contribute to the future of Mars exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-mars-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Mission Team
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Meet the dedicated professionals leading the Endruvinna mission and developing innovative solutions for Mars exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <TeamMember
              name="Maya Fahmy"
              role="Researcher"
              expertise="Mars Mission Research & Analysis"
              email="maya.fahmy@endruvinna.mission"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </TeamMember>

            <TeamMember
              name="Sama Hassan"
              role="Designer"
              expertise="UI/UX Design & User Experience"
              email="sama.hassan@endruvinna.mission"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </TeamMember>

            <TeamMember
              name="Mohamed Ramadan"
              role="Web Developer"
              expertise="Frontend Development & System Integration"
              email="mohamed.ramadan@endruvinna.mission"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </TeamMember>

            <TeamMember
              name="Aml Eshak"
              role="Web Developer"
              expertise="Backend Development & Database Management"
              email="aml.eshak@endruvinna.mission"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </TeamMember>

            <TeamMember
              name="Mariam Gamal"
              role="Team Member"
              expertise="Project Coordination & Support"
              email="mariam.gamal@endruvinna.mission"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </TeamMember>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-mars-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Whether you're interested in collaboration, have questions about our mission, or want to contribute to Mars exploration, we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ContactCard
              title="General Inquiries"
              description="Questions about our mission, technology, or partnership opportunities."
              contact="info@endruvinna.mission"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </ContactCard>

            <ContactCard
              title="Technical Support"
              description="Technical questions about our systems, equipment, or implementation details."
              contact="tech@endruvinna.mission"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </ContactCard>

            <ContactCard
              title="Media & Press"
              description="Media inquiries, interview requests, and press release information."
              contact="press@endruvinna.mission"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </ContactCard>
          </div>

          {/* Contact Form */}
          <div className="bg-mars-brown rounded-2xl p-8 lg:p-12 border border-mars-gray/30">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-mars-white mb-4">
                  Send Us a Message
                </h3>
                <p className="text-lg text-mars-white/70">
                  Ready to join the mission to Mars? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-mars-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-mars-gray border border-mars-gray/50 rounded-lg focus:ring-2 focus:ring-mars-red focus:border-mars-red text-mars-white placeholder-mars-white/50 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-mars-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-mars-gray border border-mars-gray/50 rounded-lg focus:ring-2 focus:ring-mars-red focus:border-mars-red text-mars-white placeholder-mars-white/50 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-mars-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-mars-gray border border-mars-gray/50 rounded-lg focus:ring-2 focus:ring-mars-red focus:border-mars-red text-mars-white placeholder-mars-white/50 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-mars-white mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 bg-mars-gray border border-mars-gray/50 rounded-lg focus:ring-2 focus:ring-mars-red focus:border-mars-red text-mars-white placeholder-mars-white/50 transition-colors"
                    placeholder="Your organization or company"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-mars-white mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-mars-gray border border-mars-gray/50 rounded-lg focus:ring-2 focus:ring-mars-red focus:border-mars-red text-mars-white transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="technical">Technical Questions</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-mars-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-mars-gray border border-mars-gray/50 rounded-lg focus:ring-2 focus:ring-mars-red focus:border-mars-red text-mars-white placeholder-mars-white/50 transition-colors resize-none"
                    placeholder="Tell us about your interest in the Endruvinna mission..."
                  ></textarea>
                </div>

                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-mars-red to-mars-orange text-white font-bold rounded-lg hover:from-mars-orange hover:to-mars-red transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Headquarters */}
      <section className="py-20 bg-mars-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-mars-white mb-4">
              Mission Headquarters
            </h2>
            <p className="text-xl text-mars-white/70 max-w-3xl mx-auto">
              Our mission control center coordinates all aspects of the Endruvinna project and serves as the hub for international collaboration.
            </p>
          </div>

          <div className="bg-mars-brown rounded-2xl shadow-xl p-8 lg:p-12 border border-mars-gray/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-mars-white mb-6">
                  Endruvinna Mission Control
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-mars-red rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mars-white">Address</h4>
                      <p className="text-mars-white/70">
                        Mars Exploration Institute<br />
                        1234 Space Technology Drive<br />
                        Houston, TX 77058, USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-mars-red rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mars-white">Phone</h4>
                      <p className="text-mars-white/70">+1 (281) 555-MARS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-mars-red rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-mars-white">Email</h4>
                      <p className="text-mars-white/70">headquarters@endruvinna.mission</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-mars-red/10 to-mars-orange/10 rounded-xl p-8 border border-mars-gray/20">
                <h4 className="text-xl font-bold text-mars-white mb-6">Office Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-mars-white/70">Monday - Friday</span>
                    <span className="font-semibold text-mars-white">8:00 AM - 6:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mars-white/70">Saturday</span>
                    <span className="font-semibold text-mars-white">9:00 AM - 2:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mars-white/70">Sunday</span>
                    <span className="font-semibold text-mars-white">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-mars-gray/30">
                    <p className="text-sm text-mars-white/60">
                      Emergency mission support available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;