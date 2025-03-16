import React from 'react';
import { ArrowRight, Newspaper } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      title: 'SIPR Launches New AI Policy Research Initiative',
      date: 'March 15, 2024',
      category: 'Institute News',
      excerpt: 'The Sankhya Institute announces a groundbreaking research program focused on artificial intelligence policy frameworks.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
    },
    {
      title: 'Research Findings Impact National Rural Policy',
      date: 'March 10, 2024',
      category: 'Research Impact',
      excerpt: 'Recent SIPR study on rural development leads to policy changes at the national level.',
      image: 'https://images.unsplash.com/photo-1595344416261-3b2b9e0fc302?auto=format&fit=crop&q=80'
    },
    {
      title: 'SIPR Experts Present at Global Economic Forum',
      date: 'March 5, 2024',
      category: 'Events',
      excerpt: 'Institute researchers share insights on international trade policies at prestigious global forum.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-16 bg-[#F0EFF4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-['Montserrat'] font-semibold">Latest News</h2>
          <a 
            href="/news" 
            className="text-[#8c1616] hover:text-[#7a1313] transition-colors font-['Montserrat'] flex items-center"
          >
            View All News <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8c1616] text-white px-3 py-1 text-sm font-['Montserrat']">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3 font-['Montserrat']">
                  <Newspaper className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-['Montserrat'] font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 font-['Montserrat'] mb-4">{item.excerpt}</p>
                
                <a 
                  href={`/news/${index}`}
                  className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;