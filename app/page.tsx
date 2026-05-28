import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tarifs from "./components/Tarifs";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Tarifs />
        <Realisations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
