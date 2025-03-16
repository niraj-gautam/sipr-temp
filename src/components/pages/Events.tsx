import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      title: 'International Policy Summit 2024',
      date: 'April 15-17, 2024',
      location: 'Grand Conference Center, New York',
      time: '9:00 AM - 6:00 PM',
      type: 'Conference',
      description: 'Join leading policy experts and researchers for our annual summit on global policy challenges.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    },
    {
      title: 'AI Policy Workshop',
      date: 'April 25, 2024',
      location: 'Virtual Event',
      time: '2:00 PM - 5:00 PM',
      type: 'Workshop',
      description: 'An interactive session on emerging AI policies and their implications for governance.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    },
    {
      title: 'Rural Development Symposium',
      date: 'May 5, 2024',
      location: 'Research Center Auditorium',
      time: '10:00 AM - 4:00 PM',
      type: 'Symposium',
      description: 'Exploring innovative approaches to sustainable rural development.',
      image: 'https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80',
    },
    {
      title: 'Future of Trade Policy Forum',
      date: 'May 15, 2024',
      location: 'Global Trade Center',
      time: '1:00 PM - 5:00 PM',
      type: 'Forum',
      description: 'Discussing emerging trends and challenges in international trade policy.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
            alt="Events"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Events
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Join us for insightful discussions, workshops, and conferences on critical policy issues.
          </p>
        </div>
      </div>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-[#F0EFF4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#8c1616] text-white px-3 py-1 rounded-full text-sm font-['Montserrat']">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3 text-[#8c1616]" />
                      <span className="font-['Baskerville']">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3 text-[#8c1616]" />
                      <span className="font-['Baskerville']">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-[#8c1616]" />
                      <span className="font-['Baskerville']">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-['Baskerville'] mb-4">{event.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/events/${index}`}
                      className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <button className="px-4 py-2 bg-[#8c1616] text-white rounded-md hover:bg-[#7a1313] transition-colors font-['Montserrat']">
                      Register
                    </button>
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

export default Events;