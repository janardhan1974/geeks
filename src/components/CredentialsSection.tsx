import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Medal } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "ISO 9001 Certified",
    description: "Quality Management System certification demonstrating our commitment to excellence",
    year: "2023",
  },
  {
    icon: Star,
    title: "Industry Excellence Award",
    description: "Recognized for outstanding innovation and service delivery",
    year: "2023",
  },
  {
    icon: Trophy,
    title: "Best Workplace Award",
    description: "Honored for creating an exceptional work environment and culture",
    year: "2022",
  },
  {
    icon: Medal,
    title: "Sustainability Leader",
    description: "Acknowledged for environmental responsibility and sustainable practices",
    year: "2022",
  },
];

export const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Credentials & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our achievements reflect our dedication to excellence and continuous improvement
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <Card
                key={credential.title}
                className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30 animate-scale-in stagger-delay-${(index % 2) + 1}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {credential.title}
                        </h3>
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {credential.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "200+", label: "Happy Clients" },
            { value: "50+", label: "Team Members" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in-up stagger-delay-${index + 1}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
