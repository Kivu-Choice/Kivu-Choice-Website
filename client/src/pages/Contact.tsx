import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BranchMap from "@/components/BranchMap";

export default function Contact() {

  return (
    <div className="min-h-screen bg-background" data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6" data-testid="contact-title">
              <span className="text-accent">Contact</span> <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
              Get in touch with Rwanda's leading aquaculture company. We're here to help with your tilapia needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8"><span className="text-primary">Get in</span> <span className="text-accent">Touch</span></h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      8 KN 16 Avenue, Kiyovu<br />
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-1">Phone</h3>
                    <p className="text-muted-foreground">General: +250739402617</p>
                    <p className="text-muted-foreground">Sales & Customer Service: +250795592280</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">info@kivuchoice.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="text-accent h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Branch Locations */}
                <div className="flex items-start space-x-4" data-testid="branch-locations">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary mb-3">Our Branch Locations</h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium text-primary mb-2">Kivu Belt Region</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Rusizi 1</li>
                          <li>• Kamembe Town</li>
                          <li>• Rwesero</li>
                          <li>• Tyazo</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-accent mb-2">Kigali Region</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Kimironko</li>
                          <li>• Remera-Giporoso</li>
                          <li>• Batsinda</li>
                          <li>• Kanombe</li>
                          <li>• Kabuga</li>
                          <li>• Ziniya</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2">Kigali Central</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Nyabugogo</li>
                          <li>• Nyamirambo</li>
                          <li>• Kiyovu</li>
                          <li>• Gikondo</li>
                          <li>• Gatenga</li>
                          <li>• Gisozi</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Branch Map */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-primary">Find Our</span> <span className="text-accent">Branches</span>
                </h3>
                <BranchMap />
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Click on any marker to view branch details including contact information and hours
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">Need Bulk Orders?</h3>
                <p className="text-white/90 mb-4">
                  Contact our sales team directly for wholesale pricing and custom processing options.
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-primary hover:bg-white/90"
                  data-testid="button-sales-team"
                >
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
