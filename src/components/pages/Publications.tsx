import React from 'react';
import { FileText, Download, ArrowRight, Search } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'The Impact of AI on Public Policy Making',
      authors: 'Dr. Sarah Chen, Dr. Michael Roberts',
      date: 'March 2024',
      category: 'AI & Data Policy',
      abstract: 'An analysis of how artificial intelligence is reshaping the landscape of public policy development and implementation.',
      link: '/publications/ai-policy-impact.pdf',
    },
    {
      title: 'Rural Development in the Digital Age',
      authors: 'Dr. James Wilson, Prof. Emily Brown',
      date: 'February 2024',
      category: 'Agriculture & Rural Development',
      abstract: 'Examining the intersection of digital technologies and rural development strategies in emerging economies.',
      link: '/publications/rural-digital-development.pdf',
    },
    {
      title: 'Global Trade Patterns Post-2023',
      authors: 'Dr. Michael Roberts, Dr. Lisa Zhang',
      date: 'January 2024',
      category: 'Trade & Economic Development',
      abstract: 'A comprehensive analysis of changing global trade patterns and their implications for economic development.',
      link: '/publications/global-trade-2024.pdf',
    },
    {
      title: 'Urban Migration Trends in Developing Economies',
      authors: 'Prof. Emily Brown, Dr. James Wilson',
      date: 'December 2023',
      category: 'Migration & Urbanization',
      abstract: 'Studying recent urban migration patterns and their impact on city development and policy.',
      link: '/publications/urban-migration-trends.pdf',
    },
  ];

  const categories = [
    'All',
    'AI & Data Policy',
    'Agriculture & Rural Development',
    'Trade & Economic Development',
    'Migration & Urbanization',
    'Tax Policy',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80"
            alt="Publications"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Publications
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Access our latest research papers, policy briefs, and reports on critical policy issues.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search publications..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md text-sm font-['Montserrat'] ${
                    index === 0
                      ? 'bg-[#8c1616] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-[#F0EFF4] rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 text-[#8c1616] flex-shrink-0 mt-1" />
                      <div>
                        <span className="inline-block bg-[#8c1616] text-white text-sm px-3 py-1 rounded-full font-['Montserrat'] mb-2">
                          {pub.category}
                        </span>
                        <h2 className="text-xl font-['Montserrat'] font-semibold mb-2">
                          {pub.title}
                        </h2>
                        <p className="text-gray-600 font-['Baskerville'] mb-2">
                          {pub.authors}
                        </p>
                        <p className="text-sm text-gray-500 font-['Baskerville'] mb-4">
                          {pub.date}
                        </p>
                        <p className="text-gray-700 font-['Baskerville'] mb-4">
                          {pub.abstract}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={pub.link}
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#8c1616] text-white rounded-md hover:bg-[#7a1313] transition-colors font-['Montserrat']"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                    <a
                      href={`/publications/${index}`}
                      className="inline-flex items-center justify-center px-4 py-2 border border-[#8c1616] text-[#8c1616] rounded-md hover:bg-[#8c1616] hover:text-white transition-colors font-['Montserrat']"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;