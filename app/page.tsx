import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import SpeakersSection from './components/sections/SpeakersSection';
import ScheduleSection from './components/sections/ScheduleSection';
import SponsorsSection from './components/sections/SponsorsSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SponsorsSection />
        <SpeakersSection /> 
        {/* <ScheduleSection /> */}
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
