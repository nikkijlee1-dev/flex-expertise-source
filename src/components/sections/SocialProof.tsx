import { useEffect, useRef, useState } from "react";
import telstraLogo from "@/assets/logos/telstra.png";
import nswGovLogo from "@/assets/logos/nsw-government.jpg";
import officeworksLogo from "@/assets/logos/officeworks.png";
import endeavourLogo from "@/assets/logos/endeavour-group.png";

const logos = [
  { src: telstraLogo, alt: "Telstra" },
  { src: nswGovLogo, alt: "NSW Government" },
  { src: officeworksLogo, alt: "Officeworks" },
  { src: endeavourLogo, alt: "Endeavour Group" },
];

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
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}