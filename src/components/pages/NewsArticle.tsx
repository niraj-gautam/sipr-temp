import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';

const NewsArticle = () => {
  const { id } = useParams();

  // Mock article data - in a real app, this would come from an API
  const article = {
    title: 'SIPR Launches New AI Policy Research Initiative',
    date: 'March 15, 2024',
    category: 'Institute News',
    author: 'Dr. Sarah Chen',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    content: `
      The Sankhya Institute for Policy Research (SIPR) is proud to announce the launch of a comprehensive research initiative focused on artificial intelligence policy frameworks. This groundbreaking program aims to address the complex challenges and opportunities presented by AI in public policy and governance.

      The initiative will bring together experts from various disciplines to examine:

      1. Ethical Implications of AI in Policy Making
      - Development of ethical guidelines for AI implementation
      - Impact assessment frameworks
      - Bias detection and mitigation strategies

      2. Regulatory Frameworks
      - Analysis of existing AI regulations
      - Recommendations for policy updates
      - International cooperation mechanisms

      3. Public Sector Applications
      - Case studies of successful AI implementation
      - Best practices for government agencies
      - Risk assessment and management

      Dr. Sarah Chen, Director of SIPR, emphasized the importance of this initiative: "As AI continues to transform our society, it's crucial that we develop robust policy frameworks to ensure its responsible and effective implementation. This research initiative represents our commitment to shaping the future of AI governance."

      The program will include:
      - Regular research publications
      - Policy briefs and recommendations
      - Workshops and seminars
      - Collaboration with international partners

      We invite interested researchers and policy practitioners to participate in this important initiative. For more information about involvement opportunities, please contact our research office.
    `,
    relatedArticles: [
      {
        title: 'AI Ethics Guidelines Released',
        date: 'March 10, 2024',
        category: 'Research',
      },
      {
        title: 'Policy Makers Workshop Announced',
        date: 'March 5, 2024',
        category: 'Events',
      },
    ],
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-['Montserrat'] font-semibold mb-4">Article Not Found</h2>
          <Link to="/news" className="text-[#8c1616] hover:text-[#7a1313]">
            Return to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Link
              to="/news"
              className="inline-flex items-center text-white hover:text-gray-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Link>
            <span className="inline-block bg-[#8c1616] px-4 py-2 rounded-full text-sm font-['Montserrat'] mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center text-gray-500 text-sm mb-8 font-['Baskerville']">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
              <span className="mx-2">•</span>
              By {article.author}
            </div>

            <div className="prose max-w-none">
              <div className="font-['Baskerville'] text-gray-700 whitespace-pre-line">
                {article.content}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center justify-between">
                <span className="font-['Montserrat'] font-semibold">Share this article:</span>
                <div className="flex space-x-4">
                  <button className="text-gray-600 hover:text-[#8c1616]">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#F0EFF4] p-6 rounded-lg sticky top-8">
              <h2 className="text-xl font-['Montserrat'] font-semibold mb-6">Related Articles</h2>
              <div className="space-y-6">
                {article.relatedArticles.map((related, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <span className="text-sm text-[#8c1616] font-['Montserrat'] mb-2 block">
                      {related.category}
                    </span>
                    <h3 className="font-['Montserrat'] font-semibold mb-1">
                      <Link to="#" className="hover:text-[#8c1616]">
                        {related.title}
                      </Link>
                    </h3>
                    <span className="text-sm text-gray-500 font-['Baskerville']">
                      {related.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;