import React from 'react';
import Hero from '../home/Hero';
import ResearchAreas from '../home/ResearchAreas';
import FeaturedPublication from '../home/FeaturedPublication';
import Events from '../home/Events';
import LatestNews from '../home/LatestNews';

const Home = () => {
  return (
    <>
      <Hero />
      <ResearchAreas />
      <FeaturedPublication />
      <Events />
      <LatestNews />
    </>
  );
};

export default Home;