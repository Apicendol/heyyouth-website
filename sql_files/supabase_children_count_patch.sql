-- ==========================================
-- HEY YOUTH! — Supabase Children Count Patch
-- Adds transparency metric: jumlah anak terbantu per chapter
-- ==========================================

-- 1. Add children_count column to public.locations
ALTER TABLE public.locations 
ADD COLUMN IF NOT EXISTS children_count INTEGER DEFAULT 0;

-- 2. Update existing chapters with estimated children count data
UPDATE public.locations SET children_count = 245 WHERE name ILIKE '%Jakarta Pusat%';
UPDATE public.locations SET children_count = 120 WHERE name ILIKE '%Jakarta Timur%';
UPDATE public.locations SET children_count = 175 WHERE name ILIKE '%Jakarta Selatan%';
UPDATE public.locations SET children_count = 200 WHERE name ILIKE '%Bandung%';
UPDATE public.locations SET children_count = 155 WHERE name ILIKE '%Malang%';
UPDATE public.locations SET children_count = 185 WHERE name ILIKE '%Surabaya%';
UPDATE public.locations SET children_count = 90  WHERE name ILIKE '%Medan%';
UPDATE public.locations SET children_count = 95  WHERE name ILIKE '%Depok%';
UPDATE public.locations SET children_count = 140 WHERE name ILIKE '%Bogor%';
UPDATE public.locations SET children_count = 60  WHERE name ILIKE '%Karawang%';
UPDATE public.locations SET children_count = 45  WHERE name ILIKE '%Bangka%';
UPDATE public.locations SET children_count = 75  WHERE name ILIKE '%Palembang%';
UPDATE public.locations SET children_count = 55  WHERE name ILIKE '%Cikarang%';
UPDATE public.locations SET children_count = 130 WHERE name ILIKE '%Bekasi%';
UPDATE public.locations SET children_count = 100 WHERE name ILIKE '%Bali%';
UPDATE public.locations SET children_count = 85  WHERE name ILIKE '%Solo%' OR name ILIKE '%Surakarta%';
UPDATE public.locations SET children_count = 65  WHERE name ILIKE '%Pekanbaru%';
UPDATE public.locations SET children_count = 115 WHERE name ILIKE '%Tangerang%';
UPDATE public.locations SET children_count = 50  WHERE name ILIKE '%Kendari%';

-- 3. Verify the update
SELECT name, volunteers, children_count, focus_program 
FROM public.locations 
ORDER BY children_count DESC;
