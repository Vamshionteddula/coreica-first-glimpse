import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import CareersSection from "@/components/sections/CareersSection";
import HeroSection from "@/components/sections/HeroSection";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ScrollAnimation from "@/components/ui/scroll-animation";
import ParticleField from "@/components/ui/particle-field";
import Marquee from "@/components/ui/marquee";
import { ArrowRight, LogIn, LogOut, Sparkles, Star, Zap, Target, Shield, Users, Globe } from "lucide-react";
import coreicaLogo from '@/assets/coreica-logo-official.png';
import heroAbstract from '@/assets/hero-abstract-1.jpg';
import floatingSculpture1 from '@/assets/floating-sculpture-1.jpg';
import floatingSculpture2 from '@/assets/floating-sculpture-2.jpg';
import techWorkspace from '@/assets/tech-workspace.jpg';
import liquidGold from '@/assets/liquid-gold.jpg';
import patternBg from '@/assets/pattern-bg.jpg';

export default function Index() {
  const navigate = useNavigate();
  const { user, profile, userRole, signOut } = useAuth();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const partners = [
    "Microsoft", "Google", "Amazon", "Siemens", "Tesla", "Boeing", 
    "Caterpillar", "GE", "Honeywell", "ABB", "Schneider Electric", "Bosch"
  ];

  const features = [
    { icon: Zap, title: "Instant Matching", description: "AI-powered job matching in seconds" },
    { icon: Target, title: "Precision Placement", description: "95% placement success rate" },
    { icon: Shield, title: "Verified Companies", description: "Only top-tier employers" },
    { icon: Users, title: "Community", description: "10,000+ active engineers" },
    { icon: Globe, title: "Global Reach", description: "Opportunities in 50+ countries" },
    { icon: Star, title: "Premium Support", description: "Dedicated career advisors" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Particle Background */}
      <ParticleField />

      <main className="relative">
        {/* Premium Navigation */}
        <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo with Premium Glow Effect */}
            <div 
              className="logo-container group cursor-pointer" 
              onClick={() => scrollToSection('hero')}
            >
              <div className="logo-glow" />
              <img 
                src={coreicaLogo} 
                alt="Coreica" 
                className="logo-image h-10 md:h-12"
              />
              <span className="hidden md:block text-xl md:text-2xl font-display font-semibold tracking-tight text-gradient">
                Coreica
              </span>
            </div>
            
            {/* Navigation Pill */}
            <div className="nav-pill glass">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-xs md:text-sm font-medium text-foreground hover:text-accent transition-colors hover-underline"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hidden sm:block text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-underline"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="hidden sm:block text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-underline"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="hidden md:block text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover-underline"
              >
                Careers
              </button>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="magnetic-hover text-xs md:text-sm"
              >
                Contact
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <HeroSection />

        {/* Partner Marquee Section */}
        <section className="py-16 border-y border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Trusted by industry leaders worldwide
            </p>
          </div>
          <Marquee pauseOnHover speed={50} className="[--gap:3rem]">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="text-2xl md:text-3xl font-display font-medium text-foreground/30 hover:text-accent transition-colors duration-300 cursor-default px-4"
              >
                {partner}
              </div>
            ))}
          </Marquee>
        </section>

        {/* We Are Section - Premium */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <img src={patternBg} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <ScrollAnimation direction="up" delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative image-premium shadow-glow">
                    <img 
                      src={heroAbstract}
                      alt="Engineering Excellence"
                      className="w-full h-[550px] object-cover rounded-3xl"
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-medium animate-float-slow">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Star className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold text-gradient">98%</div>
                        <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="decorative-line mb-6" />
                  <p className="text-sm text-accent mb-4 uppercase tracking-wider font-medium">We are</p>
                  <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-foreground leading-tight">
                    Not just a simple
                    <br />
                    <span className="text-gradient">platform.</span>
                  </h2>
                  <h3 className="text-display text-3xl md:text-4xl font-normal text-muted-foreground mb-8">
                    Coreica™
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We bridge the gap between traditional engineering excellence and modern career opportunities. 
                    Connecting mechanical, civil, electrical, ECE, and polytechnic talent with global industries 
                    that value precision, innovation, and expertise.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="default" size="lg" className="magnetic-hover group">
                      Learn about us
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="magnetic-hover" onClick={handleAuthAction}>
                      {user ? (
                        <>
                          <LogOut className="mr-2 w-4 h-4" />
                          Sign Out
                        </>
                      ) : (
                        <>
                          <LogIn className="mr-2 w-4 h-4" />
                          Sign In
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-muted/20">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center mb-16">
                <div className="decorative-line mx-auto mb-6" />
                <p className="text-sm text-accent mb-4 uppercase tracking-wider font-medium">Why Choose Us</p>
                <h2 className="text-display text-4xl md:text-5xl font-normal text-foreground">
                  Built for Engineering
                  <span className="text-gradient"> Excellence</span>
                </h2>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 100}>
                  <div className="group p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 magnetic-hover hover-glow">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                  <div className="decorative-line mb-6" />
                  <p className="text-sm text-accent mb-4 uppercase tracking-wider font-medium">Our Work</p>
                  <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground">
                    Success Stories
                  </h2>
                </div>
                <p className="text-6xl font-display text-gradient font-bold">3</p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mechanical Excellence",
                  subtitle: "Connecting precision engineering with global manufacturing",
                  image: floatingSculpture2,
                  stat: "2.5K+",
                  label: "Engineers Placed"
                },
                {
                  title: "Civil Innovation",
                  subtitle: "Building infrastructure careers for tomorrow's cities",
                  image: techWorkspace,
                  stat: "500+",
                  label: "Projects Delivered"
                },
                {
                  title: "Electrical Future",
                  subtitle: "Powering careers in sustainable energy systems",
                  image: liquidGold,
                  stat: "98%",
                  label: "Success Rate"
                }
              ].map((project, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 150}>
                  <div className="group cursor-pointer magnetic-hover">
                    <div className="relative overflow-hidden rounded-3xl mb-6 image-premium">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span className="inline-flex items-center gap-2 text-sm text-primary-foreground bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <Sparkles className="w-4 h-4" />
                          View case study
                        </span>
                      </div>
                      {/* Stats Badge */}
                      <div className="absolute top-6 right-6 glass rounded-xl p-3 text-center">
                        <div className="text-xl font-display font-bold text-gradient">{project.stat}</div>
                        <div className="text-xs text-muted-foreground">{project.label}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground">{project.subtitle}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src={patternBg} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center mb-16">
                <div className="decorative-line mx-auto mb-6" />
                <p className="text-sm text-accent mb-4 uppercase tracking-wider font-medium">Services</p>
                <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-normal text-foreground max-w-4xl mx-auto leading-relaxed">
                  We connect engineers with opportunities, build careers, and accelerate growth — with 
                  <span className="text-gradient"> clarity, purpose, and detail</span>.
                </h2>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Career Matching",
                  subtitle: "Opportunities that resonate with your skills",
                  image: floatingSculpture1,
                  description: "AI-powered matching algorithm finds the perfect role for your unique expertise."
                },
                {
                  title: "Profile Building",
                  subtitle: "Designed to impress recruiters",
                  image: floatingSculpture2,
                  description: "Expert profile optimization to showcase your engineering achievements."
                },
                {
                  title: "Industry Connect",
                  subtitle: "Every connection, carefully considered",
                  image: techWorkspace,
                  description: "Direct access to hiring managers at top engineering companies worldwide."
                }
              ].map((service, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 150}>
                  <div className="group magnetic-hover">
                    <div className="relative overflow-hidden rounded-3xl mb-6 image-premium">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-sm text-accent mb-3">{service.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-accent/10 to-transparent rounded-full" />
          </div>
          
          <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
            <ScrollAnimation direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Ready to Transform Your Career?</span>
              </div>
              
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8 leading-tight">
                Partner with a team that turns
                <br />
                engineering talent into 
                <span className="text-gradient"> powerful career journeys</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="px-12 py-7 text-base magnetic-hover animate-pulse-glow group" onClick={() => navigate('/apply')}>
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="px-12 py-7 text-base magnetic-hover" onClick={() => scrollToSection('contact')}>
                  Talk to Us
                </Button>
              </div>
              
              <p className="text-muted-foreground max-w-xl mx-auto">
                Join thousands of engineering professionals who have already connected with global opportunities through Coreica.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* About Section */}
        <div id="about">
          <ScrollAnimation direction="up" delay={100}>
            <AboutSection />
          </ScrollAnimation>
        </div>

        {/* Careers Section */}
        <div id="careers">
          <ScrollAnimation direction="up" delay={100}>
            <CareersSection />
          </ScrollAnimation>
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ScrollAnimation direction="up" delay={100}>
            <ContactSection />
          </ScrollAnimation>
        </div>

        {/* Premium Footer */}
        <footer className="py-24 border-t border-border bg-card/50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-3">
            <img src={patternBg} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <div className="logo-container group">
                  <div className="logo-glow" />
                  <img src={coreicaLogo} alt="Coreica" className="logo-image h-12" />
                  <span className="text-xl font-display font-semibold tracking-tight text-gradient">
                    Coreica
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bridging Core Engineering with Global Opportunities. Your career transformation starts here.
                </p>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                    <div 
                      key={social}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer magnetic-hover"
                    >
                      <span className="text-xs font-medium text-muted-foreground">{social[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6">Platform</h4>
                <ul className="space-y-4">
                  {['Find Jobs', 'Post Jobs', 'About Us', 'Pricing'].map((item) => (
                    <li key={item}>
                      <button className="text-muted-foreground hover:text-accent transition-colors text-sm hover-underline">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6">Resources</h4>
                <ul className="space-y-4">
                  {['Career Guide', 'Interview Tips', 'Success Stories', 'Blog'].map((item) => (
                    <li key={item}>
                      <span className="text-muted-foreground text-sm hover:text-accent transition-colors cursor-pointer hover-underline">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-6">Account</h4>
                <ul className="space-y-4">
                  <li>
                    <button 
                      onClick={handleAuthAction}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2 hover-underline"
                    >
                      {user ? (
                        <>
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </>
                      ) : (
                        <>
                          <LogIn className="w-4 h-4" />
                          Sign In
                        </>
                      )}
                    </button>
                  </li>
                  {user && (
                    <li>
                      <span className="text-muted-foreground text-sm">
                        {profile?.full_name || user.email}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Coreica. All rights reserved.
              </p>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <span key={item} className="text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </main>
    </div>
  );
}