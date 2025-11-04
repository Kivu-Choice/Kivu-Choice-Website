import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleOrderNow = () => {
    const phoneNumber = "250795592280";
    const message = `Hello, I would like to order ${product.name}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2" data-testid={`product-${product.id}`}>
      {product.imageUrl && (
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className={`w-full h-48 ${product.category === 'superfood' ? 'object-contain' : 'object-cover'} object-center`}
          data-testid={`img-product-${product.id}`}
        />
      )}
      <CardContent className="p-6 flex-1 flex flex-col text-left">
        <h3 className="text-xl font-bold text-primary mb-2 text-left min-h-[3.5rem] flex items-start" data-testid={`text-product-name-${product.id}`}>
          <span className="leading-tight">{product.name}</span>
        </h3>
        <p className="text-muted-foreground mb-4 text-left min-h-[4.5rem] leading-relaxed" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
        
        <div className="mb-4 min-h-[3rem] flex items-start">
          <div className="w-full">
            <div className="text-2xl font-bold text-primary leading-tight mb-1" data-testid={`text-product-price-${product.id}`}>
              {product.price}
            </div>
            <div className="text-sm text-muted-foreground" data-testid={`text-product-unit-${product.id}`}>
              {product.unit}
            </div>
          </div>
        </div>
        
        {product.tags && (
          <div className="flex flex-wrap gap-2 mb-4" data-testid={`tags-product-${product.id}`}>
            {product.tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-primary/10 text-primary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="mt-auto">
          <Button 
            onClick={handleOrderNow}
            className="w-full btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            data-testid={`button-order-now-${product.id}`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.category === "fingerlings" ? "Request Quote" : "Order Now"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
