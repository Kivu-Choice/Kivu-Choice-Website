import { useQuery } from "@tanstack/react-query";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import type { TeamMember } from "@shared/schema";

export default function Team() {
  const { data: teamMembers, isLoading } = useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background" data-testid="team-page">
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <Skeleton className="h-8 w-64 mx-auto mb-6" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl shadow-sm border border-border p-6">
                  <div className="flex items-center mb-4">
                    <Skeleton className="w-16 h-16 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-6 w-32 mb-1" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-18" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-testid="team-page">
      {/* Hero Section */}
      <section className="bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6" data-testid="team-title">
              <span className="text-accent">Meet Our</span> <span className="text-primary">Leadership Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="team-description">
              Expert leaders driving innovation and excellence in aquaculture
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="team-grid">
            {teamMembers?.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-6 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <Users className="w-16 h-16 mx-auto mb-4 text-white/90" />
            <h2 className="text-3xl font-bold mb-4">Join Our Growing Team</h2>
            <p className="text-xl text-white/90 mb-6">
              Be part of Rwanda's leading aquaculture company. We're always looking for passionate individuals to help us revolutionize fish farming.
            </p>
            <a 
              href="https://app.bag.work/company/kivuchoice166" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                data-testid="button-join-team"
              >
                Join Our Team
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
