import { Link } from "react-router-dom";
import {
  Code,
  Cloud,
  Smartphone,
  Palette,
  Database,
  Shield,
  Cog,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Vue, and Angular. We create fast, scalable, and SEO-friendly websites.",
    features: [
      "Responsive design",
      "Progressive Web Apps",
      "E-commerce solutions",
      "Content Management Systems",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences across all devices.",
    features: [
      "React Native & Flutter",
      "Native iOS & Android",
      "App Store optimization",
      "Push notifications",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure on AWS, Google Cloud, and Azure. We help you migrate, optimize, and manage your cloud resources.",
    features: [
      "Cloud migration",
      "Serverless architecture",
      "Auto-scaling",
      "Cost optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that creates memorable digital experiences. We blend aesthetics with functionality.",
    features: [
      "User research",
      "Wireframing & prototyping",
      "Visual design",
      "Usability testing",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Robust backend systems and APIs that power your applications. We build for performance, security, and scalability.",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices",
      "Database design",
      "Real-time systems",
    ],
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description:
      "Comprehensive security audits and DevOps practices to keep your systems safe and running smoothly.",
    features: [
      "Security audits",
      "CI/CD pipelines",
      "Monitoring & logging",
      "Disaster recovery",
    ],
  },
  {
    icon: Cog,
    title: "Custom Software",
    description:
      "Tailored software solutions designed specifically for your business needs. From concept to deployment.",
    features: [
      "Requirements analysis",
      "Custom development",
      "Integration services",
      "Ongoing maintenance",
    ],
  },
  {
    icon: Users,
    title: "Consulting",
    description:
      "Strategic technology consulting to help you make informed decisions about your digital transformation.",
    features: [
      "Technology assessment",
      "Architecture review",
      "Team augmentation",
      "Technical training",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your goals, challenges, and vision for the project.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team crafts a comprehensive plan with clear milestones and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We bring your vision to life with clean code and regular progress updates.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "After rigorous testing, we deploy your solution and ensure a smooth launch.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Solutions That Shine
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From web and mobile development to cloud solutions and consulting,
              we offer comprehensive services to bring your digital vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-2xl border border-border hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven methodology that ensures your project is delivered on time,
              on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="inline-flex w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center font-display text-xl font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}
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
                Need a Custom Solution?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Every business is unique. Let's discuss how we can tailor our
                services to meet your specific needs.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-10">
                <Link to="/contact">
                  Schedule a Consultation
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

export default Services;
