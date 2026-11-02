'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUpmi from '@/components/AboutUpmi';
import TournamentsHub from '@/components/TournamentsHub';
import InteractiveCommunityHub from '@/components/InteractiveCommunityHub';
import FlyerMaker from '@/components/FlyerMaker';
import TalentDirectory from '@/components/TalentDirectory';
import SquadFinder from '@/components/SquadFinder';
import ProStore from '@/components/ProStore';
import DownloadSection from '@/components/DownloadSection';
import FloatingQuickAction from '@/components/FloatingQuickAction';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedTourneyId, setSelectedTourneyId] = useState(null);

  const handleOpenRegister = (tourneyId) => {
    setSelectedTourneyId(tourneyId);
    setRegisterModalOpen(true);
    // Smooth scroll to tournaments hub where the modal is triggered
    const elem = document.getElementById('tournaments');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Background Gradients & Ambient Effects */}
      <div className="bg-grid-cyber"></div>
      <div className="ambient-flare-red"></div>
      <div className="ambient-flare-cyan"></div>

      {/* Navigation */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Main Content Sections */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Hero onOpenRegister={handleOpenRegister} />
        <AboutUpmi />
        <TournamentsHub 
          selectedTourneyId={selectedTourneyId}
          isRegisterOpen={registerModalOpen}
          onCloseRegister={() => setRegisterModalOpen(false)}
        />
        <InteractiveCommunityHub />
        <FlyerMaker />
        <TalentDirectory />
        <SquadFinder />
        <ProStore />
        <DownloadSection />
      </main>

      {/* Floating Action Pill & Scroll to Top */}
      <FloatingQuickAction onOpenRegister={handleOpenRegister} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
