import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  name: string;
  type: 'application' | 'job_posting';
  details?: any;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, name, type, details }: EmailRequest = await req.json();

    let subject = "";
    let html = "";

    if (type === 'application') {
      subject = "Application Submitted Successfully - Coreica";
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Application Received!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Dear ${name},</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Thank you for submitting your application through Coreica! We're excited about your interest in joining our network of talented engineering professionals.
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666; line-height: 1.6;">
                <li>Our team will review your application within 2-3 business days</li>
                <li>We'll match your profile with suitable opportunities</li>
                <li>You'll receive updates about relevant job openings</li>
                <li>Companies may reach out directly for interviews</li>
              </ul>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Keep an eye on your inbox for updates, and feel free to update your profile or apply for specific positions as they become available.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${Deno.env.get('SUPABASE_URL')?.replace('pardingtekslklnvglzl.supabase.co', 'eb198f83-7fe9-4808-ae66-a537fdfaefc2.sandbox.lovable.dev')}" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                View Dashboard
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="color: #9ca3af; font-size: 14px; line-height: 1.6;">
                Best regards,<br>
                <strong>The Coreica Team</strong><br>
                Bridging Core Engineering with Global Opportunities
              </p>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'job_posting') {
      subject = "Job Posted Successfully - Coreica";
      html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Job Posted Successfully!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Dear ${name},</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Your job posting for <strong>${details?.role || 'the position'}</strong> at <strong>${details?.company || 'your company'}</strong> has been successfully published on Coreica!
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Job Details:</h3>
              <ul style="color: #666; line-height: 1.6;">
                <li><strong>Position:</strong> ${details?.role || 'N/A'}</li>
                <li><strong>Company:</strong> ${details?.company || 'N/A'}</li>
                <li><strong>Type:</strong> ${details?.jobType || 'N/A'}</li>
                <li><strong>Location:</strong> ${details?.location || 'N/A'}</li>
              </ul>
            </div>
            
            <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">What's next?</h3>
              <ul style="color: #065f46; line-height: 1.6;">
                <li>Your posting is now live and visible to candidates</li>
                <li>Qualified students can apply directly</li>
                <li>You'll receive applications via email</li>
                <li>Use your dashboard to manage applications</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${Deno.env.get('SUPABASE_URL')?.replace('pardingtekslklnvglzl.supabase.co', 'eb198f83-7fe9-4808-ae66-a537fdfaefc2.sandbox.lovable.dev')}/dashboard" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Manage Applications
              </a>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px;">
              <p style="color: #9ca3af; font-size: 14px; line-height: 1.6;">
                Best regards,<br>
                <strong>The Coreica Team</strong><br>
                Connecting talent with opportunities
              </p>
            </div>
          </div>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Coreica <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);