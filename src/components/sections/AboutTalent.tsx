import { useEffect, useRef, useState } from "react";

export function AboutTalent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-muted/30"
      id="about-talent"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Talent
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              The Power of Untapped Expertise
            </h2>
          </div>

          {/* Main Content */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that top-tier leadership should not be restricted by the traditional 40-hour work week. Our pool consists of high calibre professionals who have traded the corporate grind for flexibility. These are seasoned leaders who have led multi-million dollar transformations and complex releases, now available to drive your projects on a fractional basis.
            </p>

            {/* Methodology Focus */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                Methodology Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our specialists are certified in Agile (SCRUM, SAFe) and PMI/PRINCE2/PMBOK methodologies. We understand that while teams strive for Agility, operational and funding models often require Hybrid or Waterfall governance. We draw on the right toolset for your specific environment to ensure delivery remains aligned with your project's cadence and financial obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}