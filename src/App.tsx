import React from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Home/Hero';
import { Services } from './components/Home/Services';
import { Gallery } from './components/Gallery/Gallery';
import { LocationMap } from './components/Map/LocationMap';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Gallery />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;