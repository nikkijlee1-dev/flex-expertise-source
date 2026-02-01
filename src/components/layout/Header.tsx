import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/#certainty-gap", label: "The Gap" },
  { href: "/#how-we-deliver", label: "Our Approach" },
  { href: "/#our-talent", label: "Our Talent" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/#contact-form", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle hash scrolling on initial load and route changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [path, hash] = href.split("#");
    
    // If we're already on the homepage and clicking a hash link
    if (location.pathname === "/" && hash) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (hash) {
      // Navigate to homepage first, then scroll
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar fixed top-0 left-0 right-0 z-50">
        <span>Looking for flexible senior roles? </span>
        <Link 
          to="/join-talent-pool" 
          className="text-primary font-medium hover:underline"
        >
          Join our Talent Pool
        </Link>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-[38px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-foreground/90 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={logo} 
                alt="Blue Caye Consulting Group" 
                className={`h-[72px] w-auto transition-all duration-300 ${
                  isScrolled ? "brightness-0 invert" : ""
                }`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled 
                      ? "text-background/70 hover:text-background" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero-accent" size="sm" asChild>
                <Link to="/chat-with-us">Chat with us Today</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors ${
                isScrolled 
                  ? "text-background hover:text-background/80" 
                  : "text-foreground hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-card border-t border-border animate-fade-in">
              <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-foreground/70 hover:text-foreground transition-colors py-2 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="hero-accent" className="mt-4" asChild>
                  <Link to="/chat-with-us">Chat with us Today</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
