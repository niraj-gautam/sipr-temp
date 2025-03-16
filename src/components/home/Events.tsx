import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'International Policy Summit 2024',
      date: 'April 15-17, 2024',
      location: 'Grand Conference Center, New York',
      time: '9:00 AM - 6:00 PM',
      type: 'Conference',
      description: 'Join leading policy experts and researchers for our annual summit on global policy challenges.',
    },
    {
      title: 'AI Policy Workshop',
      date: 'April 25, 2024',
      location: 'Virtual Event',
      time: '2:00 PM - 5:00 PM',
      type: 'Workshop',
      description: 'An interactive session on emerging AI policies and their implications for governance.',
    },
    {
      title: 'Rural Development Symposium',
      date: 'May 5, 2024',
      location: 'Research Center Auditorium',
      time: '10:00 AM - 4:00 PM',
      type: 'Symposium',
      description: 'Exploring innovative approaches to sustainable rural development.',
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-['Montserrat'] font-semibold">Upcoming Events</h2>
          <a 
            href="/events" 
            className="text-[#8c1616] hover:text-[#7a1313] transition-colors font-['Montserrat'] flex items-center"
          >
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-[#F0EFF4] p-6 hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#8c1616] text-white text-sm font-['Montserrat'] px-3 py-1 inline-block mb-4">
                {event.type}
              </div>
              
              <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-[#8c1616]" />
                  <span className="font-['Montserrat']">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-[#8c1616]" />
                  <span className="font-['Montserrat']">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-[#8c1616]" />
                  <span className="font-['Montserrat']">{event.location}</span>
                </div>
              </div>
              
              <p className="text-gray-700 font-['Montserrat'] mb-4">{event.description}</p>
              
              <a 
                href={`/events/${index}`}
                className="inline-flex items-center text-[#8c1616] hover:text-[#7a1313] font-['Montserrat']"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;