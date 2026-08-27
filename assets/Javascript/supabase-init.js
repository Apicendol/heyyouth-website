/* =============================================
   HEY YOUTH! — Supabase Configuration & Helpers
   ============================================= */

const SUPABASE_URL = "https://bpkgputbsnsjcgvozooe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_5Zot98NYLIpDWo9G-8VcQg_-xYXas87";

// Initialize Supabase client globally
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabaseClient;

// Backward Compatibility Adapter: replacing firebase-init helpers
window.getFirebaseData = async function(defaultData) {
    let fallback = null;
    try {
        const raw = localStorage.getItem('hey_youth_cms');
        if (raw) fallback = JSON.parse(raw);
    } catch(e) {}
    if (!fallback) fallback = JSON.parse(JSON.stringify(defaultData || {}));

    try {
        // Query all tables in parallel
        const [
            resTestimonials,
            resFaqs,
            resLocations,
            resPartners,
            resTeam,
            resActivities,
            resPodcasts,
            resDonation,
            resAbout,
            resEvents
        ] = await Promise.all([
            supabaseClient.from('testimonials').select('*'),
            supabaseClient.from('faqs').select('*'),
            supabaseClient.from('locations').select('*'),
            supabaseClient.from('partners').select('*'),
            supabaseClient.from('team_members').select('*'),
            supabaseClient.from('activities').select('*'),
            supabaseClient.from('podcasts').select('*'),
            supabaseClient.from('donation_settings').select('*').eq('id', 1).single(),
            supabaseClient.from('about_settings').select('*').eq('id', 1).single(),
            supabaseClient.from('events').select('*')
        ]);

        if (resTestimonials.error) throw resTestimonials.error;

        // Reconstruct CMS data object
        const cmsData = {
            externalTestimonials: (resTestimonials.data || [])
                .filter(t => t.type === 'external')
                .map(t => ({
                    id: t.id,
                    name: t.name,
                    title: t.title_id || t.title_en,
                    title_id: t.title_id,
                    title_en: t.title_en,
                    quote: t.quote_id || t.quote_en,
                    quote_id: t.quote_id,
                    quote_en: t.quote_en,
                    image: t.image
                })),
            internalTestimonials: (resTestimonials.data || [])
                .filter(t => t.type === 'internal')
                .map(t => ({
                    id: t.id,
                    name: t.name,
                    role: t.role_id || t.role_en,
                    role_id: t.role_id,
                    role_en: t.role_en,
                    quote: t.quote_id || t.quote_en,
                    quote_id: t.quote_id,
                    quote_en: t.quote_en,
                    image: t.image
                })),
            faqs: (resFaqs.data || []).map(f => ({
                id: f.id,
                question: f.question_id || f.question_en,
                question_id: f.question_id,
                question_en: f.question_en,
                answer: f.answer_id || f.answer_en,
                answer_id: f.answer_id,
                answer_en: f.answer_en
            })),
            locations: (resLocations.data || []).map(l => ({
                id: l.id,
                name: l.name,
                lat: parseFloat(l.lat),
                lng: parseFloat(l.lng),
                volunteers: parseInt(l.volunteers, 10) || 0
            })),
            partners: (resPartners.data || []).map(p => ({
                id: p.id,
                name: p.name,
                description: p.description_id || p.description_en,
                description_id: p.description_id,
                description_en: p.description_en,
                icon: p.icon,
                image: p.image,
                color: p.color,
                link: p.link
            })),
            team: (resTeam.data || []).map(t => ({
                id: t.id,
                name: t.name,
                role: t.role_id || t.role_en,
                role_id: t.role_id,
                role_en: t.role_en,
                image: t.image,
                linkedin: t.linkedin,
                instagram: t.instagram
            })),
            activityCards: (resActivities.data || []).map(a => ({
                id: a.id,
                category: a.category_id || a.category_en,
                category_id: a.category_id,
                category_en: a.category_en,
                date: a.date_str,
                title: a.title_id || a.title_en,
                title_id: a.title_id,
                title_en: a.title_en,
                description: a.description_id || a.description_en,
                description_id: a.description_id,
                description_en: a.description_en,
                image: a.image,
                link: a.link,
                fullStory: a.full_story_id || a.full_story_en,
                fullStory_id: a.full_story_id,
                fullStory_en: a.full_story_en
            })),
            podcasts: (resPodcasts.data || []).map(p => ({
                id: p.id,
                episode: p.episode_id || p.episode_en,
                episode_id: p.episode_id,
                episode_en: p.episode_en,
                title: p.title_id || p.title_en,
                title_id: p.title_id,
                title_en: p.title_en,
                thumbnail: p.thumbnail,
                spotifyLink: p.spotify_link
            })),
            donationSettings: resDonation.data ? {
                heroTitle: resDonation.data.hero_title_id || resDonation.data.hero_title_en,
                heroTitle_id: resDonation.data.hero_title_id,
                heroTitle_en: resDonation.data.hero_title_en,
                heroSubtitle: resDonation.data.hero_subtitle_id || resDonation.data.hero_subtitle_en,
                heroSubtitle_id: resDonation.data.hero_subtitle_id,
                heroSubtitle_en: resDonation.data.hero_subtitle_en,
                stripText: resDonation.data.strip_text_id || resDonation.data.strip_text_en,
                stripText_id: resDonation.data.strip_text_id,
                stripText_en: resDonation.data.strip_text_en,
                stripImage: resDonation.data.strip_image,
                bankName: resDonation.data.bank_name,
                accountName: resDonation.data.account_name,
                accountNumber: resDonation.data.account_number,
                qrisImage: resDonation.data.qris_image
            } : fallback.donationSettings,
            aboutHero: resAbout.data ? {
                title: resAbout.data.title_id || resAbout.data.title_en,
                title_id: resAbout.data.title_id,
                title_en: resAbout.data.title_en,
                subtitle: resAbout.data.subtitle_id || resAbout.data.subtitle_en,
                subtitle_id: resAbout.data.subtitle_id,
                subtitle_en: resAbout.data.subtitle_en,
                volunteerCount: resAbout.data.volunteer_count,
                image: resAbout.data.image
            } : fallback.aboutHero,
            events: (resEvents.data || []).map(e => ({
                id: e.id,
                title: e.title_id || e.title_en,
                title_id: e.title_id,
                title_en: e.title_en,
                date: e.date,
                time: e.time,
                location: e.location,
                description: e.description_id || e.description_en,
                description_id: e.description_id,
                description_en: e.description_en,
                speaker: e.speaker,
                speakerRole: e.speaker_role,
                image: e.image,
                link: e.link
            }))
        };

        try {
            localStorage.setItem('hey_youth_cms', JSON.stringify(cmsData));
        } catch(e) {}

        return cmsData;
    } catch (error) {
        console.error("Error reading from Supabase:", error);
        return fallback;
    }
};

