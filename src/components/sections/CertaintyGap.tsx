import { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle, Calendar, Zap, Building, Target, MapPin, Shield, Layers, Rocket } from "lucide-react";

const chaosItems = [
  { icon: Calendar, text: "Missing project schedules" },
  { icon: AlertTriangle, text: "Release anxiety & instability" },
  { icon: Building, text: "Lack of PMO structure" },
  { icon: Target, text: "Strategy without execution" },
];

const certaintyItems = [
  { icon: MapPin, text: "Concrete Roadmaps & Milestones" },
  { icon: Shield, text: "Release Management Rigour" },
  { icon: Layers, text: "Scalable PMO Infrastructure" },
  { icon: Rocket, text: "High-Impact Execution" },
];

export function CertaintyGap() {
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
      className="section-padding bg-muted/40"
      id="certainty-gap"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            The Challenge
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
            The Certainty Gap
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Card - Current State Risks */}
          <div
            className={`relative p-8 md:p-10 rounded-xl bg-card border border-border transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30 rounded-t-xl" />
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              Current State Risks
            </h3>
            <div className="space-y-5">
              {chaosItems.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <item.icon className="text-muted-foreground" size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-muted-foreground text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card - With Blue Caye Leadership */}
          <div
            className={`relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-xl" />
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              With Blue Caye Leadership
            </h3>
            <div className="space-y-5">
              {certaintyItems.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="text-primary" size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
