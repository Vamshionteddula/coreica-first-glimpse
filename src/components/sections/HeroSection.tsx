import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

// Import all hero images
import floatingSculpture1 from '@/assets/floating-sculpture-1.jpg';
import floatingSculpture2 from '@/assets/floating-sculpture-2.jpg';
import techWorkspace from '@/assets/tech-workspace.jpg';
import liquidGold from '@/assets/liquid-gold.jpg';
import heroAbstract from '@/assets/hero-abstract-1.jpg';

const floatingElements = [
  { 
    src: floatingSculpture1, 
    className: "absolute top-20 left-[10%] w-32 h-40 animate-float-slow stagger-1",
    rotation: "-6deg"
  },
  { 
    src: liquidGold, 
    className: "absolute top-12 left-[32%] w-28 h-36 animate-float-medium stagger-2",
    rotation: "4deg"
  },
  { 
    src: techWorkspace, 
    className: "absolute top-8 right-[28%] w-32 h-40 animate-float-slow stagger-3",
    rotation: "-3deg"
  },
  { 
    src: floatingSculpture2, 
    className: "absolute top-24 right-[8%] w-28 h-36 animate-float-medium stagger-4",
    rotation: "5deg"
  },
  { 
    src: heroAbstract, 
    className: "absolute top-[38%] left-[5%] w-28 h-36 animate-float-fast stagger-5",
    rotation: "3deg"
  },
  { 
    src: floatingSculpture1, 
    className: "absolute top-[42%] right-[4%] w-32 h-40 animate-float-slow stagger-6",
    rotation: "-4deg"
  },
  { 
    src: liquidGold, 
    className: "absolute bottom-[22%] left-[18%] w-28 h-36 animate-float-medium stagger-2",
    rotation: "6deg"
  },
  { 
    src: techWorkspace, 
    className: "absolute bottom-[18%] left-[42%] w-32 h-40 animate-float-slow stagger-4",
    rotation: "-2deg"
  },
  { 
    src: floatingSculpture2, 
    className: "absolute bottom-[25%] right-[15%] w-28 h-36 animate-float-fast stagger-1",
    rotation: "4deg"
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-[100px] animate-pulse-glow stagger-3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      {/* Floating Premium Images */}
      {floatingElements.map((el, index) => (
        <div
          key={index}
          className={`${el.className} magnetic-hover group`}
          style={{ transform: `rotate(${el.rotation})` }}
        >
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-medium group-hover:shadow-glow transition-all duration-500">
            <img
              src={el.src}
              alt={`Floating element ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      ))}
      
      {/* Center Content with Staggered Animation */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 hero-text-enter">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">World-Class Engineering Platform</span>
        </div>

        <h1 className="text-display text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-normal mb-8 leading-[1.05] text-foreground hero-text-enter">
          Engineering that
          <br />
          <span className="italic bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            resonates
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto hero-text-enter-delay-1 leading-relaxed">
          A platform connecting core engineering talent with global opportunities — 
          <span className="text-foreground font-medium"> always</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-text-enter-delay-2">
          <Button 
            size="lg"
            onClick={() => navigate('/apply')}
            className="px-10 py-7 text-base magnetic-hover animate-pulse-glow group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-7 text-base magnetic-hover"
          >
            Learn More
          </Button>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto hero-text-enter-delay-3">
          {[
            { value: "10K+", label: "Engineers Placed" },
            { value: "500+", label: "Partner Companies" },
            { value: "50+", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-gentle hero-text-enter-delay-3">
        <div className="w-7 h-12 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-3">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
}