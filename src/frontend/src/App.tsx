import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import AddOns from "./components/AddOns";
import DidYouKnowBanner from "./components/DidYouKnowBanner";
import EcoQuotes from "./components/EcoQuotes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IndiaMap from "./components/IndiaMap";
import Packages from "./components/Packages";
import Products from "./components/Products";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";
import TrustStrip from "./components/TrustStrip";
import WasteRealityStats from "./components/WasteRealityStats";
import WhatsAppButton from "./components/WhatsAppButton";
import BrochuresIndex from "./pages/BrochuresIndex";
import VisitingCard from "./pages/VisitingCard";
import BrochureHospitals from "./pages/brochures/BrochureHospitals";
import BrochureOffices from "./pages/brochures/BrochureOffices";
import BrochureSchools from "./pages/brochures/BrochureSchools";
import BrochureSocieties from "./pages/brochures/BrochureSocieties";
import BrochureUniversities from "./pages/brochures/BrochureUniversities";

const queryClient = new QueryClient();

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    function onHashChange() {
      setHash(window.location.hash);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

function AppContent() {
  const hash = useHash();

  if (hash === "#brochures") return <BrochuresIndex />;
  if (hash === "#brochure/schools") return <BrochureSchools />;
  if (hash === "#brochure/universities") return <BrochureUniversities />;
  if (hash === "#brochure/hospitals") return <BrochureHospitals />;
  if (hash === "#brochure/societies") return <BrochureSocieties />;
  if (hash === "#brochure/offices") return <BrochureOffices />;
  if (hash === "#visiting-card") return <VisitingCard />;

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <DidYouKnowBanner />
          <Services />
          <Packages
            onRequestQuote={() => {
              const el = document.getElementById("quote");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <AddOns />
          <Products />
          <TrustStrip />
          <IndiaMap />
          <WasteRealityStats />
          <EcoQuotes />
          <QuoteForm />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
