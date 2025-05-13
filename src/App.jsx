import { BrowserRouter as Router } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import ProcessSection from './components/sections/ProcessSection';
import PortfolioSection from './components/sections/PortfolioSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ProcessSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
