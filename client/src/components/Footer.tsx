import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import kivuChoiceLogo from "@assets/KC_Fish-and-text_Horizontal_Color-2048x823_1757065679913.png";

export default function Footer() {
  return (
    <footer className="text-white py-16" style={{backgroundColor: 'hsl(120 70% 20%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div data-testid="company-info">
            <div className="flex items-center mb-4">
              <img 
                src={kivuChoiceLogo} 
                alt="Kivu Choice" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/70 mb-4 text-sm">
              Rwanda's largest protein producer and fastest growing fish farm. 
              Vertically integrated aquaculture operations from hatchery to nationwide distribution of premium fresh tilapia.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="text-primary mr-2 h-4 w-4" />
                <span className="text-white/70">8 KN 16 Avenue, Kiyovu, Kigali, Rwanda</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary mr-2 h-4 w-4" />
                <div className="text-white/70 text-sm">
                  <div>General: +250739402617</div>
                  <div>Sales & Service: +250795592280</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-2 h-4 w-4" />
                <span className="text-white/70">info@kivuchoice.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div data-testid="company-links">
            <h4 className="font-bold text-lg mb-4 text-primary">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-white/70 link-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded">About Us</a></li>
              <li><a href="/team" className="text-white/70 link-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded">Team</a></li>
              <li><a href="/impact" className="text-white/70 link-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded">Impact</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div data-testid="products-links">
            <h4 className="font-bold text-lg mb-4 text-accent">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="text-white/70 link-hover hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded">Our Products</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div data-testid="support-links">
            <h4 className="font-bold text-lg mb-4 text-primary">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-white/70 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
            
            <div className="mt-6" data-testid="social-media">
              <h5 className="font-semibold text-accent mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://x.com/Kivuchoice" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/kivu-choice" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/kivuchoice/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-white/70 mb-4 md:mb-0">
            © 2025 Kivu Choice. All rights reserved.
          </p>
          <div className="flex space-x-6 text-white/70">
            <a href="/contact" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/contact" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="/contact" className="hover:text-primary transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
