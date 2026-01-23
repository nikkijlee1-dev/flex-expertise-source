import { useEffect, useRef, useState } from "react";
import { MessageSquare, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consult",
    description:
      "We learn about your project, culture, and specific requirements.",
  },
  {
    icon: Users,
    number: "02",
    title: "Match",
    description:
      "We carefully select the perfect professional for your needs.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execute",
    description: "Your resource integrates seamlessly and delivers results.",
  },
];

export function HowWeWork() {
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
    <section ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Our Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              {/* Icon Container */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <step.icon
                  className="text-primary"
                  size={32}
                  strokeWidth={1.5}
                />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                {step.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
