import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import stakeholder1 from "@/assets/stakeholder-1.jpg";
import stakeholder2 from "@/assets/stakeholder-2.jpg";
import stakeholder3 from "@/assets/stakeholder-3.jpg";

const stakeholders = [
  {
    name: "Alex Chen",
    role: "Chief Executive Officer",
    description: "With over 15 years of industry experience, Alex leads our organization with vision and strategic insight.",
    image: stakeholder1,
  },
  {
    name: "Sarah Martinez",
    role: "Director of Operations",
    description: "Sarah ensures operational excellence and drives innovation across all our key initiatives.",
    image: stakeholder2,
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Partnerships",
    description: "Michael builds and maintains strategic relationships that drive our collaborative success.",
    image: stakeholder3,
  },
];

export const StakeholdersSection = () => {
  return (
    <section id="stakeholders" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Stakeholders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated leaders driving our mission forward
          </p>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <Card
              key={stakeholder.name}
              className={`group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in-up stagger-delay-${index + 1}`}
            >
              <CardContent className="p-6">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={stakeholder.image}
                    alt={stakeholder.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stakeholder.name}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {stakeholder.role}
                </p>
                <p className="text-muted-foreground">
                  {stakeholder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
