import { useEffect, useRef, useState } from "react";
import { Compass, Cog, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "The Setup",
    subtitle: "Strategy",
    description:
      "We audit your current trajectory and build the project governance framework (PMO) your organisation is missing.",
  },
  {
    icon: Cog,
    title: "The Engine",
    subtitle: "Execution",
    description:
      "Our On-Demand Managers drive the daily heavy lifting, ensuring schedules are met and blockers are cleared.",
  },
  {
    icon: ShieldCheck,
    title: "The Assurance",
    subtitle: "Certainty",
    description:
      "We utilise rigorous Test Management and Release protocols to ensure every launch is a non-event.",
  },
];

export function ThreePillars() {
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
    <section ref={sectionRef} className="section-padding" id="how-we-deliver">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Our Approach
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
            The Three Pillars of Execution
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`relative text-center p-8 md:p-10 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/30 transition-all duration-700 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon
                  className="text-primary"
                  size={36}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                {pillar.title}
              </h3>
              <span className="inline-block mt-2 text-sm font-medium text-accent uppercase tracking-wider">
                {pillar.subtitle}
              </span>

              {/* Description */}
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
