import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#28362f]">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

function LegalPageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/privacy-policy"
        element={
          <LegalPageLayout>
            <PrivacyPolicy />
          </LegalPageLayout>
        }
      />

      <Route
        path="/terms"
        element={
          <LegalPageLayout>
            <TermsConditions />
          </LegalPageLayout>
        }
      />
    </Routes>
  );
}

export default App;