import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useAuth } from "@/hooks/useAuth";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import CareersSection from "@/components/sections/CareersSection";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ScrollAnimation from "@/components/ui/scroll-animation";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Zap,
  Target,
  ChevronDown,
  LogIn,
  LogOut
} from "lucide-react";
import coreicaLogo from '@/assets/coreica-logo-official.png';
import heroBg from '@/assets/hero-background.jpg';
import visionIllustration from '@/assets/vision-illustration.jpg';

export default function Index() {
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
      
      <main className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <img src={coreicaLogo} alt="Coreica" className="h-10" />
              <div className="flex items-center space-x-6">
                {user && (
                  <>
                    <span className="text-sm text-muted-foreground">
                      Welcome, {profile?.full_name || user.email}
                    </span>
                    {(profile?.role === 'admin' || profile?.role === 'company') && (
                      <Button 
                        variant="ghost" 
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => navigate('/dashboard')}
                      >
                        Dashboard
                      </Button>
                    )}
                  </>
                )}
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => scrollToSection('about')}
                >
                  About
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => scrollToSection('careers')}
                >
                  Careers
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </Button>
                <Button 
                  variant="neon" 
                  size="sm"
                  onClick={handleAuthAction}
                >
                  {user ? (
                    <>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-neon-cyan/20 to-transparent blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-neon-purple/20 to-transparent blur-3xl animate-float" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-2xl animate-pulse-glow" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow text-glow">
                  Bridging Core Engineering
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">with Global Opportunities</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-5xl mx-auto leading-relaxed drop-shadow-lg">
                Empowering the next generation from <span className="text-secondary font-bold drop-shadow-lg">Mechanical</span>, 
                <span className="text-accent font-bold drop-shadow-lg"> Civil</span>, 
                <span className="text-primary font-bold drop-shadow-lg"> Electrical</span>, 
                <span className="text-secondary font-bold drop-shadow-lg"> ECE</span>, and 
                <span className="text-accent font-bold drop-shadow-lg"> Polytechnic</span> fields to connect with cutting-edge industries and global career opportunities
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button 
                  size="xl" 
                  variant="neon"
                  className="px-12 py-8 text-xl font-bold min-w-[250px] group animate-shimmer shadow-2xl hover:shadow-neon transform hover:scale-105 transition-all duration-500"
                  onClick={() => navigate('/apply')}
                >
                  Apply for Jobs
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  size="xl" 
                  variant="outline" 
                  className="px-12 py-8 text-xl font-bold border-3 border-white/40 text-white hover:bg-white/15 min-w-[250px] backdrop-blur-sm hover:border-primary/60 transition-all duration-500 hover:shadow-glow-primary"
                  onClick={() => navigate('/post-job')}
                >
                  Post Opportunities
                </Button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-white/80">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15K+</div>
                  <div className="text-sm uppercase tracking-wider">Students Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm uppercase tracking-wider">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-sm uppercase tracking-wider">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm uppercase tracking-wider">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer hover:scale-110 transition-all duration-300 group"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="p-4 rounded-full border-2 border-white/40 backdrop-blur-md group-hover:border-primary/80 group-hover:bg-primary/10 transition-all duration-500 shadow-lg hover:shadow-glow-primary">
              <ChevronDown className="w-7 h-7 text-white group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-32 bg-gradient-to-r from-card/30 via-background to-card/30 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary text-lg px-6 py-2">
                  Our Impact
                </Badge>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Transforming Engineering Careers Globally
                </h2>
              </div>
            </ScrollAnimation>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: 15000, suffix: '+', label: 'Students Connected', icon: Users, color: 'from-primary to-secondary' },
                { number: 500, suffix: '+', label: 'Partner Companies', icon: Building2, color: 'from-secondary to-accent' },
                { number: 95, suffix: '%', label: 'Placement Rate', icon: TrendingUp, color: 'from-accent to-primary' },
                { number: 50, suffix: '+', label: 'Countries Reached', icon: Award, color: 'from-primary to-accent' }
              ].map((stat, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 100}>
                  <Card className="text-center glass-morphism hover:shadow-glow-accent hover:scale-105 transition-all duration-700 group magnetic-hover">
                    <CardContent className="pt-8 pb-6">
                      <div className={`flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} animate-glow-pulse group-hover:animate-bounce-gentle`}>
                        <stat.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className="text-muted-foreground font-semibold text-lg">{stat.label}</p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="section-spacing bg-gradient-to-br from-background via-primary/5 to-card/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-neon-cyan/10 to-transparent blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-neon-purple/10 to-transparent blur-3xl animate-float" style={{ animationDelay: '4s' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center mb-20">
                <Badge variant="outline" className="mb-6 border-secondary/30 text-secondary text-lg px-6 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  Core Features
                </Badge>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                  Unlock Your Engineering Potential
                </h2>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Comprehensive platform designed specifically for core engineering disciplines, 
                  connecting <span className="text-primary font-bold">talent</span> with 
                  <span className="text-secondary font-bold"> opportunity</span> on a global scale
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  icon: Globe,
                  title: "Global Industry Network",
                  description: "Connect directly with leading companies worldwide seeking mechanical, civil, electrical, and ECE expertise across emerging and traditional sectors",
                  features: ["Fortune 500 Companies", "Emerging Tech Startups", "Global Infrastructure Projects", "Direct Recruitment Access"],
                  gradient: "from-primary to-secondary",
                  delay: 0
                },
                {
                  icon: Target,
                  title: "AI-Powered Matching",
                  description: "Advanced algorithms that understand your unique engineering background and match you with opportunities that align with your skills and career goals",
                  features: ["Comprehensive Skill Assessment", "Personality & Culture Fit", "Career Path Optimization", "Real-time Opportunity Alerts"],
                  gradient: "from-secondary to-accent",
                  delay: 200
                },
                {
                  icon: Zap,
                  title: "Career Acceleration Hub",
                  description: "Fast-track your career with exclusive programs, industry mentorship, and cutting-edge training designed for core engineering professionals",
                  features: ["Industry Mentorship Program", "Technical Skill Development", "Leadership Training", "Global Internship Opportunities"],
                  gradient: "from-accent to-primary",
                  delay: 400
                }
              ].map((feature, index) => (
                <ScrollAnimation key={index} direction="up" delay={feature.delay}>
                  <Card className="neon-border glass-morphism hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-700 group magnetic-hover h-full">
                    <CardHeader className="pb-6">
                      <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} mb-6 group-hover:animate-spin-slow transition-all duration-500 animate-glow-pulse`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <CheckCircle className="w-5 h-5 mr-3 text-primary group-hover:text-secondary transition-colors" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <Button variant="outline" className="w-full group-hover:border-primary/50 group-hover:text-primary transition-all">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            {/* Additional Features Grid */}
            <ScrollAnimation direction="up" delay={600}>
              <div className="mt-24">
                <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
                  Why Engineering Professionals Choose Coreica
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: "🎯", title: "Precision Matching", description: "99% accuracy in job-skill alignment" },
                    { icon: "🚀", title: "Fast Placement", description: "Average 30-day placement time" },
                    { icon: "🌍", title: "Global Reach", description: "Opportunities in 50+ countries" },
                    { icon: "🏆", title: "Premium Support", description: "Dedicated career advisors" }
                  ].map((item, index) => (
                    <div key={index} className="text-center glass-morphism rounded-2xl p-8 hover:shadow-glow-accent transition-all duration-500 group">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <h4 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Enhanced Vision Section */}
        <section className="section-spacing bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollAnimation direction="left" delay={100}>
                <div>
                  <Badge variant="outline" className="mb-6 border-primary/30 text-primary text-lg px-6 py-2">
                    <Target className="w-4 h-4 mr-2" />
                    Our Vision
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    The Future of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Core Engineering</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We envision a world where traditional engineering excellence seamlessly integrates with cutting-edge opportunities. 
                    Where mechanical innovations meet global markets, civil engineering shapes smart cities, and electrical systems power the connected future.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Coreica is building the bridge between timeless engineering principles and tomorrow's opportunities, 
                    ensuring that core engineering talent doesn't just adapt to change – <span className="text-primary font-bold">but leads it</span>.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    {[
                      { icon: "🏗️", title: "Infrastructure 4.0", description: "Smart cities and sustainable infrastructure" },
                      { icon: "⚡", title: "Energy Revolution", description: "Renewable and efficient power systems" },
                      { icon: "🚀", title: "Space Engineering", description: "Aerospace and satellite technologies" },
                      { icon: "🌱", title: "Green Technology", description: "Environmental and sustainability solutions" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 glass-morphism rounded-xl p-4 hover:shadow-glow-primary transition-all duration-300">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="neon" size="xl" className="group shadow-2xl animate-shimmer">
                    Join Our Mission
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation direction="right" delay={200}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700 animate-glow-pulse" />
                  <div className="relative glass-morphism rounded-3xl p-2 shadow-2xl">
                    <img 
                      src={visionIllustration} 
                      alt="Future of Engineering" 
                      className="relative w-full h-auto rounded-2xl hover:shadow-glow-accent transition-all duration-700 hover:scale-[1.02]"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 glass-morphism rounded-2xl p-4 animate-float shadow-glow-primary">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-bold text-foreground">AI-Powered</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 glass-morphism rounded-2xl p-4 animate-float shadow-glow-secondary" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                      <span className="text-sm font-bold text-foreground">Global Network</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* About Section */}
        <ScrollAnimation direction="up" delay={100}>
          <AboutSection />
        </ScrollAnimation>

        {/* Services Section */}
        <ScrollAnimation direction="left" delay={200}>
          <ServicesSection />
        </ScrollAnimation>

        {/* Careers Section */}
        <ScrollAnimation direction="right" delay={100}>
          <CareersSection />
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation direction="up" delay={150}>
          <ContactSection />
        </ScrollAnimation>

        {/* Premium CTA Section */}
        <section className="section-spacing bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
            <ScrollAnimation direction="up" delay={100}>
              <div className="glass-morphism rounded-3xl p-12 md:p-16 shadow-2xl">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center animate-glow-pulse">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                  Ready to Bridge Your Future?
                </h2>
                
                <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Join thousands of engineering students and professionals who are already part of the 
                  <span className="text-primary font-bold"> Coreica ecosystem</span>. 
                  Your next career breakthrough is just one click away.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: "⚡", title: "Instant Access", description: "Start your journey immediately" },
                    { icon: "🎯", title: "Perfect Matches", description: "AI finds your ideal opportunities" },
                    { icon: "🌟", title: "Premium Support", description: "Dedicated career guidance" }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl mb-3">{benefit.icon}</div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="xl" 
                    variant="neon"
                    className="px-12 py-8 text-xl font-bold min-w-[250px] group animate-shimmer shadow-2xl hover:shadow-neon transform hover:scale-105 transition-all duration-500"
                    onClick={() => navigate('/apply')}
                  >
                    Apply for Jobs
                    <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300 text-2xl">🚀</span>
                  </Button>
                  <Button 
                    size="xl" 
                    variant="outline" 
                    className="px-12 py-8 text-xl font-bold border-3 min-w-[250px] hover:bg-primary/5 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-500"
                    onClick={() => navigate('/post-job')}
                  >
                    Post Opportunities
                  </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-4">
                    🔒 <span className="font-semibold">Trusted by 15,000+ engineers</span> | 
                    ⭐ <span className="font-semibold">4.9/5 success rate</span> | 
                    🌍 <span className="font-semibold">50+ countries served</span>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Premium Footer */}
        <footer className="py-16 bg-gradient-to-br from-card via-background to-card border-t border-border/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <img src={coreicaLogo} alt="Coreica" className="h-12 hover:scale-105 transition-transform duration-300" />
                <p className="text-muted-foreground leading-relaxed">
                  Bridging Core Engineering with Global Opportunities. 
                  <span className="text-primary font-semibold"> Building the future, one engineer at a time.</span>
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: "🌐", label: "Global" },
                    { icon: "⚡", label: "Fast" },
                    { icon: "🎯", label: "Accurate" },
                    { icon: "🚀", label: "Innovative" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6 text-foreground">Platform</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Find Jobs", href: "/apply" },
                    { label: "Post Jobs", href: "/post-job" },
                    { label: "Companies", href: "#" },
                    { label: "Students", href: "#" }
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6 text-foreground">Resources</h3>
                <ul className="space-y-3">
                  {[
                    "Career Guide",
                    "Interview Tips", 
                    "Success Stories",
                    "Industry Insights"
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-6 text-foreground">Company</h3>
                <ul className="space-y-3">
                  {[
                    "About Us",
                    "Contact",
                    "Privacy Policy",
                    "Terms of Service"
                  ].map((item, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border/30 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-center md:text-left">
                  © 2024 Coreica. All rights reserved. 
                  <span className="text-primary font-semibold"> Building the future of core engineering.</span>
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>15K+ Engineers Connected</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span>500+ Companies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
      
      <ScrollToTop />
    </div>
  );
}