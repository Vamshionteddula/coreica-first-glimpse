import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import CareersSection from "@/components/sections/CareersSection";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { ArrowRight, LogIn, LogOut } from "lucide-react";
import coreicaLogo from '@/assets/coreica-logo-official.png';
import heroBg from '@/assets/hero-background.jpg';
import visionIllustration from '@/assets/vision-illustration.jpg';

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

  // Floating images data
  const floatingImages = [
    { src: heroBg, alt: "Engineering 1", className: "absolute top-20 left-[15%] w-28 h-36 object-cover rounded-2xl animate-float-slow", delay: "0s" },
    { src: visionIllustration, alt: "Engineering 2", className: "absolute top-12 left-[35%] w-24 h-32 object-cover rounded-2xl animate-float-medium", delay: "1s" },
    { src: heroBg, alt: "Engineering 3", className: "absolute top-8 right-[30%] w-28 h-36 object-cover rounded-2xl animate-float-slow", delay: "0.5s" },
    { src: visionIllustration, alt: "Engineering 4", className: "absolute top-24 right-[12%] w-24 h-32 object-cover rounded-2xl animate-float-medium", delay: "1.5s" },
    { src: heroBg, alt: "Engineering 5", className: "absolute top-[40%] left-[8%] w-24 h-32 object-cover rounded-2xl animate-float-fast", delay: "2s" },
    { src: visionIllustration, alt: "Engineering 6", className: "absolute top-[45%] right-[6%] w-28 h-36 object-cover rounded-2xl animate-float-slow", delay: "0.8s" },
    { src: heroBg, alt: "Engineering 7", className: "absolute bottom-[25%] left-[20%] w-24 h-32 object-cover rounded-2xl animate-float-medium", delay: "1.2s" },
    { src: visionIllustration, alt: "Engineering 8", className: "absolute bottom-[20%] left-[45%] w-28 h-36 object-cover rounded-2xl animate-float-slow", delay: "0.3s" },
    { src: heroBg, alt: "Engineering 9", className: "absolute bottom-[28%] right-[18%] w-24 h-32 object-cover rounded-2xl animate-float-fast", delay: "1.8s" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="relative">
        {/* Navigation - Premium Style */}
        <nav className="fixed top-6 left-0 right-0 z-50 px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo with Glow Effect */}
            <div className="logo-container group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="logo-glow" />
              <img 
                src={coreicaLogo} 
                alt="Coreica" 
                className="logo-image h-12 group-hover:animate-pulse-glow"
              />
              <span className="hidden md:block text-2xl font-display font-semibold tracking-tight text-gradient">
                Coreica
              </span>
            </div>
            
            {/* Navigation Pill */}
            <div className="nav-pill shadow-sm">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Careers
              </button>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section - Dynamic Premium Style */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow stagger-2" />
          </div>

          {/* Floating Images with Enhanced Animation */}
          {floatingImages.map((img, index) => (
            <div
              key={index}
              className={`${img.className} hover-glow magnetic-hover`}
              style={{ animationDelay: img.delay }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-2xl shadow-medium"
              />
            </div>
          ))}
          
          {/* Center Content with Staggered Animation */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-display text-6xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] text-foreground hero-text-enter">
              Engineering that
              <br />
              <span className="italic text-gradient">resonates</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto hero-text-enter-delay-1">
              A platform connecting core engineering talent with global opportunities — always.
            </p>
            
            <Button 
              size="lg"
              onClick={() => navigate('/apply')}
              className="px-10 py-6 text-base magnetic-hover animate-pulse-glow hero-text-enter-delay-2"
            >
              Learn more
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle hero-text-enter-delay-3">
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce-gentle" />
            </div>
          </div>
        </section>

        {/* Clients/Partners Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto">
              Trusted by companies who value engineering excellence, clarity, and results — from emerging startups to industry-leading names.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"].map((company, index) => (
                <div key={index} className="text-xl font-display text-foreground/50">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* We Are Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <img 
                    src={visionIllustration}
                    alt="Our Team"
                    className="w-full h-[500px] object-cover rounded-3xl"
                  />
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">We are</p>
                  <h2 className="text-display text-5xl md:text-6xl font-normal mb-6 text-foreground">
                    Not just a simple
                    <br />
                    platform.
                  </h2>
                  <h3 className="text-display text-4xl md:text-5xl font-normal text-muted-foreground mb-8">
                    Coreica™
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We bridge the gap between traditional engineering excellence and modern career opportunities. 
                    Connecting mechanical, civil, electrical, ECE, and polytechnic talent with global industries.
                  </p>
                  <Button variant="outline" size="lg">
                    Learn about us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="flex justify-between items-end mb-16">
                <div>
                  <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Work</p>
                  <h2 className="text-display text-5xl md:text-6xl font-normal text-foreground">
                    Our Success Stories
                  </h2>
                </div>
                <p className="text-4xl font-display text-muted-foreground">3</p>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mechanical Excellence",
                  subtitle: "Connecting precision engineering with global manufacturing",
                  image: heroBg
                },
                {
                  title: "Civil Innovation",
                  subtitle: "Building infrastructure careers for tomorrow's cities",
                  image: visionIllustration
                },
                {
                  title: "Electrical Future",
                  subtitle: "Powering careers in sustainable energy systems",
                  image: heroBg
                }
              ].map((project, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 150}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                      <span className="absolute top-4 left-4 text-sm text-background bg-foreground/80 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View case
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.subtitle}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-8">
            <ScrollAnimation direction="up" delay={100}>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider text-center">Services</p>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-center max-w-5xl mx-auto mb-20 leading-relaxed">
                At Coreica, we connect engineers with opportunities, build careers, and accelerate growth — with clarity, purpose, and thoughtful detail.
              </h2>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Career Matching",
                  subtitle: "Opportunities that resonate",
                  image: heroBg
                },
                {
                  title: "Profile Building",
                  subtitle: "Designed to impress",
                  image: visionIllustration
                },
                {
                  title: "Industry Connect",
                  subtitle: "Every connection, considered",
                  image: heroBg
                }
              ].map((service, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 150}>
                  <div className="group">
                    <div className="relative overflow-hidden rounded-2xl mb-6">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.subtitle}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-background">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <ScrollAnimation direction="up" delay={100}>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8">
                Partner with a team that turns
                <br />
                engineering talent into powerful
                <br />
                career journeys
              </h2>
              
              <Button size="lg" className="px-10 py-6 text-base" onClick={() => navigate('/apply')}>
                Start now
              </Button>
              
              <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
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

        {/* Footer */}
        <footer className="py-20 border-t border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="logo-container group">
                  <div className="logo-glow" />
                  <img src={coreicaLogo} alt="Coreica" className="logo-image h-12" />
                  <span className="text-xl font-display font-semibold tracking-tight text-gradient">
                    Coreica
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bridging Core Engineering with Global Opportunities.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={() => navigate('/apply')}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Find Jobs
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => navigate('/post-job')}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      Post Jobs
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      About Us
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-3">
                  <li><span className="text-muted-foreground text-sm">Career Guide</span></li>
                  <li><span className="text-muted-foreground text-sm">Interview Tips</span></li>
                  <li><span className="text-muted-foreground text-sm">Success Stories</span></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Account</h4>
                <ul className="space-y-3">
                  <li>
                    <button 
                      onClick={handleAuthAction}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
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
                  {(userRole === 'admin' || userRole === 'company') && (
                    <li>
                      <button 
                        onClick={() => navigate('/dashboard')}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        Dashboard
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border mt-12 pt-8">
              <p className="text-muted-foreground text-sm text-center">
                © 2024 Coreica. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </main>
    </div>
  );
}
