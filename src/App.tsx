import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Research from './components/pages/Research';
import Publications from './components/pages/Publications';
import Events from './components/pages/Events';
import EventDetails from './components/pages/EventDetails';
import News from './components/pages/News';
import NewsArticle from './components/pages/NewsArticle';
import Partnerships from './components/pages/Partnerships';
import Contact from './components/pages/Contact';
import Search from './components/pages/Search';
import ScrollToTop from './components/utils/ScrollToTop';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;