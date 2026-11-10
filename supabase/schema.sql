-- =============================================================================
-- ORANGE ENTERPRISE (ARN 83312 • MUMBAI)
-- PostgreSQL Database Schema for Fiduciary Wealth Advisory Platform
-- Compatible with Supabase, Neon, AWS RDS, Railway, or standalone PostgreSQL
-- =============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -----------------------------------------------------------------------------
-- 1. TABLE: inquiries (Contact Page & Hero Salon Inquiries)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    consent BOOLEAN DEFAULT TRUE,
    source VARCHAR(100) DEFAULT 'Website Contact Form',
    status VARCHAR(50) DEFAULT 'new', -- 'new', 'contacted', 'scheduled', 'archived'
    notes TEXT, -- Internal notes by fiduciary desk
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for searching and filtering inquiries
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON public.inquiries (email);
CREATE INDEX IF NOT EXISTS idx_inquiries_phone ON public.inquiries (phone);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);


-- -----------------------------------------------------------------------------
-- 2. TABLE: appointments (Private Salon & Advisory Bookings)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    service VARCHAR(255) DEFAULT 'General Advisory',
    mode VARCHAR(100) DEFAULT 'In-Person Salon (Mumbai BKC)', -- 'In-Person Salon (Mumbai BKC)', 'Virtual Video', 'Phone'
    appointment_date DATE NOT NULL,
    time_slot VARCHAR(100) NOT NULL, -- e.g. '11:00 AM – 12:00 PM IST'
    portfolio_notes TEXT,
    status VARCHAR(50) DEFAULT 'confirmed', -- 'pending', 'confirmed', 'completed', 'rescheduled', 'cancelled'
    advisor_assigned VARCHAR(255) DEFAULT 'Principal Advisor (ARN 83312)',
    calendar_event_id VARCHAR(255), -- Sync with Google Calendar / Outlook
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for appointment lookup by date and status
CREATE INDEX IF NOT EXISTS idx_appointments_date ON public.appointments (appointment_date);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments (status);
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON public.appointments (phone);


-- -----------------------------------------------------------------------------
-- 3. TABLE: intakes (Confidential Asset Diagnostics Questionnaire)
-- -----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.intakes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    asset_bracket VARCHAR(100) NOT NULL, -- '₹50 Lakhs – ₹2 Cr', '₹2 Cr – ₹10 Cr', '₹10 Cr – ₹50 Cr', '₹50 Cr+'
    primary_goal VARCHAR(255) NOT NULL,  -- 'Long-Term Capital Compounding & Legacy', etc.
    risk_appetite VARCHAR(255) NOT NULL, -- 'Balanced Growth', 'Aggressive Expansion', 'Conservative Shield'
    time_horizon VARCHAR(100) NOT NULL,  -- '3 to 5 Years', '5 to 10 Years', '10+ Years'
    current_advisory VARCHAR(255) DEFAULT 'Self-Managed',
    additional_details TEXT,
    diagnostic_status VARCHAR(50) DEFAULT 'pending_review', -- 'pending_review', 'blueprint_generated', 'presented'
    fiduciary_rating VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Index for searching intakes
CREATE INDEX IF NOT EXISTS idx_intakes_asset_bracket ON public.intakes (asset_bracket);
CREATE INDEX IF NOT EXISTS idx_intakes_diagnostic_status ON public.intakes (diagnostic_status);
CREATE INDEX IF NOT EXISTS idx_intakes_created_at ON public.intakes (created_at DESC);


-- -----------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- Enables public form submission while protecting records from unauthorized read
-- -----------------------------------------------------------------------------

-- Enable RLS
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.intakes ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit inquiries (Insert-only)
CREATE POLICY "Allow public insert to inquiries" 
ON public.inquiries FOR INSERT 
WITH CHECK (true);

-- Allow anonymous visitors to schedule appointments (Insert-only)
CREATE POLICY "Allow public insert to appointments" 
ON public.appointments FOR INSERT 
WITH CHECK (true);

-- Allow anonymous visitors to submit intake questionnaire (Insert-only)
CREATE POLICY "Allow public insert to intakes" 
ON public.intakes FOR INSERT 
WITH CHECK (true);

-- Only authenticated users (admins/advisors) can view, edit, or delete records
CREATE POLICY "Allow authenticated read/write inquiries" 
ON public.inquiries FOR ALL 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated read/write appointments" 
ON public.appointments FOR ALL 
TO authenticated 
USING (true);

CREATE POLICY "Allow authenticated read/write intakes" 
ON public.intakes FOR ALL 
TO authenticated 
USING (true);
