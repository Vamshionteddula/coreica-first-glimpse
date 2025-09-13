import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useAuth } from "@/hooks/useAuth";
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
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  About
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  Services
                </Button>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                  Bridging Core Engineering
                </span>
                <br />
                <span className="text-white">with Global Opportunities</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Empowering non-tech students from <span className="text-secondary font-semibold">Mechanical</span>, 
                <span className="text-accent font-semibold"> Civil</span>, 
                <span className="text-primary font-semibold"> Electrical</span>, 
                <span className="text-secondary font-semibold"> ECE</span>, and 
                <span className="text-accent font-semibold"> Polytechnic</span> fields to connect with industries and global employment
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  variant="neon"
                  className="px-8 py-6 text-lg font-semibold min-w-[200px] group animate-shimmer"
                  onClick={() => navigate('/apply')}
                >
                  Apply for Jobs
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-lg border-2 border-white/30 text-white hover:bg-white/10 min-w-[200px]"
                  onClick={() => navigate('/post-job')}
                >
                  Post Opportunities
                </Button>
              </div>
            </div>
          </div>

          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform group"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="p-3 rounded-full border-2 border-white/30 backdrop-blur-sm group-hover:border-primary/60 transition-all duration-300">
              <ChevronDown className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: 15000, suffix: '+', label: 'Students Connected', icon: Users },
                { number: 500, suffix: '+', label: 'Partner Companies', icon: Building2 },
                { number: 95, suffix: '%', label: 'Placement Rate', icon: TrendingUp },
                { number: 50, suffix: '+', label: 'Countries Reached', icon: Award }
              ].map((stat, index) => (
                <Card key={index} className="text-center border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-br from-background to-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Unlock Your Engineering Potential
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive platform designed specifically for core engineering disciplines
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Industry Network",
                  description: "Connect directly with leading companies worldwide seeking mechanical, civil, electrical, and ECE expertise",
                  features: ["MNCs & Startups", "Direct Recruitment", "Global Opportunities"]
                },
                {
                  icon: Target,
                  title: "Tailored Job Matching",
                  description: "AI-powered matching system that connects your engineering skills with the right opportunities",
                  features: ["Skill Assessment", "Smart Matching", "Career Guidance"]
                },
                {
                  icon: Zap,
                  title: "Career Acceleration",
                  description: "Fast-track your career with exclusive internships, training programs, and mentorship opportunities",
                  features: ["Internship Programs", "Skill Development", "Industry Mentorship"]
                }
              ].map((feature, index) => (
                <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow-lg hover:scale-105 transition-all duration-500 group">
                  <CardHeader>
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-4 group-hover:animate-spin-slow">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Our Vision</Badge>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                  The Future of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Core Engineering</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We envision a world where traditional engineering excellence seamlessly integrates with cutting-edge opportunities. 
                  Where mechanical innovations meet global markets, civil engineering shapes smart cities, and electrical systems power the connected future.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Coreica is building the bridge between timeless engineering principles and tomorrow's opportunities, 
                  ensuring that core engineering talent doesn't just adapt to change – but leads it.
                </p>
                <Button variant="neon" size="lg" className="group">
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <img 
                  src={visionIllustration} 
                  alt="Future of Engineering" 
                  className="relative w-full h-auto rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Ready to Bridge Your Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of engineering students and professionals who are already part of the Coreica ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="neon"
                className="px-8 py-6 text-lg font-semibold min-w-[200px] group"
                onClick={() => navigate('/apply')}
              >
                Apply for Jobs
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-2 min-w-[200px] hover:bg-primary/5"
                onClick={() => navigate('/post-job')}
              >
                Post Opportunities
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-card border-t border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <img src={coreicaLogo} alt="Coreica" className="h-10" />
                <p className="text-muted-foreground">
                  Bridging Core Engineering with Global Opportunities
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Find Jobs</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Post Jobs</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Companies</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Students</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Career Guide</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Interview Tips</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border/50 mt-8 pt-8 text-center">
              <p className="text-muted-foreground">
                © 2024 Coreica. All rights reserved. Building the future of core engineering.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}