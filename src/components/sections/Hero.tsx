import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight text-foreground animate-slide-up">
            THE BEST TALENT ISN'T ALWAYS FULL-TIME.
          </h1>

          {/* Subheading */}
          <p
            className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-up font-body"
            style={{ animationDelay: "100ms" }}
          >
            Professional Project Managers, Release Managers, and Test Managers for companies that value
            expertise over overhead.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/for-companies">
                Hire a Specialist
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="hero-accent" size="lg" asChild>
              <Link to="/for-talent">Submit CV</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
