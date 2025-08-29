import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-tattoo-black text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-brand font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Tattoo Therapy
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Where traditional artistry meets modern innovation. We create timeless tattoos 
              that tell your unique story with precision, passion, and professionalism.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-tattoo-gray hover:bg-tattoo-red transition-colors rounded-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-tattoo-gray hover:bg-tattoo-red transition-colors rounded-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-tattoo-gray hover:bg-tattoo-red transition-colors rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-tattoo-gold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tattoo-red mt-0.5" />
                <div>
                  <div className="font-medium">Studio Location</div>
                  <div className="text-muted-foreground text-sm">
                    123 Ink Street<br />
                    Downtown District<br />
                    City, State 12345
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-tattoo-red" />
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-muted-foreground text-sm">(555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tattoo-red" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground text-sm">info@tattootherapy.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-tattoo-gold">Studio Hours</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-tattoo-red mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium">Monday - Friday</div>
                  <div className="text-muted-foreground">12:00 PM - 9:00 PM</div>
                  
                  <div className="font-medium mt-2">Saturday</div>
                  <div className="text-muted-foreground">11:00 AM - 10:00 PM</div>
                  
                  <div className="font-medium mt-2">Sunday</div>
                  <div className="text-muted-foreground">12:00 PM - 8:00 PM</div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium mb-2">Services</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom Tattoo Design</li>
                <li>• Cover-up Specialists</li>
                <li>• Touch-up Services</li>
                <li>• Consultation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-tattoo-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Tattoo Therapy. All rights reserved. Licensed & Insured.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-tattoo-red transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-tattoo-red transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-tattoo-red transition-colors">
                Aftercare Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;