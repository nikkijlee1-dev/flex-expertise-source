import { Layout } from "@/components/layout/Layout";
import { CVUploadForm } from "@/components/forms/CVUploadForm";
import { Briefcase, Clock, Heart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work schedules that respect your life outside of work.",
  },
  {
    icon: Briefcase,
    title: "Premium Projects",
    description: "Engage with challenging, meaningful work at top companies.",
  },
  {
    icon: Zap,
    title: "Fair Compensation",
    description: "Competitive rates that reflect your expertise and experience.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Build a career that complements your personal commitments.",
  },
];

const ForTalent = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 lg:pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              For Professionals
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mt-4 text-foreground">
              WORK THAT WORKS FOR YOUR LIFE.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              You've built an exceptional career. Now find opportunities that
              fit your lifestyle—without compromising on quality or impact.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              WHY JOIN US
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              High-calibre professionals deserve high-calibre opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-card transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon
                    className="text-primary"
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-xl text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              JOIN OUR NETWORK
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Submit your details and we'll reach out when we find the perfect
              match.
            </p>
          </div>
          <CVUploadForm />
        </div>
      </section>
    </Layout>
  );
};

export default ForTalent;
