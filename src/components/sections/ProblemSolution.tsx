import { useEffect, useRef, useState } from "react";

export function ProblemSolution() {
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
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Problem */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              The Challenge
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              THE MODERN WORKFORCE IS CHANGING.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Companies need senior expertise but can't justify full-time
              overhead. Meanwhile, experienced professionals are seeking
              flexibility without sacrificing meaningful work.
            </p>
          </div>

          {/* Right Column - Solution */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              Our Solution
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              WE BRIDGE THE GAP.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We offer elite part-time resources that balance career and family.
              High-calibre professionals who deliver enterprise-level results on
              a flexible basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