window.saveFirebaseData = async function(data) {
    try {
        const testimonialList = [
            ...(data.externalTestimonials || []).map(t => ({
                id: t.id, type: 'external', name: t.name,
                title_id: t.title_id || t.title || '', title_en: t.title_en || t.title || '',
                role_id: '', role_en: '',
                quote_id: t.quote_id || t.quote || '', quote_en: t.quote_en || t.quote || '',
                image: t.image
            })),
            ...(data.internalTestimonials || []).map(t => ({
                id: t.id, type: 'internal', name: t.name,
                title_id: '', title_en: '',
                role_id: t.role_id || t.role || '', role_en: t.role_en || t.role || '',
                quote_id: t.quote_id || t.quote || '', quote_en: t.quote_en || t.quote || '',
                image: t.image
            }))
        ];

        const faqList = (data.faqs || []).map(f => ({
            id: f.id,
            question_id: f.question_id || f.question || '',
            question_en: f.question_en || f.question || '',
            answer_id: f.answer_id || f.answer || '',
            answer_en: f.answer_en || f.answer || ''
        }));

        const locationList = (data.locations || []).map(l => ({
            id: l.id,
            name: l.name,
            lat: l.lat,
            lng: l.lng,
            volunteers: l.volunteers || 0
        }));

        const partnerList = (data.partners || []).map(p => ({
            id: p.id, name: p.name,
            description_id: p.description_id || p.description || '',
            description_en: p.description_en || p.description || '',
            icon: p.icon, image: p.image, color: p.color, link: p.link
        }));

        const teamList = (data.team || []).map(t => ({
            id: t.id, name: t.name,
            role_id: t.role_id || t.role || '',
            role_en: t.role_en || t.role || '',
            image: t.image, linkedin: t.linkedin, instagram: t.instagram
        }));

        const activityList = (data.activityCards || []).map(a => ({
            id: a.id,
            category_id: a.category_id || a.category || '',
            category_en: a.category_en || a.category || '',
            date_str: a.date || '',
            title_id: a.title_id || a.title || '',
            title_en: a.title_en || a.title || '',
            description_id: a.description_id || a.description || '',
            description_en: a.description_en || a.description || '',
            image: a.image, link: a.link,
            full_story_id: a.fullStory_id || a.fullStory || '',
            full_story_en: a.full_story_en || a.fullStory || ''
        }));

        const podcastList = (data.podcasts || []).map(p => ({
            id: p.id,
            episode_id: p.episode_id || p.episode || '',
            episode_en: p.episode_en || p.episode || '',
            title_id: p.title_id || p.title || '',
            title_en: p.title_en || p.title || '',
            thumbnail: p.thumbnail, spotify_link: p.spotifyLink
        }));

        const ds = data.donationSettings;
        const donationObj = {
            id: 1,
            hero_title_id: ds.hero_title_id || ds.heroTitle || '',
            hero_title_en: ds.hero_title_en || ds.heroTitle || '',
            hero_subtitle_id: ds.hero_subtitle_id || ds.heroSubtitle || '',
            hero_subtitle_en: ds.hero_subtitle_en || ds.heroSubtitle || '',
            strip_text_id: ds.strip_text_id || ds.stripText || '',
            strip_text_en: ds.strip_text_en || ds.stripText || '',
            strip_image: ds.stripImage, bank_name: ds.bankName,
            account_name: ds.accountName, account_number: ds.accountNumber, qris_image: ds.qrisImage
        };

        const ab = data.aboutHero || {};
        const aboutObj = {
            id: 1,
            title_id: ab.title_id || ab.title || '',
            title_en: ab.title_en || ab.title || '',
            subtitle_id: ab.subtitle_id || ab.subtitle || '',
            subtitle_en: ab.subtitle_en || ab.subtitle || '',
            volunteer_count: ab.volunteerCount, image: ab.image
        };

        const eventsList = (data.events || []).map(e => ({
            id: e.id,
            title_id: e.title_id || e.title || '',
            title_en: e.title_en || e.title || '',
            date: e.date || '',
            time: e.time || '',
            location: e.location || '',
            description_id: e.description_id || e.description || '',
            description_en: e.description_en || e.description || '',
            speaker: e.speaker || '',
            speaker_role: e.speakerRole || '',
            image: e.image || '',
            link: e.link || ''
        }));

        // Perform updates sequentially
        await Promise.all([
            supabaseClient.from('testimonials').delete().neq('id', 0),
            supabaseClient.from('faqs').delete().neq('id', 0),
            supabaseClient.from('locations').delete().neq('id', 0),
            supabaseClient.from('partners').delete().neq('id', 0),
            supabaseClient.from('team_members').delete().neq('id', 0),
            supabaseClient.from('activities').delete().neq('id', 0),
            supabaseClient.from('podcasts').delete().neq('id', 0),
            supabaseClient.from('events').delete().neq('id', 0)
        ]);

        await Promise.all([
            supabaseClient.from('testimonials').insert(testimonialList),
            supabaseClient.from('faqs').insert(faqList),
            supabaseClient.from('locations').insert(locationList),
            supabaseClient.from('partners').insert(partnerList),
            supabaseClient.from('team_members').insert(teamList),
            supabaseClient.from('activities').insert(activityList),
            supabaseClient.from('podcasts').insert(podcastList),
            supabaseClient.from('events').insert(eventsList),
            supabaseClient.from('donation_settings').upsert(donationObj),
            supabaseClient.from('about_settings').upsert(aboutObj)
        ]);

        return true;
    } catch (error) {
        console.error("Error writing to Supabase:", error);
        throw error;
    }
};

