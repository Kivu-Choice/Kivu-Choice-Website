import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Linkedin } from "lucide-react";
import type { TeamMember } from "@shared/schema";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" data-testid={`team-member-${member.id}`}>
      <CardContent className="p-6 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden border-4 border-primary/20">
            {member.imageUrl ? (
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-full object-cover"
                data-testid={`img-avatar-${member.id}`}
              />
            ) : (
              <User className="text-3xl text-primary" />
            )}
          </div>
          <div className="text-sm text-accent font-medium mb-2" data-testid={`text-position-${member.id}`}>
            {member.position}
          </div>
          <h3 className="text-xl font-bold text-primary mb-2" data-testid={`text-name-${member.id}`}>
            {member.name}
          </h3>
          {member.education && (
            <p className="text-sm text-muted-foreground mb-4" data-testid={`text-education-${member.id}`}>
              {member.education}
            </p>
          )}
          {member.linkedinUrl && (
            <a 
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
              data-testid={`link-linkedin-${member.id}`}
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground mb-4" data-testid={`text-bio-${member.id}`}>
          {member.bio}
        </p>
        
        {member.skills && (
          <div className="flex flex-wrap gap-2" data-testid={`skills-${member.id}`}>
            {member.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
