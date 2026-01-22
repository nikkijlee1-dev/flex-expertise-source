import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center lg:text-left">
            <Link
              to="/"
              className="font-heading text-xl tracking-wider text-background hover:text-primary transition-colors"
            >
              BLUE CAYE CONSULTING
            </Link>
            <p className="text-sm text-background/60 mt-2">
              Made for Professionals
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/for-talent"
              className="text-background/70 hover:text-primary transition-colors"
            >
              For Talent
            </Link>
            <Link
              to="/for-companies"
              className="text-background/70 hover:text-primary transition-colors"
            >
              For Companies
            </Link>
            <Link
              to="/privacy"
              className="text-background/70 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:text-primary hover:bg-background/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Blue Caye Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
