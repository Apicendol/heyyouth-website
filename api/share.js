/**
 * =========================================================================
 * HEY YOUTH! — Dynamic Open Graph Meta Tags & Social Share Handler
 * =========================================================================
 * Endpoint: /api/share?id=... (or /api/share?type=story&id=...)
 * 
 * Flow:
 * 1. Checks incoming request User-Agent.
 * 2. If it's a social media crawler (WhatsApp, LinkedIn, Twitter, Facebook, etc.):
 *    - Fetches the dynamic activity/story from Supabase REST API (or fallback).
 *    - Returns server-rendered HTML with full Open Graph & Twitter Card tags.
 * 3. If it's a normal human visitor:
 *    - Redirects to the matching activity detail page or Field Story modal.
 */

const https = require('https');

const SUPABASE_URL = process.env.SUPABASE_URL || "https://bpkgputbsnsjcgvozooe.supabase.co";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || "sb_publishable_5Zot98NYLIpDWo9G-8VcQg_-xYXas87";

// Default Fallback Activity Data (offline / demo safety)
const FALLBACK_DATA = {
  301: {
    title: "Dream Big, Learn Bigger: Menginspirasi Generasi Penerus di Yos Sudarso",
    description: "Kunjungan tim Hey Youth ke SD Yos Sudarso untuk berbagi inspirasi pendidikan dan pendampingan mimpi masa depan ratusan siswa.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    category: "Pendidikan"
  },
  302: {
    title: "Menanamkan Pendidikan, Menyalakan Mimpi: Kunjungan Hey Youth ke TBM Kolong",
    description: "Dukungan literasi anak pesisir bersama Hey Youth dengan mendonasikan buku cerita dan sesi membaca bersama adik-adik binaan.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop",
    category: "Komunitas"
  }
};

// Regex to identify social media crawler bots
const BOT_REGEX = /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Discordbot|Slackbot|Pinterest|SkypeUriPreview|Google-Structured-Data-Testing-Tool|vkShare|redditbot|Applebot/i;

function fetchFromSupabase(table, id) {
  return new Promise((resolve) => {
    try {
      const url = `${SUPABASE_URL}/rest/v1/${table}?id=eq.${id}&select=*`;
      const options = {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        },
        timeout: 2500
      };

      const req = https.get(url, options, (res) => {
        let rawData = '';
        res.on('data', chunk => { rawData += chunk; });
        res.on('end', () => {
          try {
            if (res.statusCode >= 200 && res.statusCode < 300) {
              const parsed = JSON.parse(rawData);
              if (Array.isArray(parsed) && parsed.length > 0) {
                return resolve(parsed[0]);
              }
            }
          } catch (e) {}
          resolve(null);
        });
      });

      req.on('error', () => resolve(null));
      req.on('timeout', () => {
        req.destroy();
        resolve(null);
      });
    } catch (e) {
      resolve(null);
    }
  });
}

