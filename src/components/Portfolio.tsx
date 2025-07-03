import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Black & Gray Realism",
    category: "Realism",
    description: "Intricate detailed portrait work showcasing depth and emotion."
  },
  {
    id: 2,
    image: portfolio2,
    title: "Traditional American",
    category: "Traditional",
    description: "Bold lines and vibrant colors in classic American tattoo style."
  },
  {
    id: 3,
    image: portfolio3,
    title: "Geometric Blackwork",
    category: "Modern",
    description: "Clean geometric patterns with precise line work and dotwork."
  },
  {
    id: 4,
    image: portfolio4,
    title: "Neo-Traditional",
    category: "Neo-Traditional",
    description: "Modern twist on traditional elements with rich colors."
  }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom tattoo artwork, from traditional designs 
            to modern masterpieces. Each piece tells a unique story.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative">
                  <div className="aspect-square md:aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-tattoo-red rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 mb-4">{item.description}</p>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <ZoomIn className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-tattoo-red' : 'bg-muted'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            See Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;