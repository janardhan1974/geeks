import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const values = [
  "Excellence in every engagement",
  "Innovation-driven solutions",
  "Collaborative partnerships",
  "Sustainable growth focus",
  "Integrity and transparency",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Modern office showcasing teamwork and innovation"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content Column */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a forward-thinking organization committed to delivering exceptional value 
              through strategic partnerships and innovative solutions. With a team of dedicated 
              professionals and a proven track record, we help organizations navigate complex 
              challenges and achieve their most ambitious goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on the principles of excellence and integrity, we have grown into a trusted 
              partner for organizations seeking transformative change. Our approach combines deep 
              industry expertise with cutting-edge methodologies to create sustainable impact.
            </p>

            {/* Values List */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Core Values</h3>
              {values.map((value, index) => (
                <div
                  key={value}
                  className={`flex items-center space-x-3 animate-fade-in-up stagger-delay-${(index % 4) + 1}`}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