// --- Offline-first Sync and LocalStorage Interceptor for CMS Dashboard ---
const originalSetItem = localStorage.setItem;

localStorage.setItem = function(key, value) {
    originalSetItem.call(localStorage, key, value);

    if (key === 'teacher_classes') {
        try {
            const classes = JSON.parse(value);
            syncClassesToSupabase(classes);
        } catch(e) {}
    } else if (key === 'mock_fb_list_certificates') {
        try {
            const certs = JSON.parse(value);
            syncCertsToSupabase(certs);
        } catch(e) {}
    } else if (key === 'event_registrations') {
        try {
            const regs = JSON.parse(value);
            syncEventRegsToSupabase(regs);
        } catch(e) {}
    } else if (key === 'teacher_class_registrations') {
        try {
            const regs = JSON.parse(value);
            syncTeacherRegsToSupabase(regs);
        } catch(e) {}
    }
};

async function syncClassesToSupabase(classes) {
    try {
        const hasTempId = classes.some(c => isNaN(parseInt(c.id, 10)));
        const list = classes.map(c => {
            const item = {
                title: c.title,
                category: c.category,
                grade: c.grade,
                slot: parseInt(c.slot, 10) || 0,
                desc_text: c.desc || '',
                date_str: c.date || '',
                time_str: c.time || '',
                platform: c.platform || '',
                mentor: c.mentor || '',
                mentor_title: c.mentorTitle || '',
                avatar: c.avatar || ''
            };
            if (!hasTempId) {
                item.id = parseInt(c.id, 10);
            }
            return item;
        });
        const { error: delErr } = await supabaseClient.from('teacher_classes').delete().neq('id', 0);
        if (delErr) throw delErr;
        if (list.length > 0) {
            const { error: insErr } = await supabaseClient.from('teacher_classes').insert(list);
            if (insErr) throw insErr;
        }
        console.log("Successfully synced teacher classes to Supabase.");
    } catch(e) { console.error("Error syncing classes:", e); }
}

