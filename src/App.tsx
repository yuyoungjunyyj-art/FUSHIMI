import React, { useState } from 'react';
import { Language } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SectionHouse } from './components/SectionHouse';
import { SectionGarden } from './components/SectionGarden';
import { SectionSecondFloor } from './components/SectionSecondFloor';
import { SectionTea } from './components/SectionTea';
import { SectionKitchen } from './components/SectionKitchen';
import { SectionExperience } from './components/SectionExperience';
import { SectionStories } from './components/SectionStories';
import { SectionArchive } from './components/SectionArchive';
import { SectionVisit } from './components/SectionVisit';
import { Footer } from './components/Footer';
import { MenuModal } from './components/MenuModal';
import { ReservationModal } from './components/ReservationModal';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    title: string;
    url: string;
    caption?: string;
    note?: string;
  } | null>(null);

  const handleExploreClick = () => {
    const el = document.getElementById('house');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1A17] selection:bg-[#3E4B39]/20 selection:text-[#1C1A17]">
      {/* Fixed architectural navigation */}
      <Navigation
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenReserve={() => setIsReserveOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main content flow following the digital house philosophy */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          currentLang={currentLang}
          onExploreClick={handleExploreClick}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* The House: 01 Main Gate (Cleaned) & 02 1st Floor Cafe */}
        <SectionHouse
          currentLang={currentLang}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* Connecting to the Courtyard: 03 THE Garden & 04 MOSS WALL */}
        <SectionGarden
          currentLang={currentLang}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* Upper Machiya: 05 Second Floor View (Cleaned Deck) & Upcoming Photo Slot */}
        <SectionSecondFloor
          currentLang={currentLang}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* Tea Philosophy & Signature Sparkling Gyokuro */}
        <SectionTea
          currentLang={currentLang}
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* From the Kitchen: Warm Financiers in Wooden Cone */}
        <SectionKitchen
          currentLang={currentLang}
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* Engaging with the House: Drink, Experience, Learn */}
        <SectionExperience
          currentLang={currentLang}
          onOpenReserve={() => setIsReserveOpen(true)}
        />

        {/* Stories from the House (Essays) */}
        <SectionStories currentLang={currentLang} />

        {/* The 14 Reference Photo Material Archive */}
        <SectionArchive
          currentLang={currentLang}
          onOpenImageModal={setActiveLightboxImage}
        />

        {/* Finding the House & Etiquette */}
        <SectionVisit
          currentLang={currentLang}
          onOpenReserve={() => setIsReserveOpen(true)}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      </main>

      {/* Subtle House Footer */}
      <Footer currentLang={currentLang} />

      {/* Interactive Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentLang={currentLang}
      />

      <ReservationModal
        isOpen={isReserveOpen}
        onClose={() => setIsReserveOpen(false)}
        currentLang={currentLang}
      />

      <LightboxModal
        image={activeLightboxImage}
        onClose={() => setActiveLightboxImage(null)}
        currentLang={currentLang}
      />
    </div>
  );
}
