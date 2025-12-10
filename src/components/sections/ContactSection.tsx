import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  ArrowRight
} from "lucide-react";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "support@coreica.com",
      secondary: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+91 (xxx) xxx-xxxx",
      secondary: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Office",
      primary: "Bangalore, Karnataka",
      secondary: "India"
    },
    {
      icon: Clock,
      title: "Support Hours",
      primary: "24/7 Online Support",
      secondary: "Live chat available"
    }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Contact Us</p>
          <h2 className="text-display text-5xl md:text-6xl font-normal mb-8 text-foreground">
            Get in <span className="italic">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our platform? Need support with your application? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="p-8 rounded-3xl border border-border bg-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  className="min-h-[150px] resize-none"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12" 
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl border border-border bg-card">
              <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-muted">
                      <info.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.primary}</p>
                      <p className="text-sm text-muted-foreground">{info.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="p-8 rounded-3xl bg-foreground text-background">
              <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-background/80 mb-6">
                Join thousands of engineers who have found their dream careers through Coreica.
              </p>
              <Button 
                variant="outline" 
                className="bg-background text-foreground hover:bg-background/90 border-0"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
