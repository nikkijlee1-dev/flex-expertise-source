 import { Layout } from "@/components/layout/Layout";
 import melbourneSkyline from "@/assets/melbourne-skyline.jpg";
 import nikkiPhoto from "@/assets/team/nikki.png";
 import hanyPhoto from "@/assets/team/hany.jpg";
 import lisaMoniquePhoto from "@/assets/team/lisa-monique.png";
 import { CheckCircle, XCircle } from "lucide-react";

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
               On-Demand Delivery without the Overhead
            </h1>
          </div>
        </div>
      </section>

       {/* Leadership Section */}
       <section className="section-padding">
        <div className="container mx-auto px-6">
           <div className="max-w-2xl mx-auto text-center mb-16">
             <span className="text-primary font-medium text-sm tracking-widest uppercase">
               Our Leadership
             </span>
             <h2 className="font-heading text-3xl md:text-4xl mt-4 text-foreground">
               Meet the Team
             </h2>
             <p className="mt-6 text-lg text-muted-foreground">
               Elite delivery leaders driving your project success.
            </p>
          </div>
 
           <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
             {/* Nikki */}
             <div className="text-center">
               <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                 <img
                   src={nikkiPhoto}
                   alt="Nikki - Director"
                   className="w-full h-full object-cover"
                 />
               </div>
               <h3 className="font-heading text-xl text-foreground">Nikki</h3>
                <p className="text-primary font-medium text-sm mb-3">Co-Founder & Director</p>
               <p className="text-muted-foreground text-sm leading-relaxed">
                  Co-founded Blue Caye in 2018 with a passion for flexible work models. 
                  Specialist in removing friction and driving effective Project Delivery for organisations needing strong leadership.
               </p>
             </div>
 
             {/* Hany */}
             <div className="text-center">
               <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                 <img
                   src={hanyPhoto}
                   alt="Hany - Principal Consultant"
                   className="w-full h-full object-cover"
                 />
               </div>
               <h3 className="font-heading text-xl text-foreground">Hany</h3>
                <p className="text-primary font-medium text-sm mb-3">Co-Founder & Principal Consultant</p>
               <p className="text-muted-foreground text-sm leading-relaxed">
                  Co-founded Blue Caye in 2018. Lead for technical delivery, Release Management, and JIRA Optimisation with extensive experience across industries. 
                  Expert at turning project "messes" into transparent successes.
               </p>
             </div>
 
             {/* Lisa-Monique */}
             <div className="text-center">
               <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                 <img
                   src={lisaMoniquePhoto}
                   alt="Lisa-Monique - Head of Legal & People"
                   className="w-full h-full object-cover"
                 />
               </div>
               <h3 className="font-heading text-xl text-foreground">Lisa-Monique</h3>
               <p className="text-primary font-medium text-sm mb-3">Head of Legal & People</p>
               <p className="text-muted-foreground text-sm leading-relaxed">
                  Lawyer specialising in compliance and HR. Dedicated to Quality, Governance, and Compliance Audits, ensuring our 
                  flexible model meets the highest standards.
               </p>
             </div>
           </div>
        </div>
      </section>

       {/* Why Blue Caye Comparison */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
           <div className="max-w-2xl mx-auto text-center mb-16">
             <span className="text-primary font-medium text-sm tracking-widest uppercase">
               The Difference
             </span>
             <h2 className="font-heading text-3xl md:text-4xl mt-4 text-foreground">
               Why Blue Caye?
            </h2>
             <p className="mt-6 text-lg text-muted-foreground">
               See how our On-Demand model outperforms traditional consultancies.
            </p>
          </div>
 
           <div className="max-w-4xl mx-auto overflow-x-auto">
             <table className="w-full border-collapse">
               <thead>
                 <tr className="border-b border-border">
                   <th className="text-left py-4 px-4 font-heading text-foreground">Feature</th>
                   <th className="text-center py-4 px-4 font-heading text-muted-foreground">Traditional Consultancy</th>
                   <th className="text-center py-4 px-4 font-heading text-primary">Blue Caye On-Demand</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b border-border/50">
                   <td className="py-4 px-4 font-medium text-foreground">Speed to Hire</td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-muted-foreground">
                       <XCircle className="w-4 h-4 text-destructive" />
                       <span>4–8 Weeks (Rigid Contracts)</span>
                     </div>
                   </td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-foreground">
                       <CheckCircle className="w-4 h-4 text-primary" />
                       <span className="font-medium">48–72 Hours (Agile Access)</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="border-b border-border/50">
                   <td className="py-4 px-4 font-medium text-foreground">Talent Quality</td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-muted-foreground">
                       <XCircle className="w-4 h-4 text-destructive" />
                       <span>Junior "Benched" Staff</span>
                     </div>
                   </td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-foreground">
                       <CheckCircle className="w-4 h-4 text-primary" />
                       <span className="font-medium">Elite, Vetted Delivery Leaders</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="border-b border-border/50">
                   <td className="py-4 px-4 font-medium text-foreground">Cost Structure</td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-muted-foreground">
                       <XCircle className="w-4 h-4 text-destructive" />
                       <span>High Daily Rates + Margin</span>
                     </div>
                   </td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-foreground">
                       <CheckCircle className="w-4 h-4 text-primary" />
                       <span className="font-medium">Cost-Effective Flexible Models</span>
                     </div>
                   </td>
                 </tr>
                 <tr className="border-b border-border/50">
                   <td className="py-4 px-4 font-medium text-foreground">Flexibility</td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-muted-foreground">
                       <XCircle className="w-4 h-4 text-destructive" />
                       <span>Full-time or nothing</span>
                     </div>
                   </td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-foreground">
                       <CheckCircle className="w-4 h-4 text-primary" />
                       <span className="font-medium">Full-time or Part-time Mix</span>
                     </div>
                   </td>
                 </tr>
                 <tr>
                   <td className="py-4 px-4 font-medium text-foreground">Focus</td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-muted-foreground">
                       <XCircle className="w-4 h-4 text-destructive" />
                       <span>Maximising Billable Hours</span>
                     </div>
                   </td>
                   <td className="py-4 px-4 text-center">
                     <div className="flex items-center justify-center gap-2 text-foreground">
                       <CheckCircle className="w-4 h-4 text-primary" />
                       <span className="font-medium">Standardisation & Efficiency</span>
                     </div>
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>

       {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
           <div className="max-w-3xl mx-auto text-center">
             <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
               Is your JIRA a maze or your compliance lagging?
            </h2>
             <p className="text-xl text-muted-foreground mb-8">
               We bring order to the chaos.
            </p>
             <a
               href="/#contact-form"
               className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
             >
               Start a Conversation
             </a>
          </div>
        </div>
      </section>

       {/* Our Story Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
           <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
               Our Story
            </span>
             <h2 className="font-heading text-3xl md:text-4xl mt-4 text-foreground">
               Founded on Flexibility
            </h2>
          </div>
 
           <div className="max-w-3xl mx-auto space-y-8">
             <p className="text-lg text-muted-foreground leading-relaxed">
                Blue Caye Consulting Group was founded in 2018 by Nikki and Hany with a passion for flexible work and a clear mission: to provide 
                high calibre project management that actually delivers on its promises. We saw organisations overpaying for 'presence' rather than 'progress', and companies struggling to find strong delivery leadership without the full-time overhead.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               The post-2020 landscape changed everything. The way we work shifted permanently, 
               and the way the world's best talent wants to work shifted too. We noticed veteran 
               Project, Release, and Test Managers opting out of the traditional corporate grind 
               in search of flexibility and purpose.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Blue Caye exists to bridge that gap—connecting organisations who need strong leadership with elite professionals who value flexibility. Our talent pool is a blend of full-time 
                and part-time flexible professionals who are passionate about delivering excellence on their own terms. Our part-time flexible arrangements offer 
                significant cost savings for clients without compromising on delivery quality.
             </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;