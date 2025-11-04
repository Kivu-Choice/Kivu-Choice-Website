import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@shared/schema";

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background" data-testid="products-page">
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <Skeleton className="h-8 w-48 mx-auto mb-6" />
              <Skeleton className="h-6 w-96 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                  <Skeleton className="w-full h-48" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <div className="flex justify-between items-center mb-4">
                      <Skeleton className="h-8 w-24" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex gap-2 mb-4">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-18" />
                    </div>
                    <Skeleton className="h-10 w-full" />
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
    <div className="min-h-screen bg-background" data-testid="products-page">
      {/* Hero Section */}
      <section className="bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6" data-testid="products-title">
              <span className="text-primary">Order</span> <span className="text-accent">Fresh</span> <span className="text-primary">&</span> <span className="text-accent">Nutritious Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="products-description">
              Browse our selection of premium fresh fish and innovative nutrition products. All items are
              sustainably produced and delivered fresh to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-testid="products-grid">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Product Categories */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12"><span className="text-primary">Additional</span> <span className="text-accent">Services</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Bulk Orders</h3>
              <p className="text-muted-foreground mb-6">
                Large quantity orders for restaurants, hotels, and distributors. Customized processing available.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-primary">Contact</span>
                <span className="text-sm text-muted-foreground">for pricing</span>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-accent mb-4">Quality Standards</h3>
              <p className="text-muted-foreground mb-6">
                All products meet international quality standards. Traceable from hatchery to delivery.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-accent">Certified</span>
                <span className="text-sm text-muted-foreground">Quality Assured</span>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Distribution</h3>
              <p className="text-muted-foreground mb-6">
                Nationwide distribution network ensuring fresh delivery across Rwanda daily.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-primary">Nationwide</span>
                <span className="text-sm text-muted-foreground">Daily Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
