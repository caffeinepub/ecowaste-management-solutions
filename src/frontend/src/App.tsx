import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutUs from "./components/AboutUs";
import DidYouKnowBanner from "./components/DidYouKnowBanner";
import EcoQuotes from "./components/EcoQuotes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IndiaMap from "./components/IndiaMap";
import Products from "./components/Products";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";
import TrustStrip from "./components/TrustStrip";
import WasteRealityStats from "./components/WasteRealityStats";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <DidYouKnowBanner />
          <Services />
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
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
