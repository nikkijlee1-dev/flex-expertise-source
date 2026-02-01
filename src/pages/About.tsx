import { Layout } from "@/components/layout/Layout";
import melbourneSkyline from "@/assets/melbourne-skyline.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section with Melbourne Skyline */}
      <section className="relative min-h-[60vh] flex items-center section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={melbourneSkyline}
            alt="Melbourne skyline at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Redefining the Standard of Project Leadership
            </h1>
          </div>
        </div>
      </section>

      {/* The 2018 Beginning */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              The 2018 Beginning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blue Caye Consulting Group was founded in 2018 with a simple goal: to provide high calibre project management that actually delivers on its promises. In those early days, the corporate world was still tethered to the traditional 9-to-5, 40-hour-week model. But even then, we saw the cracks—businesses were overpaying for 'presence' rather than 'progress'.
            </p>
          </div>
        </div>
      </section>

      {/* A Changing World */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              A Changing World
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The events of 2020 and the post-COVID landscape changed everything. The way we work shifted permanently, but more importantly, the way the world's best talent wants to work shifted too. We noticed a growing pool of veteran Project, Release, and Test Managers—the heavy hitters of the industry—opting out of the traditional corporate grind in search of flexibility and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Unlocking Untapped Talent */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Unlocking Untapped Talent
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Today, Blue Caye exists to bridge that gap. We realised that some of the best minds in Australia were becoming 'untapped' because they no longer fit into a rigid full time box.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to unlock this elite talent pool for your organisation. We connect you with seasoned specialists who bring years of 'safe hands' experience to your most critical projects, but on an on-demand, hourly basis. It's a model built for the modern era: high-impact expertise, scaled to your needs, delivered with total transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Approach
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-4 text-foreground">
              Quality Over Quantity
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We're a boutique consultancy by design. We deliberately keep our team small 
              so we can focus on what matters most: placing the right expert in the right 
              role, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-heading">01</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Precision Matching</h3>
              <p className="text-muted-foreground">
                We take time to understand your project context and match you with consultants 
                who have relevant industry and domain experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-heading">02</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Flexible Engagement</h3>
              <p className="text-muted-foreground">
                Whether you need two days a week or full-time coverage for a critical phase, 
                we structure engagements around your actual needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl font-heading">03</span>
              </div>
              <h3 className="font-heading text-xl mb-2">Proven Experience</h3>
              <p className="text-muted-foreground">
                Our consultants bring decades of combined experience across financial services, 
                technology, government, and enterprise sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;