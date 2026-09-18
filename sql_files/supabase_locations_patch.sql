-- ==========================================
-- HEY YOUTH! — Supabase Locations Patch
-- Dynamic Volunteer Chapters Feature
-- ==========================================

-- 1. Add volunteer chapter enrichment columns to public.locations
ALTER TABLE public.locations 
ADD COLUMN IF NOT EXISTS region VARCHAR(50) DEFAULT 'jabodetabek',
ADD COLUMN IF NOT EXISTS image TEXT,
ADD COLUMN IF NOT EXISTS focus_program VARCHAR(150),
ADD COLUMN IF NOT EXISTS coordinator_name VARCHAR(100),
ADD COLUMN IF NOT EXISTS coordinator_contact VARCHAR(100);

-- 2. Update existing key locations or insert enriched volunteer chapters
UPDATE public.locations 
SET 
  region = 'jabodetabek',
  image = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
  focus_program = 'Edukasi Siswa & Literasi Baca',
  coordinator_name = 'Kak Yuni Triandini',
  coordinator_contact = '628123456789'
WHERE name ILIKE '%Jakarta%' AND name NOT ILIKE '%Timur%' AND name NOT ILIKE '%Selatan%' AND name NOT ILIKE '%Barat%' AND name NOT ILIKE '%Utara%';

UPDATE public.locations 
SET 
  region = 'jawa',
  image = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  focus_program = 'Bimbingan Belajar & Pelatihan Softskills',
  coordinator_name = 'Kak Dzikri',
  coordinator_contact = '628123456780'
WHERE name ILIKE '%Bandung%';

UPDATE public.locations 
SET 
  region = 'jawa',
  image = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
  focus_program = 'Kelas Inspirasi & Donasi Buku',
  coordinator_name = 'Kak Rizky',
  coordinator_contact = '628123456781'
WHERE name ILIKE '%Malang%';

UPDATE public.locations 
SET 
  region = 'luar_jawa',
  image = 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
  focus_program = 'Pemberdayaan Pemuda & Komunitas',
  coordinator_name = 'Kak Sarah',
  coordinator_contact = '628123456782'
WHERE name ILIKE '%Medan%';
