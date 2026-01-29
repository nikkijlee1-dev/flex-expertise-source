import { Layout } from "@/components/layout/Layout";
import { CVUploadForm } from "@/components/forms/CVUploadForm";

const JoinTalentPool = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-16 lg:pt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              Join Our Network
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Looking for Your Next Fractional Challenge?
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              We are always looking for high calibre Project, Release, and Test Managers to join our fixed term contract pool. Work on your terms, get paid for your progress, and stay integrated with our managed service model.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-lg font-heading">✓</span>
              </div>
              <h3 className="font-heading text-lg text-foreground">Flexible Hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Work schedules that respect your life outside of work.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-lg font-heading">✓</span>
              </div>
              <h3 className="font-heading text-lg text-foreground">Premium Clients</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Engage with challenging, meaningful work at top companies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-lg font-heading">✓</span>
              </div>
              <h3 className="font-heading text-lg text-foreground">Fair Compensation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Competitive rates that reflect your expertise and experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Upload Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Submit Your Details
            </h2>
            <p className="mt-4 text-muted-foreground">
              Upload your CV and we'll reach out when we find the perfect match.
            </p>
          </div>
          <CVUploadForm />
        </div>
      </section>
    </Layout>
  );
};

export default JoinTalentPool;