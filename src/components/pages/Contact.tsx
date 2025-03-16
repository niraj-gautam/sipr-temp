import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      reset();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F0EFF4] py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold mb-6">
            Contact Us
          </h1>
          <p className="text-xl font-['Baskerville'] max-w-3xl">
            Get in touch with our team for research collaborations, media inquiries, or general questions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-['Montserrat'] font-semibold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#8c1616] mt-1" />
                <div>
                  <h3 className="font-['Montserrat'] font-semibold mb-1">Visit Us</h3>
                  <p className="font-['Baskerville'] text-gray-600">
                    123 Research Avenue<br />
                    Innovation District<br />
                    City, Country 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#8c1616] mt-1" />
                <div>
                  <h3 className="font-['Montserrat'] font-semibold mb-1">Call Us</h3>
                  <p className="font-['Baskerville'] text-gray-600">
                    Main: +1 234 567 8900<br />
                    Media: +1 234 567 8901
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#8c1616] mt-1" />
                <div>
                  <h3 className="font-['Montserrat'] font-semibold mb-1">Email Us</h3>
                  <p className="font-['Baskerville'] text-gray-600">
                    General: contact@sipr.org<br />
                    Media: media@sipr.org<br />
                    Research: research@sipr.org
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-['Montserrat'] font-semibold mb-4">Office Hours</h2>
              <p className="font-['Baskerville'] text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F0EFF4] p-8 rounded-lg">
            <h2 className="text-2xl font-['Montserrat'] font-semibold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-['Montserrat'] text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-['Montserrat'] text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block font-['Montserrat'] text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent"
                  placeholder="Message subject"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-['Montserrat'] text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c1616] focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-[#8c1616] text-white rounded-md hover:bg-[#7a1313] transition-colors font-['Montserrat'] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;