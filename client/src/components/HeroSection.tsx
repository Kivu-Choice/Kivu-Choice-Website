import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import providenceImage from "@/assets/providence-holding-fish.jpg";

export default function HeroSection() {
  return (
    <section className="bg-background py-8 lg:py-12" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-foreground">
            <div className="text-caption inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <TrendingUp className="mr-2 h-4 w-4" />
              Africa's Fastest Growing Fish Farm
            </div>
            
            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-wide mb-6 uppercase" data-testid="hero-title">
              <span className="block text-primary">FRESH</span>
              <span className="block text-accent">RWANDAN</span>
              <span className="block text-primary">TILAPIA</span>
            </h1>
            
            <p className="text-body text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg" data-testid="hero-description">
              Rwanda's largest protein producer delivering premium tilapia from Lake Kivu. 
              Vertically integrated operations from hatchery to your table.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/products" data-testid="button-view-products">
                <Button 
                  size="lg"
                  className="btn-primary px-8 py-4 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  View Our Products
                </Button>
              </Link>
              <Link href="/about" data-testid="button-our-story">
                <Button 
                  size="lg"
                  variant="outline"
                  className="btn-secondary border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-background px-8 py-4 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-foreground focus-visible:ring-offset-2"
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="block">
            <div className="relative">
              <img 
                src={providenceImage} 
                alt="Kivu Choice worker showing fresh tilapia harvest at Lake Kivu" 
                className="rounded-2xl shadow-lg w-full"
                data-testid="hero-image"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
