import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Search,
  Filter,
  Briefcase,
  GraduationCap,
  Building,
  ArrowRight,
  Star,
  Zap,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  salary: string;
  description: string;
  requirements: string[];
  featured?: boolean;
}

export default function CareersSection() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('careers');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const jobOpenings: JobOpening[] = [
    {
      id: "1",
      title: "Senior Mechanical Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      level: "Senior",
      salary: "₹15-25 LPA",
      description: "Lead mechanical design projects for automotive and aerospace clients.",
      requirements: ["5+ years experience", "AutoCAD/SolidWorks", "Project Management"],
      featured: true
    },
    {
      id: "2",
      title: "Civil Engineering Manager",
      department: "Infrastructure",
      location: "Mumbai, India",
      type: "Full-time",
      level: "Manager",
      salary: "₹20-30 LPA",
      description: "Oversee large-scale infrastructure development projects.",
      requirements: ["8+ years experience", "PMP Certification", "Team Leadership"],
      featured: true
    },
    {
      id: "3",
      title: "Electrical Systems Engineer",
      department: "Power & Energy",
      location: "Chennai, India",
      type: "Full-time",
      level: "Mid-level",
      salary: "₹12-20 LPA",
      description: "Design and implement electrical systems for renewable energy projects.",
      requirements: ["3+ years experience", "Power Systems Knowledge", "MATLAB/Simulink"]
    },
    {
      id: "4",
      title: "ECE Research Intern",
      department: "R&D",
      location: "Hyderabad, India",
      type: "Internship",
      level: "Entry",
      salary: "₹25k-40k/month",
      description: "Research and development in IoT and embedded systems.",
      requirements: ["Final year/Graduate", "Embedded C", "Arduino/Raspberry Pi"]
    },
    {
      id: "5",
      title: "Project Engineer - Global",
      department: "International",
      location: "Remote/Travel",
      type: "Full-time",
      level: "Mid-level",
      salary: "$60k-80k",
      description: "Work on international engineering projects across multiple countries.",
      requirements: ["5+ years experience", "Passport ready", "Cross-cultural skills"],
      featured: true
    },
    {
      id: "6",
      title: "Quality Assurance Engineer",
      department: "Manufacturing",
      location: "Pune, India",
      type: "Full-time",
      level: "Mid-level",
      salary: "₹10-16 LPA",
      description: "Ensure quality standards in manufacturing processes.",
      requirements: ["4+ years experience", "Six Sigma", "ISO Standards"]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || 
                         job.type.toLowerCase() === selectedFilter ||
                         job.level.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = [
    { icon: Briefcase, label: "Open Positions", value: "50+" },
    { icon: Users, label: "Team Members", value: "200+" },
    { icon: Globe, label: "Countries", value: "15+" },
    { icon: Star, label: "Employee Rating", value: "4.8/5" }
  ];

  return (
    <section id="careers" className="section-spacing bg-gradient-to-br from-background via-card/20 to-primary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary text-lg px-6 py-2">
            <Briefcase className="w-4 h-4 mr-2" />
            Join Our Team
          </Badge>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
            Shape the Future of Engineering
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Join a global community of innovators building tomorrow's infrastructure, 
            <span className="text-secondary font-semibold"> sustainable solutions</span>, and 
            <span className="text-accent font-semibold"> cutting-edge technologies</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`glass-morphism rounded-2xl p-6 hover:shadow-glow-accent transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary to-secondary">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filters */}
        <div className={`mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Card className="glass-morphism shadow-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search positions, departments, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 text-lg"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["all", "full-time", "internship", "entry", "mid-level", "senior"].map((filter) => (
                    <Button
                      key={filter}
                      variant={selectedFilter === filter ? "neon" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(filter)}
                      className="capitalize"
                    >
                      {filter.replace("-", " ")}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <Card 
              key={job.id} 
              className={`${job.featured ? 'neon-border' : 'border-border/50'} bg-card/95 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 magnetic-hover group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {job.featured && (
                        <Badge variant="default" className="bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        {job.department}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {job.description}
                    </CardDescription>
                  </div>
                  <div className="ml-4">
                    <Zap className="w-8 h-8 text-accent opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-secondary" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-accent" />
                    {job.level}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4 text-primary" />
                    {job.salary}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="neon" 
                    className="flex-1 group"
                    onClick={() => navigate('/apply')}
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="default">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <Card className="glass-morphism shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center animate-glow">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Don't See Your Perfect Role?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always looking for talented engineers who are passionate about making a difference. 
                  Send us your profile and let's explore opportunities together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="neon" 
                  size="lg"
                  className="group min-w-[200px]"
                  onClick={() => navigate('/apply')}
                >
                  Submit Your Profile
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 min-w-[200px] hover:bg-primary/5"
                >
                  Join Our Talent Pool
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}