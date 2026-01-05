import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@azurant.com",
    description: "Drop us a line anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "San Francisco, CA",
    description: "123 Tech Street, Suite 100",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "We respond quickly",
  },
];

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Have a project in mind? We'd love to hear about it. Reach out and
              let's explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send us a message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name {errors.name && <span className="text-destructive">*</span>}
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className={errors.name ? "border-destructive rounded-lg" : "rounded-lg"}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email {errors.email && <span className="text-destructive">*</span>}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={errors.email ? "border-destructive rounded-lg" : "rounded-lg"}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="rounded-lg"
                      {...register("company")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message {errors.message && <span className="text-destructive">*</span>}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      className={errors.message ? "border-destructive rounded-lg resize-none" : "rounded-lg resize-none"}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Sending message" : "Send message"}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? Here's how you can contact us.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex gap-4 p-6 bg-card rounded-2xl border border-border hover:shadow-warm transition-all duration-300 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-muted-foreground text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="aspect-video bg-secondary rounded-2xl border border-border overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. A simple website might take 4-6 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What's your pricing model?",
                answer:
                  "We offer both fixed-price and time-and-materials pricing models. The best approach depends on your project's scope and requirements. We're happy to discuss what works best for you.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! We offer various support and maintenance packages to keep your software running smoothly after launch. We can also provide training for your team.",
              },
              {
                question: "Can you work with our existing team?",
                answer:
                  "Absolutely. We're experienced in collaborating with in-house teams and can adapt our workflow to complement your existing processes.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
