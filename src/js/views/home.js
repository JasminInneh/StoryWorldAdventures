import React from 'react';
import { Navbar } from '../component/navbar';
import { Hero } from '../component/hero';
import { FeaturedStories } from '../component/featuredStories';
import { BenefitsOfReading } from '../component/benefitsOfReading';
import { Library } from '../component/library';
import { Contact } from '../component/contact';
import { Footer } from '../component/footer';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedStories />
      <Library />
      <BenefitsOfReading />
      <Contact />
      <Footer />
    </div>
  );
};

