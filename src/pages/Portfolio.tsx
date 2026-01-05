import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "FinanceFlow",
    category: "Web Application",
    description:
      "A comprehensive financial management platform for small businesses. Features real-time analytics, automated invoicing, and seamless integrations.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "HealthHub Mobile",
    category: "Mobile App",
    description:
      "A health and wellness app connecting patients with healthcare providers. Includes appointment scheduling, telemedicine, and health tracking.",
    tech: ["React Native", "Firebase", "WebRTC"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "EcoTrack",
    category: "IoT Platform",
    description:
      "An environmental monitoring system for industrial facilities. Real-time data collection, compliance reporting, and predictive analytics.",
    tech: ["Python", "React", "TimescaleDB", "IoT"],
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "LearnSpace",
    category: "E-Learning Platform",
    description:
      "An interactive learning management system for educational institutions. Features live classes, progress tracking, and gamification.",
    tech: ["Next.js", "GraphQL", "MongoDB"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "RetailSync",
    category: "E-Commerce",
    description:
      "A multi-channel retail platform enabling seamless inventory management across online and physical stores.",
    tech: ["Vue.js", "Go", "Redis", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "TravelMate",
    category: "Travel Platform",
    description:
      "A travel planning and booking platform with AI-powered recommendations and real-time itinerary updates.",
    tech: ["React", "Python", "TensorFlow", "GCP"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
              Our Work
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Projects That Shine
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Explore our portfolio of successful projects. Each one represents
              our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn hover:text-primary"
                  >
                    View Case Study
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Trusted By
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industry Leaders
            </h2>
            <p className="text-muted-foreground text-lg">
              We're proud to have worked with companies of all sizes, from
              ambitious startups to Fortune 500 enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-16 bg-card rounded-lg border border-border flex items-center justify-center text-muted-foreground font-display font-semibold opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                Client {index + 1}
              </div>
            ))}
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
                Ready to Create Something Amazing?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Let's discuss your project and see how we can help bring your
                vision to life.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
