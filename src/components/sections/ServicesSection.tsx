import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
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
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Our Services</p>
          <h2 className="text-display text-5xl md:text-6xl font-normal mb-8 text-foreground">
            Comprehensive Career
            <br />
            <span className="italic">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tailored services for both engineering professionals and companies seeking top-tier core engineering talent
          </p>
        </div>

        {/* For Students */}
        <div className="mb-24">
          <h3 className="text-display text-2xl font-normal mb-12 text-center text-foreground">
            For Students & Professionals
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {studentServices.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/apply')}
            >
              Start Your Career Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* For Companies */}
        <div>
          <h3 className="text-display text-2xl font-normal mb-12 text-center text-foreground">
            For Companies & Recruiters
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {companyServices.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => navigate('/post-job')}
            >
              Post Your Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
