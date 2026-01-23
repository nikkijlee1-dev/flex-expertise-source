import { useEffect, useRef, useState } from "react";
import { ClipboardList, GitBranch, Shield } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Senior PMs who bring structure, clarity, and delivery excellence to your most critical initiatives. From agile to waterfall, we speak your language.",
  },
  {
    icon: GitBranch,
    title: "Release Management",
    description:
      "Expert Release Managers who orchestrate seamless deployments and coordinate cross-functional teams. We ensure your releases are on time, every time.",
  },
  {
    icon: Shield,
    title: "Test Management",
    description:
      "Seasoned Test Managers who build and lead high-performing QA teams. From strategy to execution, we ensure your product meets the highest standards.",
  },
];

export function Services() {
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
    <section ref={sectionRef} className="section-padding" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
            OUR EXPERTISE
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-10 rounded-lg border border-border bg-card hover:shadow-card transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon
                  className="text-primary"
                  size={28}
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl md:text-3xl mt-6 text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
