import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeaturedWork } from "./components/FeaturedWork";
import { Portfolio } from "./components/Portfolio";
import { ParallaxSection } from "./components/ParallaxSection";
import { About } from "./components/About";
// import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toastify";

export default function App() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onContactClick={scrollToContact} />
      <FeaturedWork />
      <Portfolio />
      <ParallaxSection />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}