function stripHtml(html) {
  if (!html) return '';
  return String(html)
    .replace(/<[^>]*>?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildTargetRedirectUrl(baseUrl, type, id) {
  if (type === 'story') {
    const target = new URL('/pages/about-us.html', baseUrl);
    target.searchParams.set('story', String(id));
    target.hash = 'field-stories';
    return target.toString();
  }

  return `${baseUrl}/pages/activity-detail.html?id=${encodeURIComponent(id)}`;
}

module.exports = async (req, res) => {
  // CORS & Methods
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  // Parse query params safely
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'heyyouth.org';
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const baseUrl = `${proto}://${host}`;

  const urlObj = new URL(req.url, baseUrl);
  const id = urlObj.searchParams.get('id') || '301';
  const type = urlObj.searchParams.get('type') || 'activity'; // 'activity' or 'story'
  const lang = urlObj.searchParams.get('lang') || 'id';

  const userAgent = req.headers['user-agent'] || '';
  const isCrawler = BOT_REGEX.test(userAgent);

  // Target Destination URL for Human Visitor
  const targetRedirectUrl = buildTargetRedirectUrl(baseUrl, type, id);

  // IF HUMAN VISITOR: Redirect immediately!
  if (!isCrawler && !urlObj.searchParams.get('preview')) {
    res.writeHead(302, {
      'Location': targetRedirectUrl,
      'Cache-Control': 'no-cache'
    });
    return res.end();
  }

  // IF SOCIAL BOT (or ?preview=true for testing):
  // 1. Fetch content from Supabase
  let item = null;
  const table = (type === 'story') ? 'field_stories' : 'activities';
  item = await fetchFromSupabase(table, id);

  // 2. Fallback if not found in database
  if (!item && FALLBACK_DATA[id]) {
    item = FALLBACK_DATA[id];
  } else if (!item) {
    item = {
      title: "Kegiatan Pemberdayaan Pemuda & Pendidikan Anak — Hey Youth!",
      description: "Bergabung bersama gerakan Hey Youth! dalam membuka akses pendidikan setara dan kelas bimbingan belajar gratis untuk anak-anak Indonesia.",
      image: "assets/img/NEW HEY YOUTH Sep 2025.webp",
      category: "Gerakan Sosial"
    };
  }

  // 3. Extract and normalize metadata
  const rawTitle = (lang === 'en' && item.title_en) ? item.title_en : (item.title_id || item.title || 'Kegiatan Hey Youth!');
  const rawDesc = (lang === 'en' && item.description_en) ? item.description_en : (item.description_id || item.excerpt_id || item.description || '');
  const cleanTitle = escapeHtml(rawTitle);
  const cleanDesc = escapeHtml(stripHtml(rawDesc).slice(0, 160));

  // Normalize image URL to absolute HTTPS
  let img = item.image || item.image_cover || 'assets/img/Donation.webp';
  if (img.startsWith('/')) img = img.slice(1);
  const fullImageUrl = img.startsWith('http') ? img : `${baseUrl}/${img}`;

  const canonicalUrl = type === 'story'
    ? targetRedirectUrl
    : `${baseUrl}/api/share?id=${encodeURIComponent(id)}`;

  // 4. Server-render complete Open Graph & Twitter Cards HTML
  const html = `<!DOCTYPE html>
<html lang="id" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${cleanTitle} — Hey Youth!</title>
  <meta name="description" content="${cleanDesc}">
  
  <!-- Open Graph / Facebook / WhatsApp / LinkedIn -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Hey Youth! Indonesia">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${cleanTitle}">
  <meta property="og:description" content="${cleanDesc}">
  <meta property="og:image" content="${fullImageUrl}">
  <meta property="og:image:secure_url" content="${fullImageUrl}">
  <meta property="og:image:alt" content="${cleanTitle}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="id_ID">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@heyyouth_id">
  <meta name="twitter:creator" content="@heyyouth_id">
  <meta name="twitter:url" content="${canonicalUrl}">
  <meta name="twitter:title" content="${cleanTitle}">
  <meta name="twitter:description" content="${cleanDesc}">
  <meta name="twitter:image" content="${fullImageUrl}">

  <!-- Canonical and Fallback Redirect for Browsers -->
  <link rel="canonical" href="${targetRedirectUrl}">
  <meta http-equiv="refresh" content="0;url=${targetRedirectUrl}">
  <script>window.location.replace("${targetRedirectUrl}");</script>
  
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #fff; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .card { max-width: 420px; padding: 24px; text-align: center; background: #1e293b; border-radius: 16px; border: 1px solid #334155; }
    img { width: 100%; border-radius: 12px; height: 200px; object-fit: cover; margin-bottom: 16px; }
    h2 { font-size: 18px; margin: 0 0 10px; }
    p { font-size: 13px; color: #94a3b8; margin: 0 0 16px; line-height: 1.5; }
    a { display: inline-block; background: #1D4ED8; color: #fff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <img src="${fullImageUrl}" alt="${cleanTitle}">
    <h2>${cleanTitle}</h2>
    <p>${cleanDesc}</p>
    <a href="${targetRedirectUrl}">Buka Artikel Penuh &rarr;</a>
  </div>
</body>
</html>`;

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 's-maxage=600, stale-while-revalidate=1200'
  });
  res.end(html);
};

module.exports.buildTargetRedirectUrl = buildTargetRedirectUrl;
