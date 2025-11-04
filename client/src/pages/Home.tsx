import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Leaf, TrendingUp, Sprout, Building, Truck } from "lucide-react";
import { Link } from "wouter";
import feedingImage from "@/assets/feeding-operations.jpg";
import harvestImage from "@/assets/harvest-operations.jpg";

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <StatsSection />
      
      {/* About Section */}
      <section className="bg-muted/50 py-8" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="mr-2 h-4 w-4" />
              Our Mission
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: 'transparent'}}>
              <span className="text-primary" style={{color: 'var(--primary)'}}>Leading</span> <span className="text-accent" style={{color: 'var(--accent)'}}>Rwanda's</span> <span className="text-primary" style={{color: 'var(--primary)'}}>Aquaculture Revolution</span><br />
              <span className="text-accent" style={{color: 'var(--accent)'}}>Through</span> <span className="text-primary" style={{color: 'var(--primary)'}}>Sustainable Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are committed to producing Rwanda's most affordable protein, delivering premium tilapia 
              while creating jobs and supporting Rwanda's economic growth through sustainable aquaculture.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
            <Card className="p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Quality Excellence</h3>
              <p className="text-muted-foreground">
                Every fish we produce meets the highest standards of quality, freshness, and taste.
              </p>
            </Card>
            
            <Card className="p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-2xl text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">Sustainable Operations</h3>
              <p className="text-muted-foreground">
                Environmentally responsible farming that protects Lake Kivu and supports local communities.
              </p>
            </Card>
            
            <Card className="p-8 shadow-sm border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Market Leadership</h3>
              <p className="text-muted-foreground">
                Building Rwanda's largest protein production operation and expanding across East Africa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-background py-8" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6"><span className="text-primary">What</span> <span className="text-accent">We Do</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive aquaculture operations from fingerlings production to nationwide distribution
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">The Hatchery</h3>
              <p className="text-muted-foreground">
                One of Africa's largest hatcheries with 5+ million fingerlings production capacity monthly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-3xl text-accent" />
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">Production Farm</h3>
              <p className="text-muted-foreground">
                Cage-based farming operations on Lake Kivu with sustainable and responsible practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Sales & Logistics</h3>
              <p className="text-muted-foreground">
                Daily harvest and nationwide distribution through our trusted outlets across Rwanda.
              </p>
            </div>
          </div>

          {/* Operations Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <img 
                src={feedingImage} 
                alt="Fish feeding operations at Lake Kivu" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-foreground">Daily Feeding Operations</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={harvestImage} 
                alt="Fresh tilapia harvest from Lake Kivu cages" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold text-foreground">Fresh Harvest Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-8" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with Rwanda's Leading Fish Farm
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Whether you're a restaurant seeking premium tilapia, a distributor looking for reliable supply, 
            or an investor interested in sustainable aquaculture, join us in building Rwanda's protein future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" data-testid="button-cta-products">
              <Button 
                size="lg"
                className="bg-white text-accent hover:bg-white/90 transition-all transform hover:scale-105"
              >
                View Our Products
              </Button>
            </Link>
            <Link href="/contact" data-testid="button-cta-contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-accent transition-all font-semibold"
              >
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
