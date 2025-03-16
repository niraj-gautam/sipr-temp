import React from 'react';
import { Handshake, Building, GraduationCap, Globe, ArrowRight } from 'lucide-react';

const Partnerships = () => {
  const partners = [
    {
      category: 'Academic Institutions',
      icon: GraduationCap,
      partners: [
        {
          name: 'Stanford University',
          description: 'Collaborative research on AI policy and governance',
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
        },
        {
          name: 'Oxford University',
          description: 'Joint programs in economic development studies',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      category: 'Government Agencies',
      icon: Building,
      partners: [
        {
          name: 'Ministry of Digital Economy',
          description: 'Policy advisory and research support',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        },
        {
          name: 'National Research Council',
          description: 'Collaborative research initiatives',
          image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80',
        },
      ],
    },
    {
      category: 'International Organizations',
      icon: Globe,
      partners: [
        {
          name: 'World Bank',
          description: 'Research partnership on development economics',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
        },
        {
          name: 'United Nations Development Programme',
          description: 'Sustainable development research',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
            alt="Partnerships"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Partnerships & Collaborations
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Working together with leading institutions and organizations to drive impactful policy research and implementation.
          </p>
        </div>
      </div>

      {/* Partnership Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {partners.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <category.icon className="w-8 h-8 text-[#8c1616] mr-4" />
                <h2 className="text-3xl font-['Montserrat'] font-semibold">
                  {category.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="bg-[#F0EFF4] rounded-lg overflow-hidden">
                    <div className="h-48 relative">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-['Montserrat'] font-semibold mb-2">
                        {partner.name}
                      </h3>
                      <p className="font-['Baskerville'] text-gray-600 mb-4">
                        {partner.description}
                      </p>
                      <a
                        href={`/partnerships/${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-[#F0EFF4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="w-16 h-16 text-[#8c1616] mx-auto mb-6" />
            <h2 className="text-3xl font-['Montserrat'] font-semibold mb-4">
              Become a Partner
            </h2>
            <p className="font-['Baskerville'] text-gray-600 mb-8">
              Join our network of partners and contribute to shaping the future of policy research and implementation.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#8c1616] text-white rounded-md hover:bg-[#7a1313] transition-colors font-['Montserrat']"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;