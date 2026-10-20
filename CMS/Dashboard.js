(function () {
            'use strict';

            if (!localStorage.getItem('hey_youth_cms_v2_fixed')) {
                localStorage.removeItem('hey_youth_cms');
                localStorage.setItem('hey_youth_cms_v2_fixed', 'true');
            }

            /* =========================================
               ========================================= */
            var CMS_KEY = 'hey_youth_cms';

            var DEFAULT_DATA = {
                externalTestimonials: [
                    {
                        id: 1,
                        name: 'Mr. Rifki Zamzam',
                        title: 'Co-Founder, Qatar HR Forum',
                        title_id: 'Co-Founder, Qatar HR Forum',
                        title_en: 'Co-Founder, Qatar HR Forum',
                        quote: 'Kerjasama dengan Hey Youth! memberikan dampak positif yang nyata bagi komunitas kami.',
                        quote_id: 'Kerjasama dengan Hey Youth! memberikan dampak positif yang nyata bagi komunitas kami.',
                        quote_en: 'Collaborating with Hey Youth! brings a real positive impact to our community.',
                        image: 'img/Testi/p1.webp'
                    },
                    {
                        id: 2,
                        name: 'Ms. Rina Nurutami, S.Psi',
                        title: 'Vice Principal, Daarut Tauhid',
                        title_id: 'Wakil Kepala Sekolah, Daarut Tauhid',
                        title_en: 'Vice Principal, Daarut Tauhid',
                        quote: 'Sangat menginspirasi melihat semangat pemuda yang rela berkontribusi untuk pendidikan.',
                        quote_id: 'Sangat menginspirasi melihat semangat pemuda yang rela berkontribusi untuk pendidikan.',
                        quote_en: 'It is highly inspiring to see the youth passion to contribute to education.',
                        image: 'img/Testi/p2.webp'
                    },
                    {
                        id: 3,
                        name: 'Yiwen Xu',
                        title: 'Student, Univ. of Edinburgh',
                        title_id: 'Mahasiswa, Univ. of Edinburgh',
                        title_en: 'Student, Univ. of Edinburgh',
                        quote: 'Hey Youth! adalah jembatan yang menghubungkan antusiasme dengan aksi nyata.',
                        quote_id: 'Hey Youth! adalah jembatan yang menghubungkan antusiasme dengan aksi nyata.',
                        quote_en: 'Hey Youth! is a bridge that connects enthusiasm with real actions.',
                        image: 'img/Testi/p3.webp'
                    }
                ],
                internalTestimonials: [
                    {
                        id: 4,
                        name: 'Alya',
                        role: 'Community Coordinator',
                        role_id: 'Koordinator Komunitas',
                        role_en: 'Community Coordinator',
                        quote: 'Sangat bahagia bisa bergabung di Hey Youth! Banyak belajar hal baru setiap hari.',
                        quote_id: 'Sangat bahagia bisa bergabung di Hey Youth! Banyak belajar hal baru setiap hari.',
                        quote_en: 'Extremely happy to join Hey Youth! Learning new things every day.',
                        image: 'img/Testi/Alya.webp'
                    },
                    {
                        id: 5,
                        name: 'Herza',
                        role: 'Web Developer',
                        role_id: 'Web Developer',
                        role_en: 'Web Developer',
                        quote: 'Hey Youth adalah agent of change. Di sini kita bisa membuat dampak nyata.',
                        quote_id: 'Hey Youth adalah agent of change. Di sini kita bisa membuat dampak nyata.',
                        quote_en: 'Hey Youth is an agent of change. Here we can make a real difference.',
                        image: 'img/Testi/Herza.webp'
                    },
                    {
                        id: 6,
                        name: 'Karyn',
                        role: 'Teacher',
                        role_id: 'Guru',
                        role_en: 'Teacher',
                        quote: 'Hey Youth merayakan rasa ingin tahu dan membentuk sistem kepercayaan.',
                        quote_id: 'Hey Youth merayakan rasa ingin tahu dan membentuk sistem kepercayaan.',
                        quote_en: 'Hey Youth celebrates curiosity and builds trust systems.',
                        image: 'img/Testi/Karyn.webp'
                    }
                ],
                faqs: [
                    {
                        id: 1,
                        question: 'Apa itu komunitas Hey Youth! dan apa fokus program utamanya?',
                        question_id: 'Apa itu komunitas Hey Youth! dan apa fokus program utamanya?',
                        question_en: 'What is the Hey Youth! community and what are its primary program focuses?',
                        answer: 'Hey Youth! adalah organisasi nirlaba kepemudaan yang berfokus pada pemberdayaan generasi muda melalui pendidikan inklusif, literasi digital, pendampingan belajar siswa SD (Teacher Class SD), workshop pengembangan karir & AI, serta aksi kerelawanan di berbagai chapter daerah di Indonesia.',
                        answer_id: 'Hey Youth! adalah organisasi nirlaba kepemudaan yang berfokus pada pemberdayaan generasi muda melalui pendidikan inklusif, literasi digital, pendampingan belajar siswa SD (Teacher Class SD), workshop pengembangan karir & AI, serta aksi kerelawanan di berbagai chapter daerah di Indonesia.',
                        answer_en: 'Hey Youth! is a youth-led non-profit organization dedicated to empowering the next generation through inclusive education, digital literacy, elementary mentoring (Teacher Class), career & AI workshops, and volunteer chapter initiatives across Indonesia.'
                    },
                    {
                        id: 2,
                        question: 'Bagaimana alur pendaftaran untuk menjadi relawan atau mengikuti webinar?',
                        question_id: 'Bagaimana alur pendaftaran untuk menjadi relawan atau mengikuti webinar?',
                        question_en: 'How does the registration process work for becoming a volunteer or joining webinars?',
                        answer: 'Untuk bergabung sebagai relawan, Anda dapat mendaftar langsung melalui tombol "Gabung Hey Youth" di halaman beranda dengan sistem rolling recruitment. Untuk mengikuti webinar atau workshop, silakan kunjungi halaman Activities, pilih kegiatan terdekat yang diminati, dan isi formulir pendaftaran 1-klik untuk menerima link akses serta pengingat acara otomatis.',
                        answer_id: 'Untuk bergabung sebagai relawan, Anda dapat mendaftar langsung melalui tombol "Gabung Hey Youth" di halaman beranda dengan sistem rolling recruitment. Untuk mengikuti webinar atau workshop, silakan kunjungi halaman Activities, pilih kegiatan terdekat yang diminati, dan isi formulir pendaftaran 1-klik untuk menerima link akses serta pengingat acara otomatis.',
                        answer_en: 'To join as a volunteer, you can register anytime via the "Join Hey Youth" button on our homepage through our open rolling recruitment. To attend webinars or workshops, head to the Activities page, choose an upcoming event, and fill out the 1-click registration form to receive your access link and automated reminders.'
                    },
                    {
                        id: 3,
                        question: 'Apakah peserta kegiatan webinar akan mendapatkan E-Sertifikat resmi dan bagaimana cara mengunduhnya?',
                        question_id: 'Apakah peserta kegiatan webinar akan mendapatkan E-Sertifikat resmi dan bagaimana cara mengunduhnya?',
                        question_en: 'Do webinar attendees receive an official E-Certificate and how can it be downloaded?',
                        answer: 'Ya, seluruh peserta webinar dan workshop yang telah menyelesaikan kegiatan berhak mendapatkan E-Sertifikat resmi terverifikasi Hey Youth. Anda dapat mencari dan mengunduh sertifikat kapan saja melalui fitur "Unduh E-Sertifikat" di halaman Activities hanya dengan memasukkan nama lengkap atau nomor sertifikat Anda.',
                        answer_id: 'Ya, seluruh peserta webinar dan workshop yang telah menyelesaikan kegiatan berhak mendapatkan E-Sertifikat resmi terverifikasi Hey Youth. Anda dapat mencari dan mengunduh sertifikat kapan saja melalui fitur "Unduh E-Sertifikat" di halaman Activities hanya dengan memasukkan nama lengkap atau nomor sertifikat Anda.',
                        answer_en: 'Yes, all participants who attend our webinars and workshops are entitled to an official, verified Hey Youth E-Certificate. You can verify and download your certificate anytime via the "Download E-Certificate" tool on the Activities page simply by entering your full name or certificate number.'
                    }
                ],
                locations: [
                    { id: 101, name: 'Jakarta', lat: -6.2088, lng: 106.8456, volunteers: 8 },
                    { id: 102, name: 'Karawang', lat: -6.3146, lng: 107.3094, volunteers: 1 },
                    { id: 103, name: 'Medan', lat: 3.5952, lng: 98.6722, volunteers: 1 },
                    { id: 104, name: 'Jakarta Timur', lat: -6.2307, lng: 106.8967, volunteers: 2 },
                    { id: 105, name: 'Malang', lat: -7.9826, lng: 112.6308, volunteers: 3 },
                    { id: 106, name: 'Jakarta Selatan', lat: -6.2615, lng: 106.8106, volunteers: 2 },
                    { id: 107, name: 'Arcamanik, Bandung', lat: -6.9175, lng: 107.6191, volunteers: 1 },
                    { id: 108, name: 'Depok', lat: -6.4025, lng: 106.8048, volunteers: 3 },
                    { id: 109, name: 'Bogor', lat: -6.5950, lng: 106.7997, volunteers: 4 },
                    { id: 110, name: 'Bangka', lat: -2.3216, lng: 106.1086, volunteers: 1 },
                    { id: 111, name: 'West Java', lat: -6.9034, lng: 107.6046, volunteers: 1 },
                    { id: 112, name: 'Palembang', lat: -2.9761, lng: 104.7754, volunteers: 1 },
                    { id: 113, name: 'Sunter, Jakarta Utara', lat: -6.1360, lng: 106.8778, volunteers: 1 },
                    { id: 114, name: 'Purwokerto', lat: -7.4239, lng: 109.2215, volunteers: 1 },
                    { id: 115, name: 'Cikarang', lat: -6.2737, lng: 107.1352, volunteers: 1 },
                    { id: 116, name: 'Bekasi', lat: -6.2369, lng: 106.9715, volunteers: 3 },
                    { id: 117, name: 'Tuban, East Java', lat: -6.9079, lng: 112.0560, volunteers: 1 },
                    { id: 118, name: 'Sumedang, Jatinangor', lat: -6.9329, lng: 107.7667, volunteers: 1 },
                    { id: 119, name: 'Gresik', lat: -7.1666, lng: 112.6568, volunteers: 1 },
                    { id: 120, name: 'Purbalingga', lat: -7.3707, lng: 109.3582, volunteers: 1 },
                    { id: 121, name: 'Jakarta Barat', lat: -6.1754, lng: 106.8272, volunteers: 1 },
                    { id: 122, name: 'Aceh', lat: 5.5524, lng: 95.3188, volunteers: 1 },
                    { id: 123, name: 'Batang, Jawa Tengah', lat: -7.0094, lng: 109.7368, volunteers: 1 },
                    { id: 124, name: 'Bandung', lat: -6.9175, lng: 107.6191, volunteers: 2 },
                    { id: 125, name: 'Surabaya', lat: -7.2504, lng: 112.7688, volunteers: 1 },
                    { id: 126, name: 'Bali', lat: -8.4095, lng: 115.1889, volunteers: 1 },
                    { id: 127, name: 'Surakarta', lat: -7.5559, lng: 110.8200, volunteers: 1 },
                    { id: 128, name: 'Pekanbaru', lat: 0.5071, lng: 101.4478, volunteers: 1 },
                    { id: 129, name: 'South Tangerang', lat: -6.2878, lng: 106.7323, volunteers: 1 },
                    { id: 130, name: 'Kendari', lat: -3.9806, lng: 122.5160, volunteers: 1 }
                ],
                partners: [
                    {
                        id: 1,
                        name: 'Qatar HR Forum',
                        description: 'Membangun jaringan profesional HR global.',
                        description_id: 'Membangun jaringan profesional HR global.',
                        description_en: 'Building a global professional HR network.',
                        icon: 'fa-users-cog',
                        image: 'img/Partners/Qatar HR Forum.webp',
                        color: 'blue',
                        link: 'https://qatarhrforum.com'
                    },
                    {
                        id: 2,
                        name: 'The Facial Skin Lab',
                        description: 'Klinik kecantikan terpercaya.',
                        description_id: 'Klinik kecantikan terpercaya.',
                        description_en: 'A trusted beauty clinic.',
                        icon: 'fa-spa',
                        image: 'img/Partners/The Facial Skin Lab.webp',
                        color: 'pink',
                        link: 'https://instagram.com'
                    },
                    {
                        id: 3,
                        name: 'Shadow A Scientist',
                        description: 'Program mentoring ilmiah.',
                        description_id: 'Program mentoring ilmiah.',
                        description_en: 'Scientific mentoring program.',
                        icon: 'fa-flask',
                        image: 'img/Partners/Shadow A Scientist.webp',
                        color: 'purple',
                        link: '#'
                    },
                    {
                        id: 4,
                        name: 'SMP Adzkia',
                        description: 'Sekolah Islam terpadu.',
                        description_id: 'Sekolah Islam terpadu.',
                        description_en: 'Integrated Islamic School.',
                        icon: 'fa-school',
                        image: 'img/Partners/SMP Adzkia Islamic.webp',
                        color: 'green',
                        link: '#'
                    }
                ],
                donationSettings: {
                    heroTitle: 'Support Our Mission',
                    heroTitle_id: 'Dukung Misi Kami',
                    heroTitle_en: 'Support Our Mission',
                    heroSubtitle: 'Bantu kami menyediakan akses pendidikan yang layak bagi anak-anak Indonesia. Setiap donasi Anda menjadi jembatan menuju masa depan yang lebih cerah.',
                    heroSubtitle_id: 'Bantu kami menyediakan akses pendidikan yang layak bagi anak-anak Indonesia. Setiap donasi Anda menjadi jembatan menuju masa depan yang lebih cerah.',
                    heroSubtitle_en: 'Help us provide decent access to education for Indonesian children. Every donation you make is a bridge to a brighter future.',
                    stripText: 'Together We Can',
                    stripText_id: 'Bersama Kita Bisa',
                    stripText_en: 'Together We Can',
                    stripImage: 'img/Front Card.webp',
                    bankName: 'Bank Central Asia (BCA)',
                    accountName: 'Yuni Triandini',
                    accountNumber: '466 0070 724',
                    qrisImage: 'https://via.placeholder.com/200?text=QRIS'
                },
                aboutHero: {
                    title: 'Mendidik Untuk <br><span class="text-primary">Masa Depan Indonesia</span>',
                    title_id: 'Mendidik Untuk <br><span class="text-primary">Masa Depan Indonesia</span>',
                    title_en: 'Educating For <br><span class="text-primary">Indonesia\'s Future</span>',
                    subtitle: 'Hey Youth adalah sebuah komunitas pemuda di Indonesia yang didedikasikan untuk melakukan perubahan melalui pendidikan. Kami menyediakan akses ke pendidikan berkualitas dan peluang mentoring bagi mereka yang membutuhkan.',
                    subtitle_id: 'Hey Youth adalah sebuah komunitas pemuda di Indonesia yang didedikasikan untuk melakukan perubahan melalui pendidikan. Kami menyediakan akses ke pendidikan berkualitas dan peluang mentoring bagi mereka yang membutuhkan.',
                    subtitle_en: 'Hey Youth is a youth community in Indonesia dedicated to making changes through education. We provide access to quality education and mentoring opportunities for those in need.',
                    volunteerCount: '1k+',
                    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070&auto=format&fit=crop'
                },
                team: [
                    {
                        id: 201,
                        name: 'Yuni Triandini',
                        role: 'Founder',
                        role_id: 'Founder',
                        role_en: 'Founder',
                        image: 'img/ceo.webp',
                        linkedin: '#',
                        instagram: '#'
                    },
                    {
                        id: 202,
                        name: 'Rama',
                        role: 'Head of Marketing',
                        role_id: 'Kepala Pemasaran',
                        role_en: 'Head of Marketing',
                        image: 'https://ui-avatars.com/api/?name=Rama&size=100&background=random&color=fff',
                        linkedin: '#',
                        instagram: '#'
                    },
                    {
                        id: 203,
                        name: 'Dzikri',
                        role: 'Head of Graphic Designer',
                        role_id: 'Kepala Desainer Grafis',
                        role_en: 'Head of Graphic Designer',
                        image: 'https://ui-avatars.com/api/?name=Dzikri&size=100&background=random&color=fff',
                        linkedin: '#',
                        instagram: '#'
                    }
                ],
                activityCards: [
                    {
                        id: 301,
                        category: 'Education',
                        category_id: 'Pendidikan',
                        category_en: 'Education',
                        date: '10 November 2025',
                        title: 'Dream Big, Learn Bigger: Inspiring the Next Generation at Yos Sudarso',
                        title_id: 'Dream Big, Learn Bigger: Menginspirasi Generasi Penerus di Yos Sudarso',
                        title_en: 'Dream Big, Learn Bigger: Inspiring the Next Generation at Yos Sudarso',
                        description: 'Kami mengunjungi sekolah di Yos Sudarso untuk berbagi inspirasi dan materi pendidikan interaktif kepada ratusan siswa, membantu mereka bermimpi lebih besar.',
                        description_id: 'Kami mengunjungi sekolah di Yos Sudarso untuk berbagi inspirasi dan materi pendidikan interaktif kepada ratusan siswa, membantu mereka bermimpi lebih besar.',
                        description_en: 'We visited a school in Yos Sudarso to share inspiration and interactive educational materials with hundreds of students, helping them dream bigger.',
                        image: 'img/Donation.webp',
                        link: '#',
                        fullStory: '<p>Pada hari yang cerah, tim Hey Youth berkunjung ke SD Yos Sudarso. Antusiasme siswa-siswi sangat luar biasa ketika kami memperkenalkan program mentoring kami.</p><p>Kegiatan ini diawali dengan sesi ice breaking yang diikuti oleh seluruh siswa kelas 5 and 6. Dilanjutkan dengan materi tentang "Membangun Mimpi Sejak Dini".</p><br><p>Kami berharap kunjungan ini dapat menjadi inspirasi bagi mereka untuk terus belajar dan giat meraih cita-cita.</p>',
                        fullStory_id: '<p>Pada hari yang cerah, tim Hey Youth berkunjung ke SD Yos Sudarso. Antusiasme siswa-siswi sangat luar biasa ketika kami memperkenalkan program mentoring kami.</p><p>Kegiatan ini diawali dengan sesi ice breaking yang diikuti oleh seluruh siswa kelas 5 and 6. Dilanjutkan dengan materi tentang "Membangun Mimpi Sejak Dini".</p><br><p>Kami berharap kunjungan ini dapat menjadi inspirasi bagi mereka untuk terus belajar dan giat meraih cita-cita.</p>',
                        fullStory_en: '<p>On a bright day, the Hey Youth team visited SD Yos Sudarso. The enthusiasm of the students was extraordinary when we introduced our mentoring program.</p><p>This activity started with an ice-breaking session followed by all 5th and 6th grade students, followed by material on "Building Dreams from an Early Age".</p><br><p>We hope this visit can serve as an inspiration for them to keep learning and striving to achieve their dreams.</p>'
                    },
                    {
                        id: 302,
                        category: 'Community',
                        category_id: 'Komunitas',
                        category_en: 'Community',
                        date: '14 April 2025',
                        title: 'Instilling Education, Igniting Dreams: Hey Youth\'s Visit to TBM Kolong',
                        title_id: 'Menanamkan Pendidikan, Menyalakan Impian: Kunjungan Hey Youth ke TBM Kolong',
                        title_en: 'Instilling Education, Igniting Dreams: Hey Youth\'s Visit to TBM Kolong',
                        description: 'Kunjungan spesial ke TBM Kolong untuk mendukung literasi di lingkungan sekitar, mendonasikan buku, dan mengadakan sesi membaca bersama anak-anak.',
                        description_id: 'Kunjungan spesial ke TBM Kolong untuk mendukung literasi di lingkungan sekitar, mendonasikan buku, dan mengadakan sesi membaca bersama anak-anak.',
                        description_en: 'A special visit to TBM Kolong to support local literacy, donating books, and hosting a reading session with children.',
                        image: 'img/Front Card.webp',
                        link: '#',
                        fullStory: '<p>TBM Kolong adalah salah satu tempat baca yang sangat bersemangat di daerah kami. Kami mendonasikan 100 eksemplar buku cerita dan ensiklopedia anak.</p><p>Selain donasi buku, relawan kami juga membacakan cerita rakyat Nusantara kepada anak-anak dengan penuh ekspresi.</p>',
                        fullStory_id: '<p>TBM Kolong adalah salah satu tempat baca yang sangat bersemangat di daerah kami. Kami mendonasikan 100 eksemplar buku cerita dan ensiklopedia anak.</p><p>Selain donasi buku, relawan kami juga membacakan cerita rakyat Nusantara kepada anak-anak dengan penuh ekspresi.</p>',
                        fullStory_en: '<p>TBM Kolong is a very vibrant reading shelter in our area. We donated 100 copies of children storybooks and encyclopedias.</p><p>Along with book donation, our volunteers read Indonesian folklores to children with rich expressions.</p>'
                    }
                ],
                podcasts: [
                    {
                        id: 401,
                        episode: 'Episode 2',
                        episode_id: 'Episode 2',
                        episode_en: 'Episode 2',
                        title: 'Suicide Is Not The Answer: Here\'s Why',
                        title_id: 'Suicide Is Not The Answer: Ini Alasannya',
                        title_en: 'Suicide Is Not The Answer: Here\'s Why',
                        thumbnail: 'img/Podcast/Eps 2.webp',
                        spotifyLink: 'https://open.spotify.com/episode/5xcQh5HewK3MvIcxkSiWef'
                    },
                    {
                        id: 402,
                        episode: 'Episode 1',
                        episode_id: 'Episode 1',
                        episode_en: 'Episode 1',
                        title: 'The Power of Self-Affirmation: Transforming Our Lives',
                        title_id: 'Kekuatan Afirmasi Diri: Mengubah Hidup Kita',
                        title_en: 'The Power of Self-Affirmation: Transforming Our Lives',
                        thumbnail: 'img/Podcast/Eps 1.webp',
                        spotifyLink: 'https://open.spotify.com/episode/1a0xUotfQZAdD6jtHT4l5g?si=l3nk1yvSSzK7XPMMFLMvHA&nd=1&dlsi=746e34d28eaa4e68'
                    }
                ],
                events: [
                    {
                        id: 601,
                        title_id: 'Webinar Persiapan Karir Global',
                        title_en: 'Global Career Preparation Webinar',
                        date: '25 Juli 2026',
                        time: '15:00 WIB',
                        location: 'Zoom Meeting',
                        description_id: 'Webinar gratis untuk membantu mahasiswa mempersiapkan karir di tingkat global.',
                        description_en: 'Free webinar to help students prepare for global careers.',
                        speaker: 'Yuni Triandini',
                        speakerRole: 'Founder of Hey Youth',
                        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
                        link: 'https://zoom.us/j/123456789',
                        status: 'upcoming'
                    }
                ],
                mentors: [
                    {
                        id: 501,
                        name: 'Alvin Wibowo',
                        role: 'Software Engineer at Google',
                        expertise: 'Web Development, System Design',
                        hours: 120,
                        reviews: 45,
                        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop',
                        status: 'active'
                    }
                ],
                eventsSettings: {
                    eventTitle_id: 'Ikuti Event Kami',
                    eventTitle_en: 'Join Our Events',
                    eventSubtitle_id: 'Daftar untuk mengikuti webinar dan kelas bimbingan yang akan berlangsung.',
                    eventSubtitle_en: 'Register to join our upcoming webinars and mentorship sessions.',
                    certTitle_id: 'Unduh E-Sertifikat Anda',
                    certTitle_en: 'Download Your E-Certificate',
                    certSubtitle_id: 'Masukkan email yang Anda gunakan saat mendaftar acara untuk mengklaim sertifikat partisipasi Anda.',
                    certSubtitle_en: 'Enter the email address you used during event registration to claim your certificate.'
                }
            };

            /* =========================================
               ========================================= */
            var cleanLangText = window.cleanLangText || function (str, preferredLang) {
                if (!str || typeof str !== 'string') return '';
                var lang = preferredLang || 'id';
                var reg = new RegExp('<span class=[\"\']lang-' + lang + '[\"\']>([\\s\\S]*?)<\\/span>', 'i');
                var match = str.match(reg);
                if (match && match[1]) {
                    return match[1].replace(/<[^>]+>/g, '').trim();
                }
                if (/<span class=[\"\']lang-/i.test(str)) {
                    return str.replace(/<[^>]+>/g, '').trim();
                }
                return str;
            };

            var cleanLangHtml = window.cleanLangHtml || function (str, preferredLang) {
                if (!str || typeof str !== 'string') return '';
                var lang = preferredLang || 'id';
                var reg = new RegExp('<span class=[\"\']lang-' + lang + '[\"\']>([\\s\\S]*?)<\\/span>', 'i');
                var match = str.match(reg);
                if (match && match[1]) {
                    return match[1].trim();
                }
                if (/<span class=[\"\']lang-/i.test(str)) {
                    return str.replace(/<\/?span[^>]*>/gi, '').trim();
                }
                return str;
            };

            var sanitizeCmsData = window.sanitizeCmsData || function (data) {
                if (!data || typeof data !== 'object') return data;
                try {
                    var d = JSON.parse(JSON.stringify(data));
                    if (Array.isArray(d.externalTestimonials)) {
                        d.externalTestimonials.forEach(function (t) {
                            t.title_id = cleanLangText(t.title_id || t.title, 'id');
                            t.title_en = cleanLangText(t.title_en || t.title, 'en');
                            t.title = t.title_id || t.title_en || '';
                            t.quote_id = cleanLangText(t.quote_id || t.quote, 'id');
                            t.quote_en = cleanLangText(t.quote_en || t.quote, 'en');
                            t.quote = t.quote_id || t.quote_en || '';
                        });
                    }
                    if (Array.isArray(d.internalTestimonials)) {
                        d.internalTestimonials.forEach(function (t) {
                            t.role_id = cleanLangText(t.role_id || t.role, 'id');
                            t.role_en = cleanLangText(t.role_en || t.role, 'en');
                            t.role = t.role_id || t.role_en || '';
                            t.quote_id = cleanLangText(t.quote_id || t.quote, 'id');
                            t.quote_en = cleanLangText(t.quote_en || t.quote, 'en');
                            t.quote = t.quote_id || t.quote_en || '';
                        });
                    }
                    if (Array.isArray(d.faqs)) {
                        d.faqs.forEach(function (f) {
                            f.question_id = cleanLangText(f.question_id || f.question, 'id');
                            f.question_en = cleanLangText(f.question_en || f.question, 'en');
                            f.question = f.question_id || f.question_en || '';
                            f.answer_id = cleanLangText(f.answer_id || f.answer, 'id');
                            f.answer_en = cleanLangText(f.answer_en || f.answer, 'en');
                            f.answer = f.answer_id || f.answer_en || '';
                        });
                    }
                    if (Array.isArray(d.partners)) {
                        d.partners.forEach(function (p) {
                            p.description_id = cleanLangText(p.description_id || p.description, 'id');
                            p.description_en = cleanLangText(p.description_en || p.description, 'en');
                            p.description = p.description_id || p.description_en || '';
                        });
                    }
                    if (Array.isArray(d.team)) {
                        d.team.forEach(function (t) {
                            t.role_id = cleanLangText(t.role_id || t.role, 'id');
                            t.role_en = cleanLangText(t.role_en || t.role, 'en');
                            t.role = t.role_id || t.role_en || '';
                        });
                    }
                    if (Array.isArray(d.activityCards)) {
                        d.activityCards.forEach(function (a) {
                            a.category_id = cleanLangText(a.category_id || a.category, 'id');
                            a.category_en = cleanLangText(a.category_en || a.category, 'en');
                            a.category = a.category_id || a.category_en || '';
                            a.title_id = cleanLangText(a.title_id || a.title, 'id');
                            a.title_en = cleanLangText(a.title_en || a.title, 'en');
                            a.title = a.title_id || a.title_en || '';
                            a.description_id = cleanLangText(a.description_id || a.description, 'id');
                            a.description_en = cleanLangText(a.description_en || a.description, 'en');
                            a.description = a.description_id || a.description_en || '';
                            a.full_story_id = cleanLangHtml(a.full_story_id || a.fullStory, 'id');
                            a.full_story_en = cleanLangHtml(a.full_story_en || a.fullStory, 'en');
                            a.fullStory = a.full_story_id || a.full_story_en || '';
                        });
                    }
                    if (Array.isArray(d.podcasts)) {
                        d.podcasts.forEach(function (p) {
                            p.episode_id = cleanLangText(p.episode_id || p.episode, 'id');
                            p.episode_en = cleanLangText(p.episode_en || p.episode, 'en');
                            p.episode = p.episode_id || p.episode_en || '';
                            p.title_id = cleanLangText(p.title_id || p.title, 'id');
                            p.title_en = cleanLangText(p.title_en || p.title, 'en');
                            p.title = p.title_id || p.title_en || '';
                        });
                    }
                    if (d.donationSettings) {
                        var ds = d.donationSettings;
                        ds.hero_title_id = cleanLangText(ds.hero_title_id || ds.heroTitle, 'id');
                        ds.hero_title_en = cleanLangText(ds.hero_title_en || ds.heroTitle, 'en');
                        ds.heroTitle = ds.hero_title_id || ds.hero_title_en || '';
                        ds.hero_subtitle_id = cleanLangText(ds.hero_subtitle_id || ds.heroSubtitle, 'id');
                        ds.hero_subtitle_en = cleanLangText(ds.hero_subtitle_en || ds.heroSubtitle, 'en');
                        ds.heroSubtitle = ds.hero_subtitle_id || ds.hero_subtitle_en || '';
                        ds.strip_text_id = cleanLangText(ds.strip_text_id || ds.stripText, 'id');
                        ds.strip_text_en = cleanLangText(ds.strip_text_en || ds.stripText, 'en');
                        ds.stripText = ds.strip_text_id || ds.strip_text_en || '';
                    }
                    if (d.aboutHero) {
                        var ab = d.aboutHero;
                        ab.subtitle_id = cleanLangText(ab.subtitle_id || ab.subtitle, 'id');
                        ab.subtitle_en = cleanLangText(ab.subtitle_en || ab.subtitle, 'en');
                        ab.subtitle = ab.subtitle_id || ab.subtitle_en || '';
                    }
                    if (Array.isArray(d.events)) {
                        d.events.forEach(function (e) {
                            e.title_id = cleanLangText(e.title_id || e.title, 'id');
                            e.title_en = cleanLangText(e.title_en || e.title, 'en');
                            e.title = e.title_id || e.title_en || '';
                            e.description_id = cleanLangText(e.description_id || e.description, 'id');
                            e.description_en = cleanLangText(e.description_en || e.description, 'en');
                            e.description = e.description_id || e.description_en || '';
                        });
                    }
                    return d;
                } catch (e) {
                    return data;
                }
            };

            var memoryData = null;

            function _resolveImgPath(path) {
                if (!path) return '';
                if (path.indexOf('data:') === 0 || path.indexOf('http') === 0 || path.indexOf('//') === 0 || path.indexOf('blob:') === 0) {
                    return path;
                }
                var cleanPath = path;
                if (cleanPath.indexOf('../assets/') === 0) {
                    cleanPath = cleanPath.substring(10);
                } else if (cleanPath.indexOf('assets/') === 0) {
                    cleanPath = cleanPath.substring(7);
                } else if (cleanPath.indexOf('../') === 0) {
                    cleanPath = cleanPath.substring(3);
                }
                if (cleanPath.indexOf('img/') !== 0) {
                    cleanPath = 'img/' + cleanPath;
                }
                return '../assets/' + cleanPath;
            }

            function getData() {
                var merged = JSON.parse(JSON.stringify(DEFAULT_DATA));
                if (memoryData) {
                    for (var key in memoryData) {
                        if (memoryData.hasOwnProperty(key)) {
                            merged[key] = memoryData[key];
                        }
                    }
                }
                return sanitizeCmsData(merged);
            }

            async function saveData(data) {
                var cleanedData = sanitizeCmsData(data);
                memoryData = JSON.parse(JSON.stringify(cleanedData));
                try {
                    localStorage.setItem('hey_youth_cms', JSON.stringify(cleanedData));
                } catch (e) {}
                try {
                    await window.saveFirebaseData(cleanedData);
                    return true;
                } catch (e) {
                    showToast('Gagal menyimpan ke database.', 'error');
                    return false;
                }
            }

            /* =========================================
               ========================================= */
            var editingItem = null;
            var editingSection = null;
            var deletingId = null;
            var deletingSection = null;
            var uploadedImage = null;
            var uploadedQrisImage = null;
            var uploadedSpeakerImage = null;

            /* =========================================
               ========================================= */
            function closeSidebar() {
                var sidebar = document.getElementById('sidebar');
                var backdrop = document.getElementById('sidebar-backdrop');
                if (sidebar) sidebar.classList.add('-translate-x-full');
                if (backdrop) backdrop.classList.add('hidden');
            }
            window.closeSidebar = closeSidebar;

            function openSidebar() {
                var sidebar = document.getElementById('sidebar');
                var backdrop = document.getElementById('sidebar-backdrop');
                if (sidebar) sidebar.classList.remove('-translate-x-full');
                if (backdrop) backdrop.classList.remove('hidden');
            }
            window.openSidebar = openSidebar;
            function switchTab(tab) {
                editingItem = null;
                editingSection = null;

                document.querySelectorAll('.sidebar-link').forEach(function (el) {
                    el.classList.toggle('active', el.getAttribute('data-tab') === tab);
                });

                document.getElementById('view-homepage').classList.add('hidden');
                document.getElementById('view-about').classList.add('hidden');
                document.getElementById('view-activities').classList.add('hidden');
                var viewMentoring = document.getElementById('view-mentoring');
                if (viewMentoring) viewMentoring.classList.add('hidden');
                document.getElementById('view-partners').classList.add('hidden');
                document.getElementById('view-donation').classList.add('hidden');
                var viewCertificates = document.getElementById('view-certificates');
                if (viewCertificates) viewCertificates.classList.add('hidden');
                var viewRegistrasi = document.getElementById('view-registrasi');
                if (viewRegistrasi) viewRegistrasi.classList.add('hidden');

                if (tab === 'homepage') {
                    document.getElementById('view-homepage').classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Homepage';
                    document.getElementById('page-desc').textContent = 'Kelola seluruh konten yang tampil di beranda';
                } else if (tab === 'about') {
                    document.getElementById('view-about').classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'About Us';
                    document.getElementById('page-desc').textContent = 'Kelola profil organisasi dan tim inti';
                    renderAboutPreview();
                } else if (tab === 'activities') {
                    document.getElementById('view-activities').classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Activities';
                    document.getElementById('page-desc').textContent = 'Kelola berita kegiatan dan episode podcast terbaru';
                } else if (tab === 'mentoring') {
                    if (viewMentoring) viewMentoring.classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Teacher Class';
                    document.getElementById('page-desc').textContent = 'Kelola kategori pelajaran, kartu sesi kelas, dan pendaftaran siswa SD';
                    if (typeof loadAndRenderMentoringCategories === 'function') loadAndRenderMentoringCategories();
                    if (typeof loadAndRenderTeacherClasses === 'function') loadAndRenderTeacherClasses();
                    if (typeof loadAndRenderTeacherRegistrations === 'function') loadAndRenderTeacherRegistrations();
                } else if (tab === 'partners') {
                    document.getElementById('view-partners').classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Partners';
                    document.getElementById('page-desc').textContent = 'Kelola daftar mitra dan kolaborator organisasi';
                } else if (tab === 'donation') {
                    document.getElementById('view-donation').classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Donation Page';
                    document.getElementById('page-desc').textContent = 'Kelola konten halaman donasi';
                    renderDonationPreview();
                } else if (tab === 'certificates') {
                    if (viewCertificates) viewCertificates.classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Sertifikat';
                    document.getElementById('page-desc').textContent = 'Desain layout e-sertifikat dan kelola log data sertifikat yang terbit';
                    if (typeof loadAndRenderCertificateDesigns === 'function') loadAndRenderCertificateDesigns();
                } else if (tab === 'registrasi') {
                    if (viewRegistrasi) viewRegistrasi.classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Registrasi Relawan';
                    document.getElementById('page-desc').textContent = 'Kelola seluruh data pendaftar relawan dari formulir website, tinjau alasan, dan perbarui status';
                    if (typeof loadAndRenderVolunteerRegistrations === 'function') loadAndRenderVolunteerRegistrations();
                } else if (tab === 'activity-log') {
                    var viewActivityLog = document.getElementById('view-activity-log');
                    if (viewActivityLog) viewActivityLog.classList.remove('hidden');
                    document.getElementById('page-title').textContent = 'Log Aktivitas';
                    document.getElementById('page-desc').textContent = 'Riwayat seluruh aktivitas admin: login, tambah, edit, dan hapus data';
                    renderActivityLog();
                }

                // Sembunyikan view-activity-log dan view-registrasi kecuali tab-nya aktif
                var viewActivityLog = document.getElementById('view-activity-log');
                if (viewActivityLog && tab !== 'activity-log') viewActivityLog.classList.add('hidden');
                if (viewRegistrasi && tab !== 'registrasi') viewRegistrasi.classList.add('hidden');

                renderAllLists();
                closeSidebar();
            }
            window.switchTab = switchTab;

            async function loadAndRenderCertificateDesigns() {
                var tbody = document.getElementById('list-certificate-designs');
                var countEl = document.getElementById('count-certificate-designs');
                if (!tbody) return;
                try {
                    const { data, error } = await window.supabase
                        .from('certificate_settings')
                        .select('*')
                        .order('updated_at', { ascending: false });
                        
                    if (error) throw error;
                    
                    if (countEl) countEl.textContent = data ? data.length : 0;
                    
                    if (!data || data.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-6 text-gray-400">Belum ada desain sertifikat yang disimpan.</td></tr>';
                        return;
                    }
                    
                    tbody.innerHTML = data.map(function(item) {
                        var imgHtml = item.template_image 
                            ? '<img src="' + item.template_image + '" class="w-16 h-10 object-cover rounded border border-gray-200 dark:border-slate-700 shadow-sm">' 
                            : '<div class="w-16 h-10 bg-gray-100 dark:bg-slate-800 rounded border flex items-center justify-center text-[10px] text-gray-400">No Image</div>';
                        
                        var elementCount = item.layout_json ? item.layout_json.length : 0;
                        var updatedDate = item.updated_at ? new Date(item.updated_at).toLocaleString('id-ID') : '-';
                        
                        return '<tr class="hover:bg-gray-55 transition-colors">' +
                            '<td class="px-4 py-3">' + imgHtml + '</td>' +
                            '<td class="px-4 py-3 font-semibold text-xs text-heading">' + escapeHtml(item.event_name) + '</td>' +
                            '<td class="px-4 py-3 text-xs">' + elementCount + ' elemen</td>' +
                            '<td class="px-4 py-3 text-xs text-gray-500">' + updatedDate + '</td>' +
                            '<td class="px-4 py-3 text-right text-xs space-x-2">' +
                            '  <a href="CertificateEditor.html" target="_blank" class="text-amber-600 hover:text-amber-700 font-semibold"><i class="fas fa-edit"></i> Edit</a>' +
                            '  <button onclick="deleteCertificateDesign(\'' + escapeHtml(item.event_name) + '\')" class="text-red-500 hover:text-red-700 font-semibold"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                            '</td>' +
                            '</tr>';
                    }).join('');
                } catch(e) {
                    console.error("Gagal merender daftar desain sertifikat:", e);
                    tbody.innerHTML = '<tr><td colspan="5" class="text-center py-6 text-red-500">Gagal memuat data.</td></tr>';
                }
            }
            window.loadAndRenderCertificateDesigns = loadAndRenderCertificateDesigns;

            async function deleteCertificateDesign(eventName) {
                if (eventName === '-- DEFAULT LAYOUT --') {
                    alert("Layout Default tidak dapat dihapus!");
                    return;
                }
                if (!confirm("Apakah Anda yakin ingin menghapus desain sertifikat untuk event '" + eventName + "'?")) return;
                try {
                    const { error } = await window.supabase
                        .from('certificate_settings')
                        .delete()
                        .eq('event_name', eventName);
                    if (error) throw error;
                    // ===== ACTIVITY LOG =====
                    try {
                        addActivityLog('HAPUS', 'Desain Sertifikat', 'Menghapus desain sertifikat: "' + eventName + '"');
                    } catch(e) {}
                    // ========================
                    loadAndRenderCertificateDesigns();
                } catch(e) {
                    alert("Gagal menghapus: " + e.message);
                }
            }
            window.deleteCertificateDesign = deleteCertificateDesign;

            // ========================================================
            // MODUL KELOLA REGISTRASI RELAWAN WEBSITE
            // ========================================================
            var volunteerRegistrationsCache = [];

            function getStoredVolunteerRegistrations() {
                try {
                    return JSON.parse(localStorage.getItem('heyyouth_volunteer_registrations') || '[]');
                } catch(e) {
                    return [];
                }
            }

            function saveStoredVolunteerRegistrations(list) {
                try {
                    localStorage.setItem('heyyouth_volunteer_registrations', JSON.stringify(list));
                } catch(e) {}
            }

            async function loadAndRenderVolunteerRegistrations() {
                var tbody = document.getElementById('list-volunteer-registrations');
                var countBadge = document.getElementById('badge-registrations-count');
                var totalEl = document.getElementById('stat-reg-total');
                var pendingEl = document.getElementById('stat-reg-pending');
                var acceptedEl = document.getElementById('stat-reg-accepted');
                var sidebarCount = document.getElementById('count-registrations');

                if (!tbody) return;

                var localList = getStoredVolunteerRegistrations();
                var mergedList = [].concat(localList);

                // Coba sinkronisasi data dari Supabase tabel volunteers
                if (window.supabaseClient) {
                    try {
                        var sbRes = await window.supabaseClient
                            .from('volunteers')
                            .select('*')
                            .order('created_at', { ascending: false });

                        if (sbRes && !sbRes.error && Array.isArray(sbRes.data)) {
                            sbRes.data.forEach(function(sbItem) {
                                var exists = mergedList.some(function(item) {
                                    return item.email === sbItem.email || item.id === sbItem.id;
                                });
                                if (!exists) {
                                    mergedList.push({
                                        id: sbItem.id || ('HY-REL-' + (sbItem.created_at ? new Date(sbItem.created_at).getFullYear() : '2026') + '-' + Math.floor(1000 + Math.random() * 9000)),
                                        name: sbItem.full_name || sbItem.name || '-',
                                        email: sbItem.email || '-',
                                        whatsapp: sbItem.whatsapp_number || sbItem.whatsapp || '-',
                                        institution: sbItem.city || sbItem.institution || '-',
                                        division_1: sbItem.chapter_choice || sbItem.division_1 || '-',
                                        division_2: sbItem.division_choice || sbItem.division_2 || '-',
                                        reason_1: sbItem.reason || '-',
                                        reason_2: '',
                                        status: sbItem.status || 'pending',
                                        submittedAt: sbItem.created_at || new Date().toISOString()
                                    });
                                }
                            });
                        }
                    } catch(e) {
                        console.info("[Hey Youth CMS] Info Supabase volunteers:", e);
                    }
                }

                volunteerRegistrationsCache = mergedList;

                // Update Counters
                var total = mergedList.length;
                var pendingCount = mergedList.filter(function(r) { return !r.status || r.status === 'pending'; }).length;
                var acceptedCount = mergedList.filter(function(r) { return r.status === 'accepted'; }).length;

                if (totalEl) totalEl.textContent = total;
                if (pendingEl) pendingEl.textContent = pendingCount;
                if (acceptedEl) acceptedEl.textContent = acceptedCount;
                if (countBadge) countBadge.textContent = total + ' pelamar';
                if (sidebarCount) sidebarCount.textContent = total;

                renderFilteredVolunteerRegistrations();
            }
            window.loadAndRenderVolunteerRegistrations = loadAndRenderVolunteerRegistrations;

            function updateVolunteerRegistrationBadge() {
                var localList = getStoredVolunteerRegistrations();
                var sidebarCount = document.getElementById('count-registrations');
                if (sidebarCount) sidebarCount.textContent = localList.length;
            }
            window.updateVolunteerRegistrationBadge = updateVolunteerRegistrationBadge;

            function renderFilteredVolunteerRegistrations() {
                var tbody = document.getElementById('list-volunteer-registrations');
                if (!tbody) return;

                var searchInput = document.getElementById('search-volunteer-registrations');
                var divisionSelect = document.getElementById('filter-reg-division');
                var statusSelect = document.getElementById('filter-reg-status');

                var query = searchInput ? (searchInput.value || '').toLowerCase().trim() : '';
                var divisionFilter = divisionSelect ? divisionSelect.value : 'all';
                var statusFilter = statusSelect ? statusSelect.value : 'all';

                var filtered = volunteerRegistrationsCache.filter(function(item) {
                    var text = (
                        (item.name || '') + ' ' + 
                        (item.email || '') + ' ' + 
                        (item.whatsapp || '') + ' ' + 
                        (item.institution || '') + ' ' +
                        (item.id || '')
                    ).toLowerCase();

                    var matchesQuery = !query || text.indexOf(query) !== -1;
                    var matchesDivision = divisionFilter === 'all' || 
                        (item.division_1 === divisionFilter) || 
                        (item.division_2 === divisionFilter);
                    var itemStatus = item.status || 'pending';
                    var matchesStatus = statusFilter === 'all' || itemStatus === statusFilter;

                    return matchesQuery && matchesDivision && matchesStatus;
                });

                if (filtered.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="7" class="text-center py-10 text-gray-400">' +
                        '<i class="fas fa-inbox text-3xl mb-2 block opacity-30"></i>' +
                        'Tidak ada data pendaftar yang sesuai kriteria.' +
                        '</td></tr>';
                    return;
                }

                tbody.innerHTML = filtered.map(function(item, idx) {
                    var status = item.status || 'pending';
                    var statusBadgeClass = '';
                    if (status === 'accepted') {
                        statusBadgeClass = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
                    } else if (status === 'rejected') {
                        statusBadgeClass = 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300';
                    } else {
                        statusBadgeClass = 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
                    }

                    var cleanPhone = (item.whatsapp || '').replace(/[^0-9]/g, '');
                    if (cleanPhone.indexOf('08') === 0) {
                        cleanPhone = '628' + cleanPhone.substring(2);
                    }

                    var dateStr = '-';
                    if (item.submittedAt) {
                        try {
                            dateStr = new Date(item.submittedAt).toLocaleDateString('id-ID', {
                                day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                            });
                        } catch(e) {}
                    }

                    var waLink = cleanPhone ? 'https://wa.me/' + cleanPhone + '?text=' + encodeURIComponent('Halo ' + item.name + ', salam dari Tim Rekrutmen Hey Youth! Kami ingin mengonfirmasi pendaftaran relawan Anda dengan nomor ' + (item.id || '')) : '';

                    return '<tr class="hover:bg-gray-50 dark:hover:bg-slate-800/60 transition-colors">' +
                        '<td class="px-4 py-3">' +
                            '<span class="font-mono font-bold text-xs text-primary dark:text-blue-400 block">' + escapeHtml(item.id || ('HY-REL-' + (idx + 1))) + '</span>' +
                            '<span class="text-[11px] text-gray-400 block">' + dateStr + '</span>' +
                        '</td>' +
                        '<td class="px-4 py-3">' +
                            '<span class="font-bold text-xs text-heading block">' + escapeHtml(item.name) + '</span>' +
                            '<span class="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5"><i class="fas fa-graduation-cap text-[10px]"></i> ' + escapeHtml(item.institution || '-') + '</span>' +
                        '</td>' +
                        '<td class="px-4 py-3">' +
                            '<span class="text-xs text-gray-600 dark:text-gray-300 block mb-1">' + escapeHtml(item.email) + '</span>' +
                            (waLink ? '<a href="' + waLink + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 hover:bg-green-200 text-green-700 dark:bg-green-900/40 dark:text-green-300 text-[11px] font-semibold transition-colors"><i class="fab fa-whatsapp"></i> ' + escapeHtml(item.whatsapp) + '</a>' : '<span class="text-xs text-gray-400">' + escapeHtml(item.whatsapp) + '</span>') +
                        '</td>' +
                        '<td class="px-4 py-3 text-xs">' +
                            '<span class="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-semibold mb-1 border border-blue-100 dark:border-blue-900/50">1: ' + escapeHtml(item.division_1 || '-') + '</span><br>' +
                            '<span class="text-gray-500 dark:text-gray-400 text-[11px]">2: ' + escapeHtml(item.division_2 || '-') + '</span>' +
                        '</td>' +
                        '<td class="px-4 py-3">' +
                            '<button onclick="openVolunteerDetailModal(\'' + escapeAttr(item.id) + '\')" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-heading transition-colors cursor-pointer">' +
                                '<i class="fas fa-eye text-primary text-[10px]"></i> Lihat Alasan' +
                            '</button>' +
                        '</td>' +
                        '<td class="px-4 py-3">' +
                            '<select onchange="updateVolunteerStatus(\'' + escapeAttr(item.id) + '\', this.value)" class="text-xs font-bold rounded-lg px-2.5 py-1 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer focus:ring-1 focus:ring-primary outline-none ' + statusBadgeClass + '">' +
                                '<option value="pending"' + (status === 'pending' ? ' selected' : '') + '>⏳ Pending</option>' +
                                '<option value="accepted"' + (status === 'accepted' ? ' selected' : '') + '>✅ Diterima</option>' +
                                '<option value="rejected"' + (status === 'rejected' ? ' selected' : '') + '>❌ Ditolak</option>' +
                            '</select>' +
                        '</td>' +
                        '<td class="px-4 py-3 text-right">' +
                            '<button onclick="deleteVolunteerRegistration(\'' + escapeAttr(item.id) + '\')" class="text-red-500 hover:text-red-700 p-1.5 rounded hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer" title="Hapus Data">' +
                                '<i class="fas fa-trash-alt text-xs"></i>' +
                            '</button>' +
                        '</td>' +
                    '</tr>';
                }).join('');
            }
            window.renderFilteredVolunteerRegistrations = renderFilteredVolunteerRegistrations;

            async function updateVolunteerStatus(id, newStatus) {
                var localList = getStoredVolunteerRegistrations();
                var item = localList.find(function(x) { return x.id === id; });
                if (item) {
                    item.status = newStatus;
                    saveStoredVolunteerRegistrations(localList);
                }

                if (window.supabaseClient) {
                    try {
                        await window.supabaseClient.from('volunteers').update({ status: newStatus }).eq('id', id);
                    } catch(e) {}
                }

                try {
                    addActivityLog('EDIT', 'Status Relawan', 'Memperbarui status pendaftar ' + id + ' menjadi "' + newStatus + '"');
                } catch(e) {}

                showToast('Status pendaftar berhasil diperbarui.', 'success');
                loadAndRenderVolunteerRegistrations();
            }
            window.updateVolunteerStatus = updateVolunteerStatus;

            async function deleteVolunteerRegistration(id) {
                if (!confirm('Apakah Anda yakin ingin menghapus data pendaftar ini?')) return;

                var localList = getStoredVolunteerRegistrations();
                var filtered = localList.filter(function(x) { return x.id !== id; });
                saveStoredVolunteerRegistrations(filtered);

                if (window.supabaseClient) {
                    try {
                        await window.supabaseClient.from('volunteers').delete().eq('id', id);
                    } catch(e) {}
                }

                try {
                    addActivityLog('HAPUS', 'Data Relawan', 'Menghapus pendaftaran relawan ID: ' + id);
                } catch(e) {}

                showToast('Data pendaftar berhasil dihapus.', 'success');
                loadAndRenderVolunteerRegistrations();
            }
            window.deleteVolunteerRegistration = deleteVolunteerRegistration;

            function clearAllVolunteerRegistrations() {
                if (!confirm('PERINGATAN: Apakah Anda yakin ingin membersihkan SEMUA data pendaftar relawan? Tindakan ini tidak dapat dibatalkan.')) return;

                saveStoredVolunteerRegistrations([]);

                try {
                    addActivityLog('HAPUS', 'Data Relawan', 'Membersihkan semua data pendaftar relawan');
                } catch(e) {}

                showToast('Semua data pendaftar relawan dibersihkan.', 'success');
                loadAndRenderVolunteerRegistrations();
            }
            window.clearAllVolunteerRegistrations = clearAllVolunteerRegistrations;

            function openVolunteerDetailModal(id) {
                var modal = document.getElementById('modal-volunteer-detail');
                var body = document.getElementById('modal-volunteer-detail-body');
                if (!modal || !body) return;

                var item = volunteerRegistrationsCache.find(function(x) { return x.id === id; });
                if (!item) return;

                var cleanPhone = (item.whatsapp || '').replace(/[^0-9]/g, '');
                if (cleanPhone.indexOf('08') === 0) cleanPhone = '628' + cleanPhone.substring(2);
                var waLink = cleanPhone ? 'https://wa.me/' + cleanPhone : '';

                body.innerHTML = 
                    '<div class="bg-blue-50 dark:bg-slate-800/80 p-4 rounded-xl border border-blue-100 dark:border-slate-700/60 flex items-center justify-between flex-wrap gap-2">' +
                        '<div>' +
                            '<span class="text-xs text-gray-500 dark:text-gray-400">Nomor Registrasi:</span>' +
                            '<span class="font-mono font-bold text-sm text-primary dark:text-blue-400 block">' + escapeHtml(item.id) + '</span>' +
                        '</div>' +
                        '<div class="text-right">' +
                            '<span class="text-xs text-gray-500 dark:text-gray-400">Status Saat Ini:</span>' +
                            '<span class="inline-block px-2.5 py-0.5 rounded-full font-bold text-xs uppercase bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 block">' + escapeHtml(item.status || 'pending') + '</span>' +
                        '</div>' +
                    '</div>' +
                    '<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">' +
                        '<div class="p-3 bg-gray-50 dark:bg-slate-800/50 rounded-xl">' +
                            '<span class="text-xs text-gray-400 block mb-0.5">Nama Lengkap</span>' +
                            '<span class="font-bold text-heading">' + escapeHtml(item.name) + '</span>' +
                        '</div>' +
                        '<div class="p-3 bg-gray-50 dark:bg-slate-800/50 rounded-xl">' +
                            '<span class="text-xs text-gray-400 block mb-0.5">Universitas / Institusi</span>' +
                            '<span class="font-bold text-heading">' + escapeHtml(item.institution || '-') + '</span>' +
                        '</div>' +
                        '<div class="p-3 bg-gray-50 dark:bg-slate-800/50 rounded-xl">' +
                            '<span class="text-xs text-gray-400 block mb-0.5">Alamat Email</span>' +
                            '<a href="mailto:' + escapeAttr(item.email) + '" class="font-semibold text-primary hover:underline">' + escapeHtml(item.email) + '</a>' +
                        '</div>' +
                        '<div class="p-3 bg-gray-50 dark:bg-slate-800/50 rounded-xl">' +
                            '<span class="text-xs text-gray-400 block mb-0.5">WhatsApp</span>' +
                            (waLink ? '<a href="' + waLink + '" target="_blank" class="font-bold text-green-600 hover:underline flex items-center gap-1"><i class="fab fa-whatsapp"></i> ' + escapeHtml(item.whatsapp) + '</a>' : '<span class="font-bold text-heading">' + escapeHtml(item.whatsapp) + '</span>') +
                        '</div>' +
                    '</div>' +
                    '<div class="space-y-3 pt-2">' +
                        '<div class="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700">' +
                            '<div class="flex items-center gap-2 mb-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">' +
                                '<i class="fas fa-star"></i> Pilihan Pertama: ' + escapeHtml(item.division_1 || '-') +
                            '</div>' +
                            '<p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">' + escapeHtml(item.reason_1 || '-') + '</p>' +
                        '</div>' +
                        '<div class="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700">' +
                            '<div class="flex items-center gap-2 mb-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">' +
                                '<i class="fas fa-star-half-alt"></i> Pilihan Kedua: ' + escapeHtml(item.division_2 || '-') +
                            '</div>' +
                            '<p class="text-xs text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">' + escapeHtml(item.reason_2 || '-') + '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="pt-3 flex gap-2">' +
                        (waLink ? '<a href="' + waLink + '?text=' + encodeURIComponent('Halo ' + item.name + ', salam dari Tim Rekrutmen Hey Youth!') + '" target="_blank" class="flex-1 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"><i class="fab fa-whatsapp"></i> Hubungi di WhatsApp</a>' : '') +
                        '<button onclick="closeVolunteerDetailModal()" class="px-5 py-2.5 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-heading font-semibold text-xs transition-colors cursor-pointer">Tutup</button>' +
                    '</div>';

                modal.classList.remove('hidden');
            }
            window.openVolunteerDetailModal = openVolunteerDetailModal;

            function closeVolunteerDetailModal() {
                var modal = document.getElementById('modal-volunteer-detail');
                if (modal) modal.classList.add('hidden');
            }
            window.closeVolunteerDetailModal = closeVolunteerDetailModal;

            function exportVolunteerRegistrationsCSV() {
                if (volunteerRegistrationsCache.length === 0) {
                    showToast('Tidak ada data pendaftar untuk diekspor.', 'error');
                    return;
                }

                var headers = ['No Registrasi', 'Tanggal Masuk', 'Nama Lengkap', 'Email', 'WhatsApp', 'Universitas / Institusi', 'Pilihan Divisi 1', 'Alasan Divisi 1', 'Pilihan Divisi 2', 'Alasan Divisi 2', 'Status'];
                var csvRows = [headers.join(',')];

                volunteerRegistrationsCache.forEach(function(item) {
                    var row = [
                        item.id || '',
                        item.submittedAt || '',
                        item.name || '',
                        item.email || '',
                        item.whatsapp || '',
                        item.institution || '',
                        item.division_1 || '',
                        (item.reason_1 || '').replace(/(\r\n|\n|\r)/gm, ' '),
                        item.division_2 || '',
                        (item.reason_2 || '').replace(/(\r\n|\n|\r)/gm, ' '),
                        item.status || 'pending'
                    ].map(function(val) {
                        return '"' + String(val).replace(/"/g, '""') + '"';
                    });
                    csvRows.push(row.join(','));
                });

                var csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(csvRows.join('\n'));
                var link = document.createElement('a');
                var timestamp = new Date().toISOString().slice(0, 10);
                link.setAttribute('href', csvContent);
                link.setAttribute('download', 'Pendaftaran_Relawan_HeyYouth_' + timestamp + '.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                try {
                    addActivityLog('TAMBAH', 'Ekspor Data', 'Mengekspor ' + volunteerRegistrationsCache.length + ' data relawan ke file CSV');
                } catch(e) {}
            }
            window.exportVolunteerRegistrationsCSV = exportVolunteerRegistrationsCSV;

            function renderAllLists() {
                try {
                    var data = getData();
                    try { renderTestimonials('list-external', data.externalTestimonials, 'external'); } catch(e){}
                    try { renderTestimonials('list-internal', data.internalTestimonials, 'internal'); } catch(e){}
                    try { renderFaqs(data.faqs); } catch(e){}
                    try { renderLocations(data.locations); } catch(e){}
                    try { renderTeam(data.team); } catch(e){}
                    try { renderActivityCards(data.activityCards); } catch(e){}
                    try { renderPodcasts(data.podcasts); } catch(e){}
                    try { renderPartners(data.partners); } catch(e){}
                    try { renderEventsTable(data.events || []); } catch(e){}
                    try { if (typeof window.loadAndRenderMentoringCategories === 'function') window.loadAndRenderMentoringCategories(); } catch(e){}
                    try { if (typeof window.loadAndRenderTeacherClasses === 'function') window.loadAndRenderTeacherClasses(); } catch(e){}
                    try { if (typeof window.loadAndRenderTeacherRegistrations === 'function') window.loadAndRenderTeacherRegistrations(); } catch(e){}
                    try { renderEventsSettingsPreview(data.eventsSettings || DEFAULT_DATA.eventsSettings); } catch(e){}
                    try { updateCounts(data); } catch(e){}
                    try { renderRegistrationsList(); } catch(e){}
                    try { updateVolunteerRegistrationBadge(); } catch(e){}
                    try { if (typeof loadAndRenderCertificates === 'function') loadAndRenderCertificates(); } catch(e){}
                    try { loadAndRenderCertificateDesigns(); } catch(e){}
                } catch(globalErr) {
                    console.error("renderAllLists global error:", globalErr);
                }

                var mentorsTbody = document.getElementById('list-mentors');
                if (mentorsTbody) {
                    var mentors = data.mentors || [];
                    if (mentors.length === 0) {
                        mentorsTbody.innerHTML = '<tr><td colspan="8" class="text-center py-8 text-gray-400">Belum ada mentor.</td></tr>';
                    } else {
                        mentorsTbody.innerHTML = mentors.map(function (item) {
                            var statusBadge = item.status === 'active'
                                ? '<span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Active</span>'
                                : '<span class="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Inactive</span>';

                            var imgSrc = item.image ? _resolveImgPath(item.image) : '';
                            var imgHtml = imgSrc ? '<img src="' + escapeAttr(imgSrc) + '" class="w-10 h-10 rounded-full object-cover border">' : '<div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold">' + escapeHtml(item.name.charAt(0)) + '</div>';

                            return '<tr class="border-b border-gray-150 hover:bg-gray-50 transition-colors">' +
                                '<td class="px-4 py-2.5">' + imgHtml + '</td>' +
                                '<td class="px-4 py-2.5 font-bold text-xs text-heading">' + escapeHtml(item.name) + '</td>' +
                                '<td class="px-4 py-2.5 text-xs">' + escapeHtml(item.role) + '</td>' +
                                '<td class="px-4 py-2.5 text-xs text-gray-500 max-w-xs truncate">' + escapeHtml(item.expertise) + '</td>' +
                                '<td class="px-4 py-2.5 text-xs font-semibold">' + (item.hours || 0) + ' Jam</td>' +
                                '<td class="px-4 py-2.5 text-xs text-yellow-500"><i class="fas fa-star mr-1"></i> ' + (item.reviews || 0) + '</td>' +
                                '<td class="px-4 py-2.5">' + statusBadge + '</td>' +
                                '<td class="px-4 py-2.5 text-right space-x-2">' +
                                '<button onclick="openEditMentorModal(' + item.id + ')" class="text-primary hover:text-primaryDark text-xs font-semibold"><i class="fas fa-edit"></i> Edit</button>' +
                                '<button onclick="deleteMentor(' + item.id + ')" class="text-red-500 hover:text-red-700 text-xs font-semibold"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                                '</td>' +
                                '</tr>';
                        }).join('');
                    }
                }
            }

            function renderEventsTable(events) {
                var tbody = document.getElementById('list-events');
                if (!tbody) return;
                
                if (events.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400">Belum ada event terdekat.</td></tr>';
                    return;
                }
                
                tbody.innerHTML = events.map(function (item) {
                    var computedStatus = getEventStatus(item.date, item.time);
                    var statusBadge = computedStatus === 'upcoming'
                        ? '<span class="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Upcoming</span>'
                        : '<span class="bg-gray-100 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Selesai</span>';

                    var imgSrc = item.image ? _resolveImgPath(item.image) : '';
                    var imgHtml = imgSrc 
                        ? '<img src="' + escapeAttr(imgSrc) + '" class="w-12 h-12 rounded object-cover border">' 
                        : '<div class="w-12 h-12 bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold">No Image</div>';

                    return '<tr class="border-b border-gray-100 hover:bg-gray-55 transition-colors">' +
                        '<td class="px-4 py-2.5">' + imgHtml + '</td>' +
                        '<td class="px-4 py-2.5 font-bold text-xs text-heading">' +
                        '  <div>' + escapeHtml(item.title_id || item.title || '') + '</div>' +
                        '  <div class="text-[10px] text-gray-400">EN: ' + escapeHtml(item.title_en || item.title || '') + '</div>' +
                        '  <div class="text-[10px] text-purple-600 dark:text-purple-400 font-semibold mt-1"><i class="fas fa-user-tie mr-1"></i>Speaker: ' + escapeHtml(item.speaker || '-') + ' (' + escapeHtml(item.speakerRole || '-') + ')</div>' +
                        '</td>' +
                        '<td class="px-4 py-2.5 text-xs">' + escapeHtml(item.date) + ' ' + escapeHtml(item.time || '') + '</td>' +
                        '<td class="px-4 py-2.5 text-xs text-gray-500 max-w-xs truncate">' + escapeHtml(item.location) + '</td>' +
                        '<td class="px-4 py-2.5">' + statusBadge + '</td>' +
                        '<td class="px-4 py-2.5 text-right space-x-2">' +
                        '  <button onclick="openEditModal(\'event\',' + item.id + ')" class="text-primary hover:text-primaryDark text-xs font-semibold"><i class="fas fa-edit"></i> Edit</button>' +
                        '  <button onclick="confirmDelete(\'event\',' + item.id + ')" class="text-red-500 hover:text-red-700 text-xs font-semibold"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                        '</td>' +
                        '</tr>';
                }).join('');
            }

            function renderRegistrationsList() {
                var tbody = document.getElementById('list-registrations');
                var countEl = document.getElementById('count-registrations');
                if (!tbody) return;

                var regKey = 'event_registrations';
                if (localStorage.getItem(regKey) === null) {
                    var list = [
                        {
                            id: 1,
                            name: 'Budi Santoso',
                            instansi: 'Universitas Indonesia',
                            email: 'peserta@heyyouth.org',
                            phone: '08123456789',
                            domisili: 'Jakarta',
                            eventName: 'HeyYouth Digital Summit 2026',
                            registeredAt: Date.now()
                        },
                        {
                            id: 2,
                            name: 'Jane Doe',
                            instansi: 'Stanford University',
                            email: 'speaker@heyyouth.org',
                            phone: '08111222333',
                            domisili: 'San Francisco',
                            eventName: 'HeyYouth Digital Summit 2026',
                            registeredAt: Date.now()
                        },
                        {
                            id: 3,
                            name: 'Henri Prasetyo',
                            instansi: 'Institut Teknologi Bandung',
                            email: 'henriprasetyo6@gmail.com',
                            phone: '085712345678',
                            domisili: 'Bandung',
                            eventName: 'Hey Youth Summit 2026',
                            registeredAt: Date.now()
                        }
                    ];
                    localStorage.setItem(regKey, JSON.stringify(list));
                }
                var list = JSON.parse(localStorage.getItem(regKey) || '[]');
                if (countEl) countEl.textContent = list.length;

                if (list.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="6" class="text-center py-6 text-gray-400">Belum ada pendaftaran event.</td></tr>';
                    return;
                }
                tbody.innerHTML = list.map(function (item) {
                    var escName = escapeHtml(item.name).replace(/'/g, "\\'");
                    var escEmail = escapeHtml(item.email).replace(/'/g, "\\'");
                    var escEvent = escapeHtml(item.eventName).replace(/'/g, "\\'");
                    return '<tr class="border-b border-gray-100 hover:bg-gray-55 dark:hover:bg-slate-800/50 transition-colors">' +
                        '<td class="px-4 py-3 text-xs font-semibold text-heading">' + escapeHtml(item.name) + '</td>' +
                        '<td class="px-4 py-3 text-xs text-gray-600 dark:text-slate-300">' + escapeHtml(item.instansi) + '</td>' +
                        '<td class="px-4 py-3 text-xs">' +
                        '  <div class="font-medium text-heading">' + escapeHtml(item.email) + '</div>' +
                        '  <div class="text-[10px] text-gray-400">' + escapeHtml(item.phone) + '</div>' +
                        '</td>' +
                        '<td class="px-4 py-3 text-xs text-gray-500">' + escapeHtml(item.domisili) + '</td>' +
                        '<td class="px-4 py-3 text-xs text-gray-500 max-w-[150px] truncate">' + escapeHtml(item.eventName) + '</td>' +
                        '<td class="px-4 py-3 text-right space-x-2">' +
                        '  <button onclick="quickApproveRegistration(' + item.id + ')" class="text-green-600 hover:text-green-800 text-xs font-semibold mr-2"><i class="fas fa-check-circle"></i> Setujui Cepat</button>' +
                        '  <button onclick="publishCertificateFromReg(' + item.id + ')" class="text-purple-600 hover:text-purple-800 text-xs font-semibold"><i class="fas fa-certificate"></i> Terbitkan Sertifikat</button>' +
                        '  <button onclick="deleteRegistration(' + item.id + ')" class="text-red-500 hover:text-red-700 text-xs font-semibold"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                        '</td>' +
                        '</tr>';
                }).join('');            }


            function generateAbbreviation(eventName) {
                if (!eventName) return 'EVENT';
                var words = eventName.replace(/[^a-zA-Z0-9 ]/g, '').split(/\s+/);
                var abb = '';
                var skip = ['and', 'or', 'in', 'the', 'a', 'of', 'to', 'for', 'with', 'at', 'by', 'from', 'on', 'about', 'as', 'into', 'like', 'through', 'after', 'over', 'between', 'out', 'against', 'during', 'without', 'before', 'under', 'around', 'among'];
                words.forEach(function(word) {
                    var w = word.toLowerCase();
                    if (w && skip.indexOf(w) === -1) {
                        abb += word[0].toUpperCase();
                    }
                });
                if (!abb) abb = 'EVENT';
                return abb;
            }

            window.quickApproveRegistration = function (regId) {
                var regList = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                var reg = regList.find(function (r) { return r.id === regId; });
                if (!reg) {
                    showToast('Data registrasi tidak ditemukan.', 'error');
                    return;
                }

                var name = reg.name;
                var email = reg.email;
                var eventName = reg.eventName;

                var data = getData();
                var events = data.events || [];
                var eventObj = events.find(function(e) {
                    return (e.title_id === eventName || e.title_en === eventName || e.title === eventName);
                });

                var defaultCertDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';
                var description = eventObj ? (eventObj.certDescription || defaultCertDesc) : defaultCertDesc;

                var abb = generateAbbreviation(eventName);
                var listKey = 'mock_fb_list_certificates';
                var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                var count = list.filter(function(c) { return c.data && c.data.eventName === eventName; }).length;
                var certNum = 'HY-' + abb + '-' + String(count + 1).padStart(4, '0');
                
                var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                var todayStr = new Date().toLocaleDateString('id-ID', dateOptions);
                var issueDateStr = eventObj ? eventObj.date : todayStr;

                try {
                    var newId = 'cert_' + Date.now();
                    list.push({
                        id: newId,
                        data: {
                            certificateNumber: certNum,
                            name: name,
                            email: email,
                            phone: reg.phone || '',
                            eventName: eventName,
                            description: description,
                            issueDate: issueDateStr
                        }
                    });
                    localStorage.setItem(listKey, JSON.stringify(list));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('TAMBAH', 'Sertifikat', 'Menerbitkan sertifikat otomatis untuk: "' + name + '" (' + eventName + ')');

                    var updatedRegList = regList.filter(function(r) { return r.id !== regId; });
                    localStorage.setItem('event_registrations', JSON.stringify(updatedRegList));
                    renderRegistrationsList();
                    // ========================
                    showToast('Sertifikat berhasil diterbitkan secara otomatis!', 'success');
                    loadAndRenderCertificates();
                } catch (err) {
                    console.error(err);
                    showToast('Gagal menerbitkan sertifikat otomatis.', 'error');
                }
            };

            window.publishCertificateFromReg = function (regId) {
                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                var regList = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                var reg = regList.find(function (r) { return r.id === regId; });
                if (!reg) {
                    showToast('Data registrasi tidak ditemukan.', 'error');
                    return;
                }

                var name = reg.name;
                var email = reg.email;
                var eventName = reg.eventName;

                var data = getData();
                var events = data.events || [];
                var eventObj = events.find(function(e) {
                    return (e.title_id === eventName || e.title_en === eventName || e.title === eventName);
                });

                var defaultCertDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';
                var description = eventObj ? (eventObj.certDescription || defaultCertDesc) : defaultCertDesc;

                var abb = generateAbbreviation(eventName);
                var listKey = 'mock_fb_list_certificates';
                var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                var count = list.filter(function(c) { return c.data && c.data.eventName === eventName; }).length;
                var certNum = 'HY-' + abb + '-' + String(count + 1).padStart(4, '0');
                
                var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                var todayStr = new Date().toLocaleDateString('id-ID', dateOptions);
                var issueDateStr = eventObj ? eventObj.date : todayStr;

                modalTitle.textContent = 'Terbitkan Sertifikat dari Registrasi';
                modalBody.innerHTML = '<form id="form-add-certificate" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nomor Sertifikat</label><input type="text" id="c-number" required value="' + certNum + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Penerima</label><input type="text" id="c-name" required value="' + name + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Email Penerima</label><input type="email" id="c-email" required value="' + email + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Acara / Webinar</label><input type="text" id="c-event" required value="' + eventName + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Teks Deskripsi Sertifikat</label><textarea id="c-description" rows="6" required style="resize: vertical !important;" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm">' + escapeHtml(description) + '</textarea><p class="text-[11px] text-gray-500 mt-1">💡 Gunakan tanda <strong>**</strong> di awal dan akhir kata/kalimat untuk mencetak tebal teks. Contoh: <code>**Hey Youth Summit**</code></p></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Tanggal Rilis</label><input type="text" id="c-date" required value="' + issueDateStr + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Terbitkan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-add-certificate').addEventListener('submit', async function (e) {
                    e.preventDefault();
                    var num = document.getElementById('c-number').value.trim();
                    var nameVal = document.getElementById('c-name').value.trim();
                    var emailVal = document.getElementById('c-email').value.trim();
                    var eventVal = document.getElementById('c-event').value.trim();
                    var descVal = document.getElementById('c-description').value.trim();
                    var dateVal = document.getElementById('c-date').value.trim();

                    try {
                        var listKey = 'mock_fb_list_certificates';
                        var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                        var newId = 'cert_' + Date.now();
                        list.push({
                            id: newId,
                            data: {
                                certificateNumber: num,
                                name: nameVal,
                                email: emailVal,
                                phone: reg.phone || '',
                                eventName: eventVal,
                                description: descVal,
                                issueDate: dateVal
                            }
                        });
                        localStorage.setItem(listKey, JSON.stringify(list));
                        addActivityLog('TAMBAH', 'Sertifikat', 'Menerbitkan sertifikat ' + num + ' untuk: "' + nameVal + '" (' + eventVal + ')');
                        
                        var currentRegList = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                        currentRegList = currentRegList.filter(function(r) { return r.id !== regId; });
                        localStorage.setItem('event_registrations', JSON.stringify(currentRegList));
                        renderRegistrationsList();
                        
                        showToast('Sertifikat berhasil diterbitkan.', 'success');
                        closeModal();
                        loadAndRenderCertificates();
                    } catch (err) {
                        console.error(err);
                        showToast('Gagal menerbitkan sertifikat.', 'error');
                    }
                });
            };

            window.deleteRegistration = function (id) {
                if (!confirm('Hapus pendaftaran ini?')) return;
                var list = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                var found = list.find(function(item) { return item.id === id; });
                list = list.filter(function (item) { return item.id !== id; });
                localStorage.setItem('event_registrations', JSON.stringify(list));
                // ===== ACTIVITY LOG =====
                addActivityLog('HAPUS', 'Registrasi Event', 'Menghapus registrasi' + (found ? ': "' + (found.name || found.email || '') + '"' : ''));
                // ========================
                renderRegistrationsList();
                showToast('Pendaftaran berhasil dihapus.', 'success');
            };

            window.clearAllRegistrations = function () {
                if (!confirm('Hapus semua pendaftaran event? Tindakan ini tidak dapat dibatalkan.')) return;
                localStorage.setItem('event_registrations', '[]');
                addActivityLog('HAPUS', 'Registrasi Event', 'Membersihkan semua data pendaftaran event');
                renderRegistrationsList();
                showToast('Semua pendaftaran berhasil dibersihkan.', 'success');
            };

            window.openEventReminderModal = function() {
                var modal = document.getElementById('modal');
                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modal || !modalTitle || !modalBody) return;

                var data = getData();
                var events = data.events || [];
                var regList = JSON.parse(localStorage.getItem('event_registrations') || '[]');

                // Build unique event options
                var eventNames = [];
                events.forEach(function(e) {
                    var name = e.title_id || e.title || '';
                    if (name && eventNames.indexOf(name) === -1) eventNames.push(name);
                });
                regList.forEach(function(r) {
                    if (r.eventName && eventNames.indexOf(r.eventName) === -1) eventNames.push(r.eventName);
                });

                var eventOptionsHtml = eventNames.map(function(ev, idx) {
                    return '<option value="' + escapeAttr(ev) + '"' + (idx === 0 ? ' selected' : '') + '>' + escapeHtml(ev) + '</option>';
                }).join('');

                modalTitle.innerHTML = '<div class="flex items-center gap-2 text-primary"><i class="fas fa-bell"></i> <span>Kirim Pengingat Acara (H-1 Webinar / Acara)</span></div>';
                
                modalBody.innerHTML = 
                    '<div class="space-y-4 max-h-[75vh] overflow-y-auto pr-1">' +
                    '  <div class="bg-blue-50/70 border border-blue-150 rounded-xl p-3.5 text-xs text-blue-800 leading-relaxed">' +
                    '    <i class="fas fa-info-circle mr-1 text-primary"></i> Fitur ini membantu pengurus Hey Youth mengirimkan pengingat kepada peserta terdaftar baik secara 1-click via WhatsApp maupun broadcast email massal.' +
                    '  </div>' +
                    '  <div>' +
                    '    <label class="block text-xs font-bold text-heading uppercase mb-1">Pilih Acara / Webinar</label>' +
                    '    <select id="reminder-event-select" class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white text-heading font-semibold focus:outline-none focus:border-primary">' +
                    '      <option value="__ALL__">-- Kirim ke Semua Pendaftar (Seluruh Acara) --</option>' +
                    eventOptionsHtml +
                    '    </select>' +
                    '  </div>' +
                    '  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' +
                    '    <div>' +
                    '      <label class="block text-xs font-bold text-heading uppercase mb-1">Tipe Template</label>' +
                    '      <select id="reminder-type-select" class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white text-heading focus:outline-none focus:border-primary">' +
                    '        <option value="h-1" selected>Pengingat H-1 (Dimulai Besok)</option>' +
                    '        <option value="h-0">Pengingat Hari-H (1 Jam Sebelum Mulai)</option>' +
                    '        <option value="custom">Format Kustom</option>' +
                    '      </select>' +
                    '    </div>' +
                    '    <div>' +
                    '      <label class="block text-xs font-bold text-heading uppercase mb-1">Link Pertemuan / Zoom</label>' +
                    '      <input type="text" id="reminder-link-input" placeholder="https://bit.ly/ZoomHeyYouth" value="https://bit.ly/ZoomHeyYouth" class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-heading focus:outline-none focus:border-primary">' +
                    '    </div>' +
                    '  </div>' +
                    '  <div>' +
                    '    <label class="block text-xs font-bold text-heading uppercase mb-1">Subject Email</label>' +
                    '    <input type="text" id="reminder-subject-input" value="[PENGINGAT] Webinar Hey Youth Akan Dimulai Besok!" class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-heading focus:outline-none focus:border-primary font-medium">' +
                    '  </div>' +
                    '  <div>' +
                    '    <label class="block text-xs font-bold text-heading uppercase mb-1">Format Pesan WhatsApp (Gunakan {nama}, {event}, {link})</label>' +
                    '    <textarea id="reminder-wa-text" rows="4" class="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs text-heading focus:outline-none focus:border-primary font-mono leading-relaxed">' +
                    'Halo {nama}! 👋\n\nIni pengingat dari Hey Youth bahwa webinar "{event}" akan dimulai besok.\n\nJangan lupa siapkan pertanyaan terbaikmu dan bergabung tepat waktu melalui link berikut:\n🔗 {link}\n\nSampai jumpa besok! Semangat berdaya bersama Hey Youth! 🚀' +
                    '    </textarea>' +
                    '  </div>' +
                    '  <div class="border-t border-gray-200 pt-3">' +
                    '    <div class="flex items-center justify-between mb-2">' +
                    '      <span class="text-xs font-bold text-heading uppercase">Daftar Penerima (<span id="reminder-recipient-count">0</span> Orang)</span>' +
                    '      <div class="flex items-center gap-2">' +
                    '        <button type="button" id="reminder-copy-wa-btn" class="text-[11px] font-bold text-green-700 bg-green-50 hover:bg-green-100 px-2.5 py-1 rounded-md border border-green-200 transition-colors"><i class="fas fa-copy mr-1"></i>Salin Nomor WA</button>' +
                    '        <button type="button" id="reminder-open-email-btn" class="text-[11px] font-bold text-primary bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md border border-blue-200 transition-colors"><i class="fas fa-envelope mr-1"></i>Buka Email Client (BCC)</button>' +
                    '      </div>' +
                    '    </div>' +
                    '    <div id="reminder-participants-list" class="space-y-2 max-h-48 overflow-y-auto pr-1 border border-gray-150 rounded-xl p-2 bg-gray-50/50">' +
                    '    </div>' +
                    '  </div>' +
                    '  <div class="flex gap-2 pt-2 border-t border-gray-100">' +
                    '    <button type="button" onclick="closeModal()" class="flex-1 py-2 border border-gray-200 rounded-lg text-xs font-semibold text-heading hover:bg-gray-100 transition-colors">Tutup</button>' +
                    '    <button type="button" id="reminder-mark-sent-btn" class="flex-1 py-2 bg-primary hover:bg-primaryDark text-white rounded-lg text-xs font-bold transition-colors"><i class="fas fa-check-circle mr-1"></i>Selesai & Catat Log Aktivitas</button>' +
                    '  </div>' +
                    '</div>';

                modal.classList.remove('hidden');

                function updateParticipantsList() {
                    var selectedEvent = document.getElementById('reminder-event-select').value;
                    var filtered = regList.filter(function(r) {
                        if (selectedEvent === '__ALL__') return true;
                        return r.eventName === selectedEvent;
                    });

                    document.getElementById('reminder-recipient-count').textContent = filtered.length;
                    var container = document.getElementById('reminder-participants-list');
                    
                    if (filtered.length === 0) {
                        container.innerHTML = '<div class="text-center py-4 text-gray-400 text-xs">Tidak ada pendaftar untuk event ini.</div>';
                        return;
                    }

                    var templateText = document.getElementById('reminder-wa-text').value;
                    var linkVal = document.getElementById('reminder-link-input').value.trim();

                    container.innerHTML = filtered.map(function(item) {
                        var cleanPhone = (item.phone || '').replace(/[^0-9]/g, '');
                        if (cleanPhone.startsWith('0')) cleanPhone = '62' + cleanPhone.substring(1);
                        else if (cleanPhone.startsWith('8')) cleanPhone = '62' + cleanPhone;

                        var personalizedMsg = templateText
                            .replace(/{nama}/g, item.name || 'Teman Hey Youth')
                            .replace(/{event}/g, item.eventName || selectedEvent)
                            .replace(/{link}/g, linkVal);

                        var waUrl = 'https://api.whatsapp.com/send?phone=' + cleanPhone + '&text=' + encodeURIComponent(personalizedMsg);

                        return '<div class="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-150 text-xs">' +
                               '  <div class="min-w-0 mr-2">' +
                               '    <div class="font-bold text-heading truncate">' + escapeHtml(item.name) + ' <span class="font-normal text-gray-400 text-[10px]">(' + escapeHtml(item.instansi || '-') + ')</span></div>' +
                               '    <div class="text-gray-500 text-[11px] truncate"><i class="fab fa-whatsapp text-green-500 mr-1"></i>' + escapeHtml(item.phone || '-') + ' • <i class="fas fa-envelope text-blue-400 mr-1"></i>' + escapeHtml(item.email || '-') + '</div>' +
                               '  </div>' +
                               '  <div class="flex-shrink-0">' +
                               '    <a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 bg-green-500 hover:bg-green-600 text-white rounded-md text-[11px] font-bold inline-flex items-center gap-1 shadow-xs transition-colors">' +
                               '      <i class="fab fa-whatsapp"></i> Kirim WA' +
                               '    </a>' +
                               '  </div>' +
                               '</div>';
                    }).join('');
                }

                document.getElementById('reminder-event-select').addEventListener('change', function() {
                    var selectedEvent = this.value;
                    if (selectedEvent !== '__ALL__') {
                        document.getElementById('reminder-subject-input').value = '[PENGINGAT] Webinar ' + selectedEvent + ' Akan Dimulai Besok!';
                    }
                    updateParticipantsList();
                });

                document.getElementById('reminder-type-select').addEventListener('change', function() {
                    var t = this.value;
                    var selectedEvent = document.getElementById('reminder-event-select').value;
                    var evText = selectedEvent === '__ALL__' ? '{event}' : selectedEvent;

                    if (t === 'h-1') {
                        document.getElementById('reminder-subject-input').value = '[PENGINGAT] Webinar ' + evText + ' Akan Dimulai Besok!';
                        document.getElementById('reminder-wa-text').value = 
                            'Halo {nama}! 👋\n\nIni pengingat dari Hey Youth bahwa webinar "' + evText + '" akan dimulai besok.\n\nJangan lupa siapkan pertanyaan terbaikmu dan bergabung tepat waktu melalui link berikut:\n🔗 {link}\n\nSampai jumpa besok! Semangat berdaya bersama Hey Youth! 🚀';
                    } else if (t === 'h-0') {
                        document.getElementById('reminder-subject-input').value = '[DIMULAI SEBENTAR LAGI] Webinar ' + evText + ' Siap Dimulai!';
                        document.getElementById('reminder-wa-text').value = 
                            'Halo {nama}! ⏰\n\nWebinar "' + evText + '" akan dimulai dalam 1 jam lagi!\n\nRuang pertemuan virtual sudah dibuka. Silakan masuk lebih awal untuk mengecek audio & video:\n🔗 {link}\n\nSampai bertemu di dalam room! 👋✨';
                    }
                    updateParticipantsList();
                });

                document.getElementById('reminder-wa-text').addEventListener('input', updateParticipantsList);
                document.getElementById('reminder-link-input').addEventListener('input', updateParticipantsList);

                document.getElementById('reminder-copy-wa-btn').onclick = function() {
                    var selectedEvent = document.getElementById('reminder-event-select').value;
                    var filtered = regList.filter(function(r) {
                        if (selectedEvent === '__ALL__') return true;
                        return r.eventName === selectedEvent;
                    });
                    var numbers = filtered.map(function(r) { return r.phone; }).filter(Boolean).join(', ');
                    if (!numbers) { showToast('Tidak ada nomor WhatsApp yang ditemukan.', 'error'); return; }
                    navigator.clipboard.writeText(numbers).then(function() {
                        showToast(filtered.length + ' nomor WhatsApp disalin ke clipboard.', 'success');
                    });
                };

                document.getElementById('reminder-open-email-btn').onclick = function() {
                    var selectedEvent = document.getElementById('reminder-event-select').value;
                    var filtered = regList.filter(function(r) {
                        if (selectedEvent === '__ALL__') return true;
                        return r.eventName === selectedEvent;
                    });
                    var emails = filtered.map(function(r) { return r.email; }).filter(Boolean);
                    if (!emails.length) { showToast('Tidak ada email pendaftar yang ditemukan.', 'error'); return; }
                    var subject = document.getElementById('reminder-subject-input').value;
                    var body = document.getElementById('reminder-wa-text').value;
                    var mailtoUrl = 'mailto:hey.youth.id@gmail.com?bcc=' + encodeURIComponent(emails.join(',')) + '&subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
                    window.open(mailtoUrl, '_blank');
                    showToast('Membuka email client dengan ' + emails.length + ' penerima BCC.', 'success');
                };

                document.getElementById('reminder-mark-sent-btn').onclick = function() {
                    var selectedEvent = document.getElementById('reminder-event-select').value;
                    var filtered = regList.filter(function(r) {
                        if (selectedEvent === '__ALL__') return true;
                        return r.eventName === selectedEvent;
                    });
                    var evTitle = selectedEvent === '__ALL__' ? 'Seluruh Acara' : selectedEvent;
                    addActivityLog('PENGINGAT', 'Webinar Reminder', 'Mengirim pengingat acara "' + evTitle + '" kepada ' + filtered.length + ' peserta');
                    closeModal();
                    showToast('Pengingat acara berhasil diproses & dicatat ke log aktivitas.', 'success');
                };

                updateParticipantsList();
            };

            function renderEventsSettingsPreview(s) {
                var el = document.getElementById('preview-events-settings');
                if (!el || !s) return;
                
                el.innerHTML =
                    '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">' +
                    '  <div class="space-y-1">' +
                    '    <h4 class="font-bold text-heading text-xs uppercase text-primary mb-1 border-b pb-1">Upcoming Events Header</h4>' +
                    '    <div><strong>Title (ID):</strong> ' + escapeHtml(s.eventTitle_id) + '</div>' +
                    '    <div><strong>Title (EN):</strong> ' + escapeHtml(s.eventTitle_en) + '</div>' +
                    '    <div><strong>Subtitle (ID):</strong> ' + escapeHtml(s.eventSubtitle_id) + '</div>' +
                    '    <div><strong>Subtitle (EN):</strong> ' + escapeHtml(s.eventSubtitle_en) + '</div>' +
                    '  </div>' +
                    '  <div class="space-y-1">' +
                    '    <h4 class="font-bold text-heading text-xs uppercase text-accent mb-1 border-b pb-1">Digital Certificate Header</h4>' +
                    '    <div><strong>Title (ID):</strong> ' + escapeHtml(s.certTitle_id) + '</div>' +
                    '    <div><strong>Title (EN):</strong> ' + escapeHtml(s.certTitle_en) + '</div>' +
                    '    <div><strong>Subtitle (ID):</strong> ' + escapeHtml(s.certSubtitle_id) + '</div>' +
                    '    <div><strong>Subtitle (EN):</strong> ' + escapeHtml(s.certSubtitle_en) + '</div>' +
                    '  </div>' +
                    '</div>';
            }

            window.closeSidebar = function () {
                document.getElementById('sidebar').classList.add('-translate-x-full');
                document.getElementById('sidebar-backdrop').classList.add('hidden');
            };

            document.getElementById('sidebar-toggle').addEventListener('click', function () {
                document.getElementById('sidebar').classList.remove('-translate-x-full');
                document.getElementById('sidebar-backdrop').classList.remove('hidden');
            });

            /* =========================================
               ========================================= */
            function updateCounts(data) {
                var ext = (data.externalTestimonials || []).length;
                var int = (data.internalTestimonials || []).length;
                var faq = (data.faqs || []).length;
                var loc = (data.locations || []).length;
                var team = (data.team || []).length;
                var actCards = (data.activityCards || []).length;
                var pods = (data.podcasts || []).length;
                var partners = (data.partners || []).length;
                var eventsCount = (data.events || []).length;

                document.getElementById('count-external').textContent = ext;
                document.getElementById('count-internal').textContent = int;
                document.getElementById('count-faq').textContent = faq;
                document.getElementById('count-locations').textContent = loc;
                document.getElementById('count-team').textContent = team;

                document.getElementById('count-activity-cards').textContent = actCards;
                document.getElementById('count-podcasts').textContent = pods;
                document.getElementById('count-partners').textContent = partners;
                document.getElementById('count-partners-list').textContent = partners;
                if (document.getElementById('count-events')) {
                    document.getElementById('count-events').textContent = eventsCount;
                }

                document.getElementById('count-homepage').textContent = ext + int + faq + loc;
                document.getElementById('count-about').textContent = team + 1;
                document.getElementById('count-activities').textContent = actCards + pods + eventsCount;
            }

            /* =========================================
               ========================================= */
            async function compressImage(file, maxWidth, quality, callback) {
                try {
                    if (typeof imageCompression === 'function') {
                        var options = {
                            maxSizeMB: 0.3, // Target ~300KB
                            maxWidthOrHeight: 1920, // Kualitas HD
                            useWebWorker: true,
                            fileType: 'image/webp'
                        };
                        var compressedFile = await imageCompression(file, options);
                        
                        console.log('Ukuran Asli:', (file.size / 1024 / 1024).toFixed(2), 'MB');
                        console.log('Ukuran Terkompresi:', (compressedFile.size / 1024 / 1024).toFixed(2), 'MB');

                        var fr = new FileReader();
                        fr.onload = function (e) { callback(e.target.result); };
                        fr.readAsDataURL(compressedFile);
                        return;
                    }
                } catch(e) {
                    console.warn("Kompresi pintar gagal, menggunakan fallback canvas:", e);
                }

                // Fallback Canvas
                var reader = new FileReader();
                reader.onload = function (e) {
                    var img = new Image();
                    img.onload = function () {
                        var canvas = document.createElement('canvas');
                        var w = img.width;
                        var h = img.height;
                        var tW = 1920;
                        if (w > tW) {
                            h = Math.round((tW / w) * h);
                            w = tW;
                        }
                        canvas.width = w;
                        canvas.height = h;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0, w, h);
                        callback(canvas.toDataURL('image/webp', 0.8));
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }

            function triggerUpload(targetType) {
                var input = document.getElementById('file-input-hidden');
                input.value = '';
                input.onchange = function () {
                    var file = input.files[0];
                    if (!file) return;
                    if (!file.type.startsWith('image/')) {
                        showToast('File harus berupa gambar.', 'error');
                        return;
                    }
                    if (file.size > 10 * 1024 * 1024) {
                        showToast('Ukuran file maksimal 10MB.', 'error');
                        return;
                    }

                    var zoneId = 'upload-zone';
                    if (targetType === 'qris') zoneId = 'upload-zone-qris';
                    else if (targetType === 'speaker') zoneId = 'upload-zone-speaker';
                    var zone = document.getElementById(zoneId);

                    if (zone) {
                        zone.innerHTML = '<div class="py-6 text-center text-gray-400"><i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i><p class="text-xs">Mengunggah ke cloud...</p></div>';
                    }
                    compressImage(file, 400, 0.7, function (base64) {
                        if (typeof window.uploadToSupabaseStorage === 'function') {
                            window.uploadToSupabaseStorage(base64)
                                .then(function(publicUrl) {
                                    if (targetType === 'qris') {
                                        uploadedQrisImage = publicUrl;
                                        updateUploadPreviewQris(publicUrl);
                                    } else if (targetType === 'speaker') {
                                        uploadedSpeakerImage = publicUrl;
                                        updateUploadPreviewSpeaker(publicUrl);
                                    } else {
                                        uploadedImage = publicUrl;
                                        updateUploadPreview(publicUrl);
                                    }
                                    showToast('Gambar berhasil diunggah.', 'success');
                                })
                                .catch(function(err) {
                                    console.error(err);
                                    showToast('Gagal mengunggah ke cloud, menggunakan cache lokal.', 'warning');
                                    if (targetType === 'qris') {
                                        uploadedQrisImage = base64;
                                        updateUploadPreviewQris(base64);
                                    } else if (targetType === 'speaker') {
                                        uploadedSpeakerImage = base64;
                                        updateUploadPreviewSpeaker(base64);
                                    } else {
                                        uploadedImage = base64;
                                        updateUploadPreview(base64);
                                    }
                                });
                        } else {
                            if (targetType === 'qris') {
                                uploadedQrisImage = base64;
                                updateUploadPreviewQris(base64);
                            } else if (targetType === 'speaker') {
                                uploadedSpeakerImage = base64;
                                updateUploadPreviewSpeaker(base64);
                            } else {
                                uploadedImage = base64;
                                updateUploadPreview(base64);
                            }
                        }
                    });
                };
                input.click();
            }

            function updateUploadPreview(src) {
                var zone = document.getElementById('upload-zone');
                if (!zone) return;
                zone.innerHTML =
                    '<div class="relative">' +
                    '<img src="' + src + '" alt="Preview" class="w-full h-40 object-contain rounded-lg bg-gray-50">' +
                    '<button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs shadow-md transition-colors"><i class="fas fa-times"></i></button>' +
                    '</div>' +
                    '<p class="text-xs text-green-600 font-medium mt-2"><i class="fas fa-check-circle mr-1"></i>Gambar berhasil diupload</p>';
            }

            function updateUploadPreviewQris(src) {
                var zone = document.getElementById('upload-zone-qris');
                if (!zone) return;
                zone.innerHTML =
                    '<div class="relative">' +
                    '<img src="' + src + '" alt="Preview QRIS" class="w-24 h-24 object-contain mx-auto bg-gray-50 rounded">' +
                    '<button type="button" onclick="removeUploadQris()" class="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs shadow-md"><i class="fas fa-times"></i></button>' +
                    '</div>' +
                    '<p class="text-xs text-green-600 font-medium mt-2 text-center">QRIS Uploaded</p>';
            }

            function updateUploadPreviewSpeaker(src) {
                var zone = document.getElementById('upload-zone-speaker');
                if (!zone) return;
                zone.innerHTML =
                    '<div class="relative">' +
                    '<img src="' + src + '" alt="Preview Speaker" class="w-24 h-24 object-contain mx-auto bg-gray-50 rounded-full">' +
                    '<button type="button" onclick="removeUploadSpeaker()" class="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs shadow-md"><i class="fas fa-times"></i></button>' +
                    '</div>' +
                    '<p class="text-xs text-green-600 font-medium mt-2 text-center">Foto Speaker Uploaded</p>';
            }

            window.removeUpload = function () {
                uploadedImage = null;
                var zone = document.getElementById('upload-zone');
                if (!zone) return;
                zone.innerHTML =
                    '<div class="py-6 text-center">' +
                    '<i class="fas fa-cloud-upload-alt text-3xl text-gray-300 mb-2 block"></i>' +
                    '<p class="text-sm text-gray-500 font-medium">Klik atau seret gambar ke sini</p>' +
                    '<p class="text-xs text-gray-400 mt-1">JPEG, PNG, WebP — Maks 10MB</p>' +
                    '</div>';
            };

            window.removeUploadQris = function () {
                uploadedQrisImage = null;
                var zone = document.getElementById('upload-zone-qris');
                if (!zone) return;
                zone.innerHTML =
                    '<div class="py-4 text-center text-gray-400 text-sm border border-dashed border-gray-300 rounded">' +
                    '<i class="fas fa-qrcode text-2xl mb-1"></i>' +
                    '<p>Upload QRIS</p>' +
                    '</div>';
            };

            window.removeUploadSpeaker = function () {
                uploadedSpeakerImage = null;
                var zone = document.getElementById('upload-zone-speaker');
                if (!zone) return;
                zone.innerHTML =
                    '<div class="py-4 text-center text-gray-400 text-sm border border-dashed border-gray-300 rounded">' +
                    '<i class="fas fa-user text-2xl mb-1"></i>' +
                    '<p>Upload Foto Speaker</p>' +
                    '</div>';
            };

            function initDragDrop(targetType) {
                var zoneId = 'upload-zone';
                if (targetType === 'qris') zoneId = 'upload-zone-qris';
                else if (targetType === 'speaker') zoneId = 'upload-zone-speaker';
                var zone = document.getElementById(zoneId);
                if (!zone) return;

                var clickHandler = (function (z, t) {
                    return function () { triggerUpload(t); };
                })(zone, targetType);

                if (!zone.hasClickEvent) {
                    zone.addEventListener('click', clickHandler);
                    zone.hasClickEvent = true;
                }

                zone.addEventListener('dragover', function (e) {
                    e.preventDefault();
                    zone.classList.add('dragover');
                });
                zone.addEventListener('dragleave', function () {
                    zone.classList.remove('dragover');
                });
                zone.addEventListener('drop', function (e) {
                    e.preventDefault();
                    zone.classList.remove('dragover');
                    var file = e.dataTransfer.files[0];
                    if (!file || !file.type.startsWith('image/')) {
                        showToast('File harus berupa gambar.', 'error');
                        return;
                    }
                    if (file.size > 10 * 1024 * 1024) {
                        showToast('Ukuran file maksimal 10MB.', 'error');
                        return;
                    }

                    var loadingHtml = '<div class="py-6 text-center text-gray-400"><i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i><p class="text-xs">Memproses gambar...</p></div>';
                    zone.innerHTML = loadingHtml;

                    compressImage(file, 400, 0.7, function (base64) {
                        if (targetType === 'qris') {
                            uploadedQrisImage = base64;
                            updateUploadPreviewQris(base64);
                        } else if (targetType === 'speaker') {
                            uploadedSpeakerImage = base64;
                            updateUploadPreviewSpeaker(base64);
                        } else {
                            uploadedImage = base64;
                            updateUploadPreview(base64);
                        }
                    });
                });
            }

            function initCmsMap(item) {
                var defaultLat = -6.2088;
                var defaultLng = 106.8456;

                var lat = item ? item.lat : defaultLat;
                var lng = item ? item.lng : defaultLng;

                setTimeout(function () {
                    var mapContainer = document.getElementById('map-cms');
                    if (!mapContainer || typeof L === 'undefined') return;

                    var map = L.map('map-cms').setView([lat, lng], 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; OpenStreetMap'
                    }).addTo(map);

                    var marker = L.marker([lat, lng], {
                        draggable: true
                    }).addTo(map);

                    function updateCoords(newLat, newLng) {
                        var latEl = document.getElementById('f-lat');
                        var lngEl = document.getElementById('f-lng');
                        if (latEl) latEl.value = newLat.toFixed(6);
                        if (lngEl) lngEl.value = newLng.toFixed(6);
                    }

                    marker.on('dragend', function (e) {
                        var position = marker.getLatLng();
                        updateCoords(position.lat, position.lng);
                    });

                    map.on('click', function (e) {
                        marker.setLatLng(e.latlng);
                        updateCoords(e.latlng.lat, e.latlng.lng);
                    });

                    if (!item) {
                        updateCoords(lat, lng);
                    }

                    var nameInput = document.getElementById('f-name');
                    var searchTimeout = null;

                    if (nameInput) {
                        nameInput.addEventListener('input', function () {
                            clearTimeout(searchTimeout);
                            var query = nameInput.value.trim();
                            if (query.length < 3) return;

                            searchTimeout = setTimeout(function () {
                                fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(query), {
                                    headers: {
                                        'User-Agent': 'HeyYouthCMS/1.0 (hey.youth.id@gmail.com)'
                                    }
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data && data.length > 0) {
                                            var found = data[0];
                                            var newLat = parseFloat(found.lat);
                                            var newLng = parseFloat(found.lon);

                                            map.setView([newLat, newLng], 13);
                                            marker.setLatLng([newLat, newLng]);
                                            updateCoords(newLat, newLng);
                                        }
                                    })
                                    .catch(err => console.error('Geocoding error:', err));
                            }, 1000);
                        });
                    }

                    setTimeout(function () { map.invalidateSize(); }, 400);
                }, 300);
            }

            /* =========================================
               ========================================= */
            function renderTestimonials(containerId, items, type) {
                var container = document.getElementById(containerId);
                items = items || [];
                if (items.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-16 text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block"></i><p>Belum ada data. Klik "Tambah" untuk menambahkan.</p></div>';
                    return;
                }
                container.innerHTML = items.map(function (item) {
                    var imgSrc = item.image || '';
                    var isBase64 = imgSrc && imgSrc.startsWith('data:');
                    var displaySrc = _resolveImgPath(imgSrc);
                    var fallback = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.name) + '&size=100&background=random&color=fff';
                    var subtitle = type === 'external' ? item.title : item.role;
                    var badge = isBase64 ? '<span class="text-[9px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full font-medium">uploaded</span>' : '';
                    return '<div class="cms-card bg-white rounded-xl border border-gray-200 p-5 flex flex-col">' +
                        '<div class="flex items-start gap-3 mb-3">' +
                        '<img src="' + escapeAttr(displaySrc) + '" alt="' + escapeAttr(item.name) + '" class="w-11 h-11 rounded-full object-cover border-2 border-gray-100 flex-shrink-0" onerror="this.src=\'' + fallback + '\'">' +
                        '<div class="min-w-0">' +
                        '<div class="flex items-center gap-1.5">' +
                        '<h4 class="font-bold text-heading text-sm truncate">' + escapeHtml(item.name) + '</h4>' +
                        badge +
                        '</div>' +
                        '<p class="text-xs text-gray-500 truncate">' + escapeHtml(subtitle || '') + '</p>' +
                        '</div>' +
                        '</div>' +
                        '<p class="text-sm text-gray-600 italic flex-grow line-clamp-3">"' + escapeHtml(item.quote) + '"</p>' +
                        '<div class="flex gap-2 mt-4 pt-3 border-t border-gray-100">' +
                        '<button onclick="openEditModal(\'' + type + '\',' + item.id + ')" class="flex-1 text-xs font-semibold text-primary hover:bg-blue-50 py-2 rounded-lg transition-colors"><i class="fas fa-pen mr-1"></i> Edit</button>' +
                        '<button onclick="confirmDelete(\'' + type + '\',' + item.id + ')" class="flex-1 text-xs font-semibold text-red-500 hover:bg-red-50 py-2 rounded-lg transition-colors"><i class="fas fa-trash mr-1"></i> Hapus</button>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderFaqs(items) {
                var container = document.getElementById('list-faq');
                items = items || [];
                if (items.length === 0) {
                    container.innerHTML = '<div class="text-center py-16 text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block"></i><p>Belum ada data. Klik "Tambah" untuk menambahkan.</p></div>';
                    return;
                }
                container.innerHTML = items.map(function (item) {
                    return '<div class="cms-card bg-white rounded-xl border border-gray-200 p-5">' +
                        '<div class="flex items-start justify-between gap-3">' +
                        '<div class="min-w-0 flex-grow">' +
                        '<h4 class="font-bold text-heading text-sm mb-1">' + escapeHtml(item.question) + '</h4>' +
                        '<p class="text-xs text-gray-500 line-clamp-2">' + escapeHtml(item.answer) + '</p>' +
                        '</div>' +
                        '<div class="flex gap-1 flex-shrink-0">' +
                        '<button onclick="openEditModal(\'faq\',' + item.id + ')" class="p-2 text-primary hover:bg-blue-50 rounded-lg transition-colors" title="Edit"><i class="fas fa-pen text-xs"></i></button>' +
                        '<button onclick="confirmDelete(\'faq\',' + item.id + ')" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"><i class="fas fa-trash text-xs"></i></button>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderLocations(items) {
                var tbody = document.getElementById('list-locations');
                items = items || [];
                if (items.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="7" class="text-center py-16 text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block"></i><p>Belum ada data chapter relawan.</p></td></tr>';
                    return;
                }
                var regionLabels = {
                    'jabodetabek': 'Jabodetabek',
                    'jawa': 'Jawa & Bali',
                    'luar_jawa': 'Luar Jawa',
                    'internasional': 'Internasional'
                };
                tbody.innerHTML = items.map(function (item, idx) {
                    var regText = regionLabels[item.region] || item.region || 'Jabodetabek';
                    var coord = item.coordinator_name || '-';
                    var focusProg = item.focus_program ? item.focus_program.substring(0, 35) + (item.focus_program.length > 35 ? '...' : '') : '-';
                    return '<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">' +
                        '<td class="px-4 py-3 text-gray-400 whitespace-nowrap">' + (idx + 1) + '</td>' +
                        '<td class="px-4 py-3 font-medium text-heading whitespace-nowrap">' + escapeHtml(item.name) + '</td>' +
                        '<td class="px-4 py-3 whitespace-nowrap"><span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-primary whitespace-nowrap">' + escapeHtml(regText) + '</span></td>' +
                        '<td class="px-4 py-3 text-gray-500 text-xs max-w-[160px] truncate" title="' + escapeHtml(item.focus_program || '') + '">' + escapeHtml(focusProg) + '</td>' +
                        '<td class="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">' + escapeHtml(coord) + '</td>' +
                        '<td class="px-4 py-3 whitespace-nowrap"><span class="bg-accent/10 text-accent text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap inline-flex items-center gap-1 leading-none">' + (item.volunteers || 0) + ' Relawan</span></td>' +
                        '<td class="px-4 py-3 text-right whitespace-nowrap">' +
                        '<button onclick="openEditModal(\'locations\',' + item.id + ')" class="p-1.5 text-primary hover:bg-blue-50 rounded-lg transition-colors mr-1" title="Edit"><i class="fas fa-pen text-xs"></i></button>' +
                        '<button onclick="confirmDelete(\'locations\',' + item.id + ')" class="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"><i class="fas fa-trash text-xs"></i></button>' +
                        '</td>' +
                        '</tr>';
                }).join('');
            }

            function renderTeam(items) {
                var container = document.getElementById('list-team');
                items = items || [];
                if (items.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-16 text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block"></i><p>Belum ada data tim.</p></div>';
                    return;
                }
                container.innerHTML = items.map(function (item) {
                    var imgSrc = item.image || '';
                    var isBase64 = imgSrc && imgSrc.startsWith('data:');
                    var displaySrc = _resolveImgPath(imgSrc);
                    var fallback = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(item.name) + '&size=100&background=random&color=fff';
                    var badge = isBase64 ? '<span class="text-[9px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full font-medium">uploaded</span>' : '';

                    return '<div class="cms-card bg-white rounded-xl border border-gray-200 p-5 flex flex-col items-center text-center">' +
                        '<div class="relative mb-3">' +
                        '<img src="' + escapeAttr(displaySrc) + '" alt="' + escapeAttr(item.name) + '" class="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md" onerror="this.src=\'' + fallback + '\'">' +
                        badge +
                        '</div>' +
                        '<h4 class="font-bold text-heading text-sm truncate w-full">' + escapeHtml(item.name) + '</h4>' +
                        '<p class="text-xs text-primary font-semibold mb-3">' + escapeHtml(item.role) + '</p>' +
                        '<div class="flex gap-2 mt-auto w-full">' +
                        '<button onclick="openEditModal(\'team\',' + item.id + ')" class="flex-1 text-xs font-semibold text-primary hover:bg-blue-50 py-2 rounded-lg transition-colors"><i class="fas fa-pen mr-1"></i> Edit</button>' +
                        '<button onclick="confirmDelete(\'team\',' + item.id + ')" class="flex-1 text-xs font-semibold text-red-500 hover:bg-red-50 py-2 rounded-lg transition-colors"><i class="fas fa-trash mr-1"></i> Hapus</button>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderActivityCards(items) {
                var container = document.getElementById('list-activity-cards');
                items = items || [];
                if (items.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400"><p>Belum ada activity card.</p></div>';
                    return;
                }
                container.innerHTML = items.map(function (item) {
                    var imgSrc = item.image ? _resolveImgPath(item.image) : 'https://via.placeholder.com/400x250?text=No+Image';
                    var catText = cleanLangText(item.category_id || item.category, 'id');
                    var isEdu = catText.toLowerCase() === 'education' || catText.toLowerCase() === 'pendidikan';
                    var badgeColor = isEdu ? 'bg-primary/90' : 'bg-accent/90';
                    var titleText = cleanLangText(item.title_id || item.title, 'id');

                    return '<div class="cms-card bg-white rounded-xl border border-gray-200 p-4 flex flex-col">' +
                        '<div class="relative h-32 w-full rounded-lg overflow-hidden mb-3 bg-gray-100">' +
                        '<img src="' + escapeAttr(imgSrc) + '" class="w-full h-full object-cover">' +
                        '<span class="absolute top-2 left-2 ' + badgeColor + ' text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">' + escapeHtml(catText) + '</span>' +
                        '</div>' +
                        '<h4 class="font-bold text-heading text-sm line-clamp-2 h-10">' + escapeHtml(titleText) + '</h4>' +
                        '<div class="mt-auto pt-3 flex gap-2">' +
                        '<button onclick="openEditModal(\'activity-card\',' + item.id + ')" class="flex-1 text-xs font-semibold text-primary hover:bg-blue-50 py-1.5 rounded transition-colors">Edit</button>' +
                        '<button onclick="confirmDelete(\'activity-card\',' + item.id + ')" class="flex-1 text-xs font-semibold text-red-500 hover:bg-red-50 py-1.5 rounded transition-colors">Hapus</button>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderPodcasts(items) {
                var container = document.getElementById('list-podcasts');
                items = items || [];
                if (items.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400"><p>Belum ada podcast.</p></div>';
                    return;
                }
                container.innerHTML = items.map(function (item) {
                    var imgSrc = item.thumbnail ? _resolveImgPath(item.thumbnail) : 'https://via.placeholder.com/150?text=No+Img';
                    var fallback = 'https://via.placeholder.com/150?text=No+Img';
                    var epText = cleanLangText(item.episode_id || item.episode, 'id');
                    var titleText = cleanLangText(item.title_id || item.title, 'id');

                    return '<div class="cms-card bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-4">' +
                        '<div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">' +
                        '<img src="' + escapeAttr(imgSrc) + '" class="w-full h-full object-cover" onerror="this.src=\'' + fallback + '\'">' +
                        '</div>' +
                        '<div class="flex-grow min-w-0">' +
                        '<div class="text-[10px] font-bold text-accent uppercase tracking-wide">' + escapeHtml(epText) + '</div>' +
                        '<h4 class="font-bold text-heading text-sm truncate">' + escapeHtml(titleText) + '</h4>' +
                        '<div class="text-[10px] text-gray-400 truncate mt-1"><i class="fas fa-link mr-1"></i>' + (item.spotifyLink ? item.spotifyLink : 'No Link') + '</div>' +
                        '</div>' +
                        '<div class="flex gap-2 flex-shrink-0">' +
                        '<button onclick="openEditModal(\'podcast\',' + item.id + ')" class="p-1.5 text-primary hover:bg-blue-50 rounded-lg transition-colors"><i class="fas fa-pen text-xs"></i></button>' +
                        '<button onclick="confirmDelete(\'podcast\',' + item.id + ')" class="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><i class="fas fa-trash text-xs"></i></button>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderPartners(items) {
                var container = document.getElementById('list-partners');
                if (!items || items.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400"><p>Belum ada data partner.</p></div>';
                    return;
                }

                var colorMap = {
                    'blue': 'bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white',
                    'pink': 'bg-pink-50 text-pink-500 hover:bg-pink-500 hover:text-white',
                    'purple': 'bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white',
                    'green': 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white',
                    'yellow': 'bg-yellow-50 text-yellow-600 hover:bg-yellow-600 hover:text-white',
                    'gray': 'bg-gray-100 text-gray-500 hover:bg-gray-500 hover:text-white',
                };

                container.innerHTML = items.map(function (item) {
                    var colorClass = colorMap[item.color] || colorMap['blue'];
                    var logoHtml = '';

                    if (item.image) {
                        var imgSrc = _resolveImgPath(item.image);
                        logoHtml = '<div class="w-16 h-16 rounded-xl overflow-hidden mb-4 bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2">' +
                            '<img src="' + escapeAttr(imgSrc) + '" class="max-w-full max-h-full object-contain">' +
                            '</div>';
                    } else {
                        logoHtml = '<div class="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 transition-all duration-300 ' + colorClass + '">' +
                            '<i class="fas ' + (item.icon || 'fa-building') + '"></i>' +
                            '</div>';
                    }

                    return '<div class="cms-card bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center group h-full">' +
                        logoHtml +
                        '<h4 class="font-bold text-heading text-lg mb-2">' + escapeHtml(item.name) + '</h4>' +
                        '<p class="text-sm text-gray-500 mb-6 flex-grow line-clamp-2">' + escapeHtml(item.description) + '</p>' +
                        '<div class="flex gap-2 w-full mt-auto">' +
                        '<button onclick="openEditModal(\'partner\',' + item.id + ')" class="flex-1 text-xs font-semibold text-primary hover:bg-blue-50 py-2 rounded-lg transition-colors"><i class="fas fa-pen mr-1"></i> Edit</button>' +
                        '<button onclick="confirmDelete(\'partner\',' + item.id + ')" class="flex-1 text-xs font-semibold text-red-500 hover:bg-red-50 py-2 rounded-lg transition-colors"><i class="fas fa-trash mr-1"></i> Hapus</button>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            function renderAboutPreview() {
                var data = getData();
                var hero = data.aboutHero;
                var el = document.getElementById('preview-about-hero');
                if (!el) return;
                el.innerHTML =
                    '<div class="flex gap-4 mb-4">' +
                    '<img src="' + (hero.image ? _resolveImgPath(hero.image) : 'https://via.placeholder.com/150') + '" class="w-24 h-24 object-cover rounded-lg shadow-sm">' +
                    '<div class="flex-1">' +
                    '<h3 class="text-xl font-bold text-heading mb-1 leading-tight">' + hero.title + '</h3>' +
                    '<p class="text-xs text-gray-500 line-clamp-2">' + hero.subtitle + '</p>' +
                    '</div>' +
                    '</div>' +
                    '<div class="text-xs text-gray-400">Badge Relawan: ' + hero.volunteerCount + '</div>';
            }

            function renderDonationPreview() {
                var data = getData();
                var s = data.donationSettings;
                var el = document.getElementById('preview-donation');
                if (!el) return;

                el.innerHTML =
                    '<div class="grid grid-cols-2 gap-4 text-sm">' +
                    '<div><strong>Hero Title:</strong><br>' + _esc(s.heroTitle) + '</div>' +
                    '<div><strong>Strip Text:</strong><br>' + _esc(s.stripText) + '</div>' +
                    '<div class="col-span-2"><strong>Bank Info:</strong> ' + _esc(s.bankName) + ' - ' + _esc(s.accountNumber) + '</div>' +
                    '</div>';
            }

            function _esc(str) {
                if (!str) return '';
                return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }

            /* =========================================
               ========================================= */
            window.openAddModal = function (section) {
                editingItem = null;
                editingSection = section;
                uploadedImage = null;
                uploadedQrisImage = null;
                try {
                    renderModalForm(section, null);
                    openModal();
                } catch (err) {
                    console.error('Gagal membuka modal tambah:', err);
                    showToast('Gagal membuka form tambah: ' + err.message, 'error');
                }
            };

            window.openEditModal = function (section, id) {
                var data = getData();
                var list;
                var item = null;

                if (section === 'about-hero') {
                    item = data.aboutHero;
                } else if (section === 'donation-settings') {
                    item = data.donationSettings;
                } else if (section === 'events-settings') {
                    item = data.eventsSettings || DEFAULT_DATA.eventsSettings;
                } else {
                    switch (section) {
                        case 'external': list = data.externalTestimonials; break;
                        case 'internal': list = data.internalTestimonials; break;
                        case 'faq': list = data.faqs; break;
                        case 'locations': list = data.locations; break;
                        case 'team': list = data.team; break;
                        case 'activity-card': list = data.activityCards; break;
                        case 'podcast': list = data.podcasts; break;
                        case 'partner': list = data.partners; break;
                        case 'event': list = data.events; break;
                    }
                    list = list || [];
                    item = list.find(function (i) { return String(i.id) === String(id); });
                }

                if (!item) {
                    showToast('Data tidak ditemukan. Coba muat ulang halaman.', 'error');
                    return;
                }
                editingItem = item;
                editingSection = section;

                uploadedImage = (item.image && item.image.startsWith('data:')) ? item.image : null;
                uploadedSpeakerImage = (item.speakerImage && item.speakerImage.startsWith('data:')) ? item.speakerImage : null;
                if (section === 'podcast' && item.thumbnail) {
                    uploadedImage = (item.thumbnail && item.thumbnail.startsWith('data:')) ? item.thumbnail : null;
                }
                if (section === 'donation-settings' && item.qrisImage) {
                    uploadedQrisImage = item.qrisImage.startsWith('data:') ? item.qrisImage : null;
                } else {
                    uploadedQrisImage = null;
                }

                try {
                    renderModalForm(section, item);
                    openModal();
                } catch (err) {
                    console.error('Gagal membuka modal edit:', err);
                    showToast('Gagal membuka form edit: ' + err.message, 'error');
                }
            };

            /* =========================================
               ========================================= */
            function renderModalForm(section, item) {
                var isEdit = !!item;
                var label;
                if (section === 'external' || section === 'internal') label = 'Testimoni';
                else if (section === 'faq') label = 'FAQ';
                else if (section === 'locations') label = 'Lokasi';
                else if (section === 'team') label = 'Team Member';
                else if (section === 'about-hero') label = 'Konten Hero';
                else if (section === 'activity-card') label = 'Activity Card';
                else if (section === 'podcast') label = 'Podcast Episode';
                else if (section === 'partner') label = 'Partner';
                else if (section === 'donation-settings') label = 'Pengaturan Donation';
                else if (section === 'event') label = 'Event';
                else if (section === 'events-settings') label = 'Pengaturan Header Event & Sertifikat';

                document.getElementById('modal-title').textContent = (isEdit ? 'Edit ' : 'Tambah ') + label;
                var html = '';

                if (section === 'faq') {
                    html += '<h3 class="font-bold text-heading text-xs uppercase text-primary mb-2 border-b pb-1">Konten FAQ (Tanya Jawab)</h3>';
                    html += formField('Pertanyaan (Bahasa Indonesia)', 'f-question', item ? (item.question_id || item.question || '') : '', 'text', 'Contoh: Apa itu Hey Youth?');
                    html += formField('Pertanyaan (English)', 'f-question-en', item ? (item.question_en || '') : '', 'text', 'e.g. What is Hey Youth?');
                    html += formTextarea('Jawaban (Bahasa Indonesia)', 'f-answer', item ? (item.answer_id || item.answer || '') : '', 'Jelaskan jawaban secara ringkas dan informatif...');
                    html += formTextarea('Jawaban (English)', 'f-answer-en', item ? (item.answer_en || '') : '', 'Provide a clear and informative answer...');
                }
                else if (section === 'events-settings') {
                    html += '<h3 class="font-bold text-heading text-xs uppercase text-primary mb-2 border-b pb-1">Upcoming Events Header</h3>';
                    html += formField('Title (ID)', 'f-event-title-id', item ? item.eventTitle_id : '', 'text', 'Contoh: Ikuti Event Kami');
                    html += formField('Title (EN)', 'f-event-title-en', item ? item.eventTitle_en : '', 'text', 'Contoh: Join Our Events');
                    html += formTextarea('Subtitle (ID)', 'f-event-sub-id', item ? item.eventSubtitle_id : '', 'Deskripsi...');
                    html += formTextarea('Subtitle (EN)', 'f-event-sub-en', item ? item.eventSubtitle_en : '', 'Description...');

                    html += '<h3 class="font-bold text-heading text-xs uppercase text-accent mb-2 mt-4 border-b pb-1">Digital Certificate Header</h3>';
                    html += formField('Title (ID)', 'f-cert-title-id', item ? item.certTitle_id : '', 'text', 'Contoh: Unduh E-Sertifikat Anda');
                    html += formField('Title (EN)', 'f-cert-title-en', item ? item.certTitle_en : '', 'text', 'Contoh: Download Your E-Certificate');
                    html += formTextarea('Subtitle (ID)', 'f-cert-sub-id', item ? item.certSubtitle_id : '', 'Deskripsi...');
                    html += formTextarea('Subtitle (EN)', 'f-cert-sub-en', item ? item.certSubtitle_en : '', 'Description...');
                }
                else if (section === 'event') {
                    html += formField('Nama Event (ID)', 'f-title-id', item ? item.title_id : '', 'text', 'Webinar Persiapan Karir');
                    html += formField('Nama Event (EN)', 'f-title-en', item ? item.title_en : '', 'text', 'Career Prep Webinar');
                    var parsedDates = { start: '', end: '' };
                    if (item && item.date) {
                        var _d = item.date;
                        var _mList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        function _mNum(m) { var i = _mList.indexOf(m); return i !== -1 ? String(i + 1).padStart(2, '0') : '01'; }
                        function _dNum(d) { return d.replace(/st|nd|rd|th/g, '').padStart(2, '0'); }
                        
                        var m2 = _d.match(/^([a-zA-Z]+) (\d+(?:st|nd|rd|th)), (\d{4}) - ([a-zA-Z]+) (\d+(?:st|nd|rd|th)), (\d{4})$/);
                        var m3 = _d.match(/^([a-zA-Z]+) (\d+(?:st|nd|rd|th)) - ([a-zA-Z]+) (\d+(?:st|nd|rd|th)), (\d{4})$/);
                        var m4 = _d.match(/^([a-zA-Z]+) (\d+(?:st|nd|rd|th)) - (\d+(?:st|nd|rd|th)), (\d{4})$/);
                        var m1 = _d.match(/^([a-zA-Z]+) (\d+(?:st|nd|rd|th)), (\d{4})$/);
                        
                        if (m2) { parsedDates.start = m2[3]+'-'+_mNum(m2[1])+'-'+_dNum(m2[2]); parsedDates.end = m2[6]+'-'+_mNum(m2[4])+'-'+_dNum(m2[5]); }
                        else if (m3) { parsedDates.start = m3[5]+'-'+_mNum(m3[1])+'-'+_dNum(m3[2]); parsedDates.end = m3[5]+'-'+_mNum(m3[3])+'-'+_dNum(m3[4]); }
                        else if (m4) { parsedDates.start = m4[4]+'-'+_mNum(m4[1])+'-'+_dNum(m4[2]); parsedDates.end = m4[4]+'-'+_mNum(m4[1])+'-'+_dNum(m4[3]); }
                        else if (m1) { parsedDates.start = m1[3]+'-'+_mNum(m1[1])+'-'+_dNum(m1[2]); parsedDates.end = ''; }
                    }

                    var startDateVal = item ? (item.startDate || parsedDates.start) : '';
                    var endDateVal = item ? (item.endDate || parsedDates.end) : '';
                    var todayISO = new Date().toISOString().split('T')[0];
                    html += '<div class="grid grid-cols-2 gap-4 mb-4 items-end">' +
                            '  <div>' +
                            '    <label class="block text-sm font-semibold text-heading mb-1.5">Tanggal Mulai</label>' +
                            '    <input type="date" id="f-start-date" min="' + todayISO + '" value="' + escapeAttr(startDateVal) + '" onclick="this.showPicker()" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all">' +
                            '  </div>' +
                            '  <div>' +
                            '    <label class="block text-sm font-semibold text-heading mb-1.5">Tanggal Selesai (Opsional)</label>' +
                            '    <input type="date" id="f-end-date" min="' + todayISO + '" value="' + escapeAttr(endDateVal) + '" onclick="this.showPicker()" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all">' +
                            '  </div>' +
                            '</div>';
                    html += formField('Waktu', 'f-time', item ? item.time : '', 'text', '15:00 WIB');
                    html += formField('Lokasi', 'f-location', item ? item.location : '', 'text', 'Zoom Meeting / Alamat');
                    html += formField('Link Registrasi', 'f-link', item ? item.link : '', 'text', 'https://...');
                    html += formField('Pembicara / Speaker', 'f-speaker', item ? item.speaker : '', 'text', 'Yuni Triandini');
                    html += formField('Peran Pembicara / Speaker Role', 'f-speaker-role', item ? item.speakerRole : '', 'text', 'Founder of Hey Youth');
                    
                    var defaultCertDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';
                    html += formTextarea('Teks Deskripsi Sertifikat (Akan di-render di tengah sertifikat)', 'f-cert-description', item ? (item.certDescription || item.description) : defaultCertDesc, 'Contoh: In recognition of your active participation in...');



                    var existingSrc = '';
                    if (item && item.image) existingSrc = _resolveImgPath(item.image);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Gambar Cover/Banner</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center border border-dashed border-gray-300">';
                    if (existingSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-40 object-cover rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Gambar tersedia</p>';
                    else html += '<div class="py-6 text-center"><i class="fas fa-image text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Gambar</p></div>';
                    html += '</div></div>';

                    var existingSpeakerSrc = '';
                    if (item && item.speakerImage) existingSpeakerSrc = _resolveImgPath(item.speakerImage);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Foto Pembicara / Speaker Photo</label><div id="upload-zone-speaker" class="upload-zone rounded-xl p-4 text-center border border-dashed border-gray-300">';
                    if (existingSpeakerSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSpeakerSrc) + '" class="w-24 h-24 object-contain mx-auto bg-gray-50 rounded-full"><button type="button" onclick="removeUploadSpeaker()" class="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs shadow-md"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2 text-center">Foto Speaker tersedia</p>';
                    else html += '<div class="py-4 text-center text-gray-400 text-sm"><i class="fas fa-user text-2xl mb-1"></i><p>Upload Foto Speaker</p></div>';
                    html += '</div></div>';
                }
                else if (section === 'donation-settings') {
                    html += formField('Judul Hero', 'f-hero-title', item ? item.heroTitle : '', 'text', 'Contoh: Support Our Mission');
                    html += formTextarea('Sub Hero', 'f-hero-sub', item ? item.heroSubtitle : '', 'Deskripsi...');
                    html += formField('Teks di Gambar Strip', 'f-strip-text', item ? item.stripText : '', 'text', 'Together We Can');

                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Gambar Strip (Banner Tengah)</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    var existingStrip = '';
                    if (item && item.stripImage) existingStrip = _resolveImgPath(item.stripImage);
                    if (existingStrip) {
                        html += '<div class="relative"><img src="' + escapeAttr(existingStrip) + '" class="w-full h-32 object-cover rounded-lg"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div>';
                    } else {
                        html += '<div class="py-4 text-center text-gray-400 text-sm">Klik untuk upload gambar strip</div>';
                    }
                    html += '</div></div>';

                    html += '<hr class="my-4"><h4 class="font-bold text-heading mb-4">Payment Details</h4>';
                    html += formField('Nama Bank', 'f-bank-name', item ? item.bankName : '', 'text', 'BCA');
                    html += formField('Atas Nama', 'f-acc-name', item ? item.accountName : '', 'text', 'Yuni Triandini');
                    html += formField('Nomor Rekening', 'f-acc-num', item ? item.accountNumber : '', 'text', '466...');

                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Gambar QRIS</label><div id="upload-zone-qris" class="upload-zone rounded-xl p-4 text-center border border-dashed border-gray-300">';
                    var existingQris = '';
                    if (item && item.qrisImage) existingQris = _resolveImgPath(item.qrisImage);
                    if (existingQris) {
                        html += '<div class="relative"><img src="' + escapeAttr(existingQris) + '" class="w-24 h-24 object-contain mx-auto bg-gray-50 rounded"><button type="button" onclick="removeUploadQris()" class="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs">X</button></div>';
                    } else {
                        html += '<div class="py-4 text-center text-gray-400 text-sm border border-dashed border-gray-300 rounded">Upload QRIS</div>';
                    }
                    html += '</div></div>';
                }
                else if (section === 'about-hero') {
                    html += formField('Judul (Support HTML)', 'f-title', item ? item.title : '', 'text', 'Judul besar...');
                    html += formTextarea('Subtitle', 'f-subtitle', item ? item.subtitle : '', 'Deskripsi singkat...');
                    html += formField('Label Relawan (Contoh: 1k+)', 'f-volunteer', item ? item.volunteerCount : '1k+', 'text', '1k+');

                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Gambar Background Hero</label>' +
                        '<div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    var existingHeroSrc = '';
                    if (item && item.image) existingHeroSrc = _resolveImgPath(item.image);
                    if (existingHeroSrc) {
                        html += '<div class="relative"><img src="' + escapeAttr(existingHeroSrc) + '" class="w-full h-40 object-cover rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Gambar Hero tersedia</p>';
                    } else {
                        html += '<div class="py-6 text-center"><i class="fas fa-image text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Klik untuk ganti gambar</p></div>';
                    }
                    html += '</div></div>';
                }
                else if (section === 'external' || section === 'internal') {
                    html += formField('Nama', 'f-name', item ? item.name : '', 'text', 'Nama lengkap');
                    if (section === 'external') {
                        html += '<div class="grid grid-cols-2 gap-3">' +
                            formField('Jabatan / Title (ID)', 'f-title', item ? cleanLangText(item.title_id || item.title, 'id') : '', 'text', 'Co-Founder') +
                            formField('Jabatan / Title (EN)', 'f-title-en', item ? cleanLangText(item.title_en || item.title, 'en') : '', 'text', 'Co-Founder') +
                            '</div>';
                    } else {
                        html += '<div class="grid grid-cols-2 gap-3">' +
                            formField('Peran / Role (ID)', 'f-role', item ? cleanLangText(item.role_id || item.role, 'id') : '', 'text', 'Koordinator Komunitas') +
                            formField('Peran / Role (EN)', 'f-role-en', item ? cleanLangText(item.role_en || item.role, 'en') : '', 'text', 'Community Coordinator') +
                            '</div>';
                    }
                    html += formTextarea('Quote (ID)', 'f-quote', item ? cleanLangText(item.quote_id || item.quote, 'id') : '', 'Kutipan bahasa Indonesia...');
                    html += formTextarea('Quote (EN - Opsional)', 'f-quote-en', item ? cleanLangText(item.quote_en || item.quote, 'en') : '', 'Quote in English...');

                    var existingSrc = '';
                    if (item && item.image) existingSrc = _resolveImgPath(item.image);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Foto</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    if (existingSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-40 object-contain rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Gambar tersedia</p>';
                    else html += '<div class="py-6 text-center"><i class="fas fa-cloud-upload-alt text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Foto</p></div>';
                    html += '</div></div>';
                }
                else if (section === 'locations') {
                    html += formField('Nama Lokasi / Chapter', 'f-name', item ? item.name : '', 'text', 'Jakarta Pusat');

                    var currentRegion = item ? (item.region || 'jabodetabek') : 'jabodetabek';
                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Wilayah / Region</label>' +
                        '<select id="f-region" class="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary">' +
                        '<option value="jabodetabek"' + (currentRegion === 'jabodetabek' ? ' selected' : '') + '>Jabodetabek</option>' +
                        '<option value="jawa"' + (currentRegion === 'jawa' ? ' selected' : '') + '>Jawa & Bali</option>' +
                        '<option value="luar_jawa"' + (currentRegion === 'luar_jawa' ? ' selected' : '') + '>Luar Jawa</option>' +
                        '<option value="internasional"' + (currentRegion === 'internasional' ? ' selected' : '') + '>Internasional</option>' +
                        '</select>' +
                        '</div>';

                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Pilih Lokasi di Peta (Geser Pin)</label>' +
                        '<div id="map-cms"></div>' +
                        '<p class="text-[10px] text-gray-500 mt-1 italic"><i class="fas fa-info-circle mr-1"></i>Geser pin untuk menentukan koordinat secara otomatis.</p>' +
                        '</div>';

                    html += '<div class="grid grid-cols-2 gap-3">' +
                        formField('Latitude', 'f-lat', item ? item.lat : '', 'number', '-6.2088', 'step="any" readonly class="bg-gray-50"') +
                        formField('Longitude', 'f-lng', item ? item.lng : '', 'number', '106.8456', 'step="any" readonly class="bg-gray-50"') +
                        '</div>';
                    html += formField('Jumlah Relawan Aktif', 'f-volunteers', item ? item.volunteers : '', 'number', '5', 'min="0"');
                    html += formField('Fokus Program Chapter', 'f-focus-program', item ? (item.focus_program || '') : '', 'text', 'Contoh: Edukasi Siswa & Literasi Baca');

                    html += '<div class="grid grid-cols-2 gap-3">' +
                        formField('Nama Koordinator', 'f-coordinator-name', item ? (item.coordinator_name || '') : '', 'text', 'Kak Yuni') +
                        formField('Kontak WA Koordinator', 'f-coordinator-contact', item ? (item.coordinator_contact || '') : '', 'text', '08123456789') +
                        '</div>';

                    var existingSrc = '';
                    if (item && item.image) existingSrc = _resolveImgPath(item.image);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Foto Dokumentasi Kegiatan Chapter</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    if (existingSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-40 object-cover rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Foto kegiatan tersedia</p>';
                    else html += '<div class="py-6 text-center"><i class="fas fa-camera text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Foto Kegiatan Relawan</p></div>';
                    html += '</div></div>';
                }
                else if (section === 'team') {
                    html += formField('Nama', 'f-name', item ? item.name : '', 'text', 'Nama Lengkap');
                    html += '<div class="grid grid-cols-2 gap-3">' +
                        formField('Role / Peran (ID)', 'f-role', item ? cleanLangText(item.role_id || item.role, 'id') : '', 'text', 'Founder') +
                        formField('Role / Peran (EN)', 'f-role-en', item ? cleanLangText(item.role_en || item.role, 'en') : '', 'text', 'Founder') +
                        '</div>';
                    html += formField('LinkedIn', 'f-linkedin', item ? item.linkedin : '', 'text', 'URL LinkedIn');
                    html += formField('Instagram', 'f-instagram', item ? item.instagram : '', 'text', 'URL Instagram');

                    var existingSrc = '';
                    if (item && item.image) existingSrc = _resolveImgPath(item.image);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Foto Profil</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    if (existingSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-40 object-contain rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Foto tersedia</p>';
                    else html += '<div class="py-6 text-center"><i class="fas fa-cloud-upload-alt text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Foto</p></div>';
                    html += '</div></div>';
                }
                else if (section === 'activity-card') {
                    var titleVal = cleanLangText(item ? (item.title_id || item.title) : '', 'id');
                    var titleEnVal = cleanLangText(item ? (item.title_en || '') : '', 'en');
                    var catVal = cleanLangText(item ? (item.category_id || item.category) : '', 'id');
                    var catEnVal = cleanLangText(item ? (item.category_en || '') : '', 'en');
                    var descVal = cleanLangText(item ? (item.description_id || item.description) : '', 'id');
                    var descEnVal = cleanLangText(item ? (item.description_en || '') : '', 'en');
                    var storyVal = cleanLangHtml(item ? (item.full_story_id || item.fullStory || '') : '', 'id');

                    html += formField('Judul Kegiatan (ID)', 'f-title', titleVal, 'text', 'Judul lengkap bahasa Indonesia...');
                    html += formField('Judul Kegiatan (EN - Opsional)', 'f-title-en', titleEnVal, 'text', 'Title in English...');
                    html += '<div class="grid grid-cols-2 gap-3">' +
                        formField('Kategori (ID)', 'f-category', catVal, 'text', 'Contoh: Pendidikan') +
                        formField('Kategori (EN)', 'f-category-en', catEnVal, 'text', 'Contoh: Education') +
                        '</div>';
                    html += formField('Tanggal', 'f-date', item ? (item.date || '') : '', 'text', '10 November 2025');
                    html += formTextarea('Deskripsi Singkat (ID)', 'f-desc', descVal, 'Ringkasan bahasa Indonesia...');
                    html += formTextarea('Deskripsi Singkat (EN - Opsional)', 'f-desc-en', descEnVal, 'Summary in English...');

                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Full Story (Detail Artikel)</label>' +
                        '<div id="f-full-story-editor" class="h-64 bg-white dark:bg-slate-800 text-heading border border-gray-200 rounded-lg text-sm overflow-y-auto">' + storyVal + '</div>' +
                        '</div>';

                    var existingSrc = '';
                    if (item && item.image) existingSrc = _resolveImgPath(item.image);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Gambar Cover</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    if (existingSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-40 object-cover rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Gambar tersedia</p>';
                    else html += '<div class="py-6 text-center"><i class="fas fa-image text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Gambar</p></div>';
                    html += '</div></div>';
                }
                else if (section === 'podcast') {
                    var epVal = cleanLangText(item ? (item.episode_id || item.episode) : '', 'id');
                    var epEnVal = cleanLangText(item ? (item.episode_en || '') : '', 'en');
                    var titleVal = cleanLangText(item ? (item.title_id || item.title) : '', 'id');
                    var titleEnVal = cleanLangText(item ? (item.title_en || '') : '', 'en');

                    html += formField('Judul Episode (ID)', 'f-title', titleVal, 'text', 'Judul Podcast bahasa Indonesia...');
                    html += formField('Judul Episode (EN - Opsional)', 'f-title-en', titleEnVal, 'text', 'Podcast title in English...');
                    html += '<div class="grid grid-cols-2 gap-3">' +
                        formField('Nomor Episode (ID)', 'f-episode', epVal, 'text', 'Episode 1') +
                        formField('Nomor Episode (EN)', 'f-episode-en', epEnVal, 'text', 'Episode 1') +
                        '</div>';
                    html += formField('Link Spotify', 'f-spotify-link', item ? item.spotifyLink : '', 'text', 'https://open.spotify.com/...');

                    var existingThumb = '';
                    if (item && item.thumbnail) existingThumb = _resolveImgPath(item.thumbnail);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Thumbnail Cover</label><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    if (existingThumb) {
                        html += '<div class="relative"><img src="' + escapeAttr(existingThumb) + '" class="w-full h-40 object-cover rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Thumbnail tersedia</p>';
                    } else {
                        html += '<div class="py-6 text-center"><i class="fas fa-image text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Thumbnail</p></div>';
                    }
                    html += '</div></div>';
                }
                else if (section === 'partner') {
                    html += formField('Nama Partner', 'f-name', item ? item.name : '', 'text', 'Contoh: Qatar HR Forum');
                    html += formTextarea('Deskripsi Singkat (ID)', 'f-desc', item ? cleanLangText(item.description_id || item.description, 'id') : '', 'Deskripsi singkat bahasa Indonesia...');
                    html += formTextarea('Deskripsi Singkat (EN - Opsional)', 'f-desc-en', item ? cleanLangText(item.description_en || item.description, 'en') : '', 'Short description in English...');

                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Link Partner (URL)</label>' +
                        '<div class="relative">' +
                        '<span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><i class="fas fa-link text-xs"></i></span>' +
                        '<input type="url" id="f-link" value="' + (item ? (item.link || '#') : 'https://') + '" placeholder="https://website-partner.com" class="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary">' +
                        '</div>' +
                        '<p class="text-[10px] text-gray-400 mt-1">Masukkan URL lengkap (dengan https://)</p>' +
                        '</div>';

                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Pilih Icon</label>' +
                        '<select id="f-icon" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary">' +
                        '<option value="fa-handshake" ' + (item && item.icon === 'fa-handshake' ? 'selected' : '') + '>Handshake (Kerjasama)</option>' +
                        '<option value="fa-users-cog" ' + (item && item.icon === 'fa-users-cog' ? 'selected' : '') + '>Users Cog (Komunitas)</option>' +
                        '<option value="fa-spa" ' + (item && item.icon === 'fa-spa' ? 'selected' : '') + '>Spa (Kesehatan/Kecantikan)</option>' +
                        '<option value="fa-flask" ' + (item && item.icon === 'fa-flask' ? 'selected' : '') + '>Flask (Sains/Lab)</option>' +
                        '<option value="fa-school" ' + (item && item.icon === 'fa-school' ? 'selected' : '') + '>School (Pendidikan)</option>' +
                        '<option value="fa-building" ' + (item && item.icon === 'fa-building' ? 'selected' : '') + '>Building (Korporat)</option>' +
                        '<option value="fa-heart" ' + (item && item.icon === 'fa-heart' ? 'selected' : '') + '>Heart (Sosial)</option>' +
                        '<option value="fa-globe" ' + (item && item.icon === 'fa-globe' ? 'selected' : '') + '>Globe (Global)</option>' +
                        '<option value="fa-spotify" ' + (item && item.icon === 'fa-spotify' ? 'selected' : '') + '>Spotify (Musik/Podcast)</option>' +
                        '</select>' +
                        '</div>';

                    html += '<div class="mb-4">' +
                        '<label class="block text-sm font-semibold text-heading mb-1.5">Warna Latar</label>' +
                        '<select id="f-color" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary">' +
                        '<option value="blue" ' + (item && item.color === 'blue' ? 'selected' : '') + '>Biru</option>' +
                        '<option value="pink" ' + (item && item.color === 'pink' ? 'selected' : '') + '>Pink</option>' +
                        '<option value="purple" ' + (item && item.color === 'purple' ? 'selected' : '') + '>Ungu</option>' +
                        '<option value="green" ' + (item && item.color === 'green' ? 'selected' : '') + '>Hijau</option>' +
                        '<option value="yellow" ' + (item && item.color === 'yellow' ? 'selected' : '') + '>Kuning</option>' +
                        '<option value="gray" ' + (item && item.color === 'gray' ? 'selected' : '') + '>Abu-abu</option>' +
                        '</select>' +
                        '</div>';

                    var existingSrc = '';
                    if (item && item.image) existingSrc = _resolveImgPath(item.image);
                    html += '<div class="mb-4"><label class="block text-sm font-semibold text-heading mb-1.5">Logo Partner (Opsional)</label><p class="text-[10px] text-gray-400 mb-2">Jika diupload, akan menggantikan icon di atas.</p><div id="upload-zone" class="upload-zone rounded-xl p-4 text-center">';
                    if (existingSrc) html += '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-40 object-contain rounded-lg bg-gray-50"><button type="button" onclick="removeUpload()" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Logo tersedia</p>';
                    else html += '<div class="py-6 text-center"><i class="fas fa-cloud-upload-alt text-3xl text-gray-300 mb-2"></i><p class="text-sm text-gray-500">Upload Logo</p></div>';
                    html += '</div></div>';
                }

                html += '<div class="flex gap-3 mt-6 pt-4 border-t border-gray-100">' +
                    '<button type="button" onclick="closeModal()" class="flex-1 py-2.5 border border-gray-200 text-heading font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm">Batal</button>' +
                    '<button type="button" onclick="saveItem()" class="flex-1 py-2.5 bg-primary hover:bg-primaryDark text-white font-semibold rounded-lg transition-colors text-sm">' + (isEdit ? 'Simpan' : 'Tambah') + '</button>' +
                    '</div>';

                document.getElementById('modal-body').innerHTML = html;

                if (section === 'donation-settings') {
                    initDragDrop('strip');
                    var qrisZone = document.getElementById('upload-zone-qris');
                    if (qrisZone) {
                        qrisZone.addEventListener('click', (function () { triggerUpload('qris'); }));
                        qrisZone.addEventListener('dragover', function (e) {
                            e.preventDefault(); qrisZone.classList.add('dragover');
                        });
                        qrisZone.addEventListener('dragleave', function () { qrisZone.classList.remove('dragover'); });
                        qrisZone.addEventListener('drop', function (e) {
                            e.preventDefault(); qrisZone.classList.remove('dragover');
                            var file = e.dataTransfer.files[0];
                            if (!file || !file.type.startsWith('image/')) return showToast('File harus gambar', 'error');
                            if (file.size > 10 * 1024 * 1024) return showToast('File terlalu besar', 'error');
                            qrisZone.innerHTML = '<div class="py-6 text-center text-gray-400"><i class="fas fa-spinner fa-spin text-2xl mb-2 block"></i><p class="text-xs">Memproses QRIS...</p></div>';
                            compressImage(file, 400, 0.7, function (base64) {
                                uploadedQrisImage = base64;
                                updateUploadPreviewQris(base64);
                            });
                        });
                    }
                } else if (section === 'external' || section === 'internal' || section === 'team' || section === 'about-hero' || section === 'activity-card' || section === 'podcast' || section === 'partner') {
                    initDragDrop('main');
                    if (section === 'activity-card') {
                        window.quillEditor = new Quill('#f-full-story-editor', {
                            theme: 'snow',
                            modules: {
                                toolbar: [
                                    [{ 'header': [1, 2, 3, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                    ['link', 'image'],
                                    ['clean']
                                ]
                            }
                        });
                    }
                } else if (section === 'event') {
                    initDragDrop('main');
                    initDragDrop('speaker');
                } else if (section === 'locations') {
                    initCmsMap(item);
                    initDragDrop('main');
                }
            }

            function formField(label, id, value, type, placeholder, extra) {
                return '<div class="mb-4">' +
                    '<label class="block text-sm font-semibold text-heading mb-1.5">' + label + '</label>' +
                    '<input type="' + type + '" id="' + id + '" value="' + escapeAttr(value) + '" placeholder="' + escapeAttr(placeholder) + '" ' + (extra || '') + ' class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all">' +
                    '</div>';
            }

            function formTextarea(label, id, value, placeholder) {
                return '<div class="mb-4">' +
                    '<label class="block text-sm font-semibold text-heading mb-1.5">' + label + '</label>' +
                    '<textarea id="' + id + '" rows="3" placeholder="' + escapeAttr(placeholder) + '" style="resize: vertical !important;" class="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all">' + escapeHtml(value) + '</textarea>' +
                    '</div>';
            }

            function openModal() {
                document.getElementById('modal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                setTimeout(function () {
                    var firstInput = document.querySelector('#modal-body input, #modal-body textarea');
                    if (firstInput) firstInput.focus();
                }, 100);
            }

            window.closeModal = function () {
                document.getElementById('modal').classList.add('hidden');
                document.body.style.overflow = '';
                editingItem = null;
                editingSection = null;
                uploadedImage = null;
                uploadedQrisImage = null;
            };

            /* =========================================
               ========================================= */
            window.saveItem = function () {
                var section = editingSection;
                var data = getData();
                var isEdit = !!editingItem;

                if (section === 'about-hero') {
                    if (!data.aboutHero) data.aboutHero = {};
                    data.aboutHero.title = document.getElementById('f-title').value.trim();
                    data.aboutHero.subtitle = document.getElementById('f-subtitle').value.trim();
                    data.aboutHero.volunteerCount = document.getElementById('f-volunteer').value.trim();

                    if (uploadedImage) {
                        data.aboutHero.image = uploadedImage;
                    } else if (isEdit) {
                        if (editingItem && editingItem.image) data.aboutHero.image = editingItem.image;
                    } else {
                        if (DEFAULT_DATA.aboutHero && DEFAULT_DATA.aboutHero.image) data.aboutHero.image = DEFAULT_DATA.aboutHero.image;
                    }

                    if (!data.aboutHero.title) { showToast('Judul wajib diisi.', 'error'); return; }
                }
                else if (section === 'external' || section === 'internal') {
                    var name = document.getElementById('f-name').value.trim();
                    var quote = document.getElementById('f-quote').value.trim();
                    var quoteEn = document.getElementById('f-quote-en') ? document.getElementById('f-quote-en').value.trim() : '';
                    if (!name || !quote) { showToast('Nama dan quote wajib diisi.', 'error'); return; }

                    var image = '';
                    if (uploadedImage) image = uploadedImage;
                    else if (isEdit && editingItem.image && !editingItem.image.startsWith('data:')) image = editingItem.image;

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        name: name,
                        quote: quote,
                        quote_id: quote,
                        quote_en: quoteEn || quote,
                        image: image
                    };

                    if (section === 'external') {
                        if (!data.externalTestimonials) data.externalTestimonials = [];
                        var titleVal = document.getElementById('f-title') ? document.getElementById('f-title').value.trim() : '';
                        var titleEnVal = document.getElementById('f-title-en') ? document.getElementById('f-title-en').value.trim() : '';
                        obj.title = titleVal;
                        obj.title_id = titleVal;
                        obj.title_en = titleEnVal || titleVal;
                    } else {
                        if (!data.internalTestimonials) data.internalTestimonials = [];
                        var roleVal = document.getElementById('f-role') ? document.getElementById('f-role').value.trim() : '';
                        var roleEnVal = document.getElementById('f-role-en') ? document.getElementById('f-role-en').value.trim() : '';
                        obj.role = roleVal;
                        obj.role_id = roleVal;
                        obj.role_en = roleEnVal || roleVal;
                    }
                    var list = (section === 'external') ? data.externalTestimonials : data.internalTestimonials;

                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }

                } else if (section === 'faq') {
                    var questionId = document.getElementById('f-question').value.trim();
                    var questionEn = document.getElementById('f-question-en') ? document.getElementById('f-question-en').value.trim() : '';
                    var answerId = document.getElementById('f-answer').value.trim();
                    var answerEn = document.getElementById('f-answer-en') ? document.getElementById('f-answer-en').value.trim() : '';
                    if (!questionId || !answerId) { showToast('Pertanyaan dan jawaban wajib diisi.', 'error'); return; }

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        question: questionId,
                        question_id: questionId,
                        question_en: questionEn || questionId,
                        answer: answerId,
                        answer_id: answerId,
                        answer_en: answerEn || answerId
                    };

                    if (!data.faqs) data.faqs = [];
                    var list = data.faqs;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }

                } else if (section === 'locations') {
                    var name = document.getElementById('f-name').value.trim();
                    var lat = parseFloat(document.getElementById('f-lat').value);
                    var lng = parseFloat(document.getElementById('f-lng').value);
                    var volunteers = parseInt(document.getElementById('f-volunteers').value) || 0;
                    var region = document.getElementById('f-region') ? document.getElementById('f-region').value : 'jabodetabek';
                    var focusProgram = document.getElementById('f-focus-program') ? document.getElementById('f-focus-program').value.trim() : '';
                    var coordinatorName = document.getElementById('f-coordinator-name') ? document.getElementById('f-coordinator-name').value.trim() : '';
                    var coordinatorContact = document.getElementById('f-coordinator-contact') ? document.getElementById('f-coordinator-contact').value.trim() : '';
                    
                    var image = '';
                    if (uploadedImage) image = uploadedImage;
                    else if (isEdit && editingItem && editingItem.image) image = editingItem.image;

                    if (!name || isNaN(lat) || isNaN(lng)) { showToast('Data chapter tidak lengkap. Pastikan nama dan koordinat sudah terisi.', 'error'); return; }

                    var obj = { 
                        id: isEdit ? editingItem.id : Date.now(), 
                        name: name, 
                        lat: lat, 
                        lng: lng, 
                        volunteers: volunteers,
                        region: region,
                        focus_program: focusProgram,
                        coordinator_name: coordinatorName,
                        coordinator_contact: coordinatorContact,
                        image: image
                    };

                    if (!data.locations) data.locations = [];
                    var list = data.locations;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }
                }
                else if (section === 'team') {
                    var name = document.getElementById('f-name').value.trim();
                    var role = document.getElementById('f-role').value.trim();
                    var roleEn = document.getElementById('f-role-en') ? document.getElementById('f-role-en').value.trim() : '';
                    if (!name || !role) { showToast('Nama dan role wajib diisi.', 'error'); return; }

                    var image = '';
                    if (uploadedImage) image = uploadedImage;
                    else if (isEdit && editingItem.image && !editingItem.image.startsWith('data:')) image = editingItem.image;

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        name: name,
                        role: role,
                        role_id: role,
                        role_en: roleEn || role,
                        linkedin: document.getElementById('f-linkedin').value.trim() || '#',
                        instagram: document.getElementById('f-instagram').value.trim() || '#',
                        image: image
                    };

                    if (!data.team) data.team = [];
                    var list = data.team;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }
                }
                else if (section === 'activity-card') {
                    var title = document.getElementById('f-title').value.trim();
                    var titleEn = document.getElementById('f-title-en') ? document.getElementById('f-title-en').value.trim() : '';
                    var category = document.getElementById('f-category').value.trim();
                    var categoryEn = document.getElementById('f-category-en') ? document.getElementById('f-category-en').value.trim() : '';
                    var desc = document.getElementById('f-desc').value.trim();
                    var descEn = document.getElementById('f-desc-en') ? document.getElementById('f-desc-en').value.trim() : '';
                    if (!title) { showToast('Judul wajib diisi.', 'error'); return; }

                    var image = '';
                    if (uploadedImage) image = uploadedImage;
                    else if (isEdit && editingItem.image && !editingItem.image.startsWith('data:')) image = editingItem.image;

                    var fullStoryVal = window.quillEditor ? window.quillEditor.root.innerHTML : '';

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        title: title,
                        title_id: title,
                        title_en: titleEn || title,
                        category: category,
                        category_id: category,
                        category_en: categoryEn || category,
                        date: document.getElementById('f-date').value.trim(),
                        description: desc,
                        description_id: desc,
                        description_en: descEn || desc,
                        image: image,
                        link: '#',
                        fullStory: fullStoryVal,
                        full_story_id: fullStoryVal,
                        full_story_en: fullStoryVal
                    };

                    if (!data.activityCards) data.activityCards = [];
                    var list = data.activityCards;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }
                }
                else if (section === 'podcast') {
                    var title = document.getElementById('f-title').value.trim();
                    var titleEn = document.getElementById('f-title-en') ? document.getElementById('f-title-en').value.trim() : '';
                    var episode = document.getElementById('f-episode').value.trim();
                    var episodeEn = document.getElementById('f-episode-en') ? document.getElementById('f-episode-en').value.trim() : '';
                    var spotifyLink = document.getElementById('f-spotify-link').value.trim();

                    if (!title) { showToast('Judul wajib diisi.', 'error'); return; }

                    var image = '';
                    if (uploadedImage) {
                        image = uploadedImage;
                    } else if (isEdit && editingItem.thumbnail && !editingItem.thumbnail.startsWith('data:')) {
                        image = editingItem.thumbnail;
                    }

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        episode: episode,
                        episode_id: episode,
                        episode_en: episodeEn || episode,
                        title: title,
                        title_id: title,
                        title_en: titleEn || title,
                        thumbnail: image,
                        spotifyLink: spotifyLink || '#'
                    };

                    if (!data.podcasts) data.podcasts = [];
                    var list = data.podcasts;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }
                }
                else if (section === 'partner') {
                    var name = document.getElementById('f-name').value.trim();
                    var description = document.getElementById('f-desc').value.trim();
                    var descEn = document.getElementById('f-desc-en') ? document.getElementById('f-desc-en').value.trim() : '';
                    if (!name) { showToast('Nama partner wajib diisi.', 'error'); return; }

                    var image = '';
                    if (uploadedImage) image = uploadedImage;
                    else if (isEdit && editingItem.image && !editingItem.image.startsWith('data:')) image = editingItem.image;

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        name: name,
                        description: description,
                        description_id: description,
                        description_en: descEn || description,
                        icon: document.getElementById('f-icon').value,
                        color: document.getElementById('f-color').value,
                        image: image,
                        link: document.getElementById('f-link').value.trim() || '#'
                    };

                    if (!data.partners) data.partners = [];
                    var list = data.partners;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }
                }
                else if (section === 'donation-settings') {
                    if (!data.donationSettings) data.donationSettings = {};
                    data.donationSettings.heroTitle = document.getElementById('f-hero-title').value.trim();
                    data.donationSettings.heroSubtitle = document.getElementById('f-hero-sub').value.trim();
                    data.donationSettings.stripText = document.getElementById('f-strip-text').value.trim();

                    if (uploadedImage) {
                        data.donationSettings.stripImage = uploadedImage;
                    } else if (isEdit) {
                        if (item && item.stripImage && !item.stripImage.startsWith('data:')) {
                            data.donationSettings.stripImage = item.stripImage;
                        }
                    }

                    data.donationSettings.bankName = document.getElementById('f-bank-name').value.trim();
                    data.donationSettings.accountName = document.getElementById('f-acc-name').value.trim();
                    data.donationSettings.accountNumber = document.getElementById('f-acc-num').value.trim();

                    if (uploadedQrisImage) {
                        data.donationSettings.qrisImage = uploadedQrisImage;
                    } else if (isEdit) {
                        if (item && item.qrisImage && !item.qrisImage.startsWith('data:')) {
                            data.donationSettings.qrisImage = item.qrisImage;
                        }
                    }
                }
                else if (section === 'event') {
                    var titleId = document.getElementById('f-title-id').value.trim();
                    var titleEn = document.getElementById('f-title-en').value.trim();
                    if (!titleId) { showToast('Nama event wajib diisi.', 'error'); return; }

                    var image = '';
                    if (uploadedImage) image = uploadedImage;
                    else if (isEdit && editingItem.image && !editingItem.image.startsWith('data:')) image = editingItem.image;

                    var speakerImage = '';
                    if (uploadedSpeakerImage) speakerImage = uploadedSpeakerImage;
                    else if (isEdit && editingItem.speakerImage && !editingItem.speakerImage.startsWith('data:')) speakerImage = editingItem.speakerImage;

                    var startDateVal = document.getElementById('f-start-date').value;
                    var endDateVal = document.getElementById('f-end-date').value;

                    function formatDateRange(startDateStr, endDateStr) {
                        if (!startDateStr) return '';
                        var start = new Date(startDateStr);
                        var monthsEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                        
                        function getOrdinal(d) {
                            if (d >= 11 && d <= 13) return d + 'th';
                            switch (d % 10) {
                                case 1: return d + 'st';
                                case 2: return d + 'nd';
                                case 3: return d + 'rd';
                                default: return d + 'th';
                            }
                        }

                        var startDay = getOrdinal(start.getDate());
                        var startMonth = monthsEN[start.getMonth()];
                        var startYear = start.getFullYear();
                        
                        if (!endDateStr || startDateStr === endDateStr) {
                            return startMonth + ' ' + startDay + ', ' + startYear;
                        }
                        
                        var end = new Date(endDateStr);
                        var endDay = getOrdinal(end.getDate());
                        var endMonth = monthsEN[end.getMonth()];
                        var endYear = end.getFullYear();
                        
                        if (startYear !== endYear) {
                            return startMonth + ' ' + startDay + ', ' + startYear + ' - ' + endMonth + ' ' + endDay + ', ' + endYear;
                        }
                        
                        if (startMonth !== endMonth) {
                            return startMonth + ' ' + startDay + ' - ' + endMonth + ' ' + endDay + ', ' + startYear;
                        }
                        
                        return startMonth + ' ' + startDay + ' - ' + endDay + ', ' + startYear;
                    }

                    var formattedDate = formatDateRange(startDateVal, endDateVal) || (isEdit ? editingItem.date : '');

                    var obj = {
                        id: isEdit ? editingItem.id : Date.now(),
                        title_id: titleId,
                        title_en: titleEn || titleId,
                        startDate: startDateVal,
                        endDate: endDateVal,
                        date: formattedDate,
                        time: document.getElementById('f-time').value.trim(),
                        location: document.getElementById('f-location').value.trim(),
                        link: document.getElementById('f-link').value.trim() || '#',
                        speaker: document.getElementById('f-speaker').value.trim(),
                        speakerRole: document.getElementById('f-speaker-role').value.trim(),
                        speakerImage: speakerImage,
                        certDescription: document.getElementById('f-cert-description').value.trim(),
                        status: getEventStatus(startDateVal || formattedDate, document.getElementById('f-time').value.trim()),
                        image: image
                    };

                    if (!data.events) data.events = [];
                    var list = data.events;
                    if (isEdit) {
                        var idx = list.findIndex(function (i) { return i.id === editingItem.id; });
                        if (idx !== -1) list[idx] = obj;
                    } else {
                        list.push(obj);
                    }
                }
                else if (section === 'events-settings') {
                    if (!data.eventsSettings) data.eventsSettings = {};
                    data.eventsSettings.eventTitle_id = document.getElementById('f-event-title-id').value.trim();
                    data.eventsSettings.eventTitle_en = document.getElementById('f-event-title-en').value.trim();
                    data.eventsSettings.eventSubtitle_id = document.getElementById('f-event-sub-id').value.trim();
                    data.eventsSettings.eventSubtitle_en = document.getElementById('f-event-sub-en').value.trim();
                    data.eventsSettings.certTitle_id = document.getElementById('f-cert-title-id').value.trim();
                    data.eventsSettings.certTitle_en = document.getElementById('f-cert-title-en').value.trim();
                    data.eventsSettings.certSubtitle_id = document.getElementById('f-cert-sub-id').value.trim();
                    data.eventsSettings.certSubtitle_en = document.getElementById('f-cert-sub-en').value.trim();
                }

                if (!saveData(data)) return;
                // ===== ACTIVITY LOG: Catat event TAMBAH / EDIT =====
                try {
                    var logCategoryMap = {
                        'external': 'Testimoni Eksternal', 'internal': 'Testimoni Internal',
                        'faq': 'FAQ', 'locations': 'Lokasi', 'team': 'Tim',
                        'activity-card': 'Activity Card', 'podcast': 'Podcast',
                        'partner': 'Partner', 'event': 'Event',
                        'about-hero': 'About Hero', 'donation-settings': 'Donasi',
                        'events-settings': 'Pengaturan Event'
                    };
                    var logCat = logCategoryMap[section] || section;
                    var logAction = isEdit ? 'EDIT' : 'TAMBAH';
                    var logDetail = (isEdit ? 'Mengedit ' : 'Menambahkan ') + logCat;
                    // Coba ambil nama item untuk detail yang lebih informatif
                    try {
                        var itemName = '';
                        if (section === 'external' || section === 'internal') itemName = document.getElementById('f-name') ? document.getElementById('f-name').value : '';
                        else if (section === 'faq') itemName = document.getElementById('f-question') ? document.getElementById('f-question').value : '';
                        else if (section === 'locations') itemName = document.getElementById('f-name') ? document.getElementById('f-name').value : '';
                        else if (section === 'team') itemName = document.getElementById('f-name') ? document.getElementById('f-name').value : '';
                        else if (section === 'activity-card' || section === 'podcast') itemName = document.getElementById('f-title') ? document.getElementById('f-title').value : '';
                        else if (section === 'partner') itemName = document.getElementById('f-name') ? document.getElementById('f-name').value : '';
                        else if (section === 'event') itemName = document.getElementById('f-title-id') ? document.getElementById('f-title-id').value : '';
                        if (itemName) logDetail += ': "' + itemName + '"';
                    } catch(nameErr) {}
                    addActivityLog(logAction, logCat, logDetail);
                } catch(logErr) { console.warn('Log error:', logErr); }
                // ====================================================
                closeModal();
                renderAllLists();
                if (section === 'about-hero') renderAboutPreview();
                if (section === 'donation-settings') renderDonationPreview();
                if (section === 'events-settings') renderEventsSettingsPreview(data.eventsSettings);
                showToast(isEdit ? 'Data berhasil diperbarui.' : 'Data berhasil ditambahkan.', 'success');
            };

            /* =========================================
               ========================================= */
            window.confirmDelete = function (section, id) {
                deletingSection = section;
                deletingId = id;
                document.getElementById('confirm-dialog').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.getElementById('confirm-delete-btn').onclick = function () { executeDelete(); };
            };

            window.closeConfirm = function () {
                document.getElementById('confirm-dialog').classList.add('hidden');
                document.body.style.overflow = '';
                deletingSection = null;
                deletingId = null;
            };

            function executeDelete() {
                var data = getData();
                var section = deletingSection;
                var id = deletingId;
                // Ambil nama item sebelum dihapus untuk log yang informatif
                var deletedItemName = '';
                try {
                    var itemList = {
                        'external': data.externalTestimonials, 'internal': data.internalTestimonials,
                        'faq': data.faqs, 'locations': data.locations, 'team': data.team,
                        'activity-card': data.activityCards, 'podcast': data.podcasts,
                        'partner': data.partners, 'event': data.events
                    }[section] || [];
                    var foundItem = itemList.find(function(i) { return i.id === id; });
                    if (foundItem) {
                        deletedItemName = foundItem.name || foundItem.title || foundItem.title_id || foundItem.question || '';
                    }
                } catch(e) {}
                switch (section) {
                    case 'external': data.externalTestimonials = (data.externalTestimonials || []).filter(function (i) { return i.id !== id; }); break;
                    case 'internal': data.internalTestimonials = (data.internalTestimonials || []).filter(function (i) { return i.id !== id; }); break;
                    case 'faq': data.faqs = (data.faqs || []).filter(function (i) { return i.id !== id; }); break;
                    case 'locations': data.locations = (data.locations || []).filter(function (i) { return i.id !== id; }); break;
                    case 'team': data.team = (data.team || []).filter(function (i) { return i.id !== id; }); break;
                    case 'activity-card': data.activityCards = (data.activityCards || []).filter(function (i) { return i.id !== id; }); break;
                    case 'podcast': data.podcasts = (data.podcasts || []).filter(function (i) { return i.id !== id; }); break;
                    case 'partner': data.partners = (data.partners || []).filter(function (i) { return i.id !== id; }); break;
                    case 'event': data.events = (data.events || []).filter(function (i) { return i.id !== id; }); break;
                }
                if (!saveData(data)) return;
                // ===== ACTIVITY LOG: Catat event HAPUS =====
                try {
                    var logCatMap = {
                        'external': 'Testimoni Eksternal', 'internal': 'Testimoni Internal',
                        'faq': 'FAQ', 'locations': 'Lokasi', 'team': 'Tim',
                        'activity-card': 'Activity Card', 'podcast': 'Podcast',
                        'partner': 'Partner', 'event': 'Event'
                    };
                    var logCat = logCatMap[section] || section;
                    var logDetail = 'Menghapus ' + logCat + (deletedItemName ? ': "' + deletedItemName + '"' : '');
                    addActivityLog('HAPUS', logCat, logDetail);
                } catch(logErr) {}
                // ===========================================
                closeConfirm();
                renderAllLists();
                showToast('Data berhasil dihapus.', 'success');
            }

            window.logout = function () {
                try {
                    addActivityLog('LOGOUT', 'Sistem', 'Admin keluar dari sesi');
                } catch(e) {}
                
                localStorage.removeItem('hey_youth_admin_token');
                
                function forceClearSessionAndRedirect() {
                    try {
                        for (var i = localStorage.length - 1; i >= 0; i--) {
                            var key = localStorage.key(i);
                            if (key && key.startsWith('sb-') && key.endsWith('-auth-token')) {
                                localStorage.removeItem(key);
                            }
                        }
                    } catch(e) {}
                    window.location.href = 'Login.html';
                }

                try {
                    if (supabase && supabase.auth && typeof supabase.auth.signOut === 'function') {
                        var p = supabase.auth.signOut();
                        if (p && typeof p.then === 'function') {
                            p.then(function () {
                                window.location.href = 'Login.html';
                            }).catch(function (error) {
                                forceClearSessionAndRedirect();
                            });
                        } else {
                            forceClearSessionAndRedirect();
                        }
                    } else {
                        forceClearSessionAndRedirect();
                    }
                } catch (error) {
                    forceClearSessionAndRedirect();
                }
            };
            // This regex replaced the original window.logout = function() { ... });, so we must add back the remaining code if any!
            // Wait, there is no code after }); for window.logout.

            /* =========================================
               SISTEM LOGGING AKTIVITAS ADMIN
               Mencatat riwayat aksi admin ke localStorage
               key: 'hey_youth_admin_logs', maks 200 entri
               ========================================= */
            var ACTIVITY_LOG_KEY = 'hey_youth_admin_logs';
            var MAX_LOG_ENTRIES = 200;

            /**
             * Mencatat satu entri aktivitas ke log (menyimpan ke LocalStorage & Supabase).
             * @param {string} action  - 'LOGIN' | 'TAMBAH' | 'EDIT' | 'HAPUS' | 'LOGOUT'
             * @param {string} category - Kategori data, mis. 'FAQ', 'Event', 'Sertifikat'
             * @param {string} detail  - Deskripsi lengkap aksi yang dilakukan
             */
            async function addActivityLog(action, category, detail) {
                try {
                    var adminEmail = window._currentAdminEmail || localStorage.getItem('hey_youth_last_login_email') || 'Admin';
                    
                    // Fallback to localStorage
                    var logs = JSON.parse(localStorage.getItem(ACTIVITY_LOG_KEY) || '[]');
                    var entry = {
                        timestamp: new Date().toISOString(),
                        action: action,
                        category: category,
                        detail: detail,
                        adminEmail: adminEmail
                    };
                    logs.unshift(entry);
                    if (logs.length > MAX_LOG_ENTRIES) logs = logs.slice(0, MAX_LOG_ENTRIES);
                    localStorage.setItem(ACTIVITY_LOG_KEY, JSON.stringify(logs));
                    
                    // Update badge counter di sidebar
                    var badge = document.getElementById('count-activity-log');
                    if (badge) badge.textContent = logs.length;

                    // Insert to Supabase
                    if (window.supabase) {
                        await window.supabase.from('admin_logs').insert([{
                            admin_email: adminEmail,
                            action: action,
                            category: category,
                            detail: detail
                        }]);
                    }
                } catch(e) {
                    console.warn('Gagal menyimpan log aktivitas:', e);
                }
            }
            window.addActivityLog = addActivityLog;

            /**
             * Render tabel log aktivitas di panel view-activity-log.
             * Mengambil data realtime dari Supabase jika tersedia.
             */
            async function renderActivityLog() {
                var tbody = document.getElementById('list-activity-log');
                var badgeCount = document.getElementById('badge-log-count');
                var sidebarBadge = document.getElementById('count-activity-log');

                if (!tbody) return;
                tbody.innerHTML = '<tr><td colspan="5" class="text-center py-10 text-gray-400"><i class="fas fa-spinner fa-spin text-3xl mb-2 block opacity-30"></i>Memuat log aktivitas...</td></tr>';

                var logs = [];
                if (window.supabase) {
                    try {
                        const { data, error } = await window.supabase
                            .from('admin_logs')
                            .select('*')
                            .order('created_at', { ascending: false })
                            .limit(100);
                        
                        if (!error && data) {
                            logs = data.map(function(d) {
                                return {
                                    timestamp: d.created_at,
                                    action: d.action,
                                    category: d.category,
                                    detail: d.detail,
                                    adminEmail: d.admin_email
                                };
                            });
                            // Sync fallback to local storage
                            localStorage.setItem(ACTIVITY_LOG_KEY, JSON.stringify(logs));
                        } else {
                            logs = JSON.parse(localStorage.getItem(ACTIVITY_LOG_KEY) || '[]');
                        }
                    } catch(e) {
                        logs = JSON.parse(localStorage.getItem(ACTIVITY_LOG_KEY) || '[]');
                    }
                } else {
                    logs = JSON.parse(localStorage.getItem(ACTIVITY_LOG_KEY) || '[]');
                }

                if (badgeCount) badgeCount.textContent = logs.length + ' entri';
                if (sidebarBadge) sidebarBadge.textContent = logs.length;

                if (logs.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="5" class="text-center py-10 text-gray-400"><i class="fas fa-history text-3xl mb-2 block opacity-30"></i>Belum ada aktivitas yang tercatat.</td></tr>';
                    return;
                }

                // Badge warna per aksi
                var badgeMap = {
                    'LOGIN':  '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"><i class="fas fa-sign-in-alt"></i> LOGIN</span>',
                    'TAMBAH': '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"><i class="fas fa-plus"></i> TAMBAH</span>',
                    'EDIT':   '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-600"><i class="fas fa-pen"></i> EDIT</span>',
                    'HAPUS':  '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400"><i class="fas fa-trash"></i> HAPUS</span>',
                    'LOGOUT': '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-200 text-gray-600 dark:bg-slate-700 dark:text-slate-300"><i class="fas fa-sign-out-alt"></i> LOGOUT</span>'
                };

                tbody.innerHTML = logs.map(function(log) {
                    var dt = new Date(log.timestamp);
                    var dateStr = dt.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
                    var timeStr = dt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    var actionBadge = badgeMap[log.action] || ('<span class="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">' + escapeHtml(log.action) + '</span>');
                    return '<tr class="border-b border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">' +
                        '<td class="px-4 py-2.5 text-xs text-gray-500 whitespace-nowrap"><div class="font-medium text-heading">' + escapeHtml(dateStr) + '</div><div class="text-[10px] text-gray-400">' + escapeHtml(timeStr) + '</div></td>' +
                        '<td class="px-4 py-2.5">' + actionBadge + '</td>' +
                        '<td class="px-4 py-2.5 text-xs font-semibold text-heading">' + escapeHtml(log.category || '-') + '</td>' +
                        '<td class="px-4 py-2.5 text-xs text-gray-600 dark:text-slate-300 max-w-xs">' + escapeHtml(log.detail || '-') + '</td>' +
                        '<td class="px-4 py-2.5 text-xs text-gray-400">' + escapeHtml(log.adminEmail || 'Admin') + '</td>' +
                        '</tr>';
                }).join('');
            }
            window.renderActivityLog = renderActivityLog;

            /**
             * Menghapus semua entri log aktivitas.
             */
            window.clearActivityLog = async function() {
                if (!confirm('Hapus semua log aktivitas? Tindakan ini tidak dapat dibatalkan.')) return;
                try {
                    if (window.supabase) {
                        await window.supabase.from('admin_logs').delete().neq('id', '00000000-0000-0000-0000-000000000000');
                    }
                    localStorage.setItem(ACTIVITY_LOG_KEY, '[]');
                    renderActivityLog();
                    showToast('Semua log aktivitas berhasil dihapus.', 'success');
                } catch(e) {
                    showToast('Gagal menghapus log dari database.', 'error');
                }
            };

            /**
             * Mengekspor log aktivitas ke file CSV.
             */
            window.exportActivityLogToCSV = function() {
                var logs = [];
                try { logs = JSON.parse(localStorage.getItem(ACTIVITY_LOG_KEY) || '[]'); } catch(e) {}
                if (!logs.length) { showToast('Tidak ada log untuk diekspor.', 'error'); return; }
                var headers = ['Waktu', 'Aksi', 'Kategori', 'Detail', 'Admin'];
                var data = logs.map(function(log) {
                    return [
                        new Date(log.timestamp).toLocaleString('id-ID'),
                        log.action,
                        log.category,
                        log.detail,
                        log.adminEmail
                    ];
                });
                downloadCSV(headers, data, 'log-aktivitas-admin.csv');
                showToast('Log aktivitas berhasil diekspor ke CSV.', 'success');
            };

            /* =========================================
               ========================================= */
            var toastTimer = null;
            function showToast(message, type) {
                var toast = document.getElementById('toast');
                var inner = document.getElementById('toast-inner');
                var icon = document.getElementById('toast-icon');
                var text = document.getElementById('toast-text');
                if (toastTimer) clearTimeout(toastTimer);
                text.textContent = message;
                if (type === 'success') {
                    inner.className = 'flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-sm font-medium bg-green-600 text-white toast-enter';
                    icon.className = 'fas fa-check-circle';
                } else {
                    inner.className = 'flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-sm font-medium bg-red-500 text-white toast-enter';
                    icon.className = 'fas fa-exclamation-circle';
                }
                toast.classList.remove('hidden');
                toastTimer = setTimeout(function () {
                    inner.classList.remove('toast-enter');
                    inner.classList.add('toast-exit');
                    setTimeout(function () {
                        toast.classList.add('hidden');
                        inner.classList.remove('toast-exit');
                    }, 300);
                }, 3000);
            }

            function escapeHtml(str) {
                if (str === undefined || str === null || str === '') return '';
                var clean = (typeof cleanLangText === 'function') ? cleanLangText(String(str), 'id') : String(str);
                var div = document.createElement('div');
                div.textContent = clean;
                return div.innerHTML;
            }

            function escapeAttr(str) {
                if (str === undefined || str === null || str === '') return '';
                var clean = (typeof cleanLangText === 'function') ? cleanLangText(String(str), 'id') : String(str);
                return clean.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    if (!document.getElementById('confirm-dialog').classList.contains('hidden')) { closeConfirm(); }
                    else if (!document.getElementById('modal').classList.contains('hidden')) { closeModal(); }
                }
            });

            /* =========================================
               ========================================= */
            var visitorChartInstance = null;
            var unsubscribeVisitorStats = null;
            var lastStatsData = null;

            function generateMockStatistics() {
                var pages = {
                    'Home': 542,
                    'About Us': 214,
                    'Activities': 324,
                    'Partners': 125,
                    'Donation': 89,
                    'Gallery': 56
                };
                var daily = {};
                var total = 0;
                var keys = Object.keys(pages);
                for (var k = 0; k < keys.length; k++) {
                    total += pages[keys[k]];
                }

                var now = new Date();
                for (var i = 6; i >= 0; i--) {
                    var date = new Date(now);
                    date.setDate(now.getDate() - i);
                    var dateStr = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
                    daily[dateStr] = Math.floor(Math.random() * 90) + 30;
                }

                return {
                    total: total,
                    pages: pages,
                    daily: daily
                };
            }

            function renderVisitorChart(dailyData) {
                var canvas = document.getElementById('visitorChart');
                if (!canvas) return;
                var ctx = canvas.getContext('2d');
                var labels = [];
                var data = [];
                var now = new Date();

                for (var i = 6; i >= 0; i--) {
                    var date = new Date(now);
                    date.setDate(now.getDate() - i);
                    var dateStr = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');

                    var dayLabel = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
                    labels.push(dayLabel);
                    data.push(dailyData[dateStr] || 0);
                }

                if (visitorChartInstance) {
                    visitorChartInstance.destroy();
                }

                visitorChartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Pengunjung Harian',
                            data: data,
                            borderColor: '#3B82F6',
                            backgroundColor: 'rgba(59, 130, 246, 0.05)',
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#3B82F6',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2,
                            pointRadius: 5,
                            pointHoverRadius: 7
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: '#1E293B',
                                titleColor: '#ffffff',
                                bodyColor: '#ffffff',
                                padding: 12,
                                cornerRadius: 8,
                                displayColors: false
                            }
                        },
                        scales: {
                            y: {
                                grid: {
                                    color: 'rgba(241, 245, 249, 1)'
                                },
                                ticks: {
                                    font: {
                                        family: 'Inter',
                                        size: 11
                                    },
                                    color: '#64748B',
                                    precision: 0
                                }
                            },
                            x: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    font: {
                                        family: 'Inter',
                                        size: 11
                                    },
                                    color: '#64748B'
                                }
                            }
                        }
                    }
                });
            }

            function updateStatisticsUI(stats) {
                if (!stats) return;
                var elTotal = document.getElementById('stat-total-visitors');
                if (elTotal) elTotal.textContent = stats.total || 0;

                var now = new Date();
                var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
                var elToday = document.getElementById('stat-today-visitors');
                if (elToday) elToday.textContent = (stats.daily && stats.daily[todayStr]) ? stats.daily[todayStr] : 0;

                var tbody = document.getElementById('stat-page-views-tbody');
                var pages = stats.pages || {};

                var pageList = Object.keys(pages).map(function (p) {
                    return { name: p, views: pages[p] };
                }).sort(function (a, b) {
                    return b.views - a.views;
                });

                var elTop = document.getElementById('stat-top-page');
                if (elTop) {
                    if (pageList.length > 0) {
                        elTop.textContent = pageList[0].name;
                    } else {
                        elTop.textContent = '-';
                    }
                }

                var totalPageViews = 0;
                for (var j = 0; j < pageList.length; j++) {
                    totalPageViews += pageList[j].views;
                }
                if (totalPageViews === 0) totalPageViews = 1;

                if (tbody) {
                    if (pageList.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="4" class="text-center py-6 text-gray-400">Belum ada data kunjungan.</td></tr>';
                    } else {
                        tbody.innerHTML = pageList.map(function (p) {
                            var pct = Math.round((p.views / totalPageViews) * 100);
                            var colorClass = '';
                            if (pct < 50) {
                                colorClass = 'text-green-600 font-semibold';
                            } else if (pct >= 50 && pct <= 80) {
                                colorClass = 'text-yellow-500 font-semibold';
                            } else {
                                colorClass = 'text-red-600 font-semibold';
                            }

                            var activePages = ['Home', 'About Us', 'Activities', 'Partners', 'Donation', 'Gallery'];
                            var isActive = activePages.indexOf(p.name) !== -1;
                            var statusBadge = isActive
                                ? '<span class="bg-green-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">Active</span>'
                                : '<span class="bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm">Inactive</span>';

                            return '<tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">' +
                                '<td class="px-3 py-2.5 font-medium text-heading text-xs">' + escapeHtml(p.name) + '</td>' +
                                '<td class="px-3 py-2.5 text-center">' + statusBadge + '</td>' +
                                '<td class="px-3 py-2.5 text-right font-semibold text-xs">' + p.views + '</td>' +
                                '<td class="px-3 py-2.5 text-right text-xs ' + colorClass + '">' + pct + '%</td>' +
                                '</tr>';
                        }).join('');
                    }
                }

                var homepageView = document.getElementById('view-homepage');
                if (homepageView && !homepageView.classList.contains('hidden')) {
                    renderVisitorChart(stats.daily || {});
                }
            }

            function initStatisticsListener() {
                if (unsubscribeVisitorStats) return;

                var docRef = db.collection('heyyouth').doc('visitor_stats');
                unsubscribeVisitorStats = docRef.onSnapshot(async function (docSnap) {
                    var stats = null;
                    if (docSnap.exists) {
                        stats = docSnap.data();
                    } else {
                        stats = generateMockStatistics();
                        await docRef.set(stats);
                    }
                    lastStatsData = stats;
                    updateStatisticsUI(stats);
                }, function (error) {
                    console.error("Error loading statistics: ", error);
                    showToast("Menggunakan statistik lokal (Firebase diblokir/gagal)", "warning");
                    var stats = generateMockStatistics();
                    lastStatsData = stats;
                    updateStatisticsUI(stats);
                });
            }

            function initThemeToggle() {
                var toggles = document.querySelectorAll('.theme-toggle-btn');
                if (!toggles.length) return;

                var currentTheme = localStorage.getItem('heyyouth_theme') || 'light';

                function setTheme(theme) {
                    if (theme === 'dark') {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                    localStorage.setItem('heyyouth_theme', theme);

                    toggles.forEach(function (btn) {
                        var iconSun = btn.querySelector('.theme-icon-sun');
                        var iconMoon = btn.querySelector('.theme-icon-moon');
                        if (iconSun && iconMoon) {
                            if (theme === 'dark') {
                                iconSun.classList.remove('hidden');
                                iconMoon.classList.add('hidden');
                            } else {
                                iconSun.classList.add('hidden');
                                iconMoon.classList.remove('hidden');
                            }
                        }
                    });
                }

                setTheme(currentTheme);

                toggles.forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        var theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
                        setTheme(theme);
                    });
                });
            }

            /* =========================================
               ========================================= */
            window.switchEduSubTab = function (subtab) {
                document.querySelectorAll('.edu-subview-pane').forEach(function (pane) {
                    pane.classList.add('hidden');
                });
                document.querySelectorAll('.edu-subtab-btn').forEach(function (btn) {
                    btn.className = 'edu-subtab-btn flex-1 py-3 px-4 text-xs font-bold rounded-xl transition-all text-center text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white flex items-center justify-center gap-1.5';
                });

                var activePane = document.getElementById('subview-' + subtab);
                if (activePane) activePane.classList.remove('hidden');

                var activeBtn = document.getElementById('btn-subtab-' + subtab);
                if (activeBtn) {
                    activeBtn.className = 'edu-subtab-btn flex-1 py-3 px-4 text-xs font-bold rounded-xl transition-all text-center bg-primary text-white shadow-sm flex items-center justify-center gap-1.5';
                }
            };

            window.loadAndRenderMockRegistrations = async function () {
                var tbody = document.getElementById('list-registrations');
                if (!tbody) return;
                tbody.innerHTML = '<tr><td colspan="5" class="text-center py-8 text-gray-400"><i class="fas fa-circle-notch fa-spin mr-2"></i>Memuat...</td></tr>';
                try {
                    var listKey = 'mock_fb_list_registrations';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];

                    var certListKey = 'mock_fb_list_certificates';
                    var certList = localStorage.getItem(certListKey) ? JSON.parse(localStorage.getItem(certListKey)) : [];
                    var issuedSet = new Set();
                    certList.forEach(function(c) {
                        if (c && c.data && c.data.email && c.data.eventName) {
                            issuedSet.add(c.data.email.trim().toLowerCase() + '|' + c.data.eventName.trim().toLowerCase());
                        }
                    });

                    var uniqueList = [];
                    var seenKeys = new Set();
                    var changed = false;
                    for (var i = 0; i < list.length; i++) {
                        var c = list[i];
                        if (c && c.data) {
                            var eventTitle = c.data.eventTitle || 'Acara #' + c.data.eventId;
                            var issueKey = (c.data.email || '').trim().toLowerCase() + '|' + eventTitle.trim().toLowerCase();
                            
                            if (issuedSet.has(issueKey)) {
                                changed = true; // Delete because certificate issued
                                continue;
                            }

                            var key = (c.data.email || '').trim().toLowerCase() + '|' + (c.data.eventId || '');
                            if (!seenKeys.has(key)) {
                                seenKeys.add(key);
                                uniqueList.push(c);
                            } else {
                                changed = true; // Found a duplicate
                            }
                        }
                    }
                    if (changed) {
                        list = uniqueList;
                        localStorage.setItem(listKey, JSON.stringify(list));
                    }

                    var countEl = document.getElementById('registrations-count');
                    if (countEl) countEl.textContent = list.length + ' total';
                    
                    if (list.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-8 text-gray-400">Belum ada pendaftaran acara.</td></tr>';
                        return;
                    }
                    tbody.innerHTML = list.map(function (itemObj) {
                        var item = itemObj.data;
                        var id = itemObj.id;
                        var dateStr = item.registeredAt ? new Date(item.registeredAt).toLocaleString('id-ID') : '-';
                        return '<tr class="border-b border-gray-150 hover:bg-gray-50 transition-colors">' +
                            '<td class="px-4 py-3 font-semibold text-heading">' + escapeHtml(item.name) + '</td>' +
                            '<td class="px-4 py-3 text-xs">' + escapeHtml(item.email) + '</td>' +
                            '<td class="px-4 py-3 font-medium text-xs text-primary">' + escapeHtml(item.eventTitle || 'Acara #' + item.eventId) + '</td>' +
                            '<td class="px-4 py-3 text-xs text-gray-500">' + dateStr + '</td>' +
                            '<td class="px-4 py-3 text-right">' +
                            '<button onclick="deleteMockRegistration(\'' + id + '\')" class="text-red-500 hover:text-red-700 p-1 text-xs"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                            '</td>' +
                            '</tr>';
                    }).reverse().join('');
                } catch (err) {
                    console.error("loadAndRenderMockRegistrations error:", err);
                    tbody.innerHTML = '<tr><td colspan="5" class="text-center py-8 text-red-500">Gagal memuat data.</td></tr>';
                }
            };

            window.deleteMockRegistration = async function (id) {
                if (!confirm('Hapus pendaftaran ini?')) return;
                try {
                    var listKey = 'mock_fb_list_registrations';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    list = list.filter(function (item) { return item.id !== id; });
                    localStorage.setItem(listKey, JSON.stringify(list));
                    showToast('Pendaftaran berhasil dihapus.', 'success');
                    loadAndRenderMockRegistrations();
                } catch (err) {
                    console.error(err);
                    showToast('Gagal menghapus pendaftaran.', 'error');
                }
            };

            window.loadAndRenderCertificates = async function () {
                var tbody = document.getElementById('list-certificates');
                if (!tbody) return;
                tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400"><i class="fas fa-circle-notch fa-spin mr-2"></i>Memuat...</td></tr>';
                try {
                    var listKey = 'mock_fb_list_certificates';
                    if (localStorage.getItem(listKey) === null) {
                        var list = [
                            {
                                id: "1",
                                data: {
                                    email: 'peserta@heyyouth.org',
                                    name: 'Budi Santoso',
                                    role: 'Participant',
                                    eventName: 'HeyYouth Digital Summit 2026',
                                    issueDate: '18 Juli 2026',
                                    certificateNumber: 'HY-DS26-0001',
                                    description: 'as a **Participant** in the online webinar **HeyYouth Digital Summit 2026**'
                                }
                            },
                            {
                                id: "2",
                                data: {
                                    email: 'speaker@heyyouth.org',
                                    name: 'Jane Doe',
                                    role: 'Speaker',
                                    eventName: 'HeyYouth Digital Summit 2026',
                                    issueDate: '18 Juli 2026',
                                    certificateNumber: 'HY-DS26-0002',
                                    description: 'as a **Speaker** in the online webinar **HeyYouth Digital Summit 2026**'
                                }
                            },
                            {
                                id: "3",
                                data: {
                                    email: 'henriprasetyo6@gmail.com',
                                    name: 'Henri Prasetyo',
                                    role: 'Participant',
                                    eventName: 'Hey Youth Summit 2026',
                                    issueDate: 'July 22nd - 23rd, 2026',
                                    certificateNumber: 'HY-REG-014838',
                                    description: 'in recognition of your active participation in the **Hey Youth: Future Ready Summit** themed **"What Makes You Irreplaceable in the AI Era."**'
                                }
                            }
                        ];
                        localStorage.setItem(listKey, JSON.stringify(list));
                    }
                    var list = JSON.parse(localStorage.getItem(listKey) || '[]');
                    
                    var uniqueList = [];
                    var seenKeys = new Set();
                    var changed = false;
                    for (var i = 0; i < list.length; i++) {
                        var c = list[i];
                        if (c && c.data) {
                            var key = c.data.email + '|' + c.data.eventName + '|' + c.data.role;
                            if (!seenKeys.has(key)) {
                                seenKeys.add(key);
                                uniqueList.push(c);
                            } else {
                                changed = true; // Found a duplicate
                            }
                        }
                    }
                    if (changed) {
                        list = uniqueList;
                        localStorage.setItem(listKey, JSON.stringify(list));
                    }

                    var countCertEl = document.getElementById('count-certificates');
                    if (countCertEl) countCertEl.textContent = list.length;
                    if (list.length === 0) {
                        tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400">Belum ada sertifikat yang diterbitkan.</td></tr>';
                        return;
                    }
                    tbody.innerHTML = list.map(function (itemObj) {
                        var item = itemObj.data;
                        var id = itemObj.id;
                        return '<tr class="border-b border-gray-150 hover:bg-gray-50 transition-colors">' +
                            '<td class="px-4 py-3 font-semibold text-xs text-heading">' + escapeHtml(item.certificateNumber) + '</td>' +
                            '<td class="px-4 py-3 font-bold text-xs text-primary">' + escapeHtml(item.name) + '</td>' +
                            '<td class="px-4 py-3 text-xs">' + escapeHtml(item.email) + '</td>' +
                            '<td class="px-4 py-3 text-xs">' + escapeHtml(item.eventName) + '</td>' +
                            '<td class="px-4 py-3 text-xs">' + escapeHtml(item.issueDate) + '</td>' +
                            '<td class="px-4 py-3 text-right">' +
                            '<button onclick="viewCertificate(\'' + id + '\')" class="text-blue-500 hover:text-blue-700 p-1 text-xs mr-3"><i class="fas fa-eye"></i> View</button>' +
                            '<button onclick="deleteCertificate(\'' + id + '\')" class="text-red-500 hover:text-red-700 p-1 text-xs"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                            '</td>' +
                            '</tr>';
                    }).reverse().join('');
                } catch (err) {
                    console.error("loadAndRenderCertificates error:", err);
                    tbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-red-500">Gagal memuat data.</td></tr>';
                }
            };

            window.deleteCertificate = async function (id) {
                if (!confirm('Hapus sertifikat ini?')) return;
                try {
                    var listKey = 'mock_fb_list_certificates';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    var found = list.find(function(c) { return c.id === id; });
                    list = list.filter(function (item) { return item.id !== id; });
                    localStorage.setItem(listKey, JSON.stringify(list));
                    // ===== ACTIVITY LOG =====
                    var detail = 'Menghapus sertifikat' + (found && found.data ? ': "' + (found.data.certificateNumber || found.data.name) + '"' : '');
                    addActivityLog('HAPUS', 'Sertifikat', detail);
                    // ========================
                    showToast('Sertifikat berhasil dihapus.', 'success');
                    loadAndRenderCertificates();
                } catch (err) {
                    console.error(err);
                    showToast('Gagal menghapus sertifikat.', 'error');
                }
            };

            window.viewCertificate = function (id) {
                var listKey = 'mock_fb_list_certificates';
                var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                var certObj = list.find(function (c) { return c.id === id; });
                if (!certObj) {
                    showToast('Sertifikat tidak ditemukan.', 'error');
                    return;
                }
                var cert = certObj.data;

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'View Certificate - ' + cert.name;
                
                modalBody.innerHTML = '<div class="space-y-4 text-center">' +
                    '  <div class="flex justify-center">' +
                    '    <canvas id="cert-preview-canvas" style="max-width: 100%; height: auto; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);"></canvas>' +
                    '  </div>' +
                    '  <div class="text-xs text-gray-500">' +
                    '    Nomor Sertifikat: ' + escapeHtml(cert.certificateNumber) + ' | Email: ' + escapeHtml(cert.email) +
                    '  </div>' +
                    '</div>';

                document.getElementById('modal').classList.remove('hidden');

                var canvas = document.getElementById('cert-preview-canvas');
                if (canvas) {
                    drawCertificatePreview(canvas, cert);
                }
            };

            async function drawCertificatePreview(canvas, cert) {
                var layout = {
                    nameX: 400, nameY: 290,
                    descX: 400, descY: 345,
                    dateX: 400, dateY: null,
                    numX: 45, numY: 525
                };

                const scale = 2;
                canvas.width = 800 * scale;
                canvas.height = 565 * scale;

                const ctx = canvas.getContext('2d');

                if (document.fonts) {
                    try {
                        await document.fonts.load('20px "Great Vibes"');
                        await document.fonts.load('10px "Inter"');
                    } catch (e) {
                        console.warn("Gagal memuat font secara dinamis:", e);
                    }
                }

                const img = new Image();
                img.onload = function () {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    
                    ctx.fillStyle = '#b5892c';
                    ctx.textAlign = 'center';
                    ctx.font = (42 * scale) + 'px "Great Vibes", cursive';
                    ctx.fillText(cert.name, layout.nameX * scale, layout.nameY * scale);

                    function wrapRichText(context, text, x, y, maxWidth, lineHeight) {
                        var segments = text.split('**');
                        var tokens = [];
                        for (var i = 0; i < segments.length; i++) {
                            var isBold = (i % 2 === 1);
                            var segmentText = segments[i];
                            var words = segmentText.split(' ');
                            for (var j = 0; j < words.length; j++) {
                                var wordStr = words[j];
                                var spacer = (j < words.length - 1) ? ' ' : '';
                                if (wordStr || spacer) {
                                    tokens.push({
                                        text: wordStr + spacer,
                                        isBold: isBold
                                    });
                                }
                            }
                        }

                        var lines = [];
                        var currentLine = [];
                        var currentLineWidth = 0;

                        var normalFont = (12.5 * scale) + 'px "Inter", sans-serif';
                        var boldFont = 'bold ' + (12.5 * scale) + 'px "Inter", sans-serif';

                        for (var k = 0; k < tokens.length; k++) {
                            var token = tokens[k];
                            context.font = token.isBold ? boldFont : normalFont;
                            var tokenWidth = context.measureText(token.text).width;

                            if (currentLineWidth + tokenWidth > maxWidth && currentLine.length > 0) {
                                lines.push({ tokens: currentLine, width: currentLineWidth });
                                currentLine = [token];
                                currentLineWidth = tokenWidth;
                            } else {
                                currentLine.push(token);
                                currentLineWidth += tokenWidth;
                            }
                        }
                        if (currentLine.length > 0) {
                            lines.push({ tokens: currentLine, width: currentLineWidth });
                        }

                        var currentY = y;
                        for (var m = 0; m < lines.length; m++) {
                            var lineObj = lines[m];
                            var startX = x - (lineObj.width / 2);

                            for (var n = 0; n < lineObj.tokens.length; n++) {
                                var tok = lineObj.tokens[n];
                                context.font = tok.isBold ? boldFont : normalFont;
                                context.textAlign = 'left';
                                context.fillText(tok.text, startX, currentY);
                                startX += context.measureText(tok.text).width;
                            }
                            currentY += lineHeight;
                        }
                        return currentY - lineHeight;
                    }

                    var defaultDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';
                    var certDesc = cert.description || defaultDesc;
                    
                    ctx.fillStyle = '#475569';
                    var descY = layout.descY * scale;
                    var finalDescY = wrapRichText(ctx, certDesc, layout.descX * scale, descY, 560 * scale, 18 * scale);

                    ctx.fillStyle = '#334155';
                    ctx.textAlign = 'center';
                    ctx.font = 'bold ' + (12 * scale) + 'px "Inter", sans-serif';
                    var targetDateY = layout.dateY ? (layout.dateY * scale) : (finalDescY + 28 * scale);
                    ctx.fillText(cert.issueDate, layout.dateX * scale, targetDateY);

                    ctx.fillStyle = '#94A3B8';
                    ctx.font = (10 * scale) + 'px monospace';
                    ctx.textAlign = 'left';
                    ctx.fillText('ID: ' + (cert.certificateNumber || 'HY-N/A'), layout.numX * scale, layout.numY * scale);
                };
                img.src = '../assets/img/Certificate-Template.webp?v=' + Date.now();
            };



            window.openAddCertificateModal = function () {
                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                var defaultCertDesc = 'In recognition of your active participation in the **Hey Youth: Future Ready Summit themed "What Makes You Irreplaceable in the AI Era."** Your participation has contributed to the success of this event, and we hope the knowledge and insights gained will inspire your continued growth and impact.';

                modalTitle.textContent = 'Terbitkan Sertifikat Baru';
                modalBody.innerHTML = '<form id="form-add-certificate" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Acara / Webinar</label><input type="text" id="c-event" required placeholder="Webinar Pendidikan Kreatif" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nomor Sertifikat</label><input type="text" id="c-number" required placeholder="HY-EVENT-1" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-gray-50" readonly></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Penerima</label><input type="text" id="c-name" required placeholder="John Doe" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Email Penerima</label><input type="email" id="c-email" required placeholder="johndoe@email.com" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nomor HP / WhatsApp Penerima</label><input type="text" id="c-phone" placeholder="08123456789" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Teks Deskripsi Sertifikat</label><textarea id="c-description" rows="6" required style="resize: vertical !important;" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm">' + defaultCertDesc + '</textarea><p class="text-[11px] text-gray-500 mt-1">💡 Gunakan tanda <strong>**</strong> di awal dan akhir kata/kalimat untuk mencetak tebal teks. Contoh: <code>**Hey Youth Summit**</code></p></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Tanggal Rilis</label><input type="text" id="c-date" required placeholder="17 Juli 2026" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Terbitkan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');

                const cEvent = document.getElementById('c-event');
                const cNumber = document.getElementById('c-number');
                cEvent.addEventListener('input', function(e) {
                    var val = e.target.value.trim();
                    if (!val) { cNumber.value = ''; return; }
                    var abb = generateAbbreviation(val);
                    var listKey = 'mock_fb_list_certificates';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    var count = list.filter(function(c) { return c.data && c.data.eventName.toLowerCase() === val.toLowerCase(); }).length;
                    cNumber.value = 'HY-' + abb + '-' + String(count + 1).padStart(4, '0');
                });

                document.getElementById('form-add-certificate').addEventListener('submit', async function (e) {
                    e.preventDefault();
                    var num = document.getElementById('c-number').value.trim();
                    var name = document.getElementById('c-name').value.trim();
                    var email = document.getElementById('c-email').value.trim();
                    var phone = document.getElementById('c-phone').value.trim();
                    var event = document.getElementById('c-event').value.trim();
                    var desc = document.getElementById('c-description').value.trim();
                    var date = document.getElementById('c-date').value.trim();

                    try {
                        var listKey = 'mock_fb_list_certificates';
                        var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                        var newId = 'cert_' + Date.now();
                        list.push({
                            id: newId,
                            data: {
                                certificateNumber: num,
                                name: name,
                                email: email,
                                phone: phone,
                                eventName: event,
                                description: desc,
                                issueDate: date
                            }
                        });
                        localStorage.setItem(listKey, JSON.stringify(list));
                        showToast('Sertifikat berhasil diterbitkan.', 'success');
                        closeModal();
                        loadAndRenderCertificates();
                    } catch (err) {
                        console.error(err);
                        showToast('Gagal menerbitkan sertifikat.', 'error');
                    }
                });
            };

            window.loadAndRenderMentorship = async function () {
                var requestsTbody = document.getElementById('list-mentoring-requests');
                if (!requestsTbody) return;
                requestsTbody.innerHTML = '<tr><td colspan="7" class="text-center py-8 text-gray-400"><i class="fas fa-circle-notch fa-spin mr-2"></i>Memuat...</td></tr>';
                try {
                    var listKey = 'mock_fb_list_mentoring_requests';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    document.getElementById('mentoring-count').textContent = list.length + ' total';
                    if (list.length === 0) {
                        requestsTbody.innerHTML = '<tr><td colspan="7" class="text-center py-8 text-gray-400">Belum ada pengajuan mentoring.</td></tr>';
                        return;
                    }
                    requestsTbody.innerHTML = list.map(function (itemObj) {
                        var item = itemObj.data;
                        var id = itemObj.id;
                        var dateStr = item.submittedAt ? new Date(item.submittedAt).toLocaleString('id-ID') : '-';
                        var statusBadge = '';
                        if (item.status === 'pending') {
                            statusBadge = '<span class="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Pending</span>';
                        } else if (item.status === 'approved') {
                            statusBadge = '<span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Approved</span>';
                        } else if (item.status === 'rejected') {
                            statusBadge = '<span class="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Rejected</span>';
                        }

                        return '<tr class="border-b border-gray-150 hover:bg-gray-50 transition-colors">' +
                            '<td class="px-4 py-3 font-semibold text-heading">' + escapeHtml(item.menteeName) + '</td>' +
                            '<td class="px-4 py-3 text-xs">' + escapeHtml(item.menteeEmail) + '</td>' +
                            '<td class="px-4 py-3 font-bold text-xs text-primary">' + escapeHtml(item.mentorName) + '</td>' +
                            '<td class="px-4 py-3 text-xs text-gray-500 max-w-xs truncate" title="' + escapeAttr(item.message) + '">' + escapeHtml(item.message) + '</td>' +
                            '<td class="px-4 py-3 text-xs text-gray-500">' + dateStr + '</td>' +
                            '<td class="px-4 py-3">' + statusBadge + '</td>' +
                            '<td class="px-4 py-3 text-right space-y-1 sm:space-y-0 sm:space-x-1 whitespace-nowrap">' +
                            '<button onclick="updateMentorshipStatus(\'' + id + '\', \'approved\')" class="bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold px-2 py-1 rounded">Approve</button>' +
                            '<button onclick="updateMentorshipStatus(\'' + id + '\', \'rejected\')" class="bg-red-500 hover:bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">Reject</button>' +
                            '<button onclick="deleteMentorshipRequest(\'' + id + '\')" class="text-red-500 hover:text-red-700 p-1 text-xs"><i class="fas fa-trash-alt"></i></button>' +
                            '</td>' +
                            '</tr>';
                    }).reverse().join('');
                } catch (err) {
                    console.error("loadAndRenderMentorship requests error:", err);
                    requestsTbody.innerHTML = '<tr><td colspan="7" class="text-center py-8 text-red-500">Gagal memuat pengajuan.</td></tr>';
                }
            };

            window.updateMentorshipStatus = async function (id, newStatus) {
                try {
                    var listKey = 'mock_fb_list_mentoring_requests';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    var idx = list.findIndex(function (x) { return x.id === id; });
                    if (idx !== -1) {
                        list[idx].data.status = newStatus;
                        localStorage.setItem(listKey, JSON.stringify(list));
                        showToast('Status bimbingan berhasil diperbarui.', 'success');
                        loadAndRenderMentorship();
                    }
                } catch (err) {
                    console.error(err);
                    showToast('Gagal memperbarui status.', 'error');
                }
            };

            window.deleteMentorshipRequest = async function (id) {
                if (!confirm('Hapus permintaan mentoring ini?')) return;
                try {
                    var listKey = 'mock_fb_list_mentoring_requests';
                    var list = localStorage.getItem(listKey) ? JSON.parse(localStorage.getItem(listKey)) : [];
                    var found = list.find(function(item) { return item.id === id; });
                    list = list.filter(function (item) { return item.id !== id; });
                    localStorage.setItem(listKey, JSON.stringify(list));
                    // ===== ACTIVITY LOG =====
                    var detail = 'Menghapus permintaan mentoring' + (found && found.data ? ': "' + (found.data.menteeName || '') + '"' : '');
                    addActivityLog('HAPUS', 'Permintaan Mentoring', detail);
                    // ========================
                    showToast('Permintaan berhasil dihapus.', 'success');
                    loadAndRenderMentorship();
                } catch (err) {
                    console.error(err);
                    showToast('Gagal menghapus permintaan.', 'error');
                }
            };

            window.deleteMentor = function (id) {
                if (!confirm('Hapus mentor ini?')) return;
                var data = getData();
                var found = (data.mentors || []).find(function(m) { return m.id === id; });
                data.mentors = (data.mentors || []).filter(function (m) { return m.id !== id; });
                if (saveData(data)) {
                    // ===== ACTIVITY LOG =====
                    var detail = 'Menghapus mentor' + (found ? ': "' + found.name + '"' : '');
                    addActivityLog('HAPUS', 'Mentor', detail);
                    // ========================
                    showToast('Mentor berhasil dihapus.', 'success');
                    renderAllLists();
                }
            };

            window.openAddMentorModal = function () {
                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'Tambah Mentor Baru';
                modalBody.innerHTML = '<form id="form-add-mentor" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Mentor</label><input type="text" id="m-name" required placeholder="Alvin Wibowo" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Peran / Pekerjaan</label><input type="text" id="m-role" required placeholder="Software Engineer at Google" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Keahlian (Separated by comma)</label><input type="text" id="m-expertise" required placeholder="Web Development, System Design" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Total Jam Mengajar</label><input type="number" id="m-hours" placeholder="0" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm" min="0"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Ulasan Orang Tua</label><input type="number" id="m-reviews" placeholder="0" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm" min="0"></div>' +
                    '</div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Foto (URL / Base64)</label><input type="text" id="m-image" placeholder="https://images.unsplash.com/..." class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Status</label><select id="m-status" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"><option value="active">Active</option><option value="inactive">Inactive</option></select></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-add-mentor').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var data = getData();
                    if (!data.mentors) data.mentors = [];

                    var newId = data.mentors.length > 0 ? Math.max.apply(null, data.mentors.map(function (item) { return item.id; })) + 1 : 501;
                    var nameVal = document.getElementById('m-name').value.trim();
                    var newMentor = {
                        id: newId,
                        name: nameVal,
                        role: document.getElementById('m-role').value.trim(),
                        expertise: document.getElementById('m-expertise').value.trim(),
                        hours: parseInt(document.getElementById('m-hours').value) || 0,
                        reviews: parseInt(document.getElementById('m-reviews').value) || 0,
                        image: document.getElementById('m-image').value.trim(),
                        status: document.getElementById('m-status').value
                    };

                    data.mentors.push(newMentor);
                    if (saveData(data)) {
                        // ===== ACTIVITY LOG =====
                        addActivityLog('TAMBAH', 'Mentor', 'Menambahkan mentor baru: "' + nameVal + '"');
                        // ========================
                        showToast('Mentor baru berhasil ditambahkan.', 'success');
                        closeModal();
                        renderAllLists();
                    }
                });
            };

            window.openEditMentorModal = function (id) {
                var data = getData();
                var mentor = (data.mentors || []).find(function (m) { return m.id === id; });
                if (!mentor) return;

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'Edit Mentor';
                modalBody.innerHTML = '<form id="form-edit-mentor" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Mentor</label><input type="text" id="m-name" required value="' + escapeAttr(mentor.name) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Peran / Pekerjaan</label><input type="text" id="m-role" required value="' + escapeAttr(mentor.role) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Keahlian (Separated by comma)</label><input type="text" id="m-expertise" required value="' + escapeAttr(mentor.expertise) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Total Jam Mengajar</label><input type="number" id="m-hours" value="' + (mentor.hours || 0) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm" min="0"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Ulasan Orang Tua</label><input type="number" id="m-reviews" value="' + (mentor.reviews || 0) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm" min="0"></div>' +
                    '</div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Foto (URL / Base64)</label><input type="text" id="m-image" value="' + escapeAttr(mentor.image || '') + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Status</label><select id="m-status" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"><option value="active"' + (mentor.status === 'active' ? ' selected' : '') + '>Active</option><option value="inactive"' + (mentor.status === 'inactive' ? ' selected' : '') + '>Inactive</option></select></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan Perubahan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-edit-mentor').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var data = getData();
                    var idx = data.mentors.findIndex(function (m) { return m.id === id; });
                    if (idx === -1) return;

                    var nameVal = document.getElementById('m-name').value.trim();
                    data.mentors[idx] = {
                        id: id,
                        name: nameVal,
                        role: document.getElementById('m-role').value.trim(),
                        expertise: document.getElementById('m-expertise').value.trim(),
                        hours: parseInt(document.getElementById('m-hours').value) || 0,
                        reviews: parseInt(document.getElementById('m-reviews').value) || 0,
                        image: document.getElementById('m-image').value.trim(),
                        status: document.getElementById('m-status').value
                    };

                    if (saveData(data)) {
                        // ===== ACTIVITY LOG =====
                        addActivityLog('EDIT', 'Mentor', 'Mengedit mentor: "' + nameVal + '"');
                        // ========================
                        showToast('Data mentor berhasil diperbarui.', 'success');
                        closeModal();
                        renderAllLists();
                    }
                });
            };

            function getEventDateTime(dateStr, timeStr) {
                if (!dateStr) return new Date(0);
                var str = (dateStr + ' ' + (timeStr || '')).toLowerCase();
                str = str.replace(/(wib|wita|wit|utc|gmt\+7|gmt\+8|gmt\+9)/gi, '').trim();

                var monthsId = ['januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember'];
                var monthsEn = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
                var monthsAbbrId = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des'];
                var monthsAbbrEn = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

                for (var i = 0; i < 12; i++) {
                    str = str.replace(new RegExp(monthsId[i], 'g'), monthsEn[i]);
                    str = str.replace(new RegExp(monthsAbbrId[i], 'g'), monthsAbbrEn[i]);
                }

                var parsedMs = Date.parse(str);
                if (!isNaN(parsedMs)) {
                    return new Date(parsedMs);
                }

                var match = str.match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})(?:\s+(\d{1,2})[:.](\d{2}))?/);
                if (match) {
                    var day = parseInt(match[1]);
                    var monthName = match[2];
                    var year = parseInt(match[3]);
                    var hours = match[4] ? parseInt(match[4]) : 0;
                    var minutes = match[5] ? parseInt(match[5]) : 0;

                    var monthIndex = monthsEn.indexOf(monthName);
                    if (monthIndex === -1) {
                        monthIndex = monthsAbbrEn.indexOf(monthName);
                    }
                    if (monthIndex !== -1) {
                        return new Date(year, monthIndex, day, hours, minutes);
                    }
                }
                
                var isoMatch = str.match(/(\d{4})-(\d{2})-(\d{2})/);
                if (isoMatch) {
                    var y = parseInt(isoMatch[1]);
                    var m = parseInt(isoMatch[2]) - 1;
                    var d = parseInt(isoMatch[3]);
                    var tMatch = str.match(/(\d{1,2})[:.](\d{2})/);
                    var h = tMatch ? parseInt(tMatch[1]) : 0;
                    var min = tMatch ? parseInt(tMatch[2]) : 0;
                    return new Date(y, m, d, h, min);
                }

                return new Date(str);
            }

            function getEventStatus(dateStr, timeStr) {
                var eventDate = getEventDateTime(dateStr, timeStr);
                var now = new Date();
                return eventDate < now ? 'completed' : 'upcoming';
            }

            window.loadAndRenderEvents = function () {
                var eventsTbody = document.getElementById('list-events');
                if (!eventsTbody) return;
                var data = getData();
                var events = data.events || [];

                if (events.length === 0) {
                    eventsTbody.innerHTML = '<tr><td colspan="6" class="text-center py-8 text-gray-400">Belum ada event.</td></tr>';
                } else {
                    eventsTbody.innerHTML = events.map(function (item) {
                        var computedStatus = getEventStatus(item.date, item.time);
                        var statusBadge = computedStatus === 'upcoming'
                            ? '<span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Upcoming</span>'
                            : '<span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Selesai</span>';

                        var imgSrc = item.image ? window._resolveImgPath(item.image) : '';
                        var imgHtml = imgSrc ? '<img src="' + escapeAttr(imgSrc) + '" class="w-12 h-12 object-cover border rounded-lg">' : '<div class="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-bold"><i class="fas fa-calendar-alt"></i></div>';

                        return '<tr class="border-b border-gray-150 hover:bg-gray-55 transition-colors">' +
                            '<td class="px-4 py-2.5">' + imgHtml + '</td>' +
                            '<td class="px-4 py-2.5 font-bold text-xs text-heading">' +
                            '<div class="font-semibold">' + escapeHtml(item.title_id) + '</div>' +
                            '<div class="text-[10px] text-gray-400 font-normal">' + escapeHtml(item.title_en) + '</div>' +
                            '</td>' +
                            '<td class="px-4 py-2.5 text-xs">' + escapeHtml(item.date) + ' - ' + escapeHtml(item.time) + '</td>' +
                            '<td class="px-4 py-2.5 text-xs text-gray-500 max-w-xs truncate">' + escapeHtml(item.location) + '</td>' +
                            '<td class="px-4 py-2.5">' + statusBadge + '</td>' +
                            '<td class="px-4 py-2.5 text-right space-x-2">' +
                            '<button onclick="openEditEventModal(' + item.id + ')" class="text-primary hover:text-primaryDark text-xs font-semibold"><i class="fas fa-edit"></i> Edit</button>' +
                            '<button onclick="deleteEvent(' + item.id + ')" class="text-red-500 hover:text-red-700 text-xs font-semibold"><i class="fas fa-trash-alt"></i> Hapus</button>' +
                            '</td>' +
                            '</tr>';
                    }).join('');
                }
            };

            window.deleteEvent = function (id) {
                if (!confirm('Hapus event ini?')) return;
                var data = getData();
                data.events = (data.events || []).filter(function (e) { return e.id !== id; });
                if (saveData(data)) {
                    showToast('Event berhasil dihapus.', 'success');
                    loadAndRenderEvents();
                }
            };

            window.openAddEventModal = function () {
                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'Tambah Event Baru';
                modalBody.innerHTML = '<form id="form-add-event" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Event (ID)</label><input type="text" id="e-title-id" required placeholder="Webinar Persiapan Karir" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Event (EN)</label><input type="text" id="e-title-en" required placeholder="Career Prep Webinar" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Tanggal Event</label><input type="text" id="e-date" required placeholder="25 Juli 2026" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Waktu Event</label><input type="text" id="e-time" required placeholder="15:00 WIB" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '</div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Lokasi / Platform</label><input type="text" id="e-location" required placeholder="Zoom Meeting" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Deskripsi (ID)</label><textarea id="e-desc-id" rows="3" placeholder="Deskripsi dalam Bahasa Indonesia..." class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></textarea></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Deskripsi (EN)</label><textarea id="e-desc-en" rows="3" placeholder="Description in English..." class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></textarea></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Poster Gambar URL / Base64</label><input type="text" id="e-img" placeholder="https://images.unsplash.com/..." class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Link Registrasi / Zoom</label><input type="text" id="e-link" placeholder="https://zoom.us/..." class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-add-event').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var data = getData();
                    if (!data.events) data.events = [];

                    var newId = data.events.length > 0 ? Math.max.apply(null, data.events.map(function (item) { return item.id; })) + 1 : 601;
                    var dateVal = document.getElementById('e-date').value.trim();
                    var timeVal = document.getElementById('e-time').value.trim();

                    var newEvent = {
                        id: newId,
                        title_id: document.getElementById('e-title-id').value.trim(),
                        title_en: document.getElementById('e-title-en').value.trim(),
                        date: dateVal,
                        time: timeVal,
                        location: document.getElementById('e-location').value.trim(),
                        description_id: document.getElementById('e-desc-id').value.trim(),
                        description_en: document.getElementById('e-desc-en').value.trim(),
                        image: document.getElementById('e-img').value.trim(),
                        link: document.getElementById('e-link').value.trim(),
                        status: getEventStatus(dateVal, timeVal)
                    };

                    data.events.push(newEvent);
                    if (saveData(data)) {
                        showToast('Event baru berhasil ditambahkan.', 'success');
                        closeModal();
                        loadAndRenderEvents();
                    }
                });
            };

            window.openEditEventModal = function (id) {
                var data = getData();
                var eventItem = (data.events || []).find(function (item) { return item.id === id; });
                if (!eventItem) return;

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'Edit Event';
                modalBody.innerHTML = '<form id="form-edit-event" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Event (ID)</label><input type="text" id="e-title-id" required value="' + escapeAttr(eventItem.title_id) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Event (EN)</label><input type="text" id="e-title-en" required value="' + escapeAttr(eventItem.title_en) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Tanggal Event</label><input type="text" id="e-date" required value="' + escapeAttr(eventItem.date) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Waktu Event</label><input type="text" id="e-time" required value="' + escapeAttr(eventItem.time) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '</div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Lokasi / Platform</label><input type="text" id="e-location" required value="' + escapeAttr(eventItem.location) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Deskripsi (ID)</label><textarea id="e-desc-id" rows="3" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm">' + escapeHtml(eventItem.description_id || '') + '</textarea></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Deskripsi (EN)</label><textarea id="e-desc-en" rows="3" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm">' + escapeHtml(eventItem.description_en || '') + '</textarea></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Poster Gambar URL / Base64</label><input type="text" id="e-img" value="' + escapeAttr(eventItem.image || '') + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700">Link Registrasi / Zoom</label><input type="text" id="e-link" value="' + escapeAttr(eventItem.link || '') + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan Perubahan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-edit-event').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var data = getData();
                    var idx = data.events.findIndex(function (item) { return item.id === id; });
                    if (idx === -1) return;

                    var dateVal = document.getElementById('e-date').value.trim();
                    var timeVal = document.getElementById('e-time').value.trim();

                    data.events[idx] = {
                        id: id,
                        title_id: document.getElementById('e-title-id').value.trim(),
                        title_en: document.getElementById('e-title-en').value.trim(),
                        date: dateVal,
                        time: timeVal,
                        location: document.getElementById('e-location').value.trim(),
                        description_id: document.getElementById('e-desc-id').value.trim(),
                        description_en: document.getElementById('e-desc-en').value.trim(),
                        image: document.getElementById('e-img').value.trim(),
                        link: document.getElementById('e-link').value.trim(),
                        status: getEventStatus(dateVal, timeVal)
                    };

                    if (saveData(data)) {
                        showToast('Data event berhasil diperbarui.', 'success');
                        closeModal();
                        loadAndRenderEvents();
                    }
                });
            };

            // ===== TEACHER CLASS (CATEGORIES, CARDS, REGISTRATIONS) CRUD =====

            window.loadAndRenderMentoringCategories = function () {
                var rawCats = localStorage.getItem('sd_categories');
                var categories;
                if (!rawCats) {
                    categories = [
                        { id: 'matematika', name: 'Matematika' },
                        { id: 'english', name: 'Bahasa Inggris' },
                        { id: 'sains', name: 'IPA & Sains' }
                    ];
                    localStorage.setItem('sd_categories', JSON.stringify(categories));
                } else {
                    categories = JSON.parse(rawCats) || [];
                }

                var countBadge = document.getElementById('count-mentoring-categories');
                var countBadgeSidebar = document.getElementById('count-mentoring-cat');
                if (countBadge) countBadge.textContent = categories.length;
                if (countBadgeSidebar) countBadgeSidebar.textContent = categories.length;

                var tbody = document.getElementById('list-mentoring-categories');
                if (!tbody) return;

                if (categories.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="4" class="text-center py-6 text-gray-400">Belum ada kategori mentoring.</td></tr>';
                    return;
                }

                var html = '';
                categories.forEach(function (cat, index) {
                    html += '<tr class="hover:bg-gray-50 border-b border-gray-100">' +
                        '<td class="px-4 py-3 font-semibold text-gray-500">' + (index + 1) + '</td>' +
                        '<td class="px-4 py-3"><span class="bg-gray-100 dark:bg-slate-800 px-2.5 py-1 rounded text-xs font-mono font-bold text-heading">' + cat.id + '</span></td>' +
                        '<td class="px-4 py-3 font-bold text-heading">' + escapeHtml(cat.name) + '</td>' +
                        '<td class="px-4 py-3 text-right" style="text-align: right;">' +
                        '<div class="flex items-center justify-end gap-2" style="justify-content: flex-end;">' +
                        '<button onclick="openEditMentoringCategoryModal(' + index + ')" class="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-primary rounded text-xs font-semibold transition-colors"><i class="fas fa-edit mr-1"></i> Edit</button>' +
                        '<button onclick="deleteMentoringCategory(' + index + ')" class="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded text-xs font-semibold transition-colors"><i class="fas fa-trash mr-1"></i> Hapus</button>' +
                        '</div>' +
                        '</td>' +
                        '</tr>';
                });
                tbody.innerHTML = html;
            };

            window.openAddMentoringCategoryModal = function () {
                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'Tambah Kategori Pelajaran SD';
                modalBody.innerHTML = '<form id="form-add-mentoring-cat" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Kategori Pelajaran SD</label><input type="text" id="cat-name-input" required placeholder="Contoh: Seni & Budaya" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Tambah Kategori</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-add-mentoring-cat').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var name = document.getElementById('cat-name-input').value.trim();
                    if (!name) return;

                    var categories = JSON.parse(localStorage.getItem('sd_categories')) || [];
                    var id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                    categories.push({ id: id, name: name });

                    localStorage.setItem('sd_categories', JSON.stringify(categories));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('TAMBAH', 'Kategori Pelajaran SD', 'Menambahkan kategori: "' + name + '"');
                    // ========================
                    showToast('Kategori baru berhasil ditambahkan.', 'success');
                    closeModal();
                    loadAndRenderMentoringCategories();
                    loadAndRenderTeacherClasses();
                });
            };

            window.openEditMentoringCategoryModal = function (index) {
                var categories = JSON.parse(localStorage.getItem('sd_categories')) || [];
                var cat = categories[index];
                if (!cat) return;

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                modalTitle.textContent = 'Edit Kategori Pelajaran SD';
                modalBody.innerHTML = '<form id="form-edit-mentoring-cat" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700">Nama Kategori</label><input type="text" id="cat-name-input" required value="' + escapeAttr(cat.name) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm"></div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan Perubahan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                document.getElementById('form-edit-mentoring-cat').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var newName = document.getElementById('cat-name-input').value.trim();
                    if (!newName) return;

                    categories[index].name = newName;
                    localStorage.setItem('sd_categories', JSON.stringify(categories));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('EDIT', 'Kategori Pelajaran SD', 'Mengedit kategori: "' + newName + '"');
                    // ========================
                    showToast('Kategori berhasil diperbarui.', 'success');
                    closeModal();
                    loadAndRenderMentoringCategories();
                    loadAndRenderTeacherClasses();
                });
            };

            window.deleteMentoringCategory = function (index) {
                var categories = JSON.parse(localStorage.getItem('sd_categories')) || [];
                var cat = categories[index];
                if (!cat) return;

                if (confirm('Apakah Anda yakin ingin menghapus kategori "' + cat.name + '"?')) {
                    categories.splice(index, 1);
                    localStorage.setItem('sd_categories', JSON.stringify(categories));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('HAPUS', 'Kategori Pelajaran SD', 'Menghapus kategori: "' + cat.name + '"');
                    // ========================
                    showToast('Kategori berhasil dihapus.', 'success');
                    loadAndRenderMentoringCategories();
                    loadAndRenderTeacherClasses();
                }
            };

            window.loadAndRenderTeacherClasses = function () {
                var classesKey = 'teacher_classes';
                if (localStorage.getItem(classesKey) === null) {
                    var classes = [
                        {
                            id: 1,
                            title: 'Trik Cepat Berhitung Penjumlahan, Perkalian & Pecahan',
                            category: 'matematika',
                            grade: 'Kelas 4 - 6 SD',
                            slot: 8,
                            desc: 'Belajar matematika tanpa rasa takut! Metode perkalian cepat, pecahan sederhana, dan logika soal cerita yang menyenangkan.',
                            date: 'Sabtu, 28 Juli 2026',
                            time: '10:00 - 11:30 WIB',
                            platform: 'Google Meet',
                            mentor: 'Kak Annisa, S.Pd.',
                            mentorTitle: 'Pengajar Matematika SD',
                            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80'
                        },
                        {
                            id: 2,
                            title: 'Fun English: Kosakata Hewan, Warna & Percakapan Sehari-hari',
                            category: 'english',
                            grade: 'Kelas 1 - 3 SD',
                            slot: 5,
                            desc: 'Belajar Bahasa Inggris lewat lagu, gambar ceria, dan latihan pengucapan sederhana.',
                            date: 'Minggu, 29 Juli 2026',
                            time: '09:00 - 10:15 WIB',
                            platform: 'Zoom Meeting',
                            mentor: 'Kak Sarah',
                            mentorTitle: 'Tutor English for Kids',
                            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
                        }
                    ];
                    localStorage.setItem(classesKey, JSON.stringify(classes));
                }
                var classes = JSON.parse(localStorage.getItem(classesKey) || '[]');

                var countBadge = document.getElementById('count-teacher-classes');
                if (countBadge) countBadge.textContent = classes.length;

                var tbody = document.getElementById('list-teacher-classes');
                if (!tbody) return;

                if (classes.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="6" class="text-center py-6 text-gray-400">Belum ada kelas Teacher Class.</td></tr>';
                    return;
                }

                var rawCats = localStorage.getItem('sd_categories');
                var categories;
                if (!rawCats) {
                    categories = [
                        { id: 'matematika', name: 'Matematika' },
                        { id: 'english', name: 'Bahasa Inggris' },
                        { id: 'sains', name: 'IPA & Sains' }
                    ];
                    localStorage.setItem('sd_categories', JSON.stringify(categories));
                } else {
                    categories = JSON.parse(rawCats) || [];
                }

                var catMap = {};
                categories.forEach(function(c){ 
                    catMap[c.id] = c.name; 
                    catMap[c.name.toLowerCase()] = c.name;
                });

                var html = '';
                classes.forEach(function (item, index) {
                    var rawCat = (item.category || '').toString().toLowerCase().trim();
                    var catName = catMap[rawCat] || catMap[item.category] || item.category || 'Umum';
                    html += '<tr class="hover:bg-gray-50 border-b border-gray-100">' +
                        '<td class="px-4 py-3 font-bold text-heading">' + escapeHtml(item.title) + '</td>' +
                        '<td class="px-4 py-3"><span class="bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2.5 py-1 rounded text-xs font-bold uppercase">' + escapeHtml(catName) + '</span></td>' +
                        '<td class="px-4 py-3 text-xs font-semibold text-gray-600">' + escapeHtml(item.grade) + '</td>' +
                        '<td class="px-4 py-3 text-xs text-gray-600">' + escapeHtml(item.date + ' | ' + item.time) + '<br><span class="text-green-600 font-semibold">' + escapeHtml(item.platform) + '</span></td>' +
                        '<td class="px-4 py-3 text-xs font-bold text-heading">' + escapeHtml(item.mentor) + '</td>' +
                        '<td class="px-4 py-3 text-right" style="text-align: right;">' +
                        '<div class="flex items-center justify-end gap-2" style="justify-content: flex-end;">' +
                        '<button onclick="openEditTeacherClassModal(' + index + ')" class="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-primary rounded text-xs font-semibold transition-colors"><i class="fas fa-edit mr-1"></i> Edit</button>' +
                        '<button onclick="deleteTeacherClass(' + index + ')" class="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 rounded text-xs font-semibold transition-colors"><i class="fas fa-trash mr-1"></i> Hapus</button>' +
                        '</div>' +
                        '</td>' +
                        '</tr>';
                });
                tbody.innerHTML = html;
            };

            window.openAddTeacherClassModal = function () {
                var categories = JSON.parse(localStorage.getItem('sd_categories'));
                if (!categories || categories.length === 0) {
                    categories = [
                        { id: 'matematika', name: 'Matematika' },
                        { id: 'english', name: 'Bahasa Inggris' },
                        { id: 'sains', name: 'IPA & Sains' }
                    ];
                }

                var catOptions = categories.map(function(c){ 
                    return '<option value="' + c.id + '" class="bg-white text-gray-900 dark:bg-slate-800 dark:text-white">' + escapeHtml(c.name) + '</option>'; 
                }).join('');

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                uploadedImage = null;

                modalTitle.textContent = 'Tambah Kelas Baru (Teacher Class SD)';
                modalBody.innerHTML = '<form id="form-add-teacher-class" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Judul Sesi Kelas *</label><input type="text" id="tc-title" required placeholder="Contoh: Belajar Trik Berhitung Cepat" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Kategori *</label><select id="tc-category" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white">' + catOptions + '</select></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Tingkat Kelas SD *</label><input type="text" id="tc-grade" required placeholder="Contoh: Kelas 4 - 6 SD" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '</div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Deskripsi Ringkas Materi *</label><textarea id="tc-desc" rows="2" required class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></textarea></div>' +
                    '<div class="grid grid-cols-3 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Tanggal *</label><input type="text" id="tc-date" required placeholder="Sabtu, 28 Juli 2026" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Waktu *</label><input type="text" id="tc-time" required placeholder="10:00 - 11:30 WIB" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Platform *</label><input type="text" id="tc-platform" required placeholder="Google Meet" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '</div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Nama Pengajar/Mentor *</label><input type="text" id="tc-mentor" required placeholder="Kak Annisa, S.Pd." class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Profesi/Gelar *</label><input type="text" id="tc-mentor-title" required placeholder="Pengajar Matematika SD" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '</div>' +
                    '<div>' +
                    '<label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Foto Pengajar / Mentor *</label>' +
                    '<div id="upload-zone" onclick="triggerUpload(\'main\')" class="upload-zone p-4 rounded-xl text-center border-2 border-dashed border-gray-300 hover:border-primary transition-colors cursor-pointer bg-gray-50 dark:bg-slate-900">' +
                    '<i class="fas fa-cloud-upload-alt text-2xl text-gray-400 mb-1 block"></i>' +
                    '<span class="text-xs text-gray-500 font-semibold block">Klik untuk Upload Foto Pengajar</span>' +
                    '<span class="text-[10px] text-gray-400 block">PNG, JPG, WEBP (Maks 2MB)</span>' +
                    '</div>' +
                    '<input type="hidden" id="tc-avatar" value="">' +
                    '</div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan & Terbit Sesi</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                initDragDrop('main');

                document.getElementById('form-add-teacher-class').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var classes = JSON.parse(localStorage.getItem('teacher_classes')) || [];
                    var avatarVal = uploadedImage || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80';
                    var titleVal = document.getElementById('tc-title').value.trim();

                    var newClass = {
                        id: Date.now(),
                        title: titleVal,
                        category: document.getElementById('tc-category').value,
                        grade: document.getElementById('tc-grade').value.trim(),
                        desc: document.getElementById('tc-desc').value.trim(),
                        date: document.getElementById('tc-date').value.trim(),
                        time: document.getElementById('tc-time').value.trim(),
                        platform: document.getElementById('tc-platform').value.trim(),
                        mentor: document.getElementById('tc-mentor').value.trim(),
                        mentorTitle: document.getElementById('tc-mentor-title').value.trim(),
                        avatar: avatarVal,
                        slot: 10
                    };

                    classes.push(newClass);
                    localStorage.setItem('teacher_classes', JSON.stringify(classes));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('TAMBAH', 'Sesi Kelas', 'Menambahkan sesi kelas: "' + titleVal + '"');
                    // ========================
                    showToast('Kelas Teacher Class baru berhasil ditambahkan.', 'success');
                    closeModal();
                    loadAndRenderTeacherClasses();
                });
            };

            window.openEditTeacherClassModal = function (index) {
                var classes = JSON.parse(localStorage.getItem('teacher_classes')) || [];
                var item = classes[index];
                if (!item) return;

                var categories = JSON.parse(localStorage.getItem('sd_categories'));
                if (!categories || categories.length === 0) {
                    categories = [
                        { id: 'matematika', name: 'Matematika' },
                        { id: 'english', name: 'Bahasa Inggris' },
                        { id: 'sains', name: 'IPA & Sains' }
                    ];
                }

                var catOptions = categories.map(function(c){ 
                    return '<option value="' + c.id + '"' + (item.category === c.id ? ' selected' : '') + ' class="bg-white text-gray-900 dark:bg-slate-800 dark:text-white">' + escapeHtml(c.name) + '</option>'; 
                }).join('');

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                uploadedImage = (item.avatar && item.avatar.startsWith('data:')) ? item.avatar : null;

                var existingSrc = item.avatar ? _resolveImgPath(item.avatar) : '';

                modalTitle.textContent = 'Edit Sesi Teacher Class';
                modalBody.innerHTML = '<form id="form-edit-teacher-class" class="space-y-4">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Judul Sesi Kelas *</label><input type="text" id="tc-title" required value="' + escapeAttr(item.title) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Kategori *</label><select id="tc-category" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white">' + catOptions + '</select></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Tingkat Kelas SD *</label><input type="text" id="tc-grade" required value="' + escapeAttr(item.grade) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '</div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Deskripsi Ringkas Materi *</label><textarea id="tc-desc" rows="2" required class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white">' + escapeHtml(item.desc) + '</textarea></div>' +
                    '<div class="grid grid-cols-3 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Tanggal *</label><input type="text" id="tc-date" required value="' + escapeAttr(item.date) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Waktu *</label><input type="text" id="tc-time" required value="' + escapeAttr(item.time) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Platform *</label><input type="text" id="tc-platform" required value="' + escapeAttr(item.platform) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '</div>' +
                    '<div class="grid grid-cols-2 gap-3">' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Nama Pengajar *</label><input type="text" id="tc-mentor" required value="' + escapeAttr(item.mentor) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '<div><label class="block text-sm font-medium text-gray-700 dark:text-gray-200">Profesi/Gelar *</label><input type="text" id="tc-mentor-title" required value="' + escapeAttr(item.mentorTitle) + '" class="w-full mt-1 px-3 py-2 border rounded-lg text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white"></div>' +
                    '</div>' +
                    '<div>' +
                    '<label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Foto Pengajar / Mentor</label>' +
                    '<div id="upload-zone" onclick="triggerUpload(\'main\')" class="upload-zone p-4 rounded-xl text-center border-2 border-dashed border-gray-300 hover:border-primary transition-colors cursor-pointer bg-gray-50 dark:bg-slate-900">' +
                    (existingSrc ? '<div class="relative"><img src="' + escapeAttr(existingSrc) + '" class="w-full h-36 object-contain rounded-lg bg-gray-50"><button type="button" onclick="event.stopPropagation(); removeUpload();" class="absolute top-1 right-1 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-xs shadow-md"><i class="fas fa-times"></i></button></div><p class="text-xs text-green-600 mt-2">Foto pengajar tersedia</p>' : '<i class="fas fa-cloud-upload-alt text-2xl text-gray-400 mb-1 block"></i><span class="text-xs text-gray-500 font-semibold block">Klik untuk Upload Foto Pengajar</span>') +
                    '</div>' +
                    '</div>' +
                    '<button type="submit" class="w-full bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded-lg text-sm transition-colors">Simpan Perubahan</button>' +
                    '</form>';

                document.getElementById('modal').classList.remove('hidden');
                initDragDrop('main');

                document.getElementById('form-edit-teacher-class').addEventListener('submit', function (e) {
                    e.preventDefault();
                    var avatarVal = uploadedImage || item.avatar;
                    var titleVal = document.getElementById('tc-title').value.trim();

                    classes[index] = {
                        id: item.id,
                        title: titleVal,
                        category: document.getElementById('tc-category').value,
                        grade: document.getElementById('tc-grade').value.trim(),
                        desc: document.getElementById('tc-desc').value.trim(),
                        date: document.getElementById('tc-date').value.trim(),
                        time: document.getElementById('tc-time').value.trim(),
                        platform: document.getElementById('tc-platform').value.trim(),
                        mentor: document.getElementById('tc-mentor').value.trim(),
                        mentorTitle: document.getElementById('tc-mentor-title').value.trim(),
                        avatar: avatarVal,
                        slot: item.slot || 10
                    };

                    localStorage.setItem('teacher_classes', JSON.stringify(classes));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('EDIT', 'Sesi Kelas', 'Mengedit sesi kelas: "' + titleVal + '"');
                    // ========================
                    showToast('Sesi kelas berhasil diperbarui.', 'success');
                    closeModal();
                    loadAndRenderTeacherClasses();
                });
            };

            window.deleteTeacherClass = function (index) {
                var classes = JSON.parse(localStorage.getItem('teacher_classes')) || [];
                var item = classes[index];
                if (!item) return;

                if (confirm('Apakah Anda yakin ingin menghapus kelas "' + item.title + '"?')) {
                    classes.splice(index, 1);
                    localStorage.setItem('teacher_classes', JSON.stringify(classes));
                    // ===== ACTIVITY LOG =====
                    addActivityLog('HAPUS', 'Sesi Kelas', 'Menghapus sesi kelas: "' + item.title + '"');
                    // ========================
                    showToast('Kelas berhasil dihapus.', 'success');
                    loadAndRenderTeacherClasses();
                }
            };

            window.loadAndRenderTeacherRegistrations = function () {
                var regsKey = 'teacher_registrations';
                if (localStorage.getItem(regsKey) === null) {
                    var regs = [
                        {
                            studentName: 'Henri Prasetyo',
                            grade: '5 SD',
                            phone: '085712345678',
                            email: 'henriprasetyo6@gmail.com',
                            classTitle: 'Trik Cepat Berhitung Penjumlahan, Perkalian & Pecahan',
                            notes: 'Mohon dibantu bimbingan perkalian dasar.'
                        },
                        {
                            studentName: 'Budi Santoso',
                            grade: '6 SD',
                            phone: '08123456789',
                            email: 'peserta@heyyouth.org',
                            classTitle: 'Trik Cepat Berhitung Penjumlahan, Perkalian & Pecahan',
                            notes: 'Sangat bersemangat belajar pecahan.'
                        }
                    ];
                    localStorage.setItem(regsKey, JSON.stringify(regs));
                }
                var regs = JSON.parse(localStorage.getItem(regsKey) || '[]');

                var countBadge = document.getElementById('count-teacher-registrations');
                if (countBadge) countBadge.textContent = regs.length;

                var tbody = document.getElementById('list-teacher-registrations');
                if (!tbody) return;

                if (regs.length === 0) {
                    tbody.innerHTML = '<tr><td colspan="6" class="text-center py-6 text-gray-400">Belum ada peserta terdaftar.</td></tr>';
                    return;
                }

                var html = '';
                regs.forEach(function (r) {
                    var rawPhone = (r.phone || '').replace(/[^0-9]/g, '');
                    if (rawPhone.startsWith('0')) {
                        rawPhone = '62' + rawPhone.substring(1);
                    }
                    
                    var messageText = 'Halo Orang Tua / Wali dari ' + (r.studentName || 'Siswa') + ',\n\n' +
                        'Terima kasih telah mendaftar pada sesi Teacher Class Hey Youth!:\n' +
                        '📚 Kelas: *' + (r.classTitle || '') + '*\n' +
                        '🏫 Tingkat: ' + (r.grade || '') + '\n\n' +
                        'Berikut kami sampaikan informasi lanjutan serta tautan ruangan kelas online. Jika ada pertanyaan, silakan membalas pesan ini ya! 😊';
                        
                    var waUrl = 'https://wa.me/' + rawPhone + '?text=' + encodeURIComponent(messageText);

                    var emailSubject = 'Konfirmasi Pendaftaran Teacher Class - ' + (r.classTitle || '');
                    
                    var emailBodyText = 'HEY YOUTH! TEACHER CLASS\n\n' +
                        'Halo Orang Tua dari ' + (r.studentName || 'Siswa') + ',\n\n' +
                        'Pendaftaran sesi ' + (r.classTitle || '') + ' (' + (r.grade || '') + ') dengan email ' + (r.email || '') + ' telah dikonfirmasi.\n\n' +
                        'Silakan klik tautan di bawah ini untuk konfirmasi kelas:\n' +
                        '👉 https://heyyouth.org\n\n' +
                        'Tim Hey Youth! Teacher Class';

                    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(r.email) + '&su=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBodyText);
                    var mailtoUrl = 'mailto:' + encodeURIComponent(r.email) + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBodyText);

                    var regIndex = regs.indexOf(r);

                    html += '<tr class="hover:bg-gray-50 border-b border-gray-100">' +
                        '<td class="px-4 py-3 font-bold text-heading">' + escapeHtml(r.studentName) + '</td>' +
                        '<td class="px-4 py-3 text-xs font-semibold text-primary">' + escapeHtml(r.grade) + '</td>' +
                        '<td class="px-4 py-3 text-xs font-mono">' +
                        (rawPhone ? '<a href="' + waUrl + '" target="_blank" class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 hover:bg-green-100 text-green-700 font-semibold rounded-lg transition-colors border border-green-200 shadow-sm"><i class="fab fa-whatsapp text-sm text-green-600"></i> ' + escapeHtml(r.phone) + '</a>' : escapeHtml(r.phone)) +
                        '</td>' +
                        '<td class="px-4 py-3 text-xs font-medium text-gray-600">' + (r.email ? escapeHtml(r.email) : '-') + '</td>' +
                        '<td class="px-4 py-3 font-semibold text-xs text-heading">' + escapeHtml(r.classTitle) + '</td>' +
                        '<td class="px-4 py-3 text-xs text-gray-500 italic">' + escapeHtml(r.notes || '-') + '</td>' +
                        '</tr>';
                });
                tbody.innerHTML = html;
            };

            window.openHtmlEmailModal = function (index) {
                var regsKey = 'teacher_class_registrations';
                var regs = JSON.parse(localStorage.getItem(regsKey)) || [];
                var r = regs[index];
                if (!r) return;

                var modalTitle = document.getElementById('modal-title');
                var modalBody = document.getElementById('modal-body');
                if (!modalTitle || !modalBody) return;

                var plainText = 'HEY YOUTH! TEACHER CLASS\n\n' +
                    'Halo Orang Tua dari ' + (r.studentName || 'Siswa') + ',\n\n' +
                    'Pendaftaran sesi ' + (r.classTitle || '') + ' (' + (r.grade || '') + ') dengan email ' + (r.email || '') + ' telah dikonfirmasi.\n\n' +
                    'Silakan klik tautan di bawah ini untuk konfirmasi kelas:\n' +
                    '👉 https://heyyouth.org\n\n' +
                    'Tim Hey Youth! Teacher Class';

                modalTitle.textContent = 'Templat Email Konfirmasi';
                modalBody.innerHTML = '<div class="space-y-4">' +
                    '<p class="text-xs text-gray-500">Berikut pratinjau teks email konfirmasi. Anda dapat mengeklik tombol <strong>Salin Teks Email</strong> untuk menyalin teks biasa ke clipboard.</p>' +
                    '<div class="border rounded-2xl p-4 bg-gray-55 text-xs font-sans text-body max-h-96 overflow-y-auto whitespace-pre-wrap leading-relaxed">' + escapeHtml(plainText) + '</div>' +
                    '<div class="flex gap-2">' +
                    '<button type="button" onclick="copyPlainEmailText()" class="flex-1 bg-primary hover:bg-primaryDark text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"><i class="fas fa-copy"></i> Salin Teks Email</button>' +
                    '<button type="button" onclick="closeModal()" class="px-4 py-2.5 border rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors">Tutup</button>' +
                    '</div>' +
                    '</div>';

                window.currentPlainEmailText = plainText;
                document.getElementById('modal').classList.remove('hidden');
            };

            window.copyPlainEmailText = function () {
                if (!window.currentPlainEmailText) return;
                var text = window.currentPlainEmailText;

                if (window.navigator && navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text).then(function () {
                        showToast('Teks email berhasil disalin ke clipboard!', 'success');
                    }).catch(function (err) {
                        console.warn("Clipboard API writeText failed, using fallback:", err);
                        fallbackCopyText(text);
                    });
                } else {
                    fallbackCopyText(text);
                }
            };

            function fallbackCopyText(text) {
                var textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                try {
                    var successful = document.execCommand('copy');
                    if (successful) {
                        showToast('Teks email berhasil disalin ke clipboard!', 'success');
                    } else {
                        showToast('Gagal menyalin email.', 'error');
                    }
                } catch (err) {
                    console.error('Fallback copy text failed', err);
                    showToast('Gagal menyalin email.', 'error');
                }
                document.body.removeChild(textarea);
            }
            window.clearTeacherRegistrations = function () {
                if (confirm('Apakah Anda yakin ingin menghapus semua rekap pendaftaran peserta Teacher Class?')) {
                    localStorage.setItem('teacher_registrations', '[]');
                    showToast('Rekap pendaftaran peserta dibersihkan.', 'success');
                    loadAndRenderTeacherRegistrations();
                }
            };

            function downloadCSV(headers, data, filename) {
                var csvRows = [];
                csvRows.push('\ufeff' + headers.join(';'));
                data.forEach(function(row) {
                    var values = row.map(function(val) {
                        var str = (val === null || val === undefined) ? '' : String(val);
                        var clean = str.replace(/"/g, '""');
                        if (clean.search(/("|,|;|\n)/g) >= 0) {
                            clean = '"' + clean + '"';
                        }
                        return clean;
                    });
                    csvRows.push(values.join(';'));
                });
                var csvString = csvRows.join('\r\n');
                var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                var url = URL.createObjectURL(blob);
                var link = document.createElement("a");
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            window.exportRegistrationsToCSV = async function() {
                var list = [];
                if (window.supabase) {
                    try {
                        const { data, error } = await window.supabase
                            .from('event_registrations')
                            .select('*')
                            .order('created_at', { ascending: false });
                        if (!error && data && data.length > 0) {
                            list = data.map(function(d) {
                                return {
                                    id: d.id,
                                    name: d.name,
                                    instansi: d.instansi,
                                    email: d.email,
                                    phone: d.phone,
                                    domisili: d.domisili,
                                    eventName: d.event_name || d.eventName,
                                    registeredAt: d.created_at || d.registeredAt
                                };
                            });
                        } else {
                            list = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                        }
                    } catch(e) {
                        list = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                    }
                } else {
                    list = JSON.parse(localStorage.getItem('event_registrations') || '[]');
                }

                if (!list.length) { 
                    showToast('Tidak ada data registrasi event untuk diekspor.', 'error'); 
                    return; 
                }

                var headers = ['No', 'Nama Peserta', 'Instansi / Kampus', 'Email', 'No. WhatsApp / HP', 'Domisili / Kota', 'Nama Acara / Webinar', 'Tanggal Registrasi'];
                var data = list.map(function(item, idx) {
                    var regDate = '';
                    if (item.registeredAt) {
                        var d = new Date(item.registeredAt);
                        if (!isNaN(d.getTime())) {
                            regDate = d.toLocaleString('id-ID');
                        } else {
                            regDate = String(item.registeredAt);
                        }
                    }
                    return [
                        idx + 1,
                        item.name || '',
                        item.instansi || '',
                        item.email || '',
                        item.phone || '',
                        item.domisili || '',
                        item.eventName || '',
                        regDate
                    ];
                });

                var timestamp = new Date().toISOString().slice(0, 10);
                downloadCSV(headers, data, 'rekap-pendaftar-event-' + timestamp + '.csv');

                // ===== ACTIVITY LOG =====
                addActivityLog('EKSPOR', 'Registrasi Event', 'Mengekspor ' + list.length + ' data registrasi event ke CSV');
                // ========================

                showToast('Data registrasi ' + list.length + ' peserta berhasil diekspor.', 'success');
            };

            window.exportCertificatesToCSV = function() {
                var list = JSON.parse(localStorage.getItem('mock_fb_list_certificates') || '[]');
                if (!list.length) { showToast('Tidak ada data sertifikat untuk diekspor.', 'error'); return; }
                var headers = ['No', 'No. Sertifikat', 'Nama Penerima', 'Email', 'Nama Acara / Webinar', 'Tanggal Rilis', 'Deskripsi'];
                var data = list.map(function(itemObj, idx) {
                    var item = itemObj.data || {};
                    return [
                        idx + 1,
                        item.certificateNumber || '',
                        item.name || '',
                        item.email || '',
                        item.eventName || '',
                        item.issueDate || '',
                        item.description || ''
                    ];
                });
                var timestamp = new Date().toISOString().slice(0, 10);
                downloadCSV(headers, data, 'daftar-sertifikat-' + timestamp + '.csv');
                
                // ===== ACTIVITY LOG =====
                addActivityLog('EKSPOR', 'Sertifikat', 'Mengekspor ' + list.length + ' data sertifikat ke CSV');
                // ========================

                showToast('Data sertifikat berhasil diekspor.', 'success');
            };

            window.exportTeacherRegistrationsToCSV = function() {
                var list = JSON.parse(localStorage.getItem('teacher_class_registrations') || '[]');
                if (!list.length) { showToast('Tidak ada data pendaftar Teacher Class untuk diekspor.', 'error'); return; }
                var headers = ['No', 'Nama Siswa', 'Kelas SD', 'WhatsApp Ortu', 'Email Ortu', 'Kelas Diikuti', 'Catatan'];
                var data = list.map(function(item, idx) {
                    return [
                        idx + 1,
                        item.studentName || '',
                        item.grade || '',
                        item.phone || '',
                        item.email || '',
                        item.classTitle || '',
                        item.notes || ''
                    ];
                });
                var timestamp = new Date().toISOString().slice(0, 10);
                downloadCSV(headers, data, 'pendaftaran-teacher-class-' + timestamp + '.csv');

                // ===== ACTIVITY LOG =====
                addActivityLog('EKSPOR', 'Teacher Class', 'Mengekspor ' + list.length + ' data pendaftar Teacher Class ke CSV');
                // ========================

                showToast('Data pendaftar Teacher Class berhasil diekspor.', 'success');
            };



            /* =========================================
               ========================================= */
            async function initDashboard() {
                try {
                    // Fetch latest CMS data from Supabase/database on startup
                    if (typeof window.getFirebaseData === 'function') {
                        var fetchedData = await window.getFirebaseData(DEFAULT_DATA);
                        if (fetchedData) {
                            memoryData = sanitizeCmsData(fetchedData);
                            try {
                                localStorage.setItem('hey_youth_cms', JSON.stringify(memoryData));
                            } catch (e) {}
                        }
                    }
                    renderAllLists();
                    initStatisticsListener();
                    initThemeToggle();
                    // Inisialisasi badge log di sidebar & Realtime Subscription
                    try {
                        if (window.supabase) {
                            window.supabase.channel('public:admin_logs')
                                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'admin_logs' }, function(payload) {
                                    // Refresh the list if it's currently visible
                                    var logView = document.getElementById('view-activity-log');
                                    if (logView && !logView.classList.contains('hidden')) {
                                        if (typeof renderActivityLog === 'function') renderActivityLog();
                                    }
                                })
                                .subscribe();
                        }
                        var initLogs = JSON.parse(localStorage.getItem('hey_youth_admin_logs') || '[]');
                        var sidebarBadge = document.getElementById('count-activity-log');
                        if (sidebarBadge) sidebarBadge.textContent = initLogs.length;
                    } catch(e) {}
                    if (typeof switchTab === 'function') switchTab('homepage');
                } catch (err) {
                    console.error("initDashboard error:", err);
                }
            }

            // Check active session using Supabase to protect dashboard
            supabase.auth.getSession().then(function (result) {
                if (result.data && result.data.session) {
                    // Simpan email admin ke variabel global untuk digunakan logging
                    if (result.data.session.user) {
                        window._currentAdminEmail = result.data.session.user.email || 'Admin';
                        localStorage.setItem('hey_youth_last_login_email', window._currentAdminEmail);
                    }
                    initDashboard();
                } else {
                    window.location.href = 'Login.html';
                }
            });
        })();
    
            // === INIT TABLE CONTROLS ===
            window.initTableControls = function(searchId, tbodyId, filterId, filterColIndex) {
                var searchInput = document.getElementById(searchId);
                var filterSelect = document.getElementById(filterId);
                var tbody = document.getElementById(tbodyId);
                if (!searchInput || !tbody) return;

                function updateFilterOptions(dataRows) {
                    if (!filterSelect || filterColIndex === undefined) return;
                    
                    var firstOption = filterSelect.options[0];
                    filterSelect.innerHTML = '';
                    filterSelect.appendChild(firstOption);
                    
                    var uniqueValues = new Set();
                    dataRows.forEach(function(row) {
                        if (row.children[filterColIndex]) {
                            var val = row.children[filterColIndex].textContent.trim();
                            if (val) uniqueValues.add(val);
                        }
                    });
                    
                    Array.from(uniqueValues).sort().forEach(function(val) {
                        var opt = document.createElement('option');
                        opt.value = val.toLowerCase();
                        opt.textContent = val;
                        filterSelect.appendChild(opt);
                    });
                }

                var isFirstRun = true;

                function applyControls() {
                    var query = searchInput.value.toLowerCase().trim();
                    var filterValue = filterSelect ? filterSelect.value : 'all';
                    
                    var rows = Array.from(tbody.querySelectorAll('tr'));
                    var dataRows = [];
                    var emptyRows = [];
                    rows.forEach(function(row) {
                        if (row.children.length === 1 && (row.textContent.includes('Belum ada') || row.textContent.includes('Memuat') || row.textContent.includes('Gagal'))) {
                            emptyRows.push(row);
                        } else {
                            dataRows.push(row);
                        }
                    });

                    if (dataRows.length === 0) return;

                    if (isFirstRun && filterSelect && filterColIndex !== undefined) {
                        updateFilterOptions(dataRows);
                        isFirstRun = false;
                    }

                    dataRows.forEach(function(row) {
                        var text = row.textContent.toLowerCase();
                        var rowFilterVal = (filterColIndex !== undefined && row.children[filterColIndex]) ? row.children[filterColIndex].textContent.trim().toLowerCase() : '';
                        
                        var matchesSearch = text.includes(query);
                        var matchesFilter = filterValue === 'all' || rowFilterVal === filterValue;
                        
                        if (matchesSearch && matchesFilter) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    });
                }

                searchInput.addEventListener('input', applyControls);
                if (filterSelect) filterSelect.addEventListener('change', applyControls);

                var observer = new MutationObserver(function(mutations) {
                    var needsApply = false;
                    mutations.forEach(function(m) {
                        if (m.addedNodes.length > 0) needsApply = true;
                    });
                    if (needsApply) {
                        observer.disconnect(); 
                        isFirstRun = true;
                        applyControls();
                        observer.observe(tbody, { childList: true });
                    }
                });
                observer.observe(tbody, { childList: true });
            };

            document.addEventListener('DOMContentLoaded', function() {
                initTableControls('search-list-locations', 'list-locations', 'filter-list-locations', undefined);
                initTableControls('search-list-events', 'list-events', 'filter-list-events', 2);
                initTableControls('search-list-registrations', 'list-registrations', 'filter-list-registrations', 4);
                initTableControls('search-list-mentoring-categories', 'list-mentoring-categories', 'filter-list-mentoring-categories', undefined);
                initTableControls('search-list-teacher-classes', 'list-teacher-classes', 'filter-list-teacher-classes', 1);
                initTableControls('search-list-teacher-registrations', 'list-teacher-registrations', 'filter-list-teacher-registrations', 4);
                initTableControls('search-list-certificate-designs', 'list-certificate-designs', 'filter-list-certificate-designs', undefined);
                initTableControls('search-list-certificates', 'list-certificates', 'filter-list-certificates', 3);
                initTableControls('search-list-activity-log', 'list-activity-log', 'filter-list-activity-log', 2);

                var searchReg = document.getElementById('search-volunteer-registrations');
                var filterDiv = document.getElementById('filter-reg-division');
                var filterStat = document.getElementById('filter-reg-status');
                if (searchReg) searchReg.addEventListener('input', renderFilteredVolunteerRegistrations);
                if (filterDiv) filterDiv.addEventListener('change', renderFilteredVolunteerRegistrations);
                if (filterStat) filterStat.addEventListener('change', renderFilteredVolunteerRegistrations);
            });
            // === END INIT TABLE CONTROLS ===