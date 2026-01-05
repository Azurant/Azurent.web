import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Smartphone, Palette, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Beautiful, responsive websites and web applications built with modern technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that delight users.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for your business.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates memorable digital experiences.",
  },
];

const heroTitles = [
  "The Software That Transforms Your Vision",
  "The Platform That Scales Your Business",
  "The Code That Powers Innovation",
  "The Solutions That Drive Success",
];

const Index = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % heroTitles.length);
        setIsVisible(true);
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentTitle = heroTitles[currentTitleIndex];

  return (
    <Layout>
      {/* Hero Section - Eden.so Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background grain-texture">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Hero Text - Split Style with Rotation */}
            <div className="space-y-4 mb-12">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
                <div className="relative inline-block min-h-[1.2em]">
                  <span 
                    className={`inline-flex items-center gap-4 transition-opacity duration-300 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span>{currentTitle}</span>
                    <span className="text-muted-foreground/30 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light">|</span>
                  </span>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              Build exceptional digital products with a team that crafts <strong className="text-foreground font-semibold">beautiful code</strong> and <strong className="text-foreground font-semibold">intuitive experiences</strong>. Connect your ideas to reality on a modern development platform.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg group">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Eden.so Style */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              What We Build
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
              Comprehensive software development services from concept to launch, 
              tailored to transform your digital vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Azurant - Eden.so Style */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                    Built For
                    <span className="block">Excellence</span>
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Great software is born from the perfect blend of creativity and 
                    technical excellence. We combine expert craftsmanship with modern 
                    development practices.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {[
                    { title: "Expert Team", description: "Seasoned developers with diverse expertise across modern tech stacks" },
                    { title: "Agile Process", description: "Flexible methodology that adapts to your needs and timeline" },
                    { title: "Quality First", description: "Rigorous testing and code review standards ensure reliability" },
                    { title: "Transparent Communication", description: "Regular updates and open collaboration throughout" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden border border-border/50 p-12 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl font-display font-bold text-foreground">
                      10+
                    </div>
                    <p className="text-2xl text-foreground font-medium">Years of Excellence</p>
                    <p className="text-muted-foreground text-lg">
                      Delivering innovative solutions for clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Eden.so Style */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Ready to Build
              <span className="block">Something Great?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate and create something extraordinary together. 
              Your next great project starts with a conversation.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-10 py-6 text-lg">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
