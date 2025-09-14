import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">About Coreica</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Empowering Core Engineering Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Coreica is dedicated to bridging the gap between traditional core engineering disciplines and modern global opportunities, 
            ensuring that mechanical, civil, electrical, and ECE talents find their perfect career match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with the vision to transform how core engineering professionals connect with opportunities, 
              Coreica recognizes that traditional engineering disciplines are the backbone of innovation and infrastructure development.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We understand that while technology evolves rapidly, the fundamental principles of mechanical systems, 
              structural design, electrical power, and communication networks remain critical to our world's advancement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform is specifically designed to showcase the unique value that core engineering professionals bring to modern industries, 
              from traditional manufacturing to cutting-edge renewable energy and smart infrastructure projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Mission-Driven", description: "Connecting talent with purpose" },
              { icon: Users, title: "Community-First", description: "Building lasting relationships" },
              { icon: Award, title: "Excellence-Focused", description: "Promoting quality over quantity" },
              { icon: Globe, title: "Global Reach", description: "Opportunities worldwide" }
            ].map((value, index) => (
              <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary mb-2">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Why Core Engineering Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-primary">Infrastructure Foundation</h4>
              <p className="text-muted-foreground">
                From bridges to power grids, core engineers build the infrastructure that societies depend on every day.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-secondary">Innovation Catalyst</h4>
              <p className="text-muted-foreground">
                Core engineers adapt traditional principles to solve modern challenges in sustainability and efficiency.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-3 text-accent">Global Impact</h4>
              <p className="text-muted-foreground">
                Core engineering solutions scale globally, making careers in these fields both stable and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}