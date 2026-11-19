-- =======================================================
-- HEY YOUTH! — Supabase Volunteers Database Schema Patch
-- Tabel Pendaftaran Relawan Website (Volunteer Registrations)
-- =======================================================

-- 1. Buat Tabel public.volunteers
CREATE TABLE IF NOT EXISTS public.volunteers (
    id VARCHAR(100) PRIMARY KEY DEFAULT ('HY-REL-' || to_char(NOW(), 'YYYY') || '-' || LPAD(floor(random() * 9000 + 1000)::text, 4, '0')),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    whatsapp_number VARCHAR(50) NOT NULL,
    city VARCHAR(255),                  -- Institusi / Asal Kampus / Domisili
    chapter_choice VARCHAR(255),        -- Divisi Pilihan 1 / Chapter
    division_choice VARCHAR(255),       -- Divisi Pilihan 2 / Cadangan
    reason TEXT,                        -- Alasan Bergabung & Pengalaman
    cv_file_url TEXT,                   -- Tautan CV / Catatan Formulir
    status VARCHAR(50) DEFAULT 'pending' NOT NULL, -- 'pending', 'accepted', 'rejected'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Index untuk Performa Pencarian dan Filter
CREATE INDEX IF NOT EXISTS idx_volunteers_status ON public.volunteers (status);
CREATE INDEX IF NOT EXISTS idx_volunteers_created_at ON public.volunteers (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_volunteers_email ON public.volunteers (email);

-- 3. Aktifkan Row Level Security (RLS)
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

-- 4. Policies (Keamanan Akses)
-- A. Publik / Pengunjung website dapat mendaftar (INSERT)
DROP POLICY IF EXISTS "Allow public insert on volunteers" ON public.volunteers;
CREATE POLICY "Allow public insert on volunteers" 
ON public.volunteers 
FOR INSERT 
WITH CHECK (true);

-- B. Publik / Admin CMS dapat membaca daftar pendaftar relawan (SELECT)
DROP POLICY IF EXISTS "Allow public select on volunteers" ON public.volunteers;
CREATE POLICY "Allow public select on volunteers" 
ON public.volunteers 
FOR SELECT 
USING (true);

-- C. Admin CMS dapat memperbarui status (UPDATE: pending -> accepted/rejected)
DROP POLICY IF EXISTS "Allow public update on volunteers" ON public.volunteers;
CREATE POLICY "Allow public update on volunteers" 
ON public.volunteers 
FOR UPDATE 
USING (true)
WITH CHECK (true);

-- D. Admin CMS dapat menghapus data pendaftar (DELETE)
DROP POLICY IF EXISTS "Allow public delete on volunteers" ON public.volunteers;
CREATE POLICY "Allow public delete on volunteers" 
ON public.volunteers 
FOR DELETE 
USING (true);

-- E. Authenticated users (Akun Admin Supabase) memiliki akses penuh
DROP POLICY IF EXISTS "Allow authenticated full access on volunteers" ON public.volunteers;
CREATE POLICY "Allow authenticated full access on volunteers" 
ON public.volunteers 
FOR ALL 
TO authenticated 
USING (true);

-- 5. Masukkan Data Sampel / Seed (3 Pendaftar Relawan Awal)
INSERT INTO public.volunteers (
    id, full_name, email, whatsapp_number, city, chapter_choice, division_choice, reason, cv_file_url, status, created_at
)
VALUES
(
    'HY-REL-2026-001',
    'Rian Hendrawan',
    'rian.hendrawan@gmail.com',
    '081298765432',
    'Universitas Indonesia',
    'Pendidikan & Pengajaran',
    'Media & Komunikasi',
    'Ingin berkontribusi langsung mengajar adik-adik dan berbagi ilmu seputar literasi digital.',
    'Terdaftar via Formulir Web (Ref: HY-REL-2026-001)',
    'pending',
    NOW() - INTERVAL '2 days'
),
(
    'HY-REL-2026-002',
    'Siti Rahmawati',
    'siti.rahma@ugm.ac.id',
    '082134567890',
    'Universitas Gadjah Mada',
    'Media & Komunikasi',
    'Event & Logistik',
    'Tertarik mengelola strategi komunikasi Hey Youth dan memperluas jangkauan anak muda.',
    'Terdaftar via Formulir Web (Ref: HY-REL-2026-002)',
    'accepted',
    NOW() - INTERVAL '1 day'
),
(
    'HY-REL-2026-003',
    'Ahmad Fadhil Pratama',
    'fadhil.pratama@itb.ac.id',
    '085712345678',
    'Institut Teknologi Bandung',
    'Event & Logistik',
    'Pendidikan & Pengajaran',
    'Berpengalaman dalam operasional event sosial dan kepemudaan berskala nasional.',
    'Terdaftar via Formulir Web (Ref: HY-REL-2026-003)',
    'pending',
    NOW() - INTERVAL '4 hours'
)
ON CONFLICT (id) DO NOTHING;

-- 6. Daftarkan ke Realtime Publikasi (Jika ekstensi Realtime aktif)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.volunteers;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END $$;
