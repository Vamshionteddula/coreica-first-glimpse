import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Building, 
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesSection() {
  const navigate = useNavigate();

  const studentServices = [
    {
      title: "Career Matching",
      description: "AI-powered job matching based on your skills and interests",
      features: ["Skill Assessment", "Personality Matching", "Career Guidance"]
    },
    {
      title: "Profile Building", 
      description: "Professional profile creation and optimization",
      features: ["Resume Enhancement", "Skill Verification", "Portfolio Building"]
    },
    {
      title: "Interview Preparation",
      description: "Comprehensive interview training and practice sessions",
      features: ["Mock Interviews", "Technical Prep", "Soft Skills Training"]
    }
  ];

  const companyServices = [
    {
      title: "Talent Acquisition",
      description: "Access to pre-screened core engineering professionals",
      features: ["Verified Profiles", "Skill Matching", "Quick Hiring"]
    },
    {
      title: "Employer Branding",
      description: "Showcase your company culture and opportunities",
      features: ["Company Profiles", "Culture Videos", "Employee Stories"]
    },
    {
      title: "Recruitment Analytics",
      description: "Data-driven insights for better hiring decisions",
      features: ["Application Analytics", "Hiring Metrics", "Success Tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary">Our Services</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Comprehensive Career Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tailored services for both engineering professionals and companies seeking top-tier core engineering talent
          </p>
        </div>

        {/* For Students */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">For Students & Professionals</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {studentServices.map((service, index) => (
              <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="neon" 
              size="lg" 
              className="group"
              onClick={() => navigate('/apply')}
            >
              Start Your Career Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* For Companies */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gradient-to-r from-secondary to-accent">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">For Companies & Recruiters</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {companyServices.map((service, index) => (
              <Card key={index} className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow hover:scale-105 transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-2 hover:bg-secondary/5"
              onClick={() => navigate('/post-job')}
            >
              Post Your Opportunities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Premium Services */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Premium Services</h3>
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Enhanced services for accelerated career growth and premium talent acquisition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Dedicated Support", description: "Personal career advisor" },
                { icon: TrendingUp, title: "Priority Placement", description: "Fast-track applications" },
                { icon: Briefcase, title: "Executive Search", description: "Senior-level positions" },
                { icon: GraduationCap, title: "Skill Certification", description: "Industry recognition" }
              ].map((premium, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary mb-4 mx-auto">
                    <premium.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{premium.title}</h4>
                  <p className="text-sm text-muted-foreground">{premium.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}