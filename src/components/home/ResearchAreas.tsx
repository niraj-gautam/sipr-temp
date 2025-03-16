import React from 'react';
import { Brain, Calculator, Building2, Sprout, LineChart } from 'lucide-react';

const ResearchAreas = () => {
  const areas = [
    {
      title: 'AI & Data Policy',
      icon: Brain,
      description: 'Exploring the implications of artificial intelligence and data governance on society and policy.',
    },
    {
      title: 'Tax Policy & Public Finance',
      icon: Calculator,
      description: 'Analyzing fiscal policies and their impact on economic growth and social welfare.',
    },
    {
      title: 'Migration & Urbanization',
      icon: Building2,
      description: 'Studying population movements and urban development challenges in modern societies.',
    },
    {
      title: 'Agriculture & Rural Development',
      icon: Sprout,
      description: 'Researching sustainable agricultural practices and rural economic growth.',
    },
    {
      title: 'Trade & Economic Development',
      icon: LineChart,
      description: 'Examining international trade patterns and their effects on economic development.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-['Montserrat'] font-semibold text-center mb-12">
          Research Initiatives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="p-6 bg-[#F0EFF4] hover:shadow-lg transition-shadow"
            >
              <area.icon className="w-12 h-12 text-[#8c1616] mb-4" />
              <h3 className="text-xl font-['Montserrat'] font-semibold mb-3">{area.title}</h3>
              <p className="font-['Montserrat'] text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;