async function syncCertsToSupabase(certs) {
    try {
        const hasTempId = certs.some(c => isNaN(parseInt(c.id, 10)));
        const list = certs.map(c => {
            const item = {
                certificate_number: c.data.certificateNumber,
                name: c.data.name,
                email: c.data.email,
                phone: c.data.phone || null,
                event_name: c.data.eventName,
                issue_date: c.data.issueDate,
                role: c.data.role || 'Participant',
                description: c.data.description
            };
            if (!hasTempId) {
                item.id = parseInt(c.id, 10);
            }
            return item;
        });
        const { error: delErr } = await supabaseClient.from('certificates').delete().neq('id', 0);
        if (delErr) throw delErr;
        if (list.length > 0) {
            const { error: insErr } = await supabaseClient.from('certificates').insert(list);
            if (insErr) throw insErr;
        }
        console.log("Successfully synced certificates to Supabase.");
    } catch(e) { console.error("Error syncing certificates:", e); }
}

async function syncEventRegsToSupabase(regs) {
    try {
        const hasTempId = regs.some(r => isNaN(parseInt(r.id, 10)));
        const list = regs.map(r => {
            const item = {
                event_id: String(r.eventId || ''),
                event_name: r.eventName || '',
                name: r.name,
                instansi: r.instansi || null,
                email: r.email,
                phone: r.phone,
                domisili: r.domisili || null
            };
            if (!hasTempId) {
                item.id = parseInt(r.id, 10);
            }
            return item;
        });
        const { error: delErr } = await supabaseClient.from('event_registrations').delete().neq('id', 0);
        if (delErr) throw delErr;
        if (list.length > 0) {
            const { error: insErr } = await supabaseClient.from('event_registrations').insert(list);
            if (insErr) throw insErr;
        }
        console.log("Successfully synced event registrations to Supabase.");
    } catch(e) { console.error("Error syncing event registrations:", e); }
}

