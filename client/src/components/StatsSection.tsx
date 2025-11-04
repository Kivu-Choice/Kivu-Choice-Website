import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Stats } from "@shared/schema";

export default function StatsSection() {
  const { data: stats, isLoading } = useQuery<Stats[]>({
    queryKey: ["/api/stats"],
  });

  if (isLoading) {
    return (
      <section className="bg-white py-6" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="p-6 text-center">
                <Skeleton className="h-10 w-20 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto mb-1" />
                <Skeleton className="h-3 w-20 mx-auto" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-6" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <Card 
              key={stat.id} 
              className="p-6 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
