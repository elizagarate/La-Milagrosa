
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Services from './components/Services';
import Formation from './components/Formation';
import PrayerLife from './components/PrayerLife';
import Community from './components/Community';
import Resources from './components/Resources';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SacramentsPage from './pages/SacramentsPage';
import EmmausPage from './pages/EmmausPage';
import SacramentalPreparationPage from './pages/SacramentalPreparationPage';
import FormationPage from './pages/FormationPage';
import ParishServicesPage from './pages/ParishServicesPage';
import CursillosPage from './pages/CursillosPage';
import EucharistPage from './pages/EucharistPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <History />
                <Services />
                <Formation />
                <PrayerLife />
                <Community />
                <Resources />
              </>
            } />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/sacramentos" element={<SacramentsPage />} />
            <Route path="/eucaristia" element={<EucharistPage />} />
            <Route path="/emaus" element={<EmmausPage />} />
            <Route path="/preparacion-sacramental" element={<SacramentalPreparationPage />} />
            <Route path="/formacion" element={<FormationPage />} />
            <Route path="/servicios-parroquiales" element={<ParishServicesPage />} />
            <Route path="/cursillos" element={<CursillosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
