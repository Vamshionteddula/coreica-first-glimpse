import { Target, Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">About Coreica</p>
          <h2 className="text-display text-5xl md:text-6xl font-normal mb-8 text-foreground">
            Empowering Core Engineering
            <br />
            <span className="italic">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Coreica is dedicated to bridging the gap between traditional core engineering disciplines and modern global opportunities, 
            ensuring that mechanical, civil, electrical, and ECE talents find their perfect career match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h3 className="text-display text-3xl font-normal mb-8 text-foreground">Our Story</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with the vision to transform how core engineering professionals connect with opportunities, 
                Coreica recognizes that traditional engineering disciplines are the backbone of innovation and infrastructure development.
              </p>
              <p>
                We understand that while technology evolves rapidly, the fundamental principles of mechanical systems, 
                structural design, electrical power, and communication networks remain critical to our world's advancement.
              </p>
              <p>
                Our platform is specifically designed to showcase the unique value that core engineering professionals bring to modern industries, 
                from traditional manufacturing to cutting-edge renewable energy and smart infrastructure projects.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Mission-Driven", description: "Connecting talent with purpose" },
              { icon: Users, title: "Community-First", description: "Building lasting relationships" },
              { icon: Award, title: "Excellence-Focused", description: "Promoting quality over quantity" },
              { icon: Globe, title: "Global Reach", description: "Opportunities worldwide" }
            ].map((value, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 rounded-3xl p-12">
          <h3 className="text-display text-2xl font-normal mb-8 text-center text-foreground">
            Why Core Engineering Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Infrastructure Foundation",
                description: "From bridges to power grids, core engineers build the infrastructure that societies depend on every day."
              },
              {
                title: "Innovation Catalyst",
                description: "Core engineers adapt traditional principles to solve modern challenges in sustainability and efficiency."
              },
              {
                title: "Global Impact",
                description: "Core engineering solutions scale globally, making careers in these fields both stable and impactful."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
