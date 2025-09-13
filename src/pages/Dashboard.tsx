import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import coreicaLogo from '@/assets/coreica-logo-official.png';
import { ArrowLeft, Users, Briefcase, FileText, Eye, Download, Building, Clock, MapPin, Calendar } from 'lucide-react';

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  branch: string;
  college: string | null;
  year_of_study: string | null;
  interest_area: string;
  resume_url: string | null;
  additional_info: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

interface JobPosting {
  id: string;
  company_name: string;
  role: string;
  job_type: 'internship' | 'full_time' | 'part_time';
  duration: string | null;
  stipend: string | null;
  location: string | null;
  description: string | null;
  requirements: string | null;
  contact_email: string;
  contact_phone: string | null;
  application_deadline: string | null;
  is_active: boolean;
  created_at: string;
}

export default function Dashboard() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (profile?.role !== 'admin' && profile?.role !== 'company') {
      navigate('/');
      return;
    }

    fetchData();
  }, [user, profile, navigate]);

  const fetchData = async () => {
    try {
      if (profile?.role === 'admin') {
        // Admin can see all data
        const [applicationsRes, jobPostingsRes] = await Promise.all([
          supabase.from('applications').select('*').order('created_at', { ascending: false }),
          supabase.from('job_postings').select('*').order('created_at', { ascending: false })
        ]);

        if (applicationsRes.data) setApplications(applicationsRes.data as Application[]);
        if (jobPostingsRes.data) setJobPostings(jobPostingsRes.data as JobPosting[]);
      } else if (profile?.role === 'company') {
        // Company can only see their own job postings
        const jobPostingsRes = await supabase
          .from('job_postings')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (jobPostingsRes.data) setJobPostings(jobPostingsRes.data as JobPosting[]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId: string, status: 'pending' | 'approved' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status })
        .eq('id', applicationId);

      if (!error) {
        setApplications(prev => 
          prev.map(app => 
            app.id === applicationId ? { ...app, status } : app
          )
        );
      }
    } catch (error) {
      console.error('Error updating application status:', error);
    }
  };

  const downloadResume = async (resumeUrl: string, applicantName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download(resumeUrl);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${applicantName}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
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
            {profile?.role === 'admin' ? 'Admin Dashboard' : 'Company Dashboard'}
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage applications and job postings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {profile?.role === 'admin' && (
            <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{applications.length}</div>
              </CardContent>
            </Card>
          )}
          
          <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Job Postings</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{jobPostings.length}</div>
            </CardContent>
          </Card>

          {profile?.role === 'admin' && (
            <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {applications.filter(app => app.status === 'pending').length}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Tabs defaultValue={profile?.role === 'admin' ? 'applications' : 'job-postings'} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            {profile?.role === 'admin' && (
              <TabsTrigger value="applications">Applications</TabsTrigger>
            )}
            <TabsTrigger value="job-postings">Job Postings</TabsTrigger>
          </TabsList>

          {profile?.role === 'admin' && (
            <TabsContent value="applications">
              <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Student Applications</CardTitle>
                  <CardDescription>
                    Review and manage student applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications.map((application) => (
                      <Card key={application.id} className="border-border/50">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold">{application.full_name}</h3>
                                <Badge 
                                  variant={
                                    application.status === 'approved' ? 'default' : 
                                    application.status === 'rejected' ? 'destructive' : 
                                    'secondary'
                                  }
                                >
                                  {application.status}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">{application.email}</p>
                              <p className="text-sm"><strong>Branch:</strong> {application.branch}</p>
                              <p className="text-sm"><strong>Interest:</strong> {application.interest_area}</p>
                              {application.college && (
                                <p className="text-sm"><strong>College:</strong> {application.college}</p>
                              )}
                              {application.additional_info && (
                                <p className="text-sm"><strong>Additional Info:</strong> {application.additional_info}</p>
                              )}
                            </div>
                            <div className="flex gap-2 ml-4">
                              {application.resume_url && (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => downloadResume(application.resume_url!, application.full_name)}
                                >
                                  <Download className="w-4 h-4" />
                                </Button>
                              )}
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => updateApplicationStatus(application.id, 'approved')}
                              >
                                Approve
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => updateApplicationStatus(application.id, 'rejected')}
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {applications.length === 0 && (
                      <p className="text-center text-muted-foreground py-8">No applications yet.</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          <TabsContent value="job-postings">
            <Card className="border-border/50 bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Job Postings</CardTitle>
                <CardDescription>
                  {profile?.role === 'admin' ? 'All job postings in the system' : 'Your company job postings'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobPostings.map((job) => (
                    <Card key={job.id} className="border-border/50">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold">{job.role}</h3>
                                <Badge variant="outline">{job.job_type.replace('_', ' ')}</Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  {job.company_name}
                                </span>
                                {job.location && (
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                  </span>
                                )}
                                {job.duration && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {job.duration}
                                  </span>
                                )}
                                {job.application_deadline && (
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Deadline: {new Date(job.application_deadline).toLocaleDateString()}
                                  </span>
                                )}
                              </div>
                            </div>
                            <Badge variant={job.is_active ? 'default' : 'secondary'}>
                              {job.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          
                          {job.stipend && (
                            <p className="text-sm"><strong>Stipend/Salary:</strong> {job.stipend}</p>
                          )}
                          
                          {job.description && (
                            <div>
                              <p className="text-sm font-medium mb-1">Description:</p>
                              <p className="text-sm text-muted-foreground">{job.description}</p>
                            </div>
                          )}
                          
                          {job.requirements && (
                            <div>
                              <p className="text-sm font-medium mb-1">Requirements:</p>
                              <p className="text-sm text-muted-foreground">{job.requirements}</p>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between pt-2 border-t">
                            <div className="text-sm text-muted-foreground">
                              <strong>Contact:</strong> {job.contact_email}
                              {job.contact_phone && `, ${job.contact_phone}`}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Posted: {new Date(job.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {jobPostings.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">No job postings yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}