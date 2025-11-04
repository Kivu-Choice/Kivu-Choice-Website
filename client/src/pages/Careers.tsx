import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, Users, Award, Heart, TrendingUp, Briefcase, Send } from "lucide-react";

const openPositions = [
  {
    id: "1",
    title: "Aquaculture Operations Manager",
    department: "Operations",
    location: "Lake Kivu, Rusizi",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead our cage farming operations on Lake Kivu, ensuring optimal fish health, growth rates, and sustainable practices. Manage daily operations team and implement best practices.",
    requirements: [
      "Degree in Aquaculture, Marine Biology, or related field",
      "5+ years experience in fish farming operations",
      "Strong leadership and team management skills",
      "Knowledge of tilapia breeding and cultivation"
    ]
  },
  {
    id: "2",
    title: "Quality Control Specialist",
    department: "Quality Assurance",
    location: "Kigali Processing Center",
    type: "Full-time",
    experience: "3+ years",
    description: "Ensure all products meet our premium quality standards through comprehensive testing and quality control processes. Implement HACCP procedures and maintain certifications.",
    requirements: [
      "Degree in Food Science, Biology, or related field",
      "3+ years experience in food quality control",
      "HACCP certification preferred",
      "Strong attention to detail and analytical skills"
    ]
  },
  {
    id: "3",
    title: "Sales Representative - East Africa",
    department: "Sales & Marketing",
    location: "Kigali (Travel required)",
    type: "Full-time",
    experience: "2+ years",
    description: "Expand our market presence across East Africa by building relationships with distributors, retailers, and institutional customers. Drive sales growth and brand awareness.",
    requirements: [
      "Degree in Business, Marketing, or related field",
      "2+ years B2B sales experience",
      "Excellent communication skills in English and Kinyarwanda",
      "Willingness to travel within East Africa"
    ]
  },
  {
    id: "4",
    title: "Hatchery Technician",
    department: "Hatchery Operations",
    location: "Hatchery Facility, Rusizi",
    type: "Full-time",
    experience: "1+ years",
    description: "Support fingerlings production operations including breeding, incubation, and early fish care. Monitor water quality and maintain optimal growing conditions.",
    requirements: [
      "Diploma in Aquaculture, Biology, or related field",
      "1+ years experience in fish hatchery operations",
      "Knowledge of fish breeding techniques",
      "Physical ability to work in outdoor aquatic environment"
    ]
  },
  {
    id: "5",
    title: "Supply Chain Coordinator",
    department: "Logistics",
    location: "Kigali",
    type: "Full-time",
    experience: "2+ years",
    description: "Coordinate feed procurement, equipment sourcing, and product distribution across Rwanda. Optimize supply chain efficiency and cost management.",
    requirements: [
      "Degree in Supply Chain Management, Logistics, or related field",
      "2+ years supply chain experience",
      "Strong organizational and communication skills",
      "Experience with inventory management systems"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical insurance for you and your family, including dental and vision coverage.",
    color: "text-red-600"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Professional development opportunities, training programs, and clear advancement paths.",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Performance Rewards",
    description: "Competitive salary with performance bonuses and annual reviews for merit increases.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Team Environment",
    description: "Collaborative, inclusive workplace culture that values innovation and sustainability.",
    color: "text-blue-600"
  }
];

const cultureValues = [
  {
    title: "Sustainability First",
    description: "Every decision considers environmental impact and long-term sustainability of our operations.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Innovation & Excellence",
    description: "Continuous improvement and adoption of cutting-edge aquaculture technologies and practices.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&h=400"
  },
  {
    title: "Community Impact",
    description: "Creating jobs, supporting local communities, and contributing to Rwanda's food security goals.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&h=400"
  }
];

export default function Careers() {
  const { toast } = useToast();

  const handleApply = (positionId: string, positionTitle: string) => {
    console.log(`Clicked Apply Now for position ${positionId}`);
    toast({
      title: "Application Started",
      description: `Thank you for your interest in the ${positionTitle} position. You will be redirected to our application portal shortly.`,
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-background" data-testid="careers-page">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20" data-testid="careers-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-primary">Join Our</span> <span className="text-accent">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build your career with Rwanda's leading aquaculture company. Join us in revolutionizing 
            sustainable fish farming and creating lasting impact in East Africa.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20" data-testid="why-join-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-primary">Why Choose</span> <span className="text-accent">Kivu Choice?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of Africa's fastest growing fish farm and make a meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-testid="culture-values">
            {cultureValues.map((value, index) => (
              <Card key={index} className="card-hover overflow-hidden" data-testid={`culture-card-${index}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`culture-image-${index}`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary" data-testid={`culture-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`culture-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="benefits-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover text-center p-6" data-testid={`benefit-card-${index}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${benefit.color} bg-current/10`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-3" data-testid={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-muted/50 py-20" data-testid="positions-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-primary">Open</span> <span className="text-accent">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-6" data-testid="positions-list">
            {openPositions.map((position) => (
              <Card key={position.id} className="card-hover" data-testid={`position-card-${position.id}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-3" data-testid={`position-title-${position.id}`}>
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" data-testid={`position-department-${position.id}`}>
                          {position.department}
                        </Badge>
                        <Badge variant="outline" data-testid={`position-type-${position.id}`}>
                          <Clock className="w-3 h-3 mr-1" />
                          {position.type}
                        </Badge>
                        <Badge variant="outline" data-testid={`position-experience-${position.id}`}>
                          <Briefcase className="w-3 h-3 mr-1" />
                          {position.experience}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span data-testid={`position-location-${position.id}`}>{position.location}</span>
                      </div>
                    </div>
                    <Button 
                      className="btn-primary" 
                      data-testid={`button-apply-${position.id}`}
                      onClick={() => handleApply(position.id, position.title)}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6" data-testid={`position-description-${position.id}`}>
                    {position.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground" data-testid={`position-requirements-${position.id}`}>
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20" data-testid="application-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-primary">Application</span> <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to join Rwanda's most innovative aquaculture company
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-testid="process-steps">
            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Submit Application</h3>
              <p className="text-muted-foreground">
                Send your CV and cover letter to careers@kivuchoice.com or apply directly through the position listing.
              </p>
            </Card>

            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent">Interview Process</h3>
              <p className="text-muted-foreground">
                Initial phone screening followed by in-person or video interviews with hiring managers and team members.
              </p>
            </Card>

            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Join the Team</h3>
              <p className="text-muted-foreground">
                Complete onboarding process and begin your journey with comprehensive training and mentorship.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary/5 py-20" data-testid="careers-contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-primary">Ready to</span> <span className="text-accent">Apply?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't see the perfect role? We're always looking for talented individuals. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="p-6">
              <h3 className="font-bold text-primary mb-4">General Applications</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: careers@kivuchoice.com</p>
                <p>Subject: [Position] - Your Name</p>
                <p>Include: CV, Cover Letter, Portfolio (if applicable)</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-accent mb-4">HR Department</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Phone: +250739402617</p>
                <p>Location: Kigali Office</p>
                <p>Available: Monday - Friday, 8:00 AM - 5:00 PM EAT</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}