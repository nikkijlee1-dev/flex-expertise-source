import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Services } from "@/components/sections/Services";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { ContactForm } from "@/components/forms/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <Services />
      <HowWeWork />

      {/* Contact Section */}
      <section className="section-padding" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              LET'S TALK
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to find your next exceptional resource? We're here to help.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
