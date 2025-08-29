import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ZoomIn, Filter, Grid3X3, List } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import existing portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

// Extended portfolio data
const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Black & Gray Realism Portrait",
    category: "Realism",
    description: "Intricate detailed portrait work showcasing depth and emotion with masterful shading techniques.",
    size: "Large",
    duration: "6 hours",
    artist: "Sarah"
  },
  {
    id: 2,
    image: portfolio2,
    title: "Traditional American Eagle",
    category: "Traditional",
    description: "Bold lines and vibrant colors in classic American tattoo style with traditional eagle motif.",
    size: "Medium", 
    duration: "4 hours",
    artist: "Mike"
  },
  {
    id: 3,
    image: portfolio3,
    title: "Geometric Mandala Design",
    category: "Modern",
    description: "Clean geometric patterns with precise line work and intricate dotwork details.",
    size: "Large",
    duration: "5 hours", 
    artist: "Alex"
  },
  {
    id: 4,
    image: portfolio4,
    title: "Neo-Traditional Rose",
    category: "Neo-Traditional",
    description: "Modern twist on traditional elements with rich colors and contemporary styling.",
    size: "Medium",
    duration: "3 hours",
    artist: "Sarah"
  },
  {
    id: 5,
    image: portfolio1,
    title: "Photorealistic Animal Portrait",
    category: "Realism", 
    description: "Stunning wildlife portrait with incredible attention to detail and lifelike textures.",
    size: "Large",
    duration: "8 hours",
    artist: "Mike"
  },
  {
    id: 6,
    image: portfolio2,
    title: "Old School Nautical",
    category: "Traditional",
    description: "Classic sailor jerry inspired design with bold nautical themes.",
    size: "Small",
    duration: "2 hours",
    artist: "Alex"
  },
  {
    id: 7,
    image: portfolio3,
    title: "Abstract Watercolor",
    category: "Modern",
    description: "Vibrant watercolor effects blended with abstract geometric elements.",
    size: "Medium",
    duration: "4 hours", 
    artist: "Sarah"
  },
  {
    id: 8,
    image: portfolio4,
    title: "Japanese Traditional Koi",
    category: "Traditional",
    description: "Authentic Japanese style koi fish with traditional wave patterns and cherry blossoms.",
    size: "Large",
    duration: "7 hours",
    artist: "Mike"
  }
];

const categories = ["All", "Realism", "Traditional", "Modern", "Neo-Traditional"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our extensive collection of custom tattoo artwork. From traditional designs 
              to modern masterpieces, each piece represents our commitment to excellence and artistry.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Completed Works</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Design Styles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Master Artists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Filters & Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid w-full grid-cols-5 md:w-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm" 
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Grid */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" size="sm" className="text-white">
                        <ZoomIn className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-tattoo-red">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>By {item.artist}</span>
                      <span>{item.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 aspect-square md:aspect-video relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-tattoo-red">
                        {item.category}
                      </Badge>
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">{item.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ZoomIn className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Artist:</span>
                          <div className="font-medium">{item.artist}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Duration:</span>
                          <div className="font-medium">{item.duration}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Size:</span>
                          <div className="font-medium">{item.size}</div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Masterpiece?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book a consultation with our talented artists to discuss your vision and bring your dream tattoo to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">Book Consultation</Button>
              <Button variant="outline" size="lg">View Pricing</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;