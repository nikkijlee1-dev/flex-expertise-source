import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TimelineBackground } from "@/components/animations/TimelineBackground";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
      {/* Animated Timeline Background */}
      <div className="absolute inset-0">
        <TimelineBackground />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-foreground animate-slide-up">
            Senior Project Delivery for Agile & Hybrid Teams.
          </h1>

          {/* Subheading */}
          <p
            className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-slide-up font-body"
            style={{ animationDelay: "100ms" }}
          >
            Move from strategy to launch with on-demand leadership that prioritises transparency and quality. We provide the expert oversight to build schedules, manage releases, and ensure project success—minus the full-time overhead.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">
                Access our Talent
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="hero-accent" size="lg" asChild>
              <Link to="/join-talent-pool">Join our Talent Pool</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}