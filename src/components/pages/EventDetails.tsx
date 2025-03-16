import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowLeft } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();
  
  // Mock event data - in a real app, this would come from an API
  const event = {
    title: 'International Policy Summit 2024',
    date: 'April 15-17, 2024',
    location: 'Grand Conference Center, New York',
    time: '9:00 AM - 6:00 PM',
    type: 'Conference',
    description: 'Join leading policy experts and researchers for our annual summit on global policy challenges.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    fullDescription: `
      The International Policy Summit 2024 brings together leading experts, policymakers, and researchers from around the world to discuss pressing global challenges and innovative policy solutions.

      Key Topics:
      - Artificial Intelligence and Policy Making
      - Climate Change and Environmental Policy
      - Global Economic Recovery
      - Public Health Policy
      - International Trade Relations

      The summit will feature keynote speeches, panel discussions, workshops, and networking opportunities. Participants will have the chance to engage with thought leaders and contribute to meaningful discussions about the future of global policy.
    `,
    schedule: [
      {
        day: 'Day 1 - April 15',
        events: [
          { time: '9:00 AM', title: 'Opening Ceremony' },
          { time: '10:00 AM', title: 'Keynote Speech: Future of Policy Making' },
          { time: '2:00 PM', title: 'Panel Discussion: AI in Governance' },
        ],
      },
      {
        day: 'Day 2 - April 16',
        events: [
          { time: '9:30 AM', title: 'Workshop: Policy Implementation' },
          { time: '2:00 PM', title: 'Research Presentations' },
          { time: '4:00 PM', title: 'Networking Session' },
        ],
      },
    ],
    speakers: [
      {
        name: 'Dr. Sarah Chen',
        role: 'Director, SIPR',
        topic: 'AI Policy Framework',
      },
      {
        name: 'Prof. Michael Roberts',
        role: 'Deputy Director, SIPR',
        topic: 'Economic Policy',
      },
    ],
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-['Montserrat'] font-semibold mb-4">Event Not Found</h2>
          <Link to="/events" className="text-[#8c1616] hover:text-[#7a1313]">
            Return to Events
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
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Link
              to="/events"
              className="inline-flex items-center text-white hover:text-gray-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
            <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-4">
              {event.title}
            </h1>
            <span className="inline-block bg-[#8c1616] px-4 py-2 rounded-full text-sm font-['Montserrat']">
              {event.type}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-['Montserrat'] font-semibold mb-6">About the Event</h2>
              <div className="font-['Baskerville'] text-gray-700 whitespace-pre-line mb-8">
                {event.fullDescription}
              </div>

              <h2 className="text-2xl font-['Montserrat'] font-semibold mb-6">Schedule</h2>
              <div className="space-y-8">
                {event.schedule.map((day, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-['Montserrat'] font-semibold mb-4">{day.day}</h3>
                    <div className="space-y-4">
                      {day.events.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="font-['Montserrat'] text-[#8c1616] w-24 flex-shrink-0">
                            {item.time}
                          </span>
                          <span className="font-['Baskerville']">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-['Montserrat'] font-semibold mt-8 mb-6">Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="bg-[#F0EFF4] p-6 rounded-lg">
                    <h3 className="font-['Montserrat'] font-semibold mb-2">{speaker.name}</h3>
                    <p className="font-['Baskerville'] text-gray-600">{speaker.role}</p>
                    <p className="font-['Baskerville'] text-[#8c1616] mt-2">
                      Speaking on: {speaker.topic}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#F0EFF4] p-6 rounded-lg sticky top-8">
              <h2 className="text-xl font-['Montserrat'] font-semibold mb-6">Event Details</h2>
              <div className="space-y-4">
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

              <button className="w-full mt-8 px-6 py-3 bg-[#8c1616] text-white rounded-md hover:bg-[#7a1313] transition-colors font-['Montserrat']">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;