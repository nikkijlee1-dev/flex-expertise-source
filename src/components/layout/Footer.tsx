import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Logo & Tagline */}
          <div className="lg:max-w-sm">
            <Link
              to="/"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Blue Caye Consulting Group" className="h-[60px] w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-background/60 mt-4 leading-relaxed">
              High calibre Project, Release, and Test Management on an on-demand basis. 
              Senior expertise, scaled to your organisation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-start gap-12">
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-background/80 mb-4">
                Navigation
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <Link
                  to="/#certainty-gap"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  The Gap
                </Link>
                <Link
                  to="/#how-we-deliver"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Our Approach
                </Link>
                <Link
                  to="/#our-talent"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Our Talent
                </Link>
                <Link
                  to="/#contact-form"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-background/80 mb-4">
                For Talent
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <Link
                  to="/join-talent-pool"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Join our Talent Pool
                </Link>
              </div>
            </div>
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

        {/* Privacy & Terms */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="grid md:grid-cols-2 gap-8 text-sm text-background/50">
            <div>
              <h5 className="font-medium text-background/70 mb-2">Privacy</h5>
              <p className="leading-relaxed">
                Blue Caye Consulting Group is committed to protecting your personal information in accordance with the Australian Privacy Principles. We collect data solely to facilitate high calibre talent matching and service delivery.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-background/70 mb-2">Terms</h5>
              <p className="leading-relaxed">
                All services are provided on an on-demand, hourly basis as defined in individual Statements of Work. Service delivery is managed through our dedicated account management framework.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Blue Caye Consulting Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}