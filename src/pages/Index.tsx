import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { CertaintyGap } from "@/components/sections/CertaintyGap";
import { ThreePillars } from "@/components/sections/ThreePillars";
import { SocialProof } from "@/components/sections/SocialProof";
import { AboutTalent } from "@/components/sections/AboutTalent";
import { Services } from "@/components/sections/Services";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { AccountManagement } from "@/components/sections/AccountManagement";
import { ContactForm } from "@/components/forms/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CertaintyGap />
      <ThreePillars />
      <SocialProof />
      <AboutTalent />
      <Services />
      <HowWeWork />
      <AccountManagement />

      {/* Contact Section */}
      <section className="section-padding bg-muted/30" id="contact-form">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Start the Conversation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether you are looking for high calibre talent to drive your project, or you are a senior professional looking for your next on-demand role, we would love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Index;