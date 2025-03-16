import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const news = [
    {
      title: 'SIPR Launches New AI Policy Research Initiative',
      date: 'March 15, 2024',
      category: 'Institute News',
      excerpt: 'The Sankhya Institute announces a groundbreaking research program focused on artificial intelligence policy frameworks.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
      content: 'The Sankhya Institute for Policy Research (SIPR) is proud to announce the launch of a comprehensive research initiative focused on artificial intelligence policy frameworks...',
    },
    {
      title: 'Research Findings Impact National Rural Policy',
      date: 'March 10, 2024',
      category: 'Research Impact',
      excerpt: 'Recent SIPR study on rural development leads to policy changes at the national level.',
      image: 'https://images.unsplash.com/photo-1595344416261-3b2b9e0fc302?auto=format&fit=crop&q=80',
      content: 'A recent study conducted by SIPR researchers has led to significant changes in national rural development policies...',
    },
    {
      title: 'SIPR Experts Present at Global Economic Forum',
      date: 'March 5, 2024',
      category: 'Events',
      excerpt: 'Institute researchers share insights on international trade policies at prestigious global forum.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      content: 'SIPR researchers presented their latest findings on international trade policies at the prestigious Global Economic Forum...',
    },
    {
      title: 'New Partnership with Oxford University Announced',
      date: 'March 1, 2024',
      category: 'Partnerships',
      excerpt: 'SIPR and Oxford University establish joint research program on sustainable development.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
      content: 'The Sankhya Institute is pleased to announce a new partnership with Oxford University focused on sustainable development research...',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="News"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Latest News
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Stay updated with the latest developments, research findings, and activities at SIPR.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-[#F0EFF4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#8c1616] text-white px-3 py-1 rounded-full text-sm font-['Montserrat']">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3 font-['Baskerville']">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-['Montserrat'] font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-['Baskerville'] mb-4">{item.excerpt}</p>
                  <Link
                    to={`/news/${index}`}
                    className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;