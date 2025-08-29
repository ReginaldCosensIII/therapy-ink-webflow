import { Star, Quote, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely incredible experience! The artist took my vision and made it even better than I imagined. The attention to detail and professionalism was outstanding.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b2fd?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    rating: 5,
    text: "Been to many tattoo shops, but Tattoo Therapy stands out. Clean environment, skilled artists, and they really listen to what you want. My sleeve came out perfect!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emma Chen",
    rating: 5,
    text: "First tattoo experience and they made me feel completely comfortable. The healing process was smooth thanks to their aftercare guidance. Highly recommended!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Client Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their tattoo therapy experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 border border-border"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-tattoo-gold" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-tattoo-gold text-tattoo-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-tattoo-gold"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-tattoo-gold mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-tattoo-gold mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-tattoo-gold mb-2">1000+</div>
            <div className="text-muted-foreground">Tattoos Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-tattoo-gold mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* CTA to Social Media */}
        <div className="text-center mt-16">
          <div className="bg-gradient-dark rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              See More Client Love on Social Media
            </h3>
            <p className="text-gray-300 mb-6">
              Follow our journey and discover thousands of client stories, reviews, and real tattoo experiences shared across our social platforms.
            </p>
            <a href="/social-media">
              <Button variant="hero" size="lg" className="gap-2">
                <Instagram className="w-5 h-5" />
                View Social Media Hub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;