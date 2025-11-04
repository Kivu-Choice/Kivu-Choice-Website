import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Leaf, TrendingUp, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import teamImage from "@/assets/team-photo.jpg";
import lakeKivuCages from "@/assets/lake-kivu-cages.jpg";
import pondOperations1 from "@/assets/pond-operations-1.png";
import pondOperations2 from "@/assets/pond-operations-2.jpg";
import rasFacility from "@/assets/ras-facility.jpg";
import rasOperations from "@/assets/ras-operations.jpg";
import hatcheryTeam from "@/assets/hatchery-team.jpg";
import branchStaff1 from "@/assets/branch-staff-1.jpg";
import branchInterior from "@/assets/branch-interior.jpg";
import branchStaff2 from "@/assets/branch-staff-2.jpg";
import pondFacilityOffice from "@/assets/pond-facility-office.jpg";

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const milestones = [
    {
      year: "Sep 2021",
      title: "Company founded",
      description: "Kivu Choice established"
    },
    {
      year: "Dec 2021",
      title: "Hatchery Launched",
      description: "Kigembe hatchery operations launched"
    },
    {
      year: "Jun 2022",
      title: "Lake Operations",
      description: "First cage stocked on lake Kivu"
    },
    {
      year: "Nov 2022",
      title: "First Branch",
      description: "First branch opened in Rwanda"
    },
    {
      year: "Apr 2023",
      title: "$35M Series B",
      description: "Raised largest round in African aquaculture industry"
    },
    {
      year: "Jul 2023",
      title: "100 Jobs",
      description: "Surpassed 100 full-time jobs"
    },
    {
      year: "Feb 2024",
      title: "10th Branch",
      description: "Launched the 10th branch in Rwanda, Kigali"
    },
    {
      year: "Mar 2024",
      title: "1000 MT Production",
      description: "Reached 1000 metric tons of annualized production"
    },
    {
      year: "Mar 2024",
      title: "200 Jobs",
      description: "Surpassed 200 full-time jobs"
    },
    {
      year: "May 2024",
      title: "2000 MT Production",
      description: "Reached 2000 metric tons of annualized production"
    },
    {
      year: "Jul 2024",
      title: "3000 MT & 300 Jobs",
      description: "3000 MT annualized production & 300+ jobs"
    },
    {
      year: "Jul 2024",
      title: "Profitability",
      description: "Achieved profitability"
    },
    {
      year: "Apr 2025",
      title: "5000 MT & 500 Jobs",
      description: "5000 MT annualized production & 500+ jobs"
    }
  ];

  return (
    <div className="min-h-screen bg-background" data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="mr-2 h-4 w-4" />
              Our Mission
            </div>
            <h1 className="text-4xl font-bold mb-6" style={{color: 'transparent'}}>
              <span className="text-primary" style={{color: 'var(--primary)'}}>Leading</span> <span className="text-accent" style={{color: 'var(--accent)'}}>Rwanda's</span> <span className="text-primary" style={{color: 'var(--primary)'}}>Aquaculture Revolution</span><br />
              <span className="text-accent" style={{color: 'var(--accent)'}}>Through</span> <span className="text-primary" style={{color: 'var(--primary)'}}>Sustainable Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We are committed to producing Rwanda's most affordable protein, delivering premium tilapia 
              while creating jobs and supporting Rwanda's economic growth through sustainable aquaculture.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
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

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-primary">Democratizing Access</span> <span className="text-accent">to</span> <span className="text-primary">Animal Protein</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-4xl mx-auto">
              Our mission is to democratize access to animal protein by radically increasing affordability and 
              supply across the region. We do this through continuous innovation and careful execution 
              across every step of the value chain.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              From our state-of-the-art hatchery with capacity to produce over 5 million fingerlings monthly to our cage-based 
              farming operations on Lake Kivu, we maintain industry-leading performance metrics through 
              data-driven farming practices.
            </p>
          </div>

          {/* Growth Timeline Carousel */}
          <div className="bg-gradient-to-br from-primary/5 via-muted to-accent/5 rounded-2xl p-8 mb-16 relative">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Our Growth Journey</h3>
            
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-2"
                    >
                      <Card className="h-full bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                        <div className="p-6 text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm shadow-md">
                            {milestone.year}
                          </div>
                          <h4 className="font-bold text-primary mb-2 text-lg">{milestone.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous slide"
                data-testid="button-prev-milestone"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next slide"
                data-testid="button-next-milestone"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Operations Showcase */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Lake Kivu Operations */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={lakeKivuCages} 
                  alt="Lake Kivu cage farming operations with mountain backdrop" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                  data-testid="img-lake-kivu-cages"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg font-semibold text-sm">
                  Lake Kivu Cage Farming
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={teamImage} 
                  alt="Kivu Choice team working at Lake Kivu aquaculture operations" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                  data-testid="img-team-lake-kivu"
                />
                <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-lg font-semibold text-sm">
                  <TrendingUp className="mr-1 h-3 w-3 inline" />
                  Expert Team Operations
                </div>
              </div>
            </div>

            {/* Pond & RAS Operations */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={pondOperations1} 
                  alt="Extensive pond aquaculture facility with organized pond systems" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                  data-testid="img-pond-operations"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-lg font-semibold text-sm">
                  Pond-Based Farming
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={rasFacility} 
                  alt="Advanced RAS (Recirculating Aquaculture System) indoor facility" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                  data-testid="img-ras-facility"
                />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg font-semibold text-sm">
                  Advanced RAS Technology
                </div>
              </div>
            </div>
          </div>

          {/* Technology & Scale Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <img 
                src={pondOperations2} 
                alt="Secondary pond operations showing scale of facility" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                data-testid="img-pond-scale"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-bold">Scalable Infrastructure</h4>
                  <p className="text-sm opacity-90">Multiple production systems</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={rasOperations} 
                alt="RAS operations showing team member working with advanced systems" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                data-testid="img-ras-operations"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-bold">Innovation Focus</h4>
                  <p className="text-sm opacity-90">Data-driven farming practices</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={hatcheryTeam} 
                alt="Hatchery team managing fingerlings production operations" 
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                data-testid="img-hatchery-team"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-bold">Expert Team</h4>
                  <p className="text-sm opacity-90">60M+ fingerlings annually</p>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Network & Value Chain */}
          <div className="bg-muted rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">From Farm to Market</h3>
            
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <div className="relative">
                <img 
                  src={pondFacilityOffice} 
                  alt="Kivu Choice pond facility with office infrastructure" 
                  className="rounded-xl shadow-lg w-full h-40 object-cover"
                  data-testid="img-facility-office"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-end">
                  <div className="p-3 text-white">
                    <h4 className="font-bold text-sm">Production Hub</h4>
                    <p className="text-xs opacity-90">Integrated facilities</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={branchStaff1} 
                  alt="Professional Kivu Choice branch staff member in branded uniform" 
                  className="rounded-xl shadow-lg w-full h-40 object-cover"
                  data-testid="img-branch-staff-professional"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-end">
                  <div className="p-3 text-white">
                    <h4 className="font-bold text-sm">Professional Team</h4>
                    <p className="text-xs opacity-90">Quality service</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={branchInterior} 
                  alt="Kivu Choice branch interior showcasing Fresh Rwandan Tilapia branding" 
                  className="rounded-xl shadow-lg w-full h-40 object-cover"
                  data-testid="img-branch-interior"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-end">
                  <div className="p-3 text-white">
                    <h4 className="font-bold text-sm">Retail Branches</h4>
                    <p className="text-xs opacity-90">Fresh Rwandan Tilapia</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={branchStaff2} 
                  alt="Rwesero branch staff team showcasing local employment and community impact" 
                  className="rounded-xl shadow-lg w-full h-40 object-cover"
                  data-testid="img-branch-staff-community"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl flex items-end">
                  <div className="p-3 text-white">
                    <h4 className="font-bold text-sm">Community Impact</h4>
                    <p className="text-xs opacity-90">Local employment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our integrated value chain spans from our advanced production facilities on Lake Kivu to our 
                professional retail branches across Rwanda, creating jobs and delivering fresh, affordable protein to communities.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
