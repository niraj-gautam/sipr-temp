import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const FeaturedPublication = () => {
  const publications = [
    {
      title: 'The Impact of AI on Public Policy Making',
      authors: 'Dr. Sarah Chen, Dr. Michael Roberts',
      date: 'March 2024',
      category: 'AI & Data Policy',
      abstract: 'An analysis of how artificial intelligence is reshaping the landscape of public policy development and implementation.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80'
    },
    {
      title: 'Rural Development in the Digital Age',
      authors: 'Dr. James Wilson, Prof. Emily Brown',
      date: 'February 2024',
      category: 'Agriculture & Rural Development',
      abstract: 'Examining the intersection of digital technologies and rural development strategies in emerging economies.',
      image: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-16 bg-[#F0EFF4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-['Montserrat'] font-semibold">Featured Publications</h2>
          <a 
            href="/publications" 
            className="flex items-center text-[#8c1616] hover:text-[#7a1313] transition-colors font-['Montserrat']"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white shadow-md overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={pub.image} 
                  alt={pub.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8c1616] text-white px-3 py-1 text-sm font-['Montserrat']">
                  {pub.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[#8c1616] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-['Montserrat'] font-semibold mb-2">{pub.title}</h3>
                    <p className="text-gray-600 font-['Montserrat'] mb-2">{pub.authors}</p>
                    <p className="text-sm text-gray-500 font-['Montserrat'] mb-4">{pub.date}</p>
                    <p className="text-gray-700 font-['Montserrat'] mb-4">{pub.abstract}</p>
                    <a 
                      href={`/publications/${index}`}
                      className="text-[#8c1616] hover:text-[#7a1313] font-['Montserrat'] flex items-center"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPublication;