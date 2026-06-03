import DisclaimerModal from "../components/DisclaimerModal";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TrustSection from "../components/TrustSection";
import PracticeAreas from "../components/PracticeAreas";
import WhyChooseUs from "../components/WhyChooseUs";
import ConsultationForm from "../components/ConsultationForm";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsappButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <DisclaimerModal />

      <Navbar />
      <Hero />
      <AboutSection />
      <TrustSection />
      <PracticeAreas />
      <WhyChooseUs />
      <ConsultationForm />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <WhatsappButton />
    </>
  );
}

export default Home;
