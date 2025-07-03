import { Button } from "@/components/ui/button";
import { Instagram, Award, Users, Calendar } from "lucide-react";
import flashArt from "@/assets/tattoo-flash-1.jpg";

const ArtistShowcase = () => {
  return (
    <section id="artist" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Artist Info */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Your
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}Artist
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                With over a decade of experience, our lead artist combines traditional 
                tattoo techniques with modern artistry to create unique, meaningful pieces.
              </p>
            </div>

            {/* Artist Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-tattoo-red/20 rounded-lg">
                  <Award className="w-6 h-6 text-tattoo-red" />
                </div>
                <div>
                  <div className="font-bold text-lg">10+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-tattoo-gold/20 rounded-lg">
                  <Users className="w-6 h-6 text-tattoo-gold" />
                </div>
                <div>
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h3 className="font-bold text-xl mb-4">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Traditional American",
                  "Black & Gray Realism",
                  "Neo-Traditional",
                  "Geometric",
                  "Blackwork",
                  "Cover-ups"
                ].map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-card border border-tattoo-red/20 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                <Instagram className="w-5 h-5 mr-2" />
                Follow on Instagram
              </Button>
            </div>
          </div>

          {/* Flash Art Display */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src={flashArt}
                  alt="Traditional Tattoo Flash Art"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-glow border border-tattoo-red/20">
                <div className="text-2xl font-bold text-tattoo-gold">Alex Rivera</div>
                <div className="text-muted-foreground">Lead Tattoo Artist</div>
                <div className="text-sm text-muted-foreground mt-1">Licensed & Certified</div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="mt-8 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-bold mb-3 text-lg">Design Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed">
                "Every tattoo should tell a story. I work closely with each client to understand 
                their vision and create something truly personal that they'll love for life."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistShowcase;