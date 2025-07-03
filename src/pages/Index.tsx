import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ArtistShowcase from "@/components/ArtistShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Testimonials />
        <ArtistShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
