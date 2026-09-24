import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
