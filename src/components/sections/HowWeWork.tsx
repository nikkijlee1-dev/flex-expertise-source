import { useEffect, useRef, useState } from "react";
import { Search, UserCheck, FileText, Rocket, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Strategic Scoping",
    description:
      "We dive deep into your project roadmap, culture, and technical requirements to define the exact skill set and hours needed to drive your project forward.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "High-Calibre Selection",
    description:
      "We present you with a curated profile and CV of a specialist who fits your tech stack. You will have the opportunity to interview our expert to ensure a perfect cultural and technical fit before we begin.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Contract Flexibility",
    description:
      "We provide a clear Statement of Work (SOW) for every engagement. We are also happy to work on your organisation's own 'paper' or contract templates to ensure a seamless procurement process.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Seamless Integration",
    description:
      "We believe the best work happens with a mix of focus and connection. Our team delivers high-impact results through a hybrid model: primarily remote for deep work, but regularly on-site for the moments that matter most. We value the power of in-person collaboration and ensure our presence at your office aligns with your key meetings and milestones. Results-driven, flexible, and fully aligned with your goals.",
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
    <section ref={sectionRef} className="section-padding bg-muted/30" id="how-we-work">
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

        {/* Steps - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative p-8 rounded-lg bg-card border border-border hover:shadow-card transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="flex items-start gap-6">
                <div className="relative shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon
                    className="text-primary"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-xl md:text-2xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Hourly Advantage */}
        <div
          className={`max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-10 transition-all duration-700 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="text-primary" size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                The Hourly Advantage
              </h3>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Pay for progress, not presence. We invoice by the hour rather than the day, providing accurate reporting and tracking of time spent. Clients can expect to see an estimated <span className="text-primary font-semibold">30% reduction</span> in management overhead working this way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}