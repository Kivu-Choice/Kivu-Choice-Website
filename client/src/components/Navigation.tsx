import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import kivuChoiceLogo from "@assets/KC_Fish-and-text_Horizontal_Color-2048x823_1757065679913.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/products", label: "Products" },
    { href: "/impact", label: "Impact" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={kivuChoiceLogo} 
                alt="Kivu Choice" 
                className="h-8 w-auto"
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.label.toLowerCase()}`}>
                <span
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/products" data-testid="button-order-now">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Order Now
              </Button>
            </Link>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" data-testid="button-mobile-menu">
                <Menu className="text-xl" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} data-testid={`mobile-link-${item.label.toLowerCase()}`}>
                    <span
                      className={`block font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
                <Link href="/products" data-testid="mobile-button-order-now">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
