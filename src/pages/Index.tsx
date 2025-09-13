import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Users, BookOpen, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import coreicaLogo from "@/assets/coreica-logo-official.png";
import visionIllustration from "@/assets/vision-illustration.jpg";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.animate-on-scroll');
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={coreicaLogo} alt="Coreica" className="h-8 w-auto" />
              <span className="font-display text-xl font-bold text-neon-cyan">Coreica</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection(heroRef)}
                className="text-foreground/80 hover:text-accent transition-colors"
              >
                Home
              </button>
              <a href="#about" className="text-foreground/80 hover:text-accent transition-colors">About</a>
              <button 
                onClick={() => scrollToSection(featuresRef)}
                className="text-foreground/80 hover:text-accent transition-colors"
              >
                Features
              </button>
              <a href="#vision" className="text-foreground/80 hover:text-accent transition-colors">Vision</a>
            </div>
            <Button variant="neon" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 22, 41, 0.7), rgba(15, 22, 41, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-display text-5xl md:text-8xl font-black mb-8 leading-tight">
              <span className="text-gradient animate-glow-pulse">Bridging Core Engineering</span>
              <br />
              <span className="text-foreground">with Global</span>
              <br />
              <span className="text-neon-cyan">Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering non-tech students from Mechanical, Civil, Electrical, ECE, and Polytechnic fields 
              to connect with industries, institutions, and global employment opportunities.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button variant="neon" size="xl" className="btn-glow group">
                Join the Future
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="ghost-neon" size="xl" className="group">
                <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Platform
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle cursor-pointer hover:scale-125 transition-transform" 
             onClick={() => scrollToSection(featuresRef)}>
          <div className="p-3 rounded-full border border-accent/30 backdrop-blur-sm hover:border-accent/60 transition-colors">
            <ChevronDown className="h-6 w-6 text-accent" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-gradient-to-b from-card/20 to-background/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-neon">
              Redefining Core Engineering
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              In a world rapidly embracing digital transformation, traditional engineering disciplines remain 
              the backbone of innovation. Coreica recognizes that mechanical engineers build the machines, 
              civil engineers shape our cities, electrical engineers power our world, and ECE professionals 
              connect our future.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              We're not just a platform – we're a movement that bridges the gap between core engineering 
              excellence and the digital economy, creating unprecedented opportunities for talented minds 
              who build tomorrow's world.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-spacing bg-gradient-to-b from-background to-card/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-neon">
              Unlock Your Potential
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Four pillars of excellence connecting core engineering talent with global opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Industries",
                description: "Connect with leading companies worldwide seeking core engineering expertise",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: Users,
                title: "Student Network",
                description: "Join a community of ambitious non-tech students building the future",
                gradient: "from-purple-500 to-pink-400"
              },
              {
                icon: Zap,
                title: "Career Opportunities",
                description: "Access exclusive job openings tailored for mechanical, civil, electrical, and ECE professionals",
                gradient: "from-green-500 to-teal-400"
              },
              {
                icon: BookOpen,
                title: "Skills & Training",
                description: "Enhance your expertise with industry-relevant courses and certifications",
                gradient: "from-orange-500 to-red-400"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="card-neon animate-on-scroll group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 shadow-lg shadow-current/25`}>
                  <feature.icon className="h-10 w-10 text-white relative z-10" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-foreground group-hover:text-gradient transition-all duration-500 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300 relative z-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-spacing bg-gradient-to-br from-card/40 to-background/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-neon">
                The Future is <span className="text-neon-cyan">Convergence</span>
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
                We envision a world where traditional engineering excellence seamlessly integrates 
                with cutting-edge technology. Where mechanical innovations meet digital intelligence, 
                where civil engineering embraces smart cities, and where electrical systems power 
                the connected future.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Coreica is building the bridge between timeless engineering principles and tomorrow's 
                digital landscape, ensuring that core engineering talent doesn't just adapt to change – 
                but leads it.
              </p>
              <div className="flex gap-4">
                <Button variant="primary-glow" size="lg" className="group">
                  Be Part of the Vision
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="animate-on-scroll animate-float relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={visionIllustration} 
                alt="Future of Engineering" 
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:shadow-glow-accent transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-gradient-neon relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-on-scroll">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
              Join the Future with <span className="text-neon">Coreica</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto">
              Don't just witness the transformation of engineering – be the driving force behind it.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Button variant="neon" size="xl" className="btn-glow animate-glow-pulse group">
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button variant="ghost-neon" size="xl" className="group">
                <BookOpen className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={coreicaLogo} alt="Coreica" className="h-8 w-auto" />
                <span className="font-display text-xl font-bold text-neon-cyan">Coreica</span>
              </div>
              <p className="text-foreground/70">
                Bridging core engineering excellence with global opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Platform</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">Industries</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Students</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Vision</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-foreground/60">
              © 2024 Coreica. All rights reserved. Building the future of core engineering.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;