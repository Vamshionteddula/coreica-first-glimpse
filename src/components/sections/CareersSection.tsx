import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Search,
  Briefcase,
  GraduationCap,
  ArrowRight,
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
    { label: "Open Positions", value: "50+" },
    { label: "Team Members", value: "200+" },
    { label: "Countries", value: "15+" },
    { label: "Employee Rating", value: "4.8/5" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Join Our Team</p>
          <h2 className="text-display text-5xl md:text-6xl font-normal mb-8 text-foreground">
            Shape the Future of
            <br />
            <span className="italic">Engineering</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Join a global community of innovators building tomorrow's infrastructure, 
            sustainable solutions, and cutting-edge technologies
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-semibold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-12">
          <div className="p-6 rounded-2xl border border-border bg-card">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search positions, departments, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-base border-border"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["all", "full-time", "internship", "entry", "mid-level", "senior"].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter)}
                    className="capitalize"
                  >
                    {filter.replace("-", " ")}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {filteredJobs.map((job, index) => (
            <div 
              key={job.id} 
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {job.featured && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-foreground text-background">
                        Featured
                      </span>
                    )}
                    <span className="text-xs font-medium text-muted-foreground">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                    {job.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{job.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-4 h-4" />
                  {job.level}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  {job.salary}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.slice(0, 3).map((req, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {req}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1"
                  onClick={() => navigate('/apply')}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="p-12 rounded-3xl bg-muted/50">
            <h3 className="text-display text-3xl font-normal mb-4 text-foreground">
              Don't See Your Perfect Role?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented engineers who are passionate about making a difference. 
              Send us your profile and let's explore opportunities together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/apply')}
              >
                Submit Your Profile
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Join Our Talent Pool
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
