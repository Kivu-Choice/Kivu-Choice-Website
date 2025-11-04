import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";
import hatcheryTeamImage from "@/assets/hatchery-team.jpg";
import lakeKivuCagesImage from "@/assets/lake-kivu-cages.jpg";
import rasFacilityImage from "@/assets/ras-facility.jpg";
import wholeTilapiaImage from "@/assets/whole-tilapia.png";

const newsArticles = [
  {
    id: "1",
    title: "Kivu Choice launches Rwanda's first 30-metre tilapia cage farms",
    date: "2025-05-12",
    category: "Innovation",
    excerpt: "Kivu Choice launched the first-ever 30-metre diameter fish farming cages on Lake Kivu in Nyamasheke District, marking a significant milestone in Rwanda's aquaculture industry.",
    image: lakeKivuCagesImage,
    url: "https://www.newtimes.co.rw/article/26358/news/featured/kivu-choice-launches-rwandas-first-30-metre-tilapia-cage-farms",
    source: "The New Times"
  },
  {
    id: "2",
    title: "How one British investor is driving up Rwanda's fish industry",
    date: "2025-09-24",
    category: "Leadership",
    excerpt: "Prime Minister Dr. Nsengiyumva toured the fish farming facility operated by Kivu Choice in Gisagara District, highlighting the company's impact on Rwanda's protein production.",
    image: hatcheryTeamImage,
    url: "https://www.newtimes.co.rw/article/29958/news/business/how-one-british-investor-is-driving-up-rwandas-fish-industry",
    source: "The New Times"
  },
  {
    id: "3",
    title: "Bank of Kigali Partners with Kivu Choice in a RWF 5 Billion Agriculture Financing Deal",
    date: "2024-10-11",
    category: "Partnership",
    excerpt: "Bank of Kigali reaffirms commitment to Rwanda's agricultural growth by partnering with Kivu Choice in a transformative RWF 5 billion financing deal to expand aquaculture operations.",
    image: rasFacilityImage,
    url: "https://www.ktpress.rw/2024/10/bank-of-kigali-partners-with-kivu-choice-in-a-rwf-5-billion-agriculture-financing-deal/",
    source: "KT Press"
  },
  {
    id: "4",
    title: "Rwanda's fish firm Kivu Choice teams up to raise $35 million to expand production operations",
    date: "2022-11-01",
    category: "Investment",
    excerpt: "Kivu Choice and Victory Farms raised $35 million in Series B funding, the largest ever investment in Africa's aquaculture industry, to fund operations expansion across East Africa.",
    image: wholeTilapiaImage,
    url: "https://farmersreviewafrica.com/rwandas-fish-firm-kivu-choice-teams-up-to-raise-35-million-to-expand-production-operations/",
    source: "Farmers Review Africa"
  }
];

export default function Media() {
  return (
    <div className="min-h-screen bg-background" data-testid="media-page">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20" data-testid="media-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <span className="text-primary">Media</span> <span className="text-accent">&amp; News</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, press releases, and behind-the-scenes content 
            from Rwanda's leading aquaculture company.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20" data-testid="news-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-primary">Latest</span> <span className="text-accent">News</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recent developments and stories from our operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="news-grid">
            {newsArticles.map((article) => (
              <Card key={article.id} className="card-hover overflow-hidden" data-testid={`news-card-${article.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`news-image-${article.id}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" data-testid={`news-category-${article.id}`}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg" data-testid={`news-title-${article.id}`}>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`news-excerpt-${article.id}`}>
                    {article.excerpt}
                  </p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full" data-testid={`button-read-more-${article.id}`}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read on {article.source}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Media Section */}
      <section className="bg-primary/5 py-20" data-testid="media-contact-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-primary">Media</span> <span className="text-accent">Inquiries</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            For press inquiries, interview requests, or additional media resources, 
            please contact our communications team.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="p-6">
              <h3 className="font-bold text-primary mb-4">Press Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: akenyana@kivuchoice.com</p>
                <p>Phone: +250739402617</p>
                <p>Available: Monday - Friday, 8:00 AM - 6:00 PM EAT</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-accent mb-4">Media Resources</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>High-resolution photos available upon request</p>
                <p>Executive interviews can be arranged</p>
                <p>Facility tours for media representatives</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}