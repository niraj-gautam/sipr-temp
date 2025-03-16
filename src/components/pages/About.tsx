import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      bio: 'Leading expert in AI policy with over 20 years of experience in public policy research.',
    },
    {
      name: 'Dr. Michael Roberts',
      role: 'Deputy Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Specializes in economic development and international trade policy.',
    },
    {
      name: 'Prof. Emily Brown',
      role: 'Research Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      bio: 'Expert in rural development and agricultural economics.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To advance evidence-based policy making through rigorous research and analysis.',
    },
    {
      icon: Globe,
      title: 'Vision',
      description: 'A world where policy decisions are guided by robust research and data-driven insights.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards of academic and research integrity.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="About SIPR"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            About SIPR
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            The Sankhya Institute for Policy and Research is a leading think tank dedicated to shaping policy through rigorous research and evidence-based analysis.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="w-12 h-12 text-[#8c1616] mx-auto mb-4" />
                <h3 className="text-xl font-['Montserrat'] font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="font-['Baskerville'] text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-[#F0EFF4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-['Montserrat'] font-semibold text-center mb-12">
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-['Montserrat'] font-semibold mb-1">
                    {person.name}
                  </h3>
                  <p className="text-[#8c1616] font-['Montserrat'] mb-3">{person.role}</p>
                  <p className="font-['Baskerville'] text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-['Montserrat'] font-semibold text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F0EFF4] rounded-lg p-8">
              <h3 className="text-2xl font-['Montserrat'] font-semibold mb-4">
                Research Excellence
              </h3>
              <ul className="space-y-4 font-['Baskerville']">
                <li>Over 200 published research papers</li>
                <li>50+ policy recommendations implemented</li>
                <li>International collaborations with 30+ institutions</li>
                <li>Regular contributor to national policy frameworks</li>
              </ul>
            </div>
            <div className="bg-[#F0EFF4] rounded-lg p-8">
              <h3 className="text-2xl font-['Montserrat'] font-semibold mb-4">
                Policy Influence
              </h3>
              <ul className="space-y-4 font-['Baskerville']">
                <li>Advisory role in government committees</li>
                <li>Expert testimony in policy hearings</li>
                <li>Regular media appearances and commentary</li>
                <li>Training programs for policymakers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;