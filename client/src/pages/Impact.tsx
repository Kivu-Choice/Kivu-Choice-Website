import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import fishPowder12g from "@/assets/fish-powder-12g.jpg";
import fishPowder250g from "@/assets/fish-powder-250g.jpg";

export default function Impact() {
  const nutritionFacts = [
    {
      metric: "57%",
      description: "of infant's daily nutrient requirement provided by just $0.10 worth of fish powder",
      comparison: "vs 56% from a whole egg"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Prevents Stunting",
      description: "High-quality protein and essential nutrients support healthy growth in children under 5"
    },
    {
      icon: Zap,
      title: "Nutrient Dense",
      description: "Contains complete amino acids, omega-3 fatty acids, calcium, and vitamin D"
    },
    {
      icon: Users,
      title: "Easy to Consume",
      description: "Powder form makes it easier for weaning infants to digest and consume"
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description: "Provides more nutrition per dollar than traditional protein sources like eggs and meat"
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="impact-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Heart className="mr-2 h-4 w-4" />
              Social Impact
            </div>
            <h1 className="text-4xl font-bold mb-6">
              <span className="text-primary">Fighting</span> <span className="text-accent">Malnutrition</span> <span className="text-primary">Through</span>
              <br />
              <span className="text-accent">Fish Powder</span> <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Kivu Choice is transforming our premium tilapia into nutrient-dense fish powder to combat 
              childhood stunting and malnutrition across Rwanda. Our innovative approach provides 
              more nutrition per dollar than any other protein source.
            </p>
          </div>

          <div className="flex justify-center">
            {nutritionFacts.map((fact, index) => (
              <Card key={index} className="text-center p-8 bg-background/80 backdrop-blur-sm max-w-md">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-4">{fact.metric}</div>
                  <p className="text-foreground font-medium mb-2">{fact.description}</p>
                  <p className="text-sm text-muted-foreground">{fact.comparison}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="text-accent">Addressing</span> <span className="text-primary">Rwanda's</span> <span className="text-accent">Nutrition Challenge</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-accent mb-3">The Challenge</h3>
                  <p className="text-muted-foreground">
                    Childhood stunting affects 33% of children under 5 in Rwanda. Traditional protein sources 
                    are either too expensive or provide insufficient nutrients for optimal child development.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-primary mb-3">Our Solution</h3>
                  <p className="text-muted-foreground">
                    Fish powder from our premium tilapia provides the highest nutrition value per dollar of any animal-sourced food.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-accent mb-6">Why Fish Powder Wins</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">Higher protein content than eggs, meat, or dairy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">Rich in omega-3 fatty acids for brain development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">Contains calcium and vitamin D for bone growth</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">Easier to digest for weaning infants</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">Longer shelf life than fresh alternatives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-primary">Rwanda's First Superfood</span> <span className="text-accent">- Now Available</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our premium fish powder products are designed for different needs - from daily child nutrition 
              to restaurant-grade cooking applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 text-center flex-1 flex flex-col">
                <div className="mb-6">
                  <img 
                    src={fishPowder12g} 
                    alt="12g Fish Powder daily serving packages for children" 
                    className="mx-auto max-w-sm rounded-lg shadow-lg h-48 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Daily Child Nutrition</h3>
                <div className="text-left space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>12g daily serving size for children</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>13 essential vitamins & minerals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>6g complete protein per serving</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Protects against stunting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>100% Lake Kivu tilapia</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Mix with any food</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/products">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="p-6 text-center flex-1 flex flex-col">
                <div className="mb-6">
                  <img 
                    src={fishPowder250g} 
                    alt="250g Restaurant Grade Fish Powder for whole family" 
                    className="mx-auto max-w-sm rounded-lg shadow-lg h-48 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">Restaurant Grade - Family Size</h3>
                <div className="text-left space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>250g restaurant-grade powder</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Suitable for whole family nutrition</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Premium quality for cooking applications</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Limited Edition 2025</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Made in Rwanda</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>Nutritious & healthy growth</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Link href="/products">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-accent">Transforming Lives Through</span> <span className="text-primary">Nutrition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our fish powder program addresses multiple challenges facing Rwandan families seeking 
              optimal nutrition for their children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-primary">Most</span> <span className="text-accent">Cost-Effective</span> <span className="text-primary">Nutrition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fish powder provides the best nutrition per dollar, making healthy development 
              accessible to more Rwandan families.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6">Nutrition Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                    <span className="font-medium">Fish Powder (12g)</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">57% daily nutrients</div>
                      <div className="text-sm text-muted-foreground">$0.10 cost</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                    <span className="font-medium">Whole Egg</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-muted-foreground">56% daily nutrients</div>
                      <div className="text-sm text-muted-foreground">$0.10 cost</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                    <span className="font-medium">Goat Meat</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-muted-foreground">Lower nutrients</div>
                      <div className="text-sm text-muted-foreground">$5.54/kg</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground p-8 rounded-xl">
                  <div className="text-3xl font-bold mb-2">Better Nutrition</div>
                  <div className="text-xl mb-4">Same Cost</div>
                  <p className="text-primary-foreground/90">
                    Fish powder delivers more complete nutrition than eggs while being 
                    significantly more affordable than other protein sources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our Mission to End Childhood Stunting
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with Kivu Choice to bring nutrient-dense fish powder to communities across Rwanda. 
            Together, we can ensure every child has access to the nutrition they need to thrive.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-partner-with-us"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}