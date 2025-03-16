import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results for demonstration
  const results = [
    {
      type: 'Publication',
      title: 'The Impact of AI on Public Policy Making',
      description: 'An analysis of how artificial intelligence is reshaping the landscape of public policy development...',
      url: '/publications/ai-policy-impact',
    },
    {
      type: 'Event',
      title: 'International Policy Summit 2024',
      description: 'Join leading policy experts and researchers for our annual summit on global policy challenges.',
      url: '/events/policy-summit-2024',
    },
    {
      type: 'News',
      title: 'SIPR Launches New AI Policy Research Initiative',
      description: 'The Sankhya Institute announces a groundbreaking research program focused on artificial intelligence...',
      url: '/news/ai-policy-initiative',
    },
  ].filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80"
            alt="Search"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Search Results
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Showing results for: "{query}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {results.length > 0 ? (
          <div className="space-y-8">
            {results.map((result, index) => (
              <div key={index} className="bg-[#F0EFF4] p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <SearchIcon className="w-6 h-6 text-[#8c1616] flex-shrink-0 mt-1" />
                  <div>
                    <span className="inline-block bg-[#8c1616] text-white text-sm px-3 py-1 rounded-full font-['Montserrat'] mb-2">
                      {result.type}
                    </span>
                    <h2 className="text-xl font-['Montserrat'] font-semibold mb-2">
                      {result.title}
                    </h2>
                    <p className="font-['Baskerville'] text-gray-600 mb-4">
                      {result.description}
                    </p>
                    <a
                      href={result.url}
                      className="text-[#8c1616] hover:text-[#7a1313] font-['Montserrat'] inline-flex items-center"
                    >
                      View Details
                      <SearchIcon className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-['Montserrat'] font-semibold mb-2">No Results Found</h2>
            <p className="font-['Baskerville'] text-gray-600">
              We couldn't find any matches for "{query}". Please try different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;