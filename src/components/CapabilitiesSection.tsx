import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Shield, Globe, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive strategic planning services that align with your organizational goals and drive sustainable growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description: "Cutting-edge innovation strategies that keep you ahead of industry trends and competitive challenges.",
  },
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Proven methodologies to expand your market presence and accelerate business growth opportunities.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Robust risk assessment and mitigation strategies to protect your organization and ensure continuity.",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Expert guidance for entering new markets and establishing successful international operations.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions that modernize operations and enhance efficiency.",
  },
];

export const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your organization's unique needs
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={capability.title}
                className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 hover:-translate-y-1 animate-scale-in stagger-delay-${(index % 3) + 1}`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
