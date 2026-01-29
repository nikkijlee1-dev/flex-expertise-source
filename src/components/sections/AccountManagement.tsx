import { useEffect, useRef, useState } from "react";
import { UserCircle, ClipboardCheck, Shield } from "lucide-react";

export function AccountManagement() {
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
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Service Delivery
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Your Success, Managed
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every engagement is supported by a dedicated Account Manager who acts as your central point of contact. We provide formal monthly reviews to discuss project progress, milestones, and upcoming requirements.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              This ensures total transparency and allows for agile adjustments to our service, providing a safety net of professional oversight and quality governance.
            </p>
          </div>

          {/* Features */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <UserCircle className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground">
                  Dedicated Account Manager
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your single point of contact for all engagement matters.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ClipboardCheck className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground">
                  Monthly Progress Reviews
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Formal check-ins to review milestones and plan ahead.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="text-primary" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground">
                  Quality Governance
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Professional oversight ensuring consistent delivery standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}