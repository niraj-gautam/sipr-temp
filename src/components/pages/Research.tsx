import React from 'react';
import { Brain, Calculator, Building2, Sprout, LineChart, ArrowRight } from 'lucide-react';

const Research = () => {
  const areas = [
    {
      icon: Brain,
      title: 'AI & Data Policy',
      description: 'Exploring the implications of artificial intelligence and data governance on society and policy.',
      projects: [
        'AI Ethics Framework Development',
        'Data Privacy Policy Analysis',
        'Algorithmic Bias Research',
      ],
    },
    {
      icon: Calculator,
      title: 'Tax Policy & Public Finance',
      description: 'Analyzing fiscal policies and their impact on economic growth and social welfare.',
      projects: [
        'Digital Economy Taxation',
        'Public Expenditure Analysis',
        'Tax Reform Impact Studies',
      ],
    },
    {
      icon: Building2,
      title: 'Migration & Urbanization',
      description: 'Studying population movements and urban development challenges in modern societies.',
      projects: [
        'Urban Housing Policy',
        'Migration Pattern Analysis',
        'Smart City Development',
      ],
    },
    {
      icon: Sprout,
      title: 'Agriculture & Rural Development',
      description: 'Researching sustainable agricultural practices and rural economic growth.',
      projects: [
        'Sustainable Farming Practices',
        'Rural Digital Integration',
        'Agricultural Market Analysis',
      ],
    },
    {
      icon: LineChart,
      title: 'Trade & Economic Development',
      description: 'Examining international trade patterns and their effects on economic development.',
      projects: [
        'Global Supply Chain Analysis',
        'Trade Agreement Impact Studies',
        'Economic Integration Research',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
            alt="Research at SIPR"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Research Initiatives
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Our research programs focus on critical policy challenges facing society today, combining rigorous analysis with practical solutions.
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="bg-[#F0EFF4] rounded-lg p-8">
                <area.icon className="w-12 h-12 text-[#8c1616] mb-6" />
                <h2 className="text-2xl font-['Montserrat'] font-semibold mb-4">
                  {area.title}
                </h2>
                <p className="font-['Baskerville'] text-gray-600 mb-6">
                  {area.description}
                </p>
                <h3 className="text-lg font-['Montserrat'] font-semibold mb-3">
                  Current Projects:
                </h3>
                <ul className="space-y-2 mb-6">
                  {area.projects.map((project, idx) => (
                    <li key={idx} className="font-['Baskerville'] flex items-center">
                      <ArrowRight className="w-4 h-4 text-[#8c1616] mr-2" />
                      {project}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-16 bg-[#F0EFF4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-['Montserrat'] font-semibold text-center mb-12">
            Our Research Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Problem Identification',
                description: 'Identifying critical policy challenges through stakeholder engagement.',
              },
              {
                step: '02',
                title: 'Data Collection',
                description: 'Gathering comprehensive data through various research methodologies.',
              },
              {
                step: '03',
                title: 'Analysis',
                description: 'Rigorous analysis using advanced research tools and methodologies.',
              },
              {
                step: '04',
                title: 'Policy Recommendations',
                description: 'Developing actionable policy recommendations based on research findings.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-['Montserrat'] font-semibold text-[#8c1616] mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-['Montserrat'] font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="font-['Baskerville'] text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;