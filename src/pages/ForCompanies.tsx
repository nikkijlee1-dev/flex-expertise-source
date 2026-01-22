import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/forms/ContactForm";
import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Pay for Expertise, Not Overhead",
    description:
      "Access senior talent on an hourly basis. No benefits, no long-term commitments—just results.",
  },
  {
    icon: TrendingUp,
    title: "Scale On Demand",
    description:
      "Ramp up for critical projects, scale down when complete. True flexibility for modern businesses.",
  },
  {
    icon: Users,
    title: "Pre-Vetted Professionals",
    description:
      "Every resource in our network has been carefully screened for technical excellence and soft skills.",
  },
  {
    icon: Target,
    title: "Perfect Fit Matching",
    description:
      "We take the time to understand your culture and project needs to ensure seamless integration.",
  },
];

const ForCompanies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32 lg:pt-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              For Organizations
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mt-4 text-foreground">
              SCALE WITH PRECISION.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Access elite Project Managers and QA Testers without the overhead
              of full-time hires. Senior expertise, flexible engagement.
            </p>
          </div>
        </div>
      </section>

      {/* The Model Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                The Hourly Model
              </span>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 text-foreground">
                SENIOR TALENT, FLEXIBLE TERMS.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our professionals work on an hourly basis, giving you maximum
                flexibility. Whether you need 10 hours a week or 30, you get the
                same calibre of expertise without the long-term commitment.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Perfect for project-based work, covering parental leave, or
                supplementing your existing team during peak periods.
              </p>
            </div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon
                      className="text-primary"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              START A CONVERSATION
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your project and we'll show you how we can help.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default ForCompanies;
