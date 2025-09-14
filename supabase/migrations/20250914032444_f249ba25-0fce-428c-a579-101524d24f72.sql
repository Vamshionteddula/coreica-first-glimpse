-- Fix infinite recursion in profiles RLS policies
-- Drop the problematic policies
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;

-- Create a security definer function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.profiles WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

-- Recreate the admin policy using the security definer function
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (public.get_current_user_role() = 'admin');

-- Also fix the applications policy that has the same issue
DROP POLICY IF EXISTS "Admins can view all applications" ON public.applications;

CREATE POLICY "Admins can view all applications" 
ON public.applications 
FOR ALL 
USING (public.get_current_user_role() = 'admin');

-- Fix the job_postings policy
DROP POLICY IF EXISTS "Admins can manage all job postings" ON public.job_postings;

CREATE POLICY "Admins can manage all job postings" 
ON public.job_postings 
FOR ALL 
USING (public.get_current_user_role() = 'admin');