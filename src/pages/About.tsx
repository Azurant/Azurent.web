import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do. This passion drives us to create software that not only works but delights.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We set high standards and consistently meet them. Quality is never an afterthought.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace new technologies and approaches to solve problems in creative ways.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe the best solutions come from working closely with our clients as true partners.",
  },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
              About Azurant
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Illuminating Digital Possibilities
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We're a passionate team of developers, designers, and strategists
              dedicated to creating software that makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Born from a Vision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Azurant was founded with a simple belief: technology should
                  illuminate possibilities, not create barriers. We saw too many
                  businesses struggling with outdated systems and disconnected
                  solutions.
                </p>
                <p>
                  Our name combines "azure" – the boundless blue sky representing
                  infinite potential – with "radiant" – the warm glow of innovation.
                  Together, they capture our mission: to help businesses shine in
                  the digital landscape.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for companies
                  worldwide, from ambitious startups to established enterprises.
                  Every project we undertake is an opportunity to make a meaningful
                  impact.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="aspect-[4/3] bg-gradient-warm rounded-3xl overflow-hidden border border-border shadow-warm p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="font-display text-6xl font-bold text-gradient-warm">
                    Since 2014
                  </div>
                  <p className="text-lg text-muted-foreground max-w-sm">
                    Helping businesses transform their ideas into powerful digital
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-warm mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              These core values guide everything we do, from how we approach
              projects to how we treat our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-warm transition-all duration-300 text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Our Mission
            </span>
            <blockquote className="font-display text-3xl md:text-4xl font-bold text-foreground leading-relaxed mb-8">
              "To empower businesses with innovative software solutions that
              illuminate their potential and drive meaningful growth in the
              digital age."
            </blockquote>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every line of code we write, every design we create, and every
              strategy we develop is guided by this mission. We're not just
              building software – we're building futures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 text-center">
            <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-primary-foreground/20 animate-sparkle" />
            <div className="absolute bottom-12 right-12 w-6 h-6 rounded-full bg-primary-foreground/10 animate-sparkle" style={{ animationDelay: "0.5s" }} />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                Want to Join Our Story?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Whether you're looking to work with us or join our team, we'd love
                to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
                  <Link to="/contact">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/contact">View Careers</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
