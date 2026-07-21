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

      <main
        id="main-content"
        className="overflow-x-hidden bg-[#28362f]"
      >
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
    <div className="min-h-screen bg-[#28362f] text-white">
      <main id="main-content" className="overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#28362f] px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          404 Error
        </p>

        <h1 className="mt-4 font-serif text-5xl font-semibold">
          Page Not Found
        </h1>

        <p className="mt-4 text-white/65">
          The page you are looking for does not exist.
        </p>

        <a
          href={`${import.meta.env.BASE_URL}`}
          className="mt-8 inline-flex rounded-full bg-[#97ba8d] px-6 py-3 font-semibold text-[#28362f] transition hover:bg-[#b8dc90]"
        >
          Back to Home
        </a>
      </div>
    </main>
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;