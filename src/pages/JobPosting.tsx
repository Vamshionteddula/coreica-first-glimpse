import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import coreicaLogo from '@/assets/coreica-logo-official.png';
import { ArrowLeft, Building, Briefcase, MapPin, DollarSign, Calendar, Mail, Phone } from 'lucide-react';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function JobPosting() {
  const { user, profile, userRole } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: '',
    role: '',
    jobType: '',
    duration: '',
    stipend: '',
    location: '',
    description: '',
    requirements: '',
    contactEmail: profile?.email || user?.email || '',
    contactPhone: '',
    applicationDeadline: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/auth');
      return;
    }
    
    setIsLoading(true);

    try {
      // Add company role if user doesn't have it
      if (userRole === 'user') {
        await supabase
          .from('user_roles')
          .insert({ user_id: user.id, role: 'company' })
          .select()
          .single();
      }

      // Insert job posting
      const { error: insertError } = await supabase
        .from('job_postings')
        .insert({
          user_id: user.id,
          company_name: formData.companyName,
          role: formData.role,
          job_type: formData.jobType,
          duration: formData.duration || null,
          stipend: formData.stipend || null,
          location: formData.location,
          description: formData.description,
          requirements: formData.requirements,
          contact_email: formData.contactEmail,
          contact_phone: formData.contactPhone || null,
          application_deadline: formData.applicationDeadline ? new Date(formData.applicationDeadline).toISOString().split('T')[0] : null
        });

      if (insertError) {
        throw insertError;
      }

      // Send confirmation email
      try {
        await supabase.functions.invoke('send-confirmation', {
          body: {
            to: formData.contactEmail,
            name: formData.companyName,
            type: 'job_posting',
            details: {
              role: formData.role,
              company: formData.companyName,
              jobType: formData.jobType,
              location: formData.location
            }
          }
        });
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError);
        // Don't fail the job posting if email fails
      }

      toast({
        title: "Job Posted Successfully!",
        description: "Your job posting is now live! Check your email for confirmation.",
      });

      navigate('/');
    } catch (error: any) {
      toast({
        title: "Posting Failed",
        description: error.message || "An error occurred while posting the job.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="absolute left-0 top-0 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <img src={coreicaLogo} alt="Coreica" className="h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Post an Opportunity
          </h1>
          <p className="text-muted-foreground mt-2">
            Connect with talented students and recent graduates
          </p>
        </div>

        <Card className="border-border/50 bg-card/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Create Job Posting</CardTitle>
            <CardDescription>
              Fill in the details to post your internship or job opportunity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name *</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Enter company name"
                      className="pl-10"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Job Title/Role *</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="role"
                      type="text"
                      placeholder="e.g. Mechanical Engineer Intern"
                      className="pl-10"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobType">Job Type *</Label>
                  <Select value={formData.jobType} onValueChange={(value) => handleInputChange('jobType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="full_time">Full Time</SelectItem>
                      <SelectItem value="part_time">Part Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Input
                    id="duration"
                    type="text"
                    placeholder="e.g. 3 months, 6 months"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="stipend">Stipend/Salary</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="stipend"
                      type="text"
                      placeholder="e.g. ₹15,000/month"
                      className="pl-10"
                      value={formData.stipend}
                      onChange={(e) => handleInputChange('stipend', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      type="text"
                      placeholder="e.g. Bangalore, Remote"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and what the candidate will learn"
                  className="min-h-[120px]"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="List the skills, qualifications, and experience required"
                  className="min-h-[100px]"
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Contact Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="Enter contact email"
                      className="pl-10"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Contact Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="contactPhone"
                      type="tel"
                      placeholder="Enter contact phone"
                      className="pl-10"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicationDeadline">Application Deadline</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="applicationDeadline"
                    type="date"
                    className="pl-10"
                    value={formData.applicationDeadline}
                    onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
                variant="neon"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Posting Job...
                  </>
                ) : (
                  "Post Job Opportunity"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}