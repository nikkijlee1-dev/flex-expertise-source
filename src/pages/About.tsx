import { Layout } from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Principal Consultant",
    role: "Founder & Principal Consultant",
    bio: "With over 15 years of experience in project and release management across enterprise technology, our founding principal brings deep expertise in delivering complex programs for ASX-listed companies and global organisations.",
    initials: "PC",
    linkedin: "#",
  },
  {
    name: "Principal Consultant",
    role: "Founder & Principal Consultant",
    bio: "Specialising in test management and quality assurance, our co-founder has led testing strategies for major digital transformations, financial systems, and critical infrastructure projects across Australia.",
    initials: "PC",
    linkedin: "#",
  },
  {
    name: "Legal & HR Advisor",
    role: "Legal & HR Advisor",
    bio: "Our advisor brings extensive experience in employment law, contractor compliance, and HR strategy, ensuring our operations and client engagements meet the highest standards of governance and best practice.",
    initials: "LA",
    linkedin: "#",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-muted/50 via-background to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Melbourne-Based Expertise Since 2019
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Blue Caye Consulting Group was founded in Melbourne in 2019 with a clear mission: 
              to provide organisations with access to senior-level project, release, and test 
              management expertise without the overhead of full-time hires.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We understand that critical project phases don't always align with permanent 
              headcount budgets. That's why we offer flexible, on-demand consulting services 
              that scale with your needs—ramping up for crucial delivery windows and stepping 
              back when the job is done.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
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

      {/* Team Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl mt-4 text-foreground">
              Meet the People Behind Blue Caye
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-background border-border hover:shadow-card transition-shadow">
                <CardContent className="pt-8 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xl font-heading">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading text-xl text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