async function syncTeacherRegsToSupabase(regs) {
    try {
        const list = regs.map(r => ({
            student_name: r.studentName,
            grade: r.grade,
            phone: r.phone,
            email: r.email,
            notes: r.notes || null,
            class_title: r.classTitle
        }));
        const { error: delErr } = await supabaseClient.from('teacher_registrations').delete().neq('id', 0);
        if (delErr) throw delErr;
        if (list.length > 0) {
            const { error: insErr } = await supabaseClient.from('teacher_registrations').insert(list);
            if (insErr) throw insErr;
        }
        console.log("Successfully synced teacher registrations to Supabase.");
    } catch(e) { console.error("Error syncing teacher registrations:", e); }
}

window.syncFromSupabase = async function() {
    try {
        const [
            resClasses,
            resCerts,
            resEventRegs,
            resTeacherRegs,
            resCats
        ] = await Promise.all([
            supabaseClient.from('teacher_classes').select('*'),
            supabaseClient.from('certificates').select('*'),
            supabaseClient.from('event_registrations').select('*'),
            supabaseClient.from('teacher_registrations').select('*'),
            supabaseClient.from('sd_categories').select('*')
        ]);

        if (resClasses.data) {
            const classes = resClasses.data.map(c => ({
                id: c.id,
                title: c.title,
                category: c.category,
                grade: c.grade,
                slot: c.slot,
                desc: c.desc_text,
                date: c.date_str,
                time: c.time_str,
                platform: c.platform,
                mentor: c.mentor,
                mentorTitle: c.mentor_title,
                avatar: c.avatar
            }));
            originalSetItem.call(localStorage, 'teacher_classes', JSON.stringify(classes));
        }

        if (resCerts.data) {
            const certs = resCerts.data.map(c => ({
                id: String(c.id),
                data: {
                    certificateNumber: c.certificate_number,
                    name: c.name,
                    email: c.email,
                    phone: c.phone,
                    eventName: c.event_name,
                    issueDate: c.issue_date,
                    role: c.role,
                    description: c.description
                }
            }));
            originalSetItem.call(localStorage, 'mock_fb_list_certificates', JSON.stringify(certs));
        }

        if (resEventRegs.data) {
            const regs = resEventRegs.data.map(r => ({
                id: r.id,
                eventId: r.event_id,
                eventName: r.event_name,
                name: r.name,
                instansi: r.instansi,
                email: r.email,
                phone: r.phone,
                domisili: r.domisili,
                registeredAt: r.created_at
            }));
            originalSetItem.call(localStorage, 'event_registrations', JSON.stringify(regs));
        }

        if (resTeacherRegs.data) {
            const regs = resTeacherRegs.data.map(r => ({
                studentName: r.student_name,
                grade: r.grade,
                phone: r.phone,
                email: r.email,
                notes: r.notes,
                classTitle: r.class_title,
                registeredAt: r.created_at
            }));
            originalSetItem.call(localStorage, 'teacher_class_registrations', JSON.stringify(regs));
        }

        if (resCats.data) {
            originalSetItem.call(localStorage, 'sd_categories', JSON.stringify(resCats.data));
        }

        // Trigger rendering event in Dashboard if it's active
        if (typeof window.renderAllLists === 'function') {
            window.renderAllLists();
        }
    } catch(e) {
        console.error("Error pulling data from Supabase:", e);
    }
};

// Run initial synchronization in the background only in the CMS pages
if (window.location.pathname.includes('/CMS/') || window.location.pathname.includes('Dashboard.html')) {
    window.syncFromSupabase();
}

window.uploadToSupabaseStorage = async function(base64Data, filename) {
    try {
        const arr = base64Data.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        const blob = new Blob([u8arr], { type: mime });
        
        const finalName = filename || `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.webp`;
        
        const { data, error } = await supabaseClient.storage
            .from('media')
            .upload(finalName, blob, {
                contentType: mime,
                upsert: true
            });
            
        if (error) throw error;
        
        const { data: urlData } = supabaseClient.storage
            .from('media')
            .getPublicUrl(finalName);
            
        return urlData.publicUrl;
    } catch(e) {
        console.error("Error uploading to Supabase Storage:", e);
        throw e;
    }
};
