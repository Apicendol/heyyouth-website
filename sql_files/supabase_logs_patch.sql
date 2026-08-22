-- =======================================================
-- HEY YOUTH! — Supabase Admin Logs Database Schema Patch
-- =======================================================

-- 1. Create Admin Logs Table
CREATE TABLE IF NOT EXISTS public.admin_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    admin_email VARCHAR(255) NOT NULL,
    action VARCHAR(50) NOT NULL,
    category VARCHAR(100),
    detail TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.admin_logs ENABLE ROW LEVEL SECURITY;

-- 3. Policies
-- Allow anyone authenticated to insert logs.
DROP POLICY IF EXISTS "Allow authenticated insert on admin_logs" ON public.admin_logs;
CREATE POLICY "Allow authenticated insert on admin_logs" 
ON public.admin_logs 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated users to select logs for the dashboard
DROP POLICY IF EXISTS "Allow authenticated select on admin_logs" ON public.admin_logs;
CREATE POLICY "Allow authenticated select on admin_logs" 
ON public.admin_logs 
FOR SELECT 
USING (true);

-- Allow authenticated users to delete logs (for the Clear All function)
DROP POLICY IF EXISTS "Allow authenticated delete on admin_logs" ON public.admin_logs;
CREATE POLICY "Allow authenticated delete on admin_logs" 
ON public.admin_logs 
FOR DELETE 
USING (true);

-- 4. Enable Supabase Realtime for this table
-- This allows the dashboard to listen for INSERTs and update the log list instantly across all connected admins
ALTER PUBLICATION supabase_realtime ADD TABLE public.admin_logs;
