import { useEffect, useRef, useState } from "react";

export function SocialProof() {
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
      className="py-12 bg-muted/50 border-y border-border"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-muted-foreground text-sm md:text-base mb-8">
            Blue Caye is a registered NSW Government and Victorian Government supplier.
          </p>
          
          {/* Logo Grid - Grayscale */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {/* Telstra */}
            <div className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale">
              <svg viewBox="0 0 120 40" className="h-full w-auto" fill="currentColor">
                <text x="0" y="28" className="text-xl font-bold tracking-tight">TELSTRA</text>
              </svg>
            </div>
            
            {/* NSW Government */}
            <div className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale">
              <svg viewBox="0 0 140 40" className="h-full w-auto" fill="currentColor">
                <text x="0" y="28" className="text-lg font-semibold">NSW Gov</text>
              </svg>
            </div>
            
            {/* Officeworks */}
            <div className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale">
              <svg viewBox="0 0 140 40" className="h-full w-auto" fill="currentColor">
                <text x="0" y="28" className="text-lg font-bold">Officeworks</text>
              </svg>
            </div>
            
            {/* Endeavour Group */}
            <div className="h-8 md:h-10 opacity-60 hover:opacity-100 transition-opacity grayscale">
              <svg viewBox="0 0 160 40" className="h-full w-auto" fill="currentColor">
                <text x="0" y="28" className="text-lg font-semibold">Endeavour</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}