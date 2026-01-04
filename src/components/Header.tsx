import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, GraduationCap, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/#academics" },
    { label: "Research", href: "/#research" },
    { label: "Notices", href: "/#notices" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[hsl(0,60%,35%)] text-white py-4 hidden md:block">
        <div className="w-full px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between text-sm">
            {/* Left side - Welcome message */}
            <div className="font-medium text-base">
              Welcome to New Summit College
            </div>
            
            {/* Right side - Contact info only */}
            <div className="flex items-center gap-6">
              <a href="tel:01-4620522" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">01-4620522/23/24</span>
              </a>
              <div className="w-px h-5 bg-white/30" />
              <a 
                href="https://maps.app.goo.gl/RmNu737uysFtZCDS8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Shantinagar, Tinkune, Kathmandu</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="https://imgs.search.brave.com/-fM1AV_XalzOaNAvSyK6aNc4Wjl1OkoOSoP-VmIinmA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5lZHVzYW5qYWwu/Y29tL19fc2l6ZWRf/Xy9sb2dvcy9uZXdf/c3VtbWl0X2NvbGxl/Z2VfbG9nby10aHVt/Ym5haWwtMjAweDIw/MC03MC5qcGc"
              alt="New Summit College Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">New Summit</span>
              <span className="block text-xs text-muted-foreground -mt-0.5">College</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(0,60%,35%)] group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/apply">
              <Button variant="default" size="sm">
                Apply Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Link to="/apply">
                  <Button variant="default">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
