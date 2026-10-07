import {
  Home, TrendingUp, Key, Headphones,
  MapPin, Users, Zap, Eye, Heart, Globe,
  Warehouse, Store, FileText, Trophy,
} from 'lucide-react';

export const HOME_CONTENT = {
  en: {
    // ── HERO ─────────────────────────────────────────────────────
    hero_location: 'CHANDER VIHAR • DELHI',
    hero_badge: 'Chander Vihar & Nilothi, West Delhi',
    hero_eyebrow: 'Ward No. 38/36 — Nilothi Extn, Mundka',
    h1_line1: 'Connecting People.',
    h1_line2: 'Building Trust.',
    tagline: "Chander Vihar's trusted local property network.",
    hero_body:
      'Property decisions are about finding the right people and the right connection — not just a place. We connect property seekers, owners, and local professionals through a simple, transparent, and community-focused approach. Whether you want to buy, sell, rent, or need property support — we help you start the right conversation.',
    cta1: 'Talk to Us',
    cta2: 'WhatsApp Us',
    hero_support: 'Chander Vihar & Nilothi — Your Local Network, Your Community.',
    hero_overlay_text: 'A Stronger\nChander Vihar\nTogether',

    // ── QUICK ACCESS CARDS (3 cards below hero) ───────────────────
    quick_label: 'How Can We Assist You Today?',
    quick_cards: [
      {
        icon: Home,
        title: 'Property & Rental Assistance',
        titleHi: 'प्रॉपर्टी व किराया सहायता',
        desc: 'Looking to buy, sell, or rent residential homes, godowns, shops, or sheds? Connect directly with local owners.',
        items: ['Buy / Sell', 'Rent / Lease', 'Godown & Shed', 'Commercial Shops'],
        color: '#00A3AD',
        bg: '#e0f7f8',
        cta: 'Inquire Property',
      },
      {
        icon: FileText,
        title: 'Government Scheme Guidance',
        titleHi: 'सरकारी योजना सहायता',
        desc: 'Direct assistance with PM-UDAY registry, Aadhaar corrections, civic documentation, and senior citizen pensions.',
        items: ['PM-UDAY Registry', 'Aadhaar & Identity', 'Pension Forms', 'Documentation Help'],
        color: '#FF9900',
        bg: '#fff3e0',
        cta: 'Get Assistance',
      },
      {
        icon: Trophy,
        title: 'Community & Civic Work',
        titleHi: 'सामाजिक एवं नागरिक कार्य',
        desc: 'Colony development, youth marathon events, traffic management, and daily grievance resolution with Gullu Ji.',
        items: ['Colony Infrastructure', 'Youth Sports & Marathon', 'Traffic & Sanitation', 'Public Grievances'],
        color: '#AE2721',
        bg: '#fdecea',
        cta: 'Join Community',
      },
    ],

    // ── SERVICES ───────────────────────────────────────
    services_label: 'PROPERTY SERVICES',
    services: [
      {
        icon: Home,
        title: 'Buy',
        color: '#00A3AD',
        bg: '#e0f7f8',
        desc: 'Looking to buy a home or property in Chander Vihar or Nilothi? Share your requirements and connect with verified local owners.',
        cta: 'Explore Buying',
      },
      {
        icon: TrendingUp,
        title: 'Sell',
        color: '#FF9900',
        bg: '#fff3e0',
        desc: 'Want to sell your property at fair market value? List directly and connect with genuine buyers across our local network.',
        cta: 'List Property',
      },
      {
        icon: Key,
        title: 'Rent',
        color: '#22c55e',
        bg: '#dcfce7',
        desc: 'Searching for a rental home or looking to lease your floor? Direct owner-tenant connections with transparent terms.',
        cta: 'Explore Renting',
      },
      {
        icon: Warehouse,
        title: 'Godown / Shed',
        color: '#7c3aed',
        bg: '#ede9fe',
        desc: 'Commercial godowns, industrial sheds, and storage units across Chander Vihar & Nilothi. Connect for verified options.',
        cta: 'View Options',
      },
      {
        icon: Store,
        title: 'Shop / Commercial',
        color: '#11284A',
        bg: '#f1f5f9',
        desc: 'Looking to rent or purchase a retail shop, office space, or commercial site? Connect directly with local business leads.',
        cta: 'Commercial Desk',
      },
      {
        icon: Headphones,
        title: 'Property Support',
        color: '#AE2721',
        bg: '#fdecea',
        desc: 'Need assistance with PM-UDAY documentation, property verification, registry legalities, or valuation? We guide you.',
        cta: 'Get Assistance',
      },
    ],

    // ── OUR FOUNDATION / STORY ─────────────────────────────────────
    story_eyebrow: 'OUR FOUNDATION',
    story_title: 'A Local Idea With a Bigger Vision.',
    story_body:
      'Every locality has its own heartbeat, relationships, and unwritten rules of trust. Chander Vihar is no different. Over decades, buying or renting here often turned into an intimidating maze of speculative prices and anonymous brokers.',
    story_body2:
      'CVP Exchange was created to bridge neighbors directly. We believe healthy real estate begins with civic integrity: well-lit streets, working water pipelines, honest ownership history, and a handshake you can count on.',
    story_pillars: [
      { key: 'People First', desc: 'Residents who live, work, and invest directly in our neighborhood.' },
      { key: 'Transparent Routes', desc: 'Zero commission padding. Straightforward seller-buyer introductions.' },
      { key: 'Neighbor Verification', desc: 'Every property vetted against civic registry records and street inputs.' },
      { key: 'Civic Responsibility', desc: 'Reinvesting time and effort into local road upkeep and lighting.' },
    ],

    // ── HOW IT WORKS ──────────────────────────────────────────────
    hiw_eyebrow: 'STREAMLINED FLOW',
    hiw_title: 'Your Property Connection in 4 Simple Steps',
    hiw_body: 'No convoluted brokerage bureaucracy. We keep every interaction clean, structured, and fast.',
    hiw_steps: [
      { num: '01', title: 'Share Requirement', body: 'Message or call us with your budget, floor preference, or selling timeline in Chander Vihar.' },
      { num: '02', title: 'We Match & Screen', body: 'Our local council scans verified properties and checks documentation before scheduling any visit.' },
      { num: '03', title: 'Direct Introduction', body: 'We share suitable leads directly with the owner or buyer. Discuss openly with real local market benchmarks.' },
      { num: '04', title: 'Move Forward Safe', body: 'Complete registry, NOC, mutation transfer, and direct guidance from our neighborhood legal desk.' },
    ],
    hiw_cta: 'Start a Conversation Today',

    // ── DIFFERENCE ────────────────────────────────────────────────
    diff_eyebrow: 'WHY CONNECT WITH US',
    diff_title: 'The CVP Exchange Difference.',
    diff_subtitle: 'A focused local network built on human connection, simple process, and community trust.',
    diff_points: [
      { icon: MapPin, title: 'One Local Network', desc: 'A focused network built around Chander Vihar and nearby areas.', color: '#00A3AD' },
      { icon: Users, title: 'Human Connection', desc: 'We believe meaningful conversations create better property experiences.', color: '#FF9900' },
      { icon: Zap, title: 'Simple Process', desc: 'No complicated journey. Just share, connect, discuss, and move forward.', color: '#22c55e' },
      { icon: Eye, title: 'Transparent Approach', desc: 'We value clarity, communication, and trust at every step.', color: '#11284A' },
      { icon: Heart, title: 'Community Mindset', desc: 'We focus on relationships that go beyond a single property conversation.', color: '#AE2721' },
      { icon: Globe, title: 'Local Perspective', desc: 'We keep the conversation connected to the local area and its people.', color: '#7c3aed' },
    ],

    // ── FOUNDER ───────────────────────────────────────────────────
    founder_eyebrow: 'GROUND ACTION & LEADERSHIP',
    founder_title: 'Sukhvinder Singh Gullu & Team Chander Vihar',
    founder_subtitle: 'Ground-Level Civic Service, Public Support & Trusted Neighborhood Network',
    founder_body: 'Chander Vihar Property Exchange is guided by the vision of Sukhvinder Singh Gullu Ji (Sukhvinder Pajji) — bringing residents together through dedicated civic work and transparent property guidance.',
    founder_body2: 'Working alongside Team Chander Vihar, Gullu Ji stays actively involved in traffic management at Shri Khanda Sahib Chowk, sewer and drainage maintenance, street light installation, PM-UDAY documentation assistance, senior citizen support, and youth empowerment.',
    founder_badge: 'Founder & Community Lead',
    founder_initiatives: [
      'Traffic Management at Shri Khanda Sahib Chowk',
      'Sewer Line & Drainage Maintenance Drives',
      'Street Lighting & Women / Elder Night Safety',
      'Cleanliness & Waste Clearance Campaigns',
      'Senior Citizens Support & Youth Empowerment',
      'PM-UDAY Documentation & Government Schemes',
    ],
    founder_cta: 'View Full Initiatives',
    founder_fb_cta: 'Official Facebook Page',
    founder_fb_url: 'https://www.facebook.com/share/1CjeqYtR17/',

    // ── MEDIA ─────────────────────────────────────────────────────
    media_eyebrow: 'COMMUNITY MEDIA UPDATES',
    media_title: 'Direct From The Ground To You.',
    media_body: 'Stay connected with colony development, civic achievements, social initiatives, and property updates.',
    media_facebook_label: 'Facebook Community',
    media_facebook_desc: 'Official Facebook page for colony updates, civic issues, and ground action photo galleries.',
    media_youtube_label: 'YouTube Channel',
    media_youtube_desc: 'Official YouTube channel featuring community meetings, marathon highlights, and local news.',
    media_photo_label: 'Photo Gallery',
    media_photo_desc: 'Ground activity photos documenting local meetings, health camps, and neighborhood work.',
    media_coming_soon: 'Real Action Photos & Videos',

    // ── CTA ───────────────────────────────────────────────────────
    cta_badge: 'START CONVERSATION TODAY',
    cta_title: 'Start Your Property Journey Today With Connections You Can Trust.',
    cta_body: 'Whether you want to buy, sell, rent, or need PM-UDAY documentation help — Gullu Ji and team are here to guide you.',
    cta_btn1: 'Talk to Us',
    cta_btn2: 'WhatsApp Us',
    cta_support: 'Chander Vihar & Nilothi — Your Local Network, Your Community.',
  },

  hi: {
    // ── HERO ─────────────────────────────────────────────────────
    hero_location: 'चंदर विहार • दिल्ली',
    hero_badge: 'चंदर विहार एवं निलोठी, पश्चिमी दिल्ली',
    hero_eyebrow: 'चंदर विहार एवं निलोठी एक्सटेंशन, पश्चिम दिल्ली',
    h1_line1: 'लोगों को जोड़ना।',
    h1_line2: 'विश्वास का निर्माण।',
    tagline: 'चंदर विहार का विश्वसनीय स्थानीय संपत्ति नेटवर्क।',
    hero_body:
      'संपत्ति का निर्णय केवल सही स्थान खोजने के बारे में नहीं है, बल्कि सही लोगों और निष्पक्ष संबंधों को पाने के बारे में है। हम एक सरल, पारदर्शी और समुदाय-केंद्रित दृष्टिकोण के माध्यम से संपत्ति चाहने वालों, मकान मालिकों और स्थानीय विशेषज्ञों को सीधे जोड़ते हैं। चाहे आपको खरीदना हो, बेचना हो, किराए पर लेना हो या संपत्ति परामर्श चाहिए — हम सही संवाद शुरू करने में आपकी सहायता करते हैं।',
    cta1: 'हमसे बात करें',
    cta2: 'व्हाट्सएप करें',
    hero_support: 'चंदर विहार एवं निलोठी — आपका अपना स्थानीय नेटवर्क, आपका अपना समुदाय।',
    hero_overlay_text: 'एक सशक्त\nचंदर विहार\nएक साथ',

    // ── QUICK ACCESS CARDS ────────────────────────────────────────
    quick_label: 'आज हम आपकी क्या सहायता कर सकते हैं?',
    quick_cards: [
      {
        icon: Home,
        title: 'Property & Rental Assistance',
        titleHi: 'संपत्ति व किराया सहायता',
        desc: 'मकान खरीदना, बेचना, किराए पर लेना, या गोदाम/दुकान की आवश्यकता? सीधे स्थानीय मालिकों से जुड़ें।',
        items: ['खरीदें / बेचें', 'किराया / लीज़', 'गोदाम एवं शेड', 'व्यावसायिक दुकानें'],
        color: '#00A3AD',
        bg: '#e0f7f8',
        cta: 'संपत्ति पूछताछ',
      },
      {
        icon: FileText,
        title: 'Government Schemes & Civic Support',
        titleHi: 'सरकारी योजना व सहायता',
        desc: 'PM-UDAY रजिस्ट्री, आधार संशोधन, नागरिक दस्तावेज़ एवं बुजुर्ग पेंशन फॉर्म हेतु सीधी सहायता।',
        items: ['PM-UDAY रजिस्ट्री', 'आधार व पहचान पत्र', 'पेंशन फॉर्म', 'दस्तावेज़ सहायता'],
        color: '#FF9900',
        bg: '#fff3e0',
        cta: 'सहायता प्राप्त करें',
      },
      {
        icon: Trophy,
        title: 'Community & Social Initiatives',
        titleHi: 'सामाजिक एवं नागरिक कार्य',
        desc: 'कॉलोनी विकास, युवा खेल मैराथन, यातायात प्रबंधन और दैनिक जन समस्याओं का गुल्लू जी के साथ समाधान।',
        items: ['कॉलोनी विकास', 'युवा खेल व मैराथन', 'यातायात व सफाई', 'जनसमस्या निवारण'],
        color: '#AE2721',
        bg: '#fdecea',
        cta: 'समुदाय से जुड़ें',
      },
    ],

    // ── SERVICES ─────────────────────────────────────────────────
    services_label: 'संपत्ति सेवाएं',
    services: [
      { icon: Home, title: 'खरीदें', color: '#00A3AD', bg: '#e0f7f8', desc: 'चंदर विहार या निलोठी में अपना सपनों का घर अथवा प्लॉट खरीदना चाहते हैं? अपनी आवश्यकता साझा करें और सत्यापित स्थानीय मालिकों से जुड़ें।', cta: 'खरीदारी खोजें' },
      { icon: TrendingUp, title: 'बेचें', color: '#FF9900', bg: '#fff3e0', desc: 'अपनी संपत्ति को सही बाज़ार मूल्य पर बेचना चाहते हैं? हमारे स्थानीय नेटवर्क के माध्यम से सीधे वास्तविक खरीदारों से संपर्क करें।', cta: 'संपत्ति लिस्ट करें' },
      { icon: Key, title: 'किराया', color: '#22c55e', bg: '#dcfce7', desc: 'किराए का मकान ढूंढ रहे हैं या अपना फ्लोर किराए पर देना चाहते हैं? मकान मालिक और किराएदार के बीच पारदर्शी एवं सीधा संवाद।', cta: 'किराया खोजें' },
      { icon: Warehouse, title: 'गोदाम / शेड', color: '#7c3aed', bg: '#ede9fe', desc: 'व्यावसायिक गोदाम, औद्योगिक शेड अथवा स्टोरेज स्पेस की आवश्यकता? चंदर विहार एवं निलोठी में सत्यापित विकल्पों हेतु संपर्क करें।', cta: 'विकल्प देखें' },
      { icon: Store, title: 'दुकान / कमर्शियल', color: '#11284A', bg: '#f1f5f9', desc: 'खुदरा दुकान, कार्यालय या कमर्शियल स्थान किराए पर अथवा खरीदने हेतु स्थानीय व्यापारिक समुदाय से सीधे जुड़ें।', cta: 'कमर्शियल डेस्क' },
      { icon: Headphones, title: 'संपत्ति सहायता', color: '#AE2721', bg: '#fdecea', desc: 'PM-UDAY रजिस्ट्री दस्तावेज़ीकरण, संपत्ति सत्यापन, कानूनी मार्गदर्शन या मूल्यांकन में सहायता चाहिए? हमारी टीम मार्गदर्शन करती है।', cta: 'सहायता प्राप्त करें' },
    ],

    // ── OUR FOUNDATION / STORY ─────────────────────────────────────
    story_eyebrow: 'हमारी नींव',
    story_title: 'एक स्थानीय सोच — एक दूरदर्शी दृष्टि।',
    story_body:
      'हर कॉलोनी की अपनी पहचान, अपने संबंध और विश्वास के अपने मानदंड होते हैं। चंदर विहार भी इससे अलग नहीं है। दशकों से यहां संपत्ति खरीदना अथवा किराए पर लेना अनिश्चित कीमतों और अज्ञात बिचौलियों का एक कठिन अनुभव रहा है।',
    story_body2:
      'CVP Exchange की स्थापना पड़ोसियों को आपस में सीधे जोड़ने के लिए की गई थी। हमारा मानना है कि स्वस्थ रियल एस्टेट की शुरुआत नागरिक अखंडता से होती है — अच्छी सड़कें, कार्यरत जल आपूर्ति, स्पष्ट स्वामित्व इतिहास और एक सच्चा विश्वास जिस पर आप भरोसा कर सकें।',
    story_pillars: [
      { key: 'जन प्राथमिकता', desc: 'निवासी जो हमारे पड़ोस में रहते हैं, कार्य करते हैं और निवेश करते हैं।' },
      { key: 'पारदर्शी मार्ग', desc: 'बिना किसी अनुचित कमीशन के। खरीदार और विक्रेता का सीधा परिचय।' },
      { key: 'पड़ोसी सत्यापन', desc: 'नागरिक रिकॉर्ड और स्थानीय निवासियों के आधार पर सत्यापित संपत्तियां।' },
      { key: 'नागरिक उत्तरदायित्व', desc: 'स्थानीय सड़कों के रख-रखाव, प्रकाश व्यवस्था और स्वच्छता हेतु प्रतिबद्धता।' },
    ],

    // ── HOW IT WORKS ──────────────────────────────────────────────
    hiw_eyebrow: 'सरल कार्यप्रणाली',
    hiw_title: 'आपकी संपत्ति का समाधान 4 सरल चरणों में',
    hiw_body: 'कोई जटिल बिचौलिया नौकरशाही नहीं। हम हर बातचीत को साफ, संरचित और त्वरित रखते हैं।',
    hiw_steps: [
      { num: '01', title: 'आवश्यकता साझा करें', body: 'चंदर विहार में अपने बजट, मंजिल की पसंद या बिक्री समयसीमा के साथ हमें संदेश या कॉल करें।' },
      { num: '02', title: 'सत्यापन एवं मिलान', body: 'हमारी स्थानीय टीम मुलाकात का समय तय करने से पहले सत्यापित संपत्तियों और दस्तावेज़ों की जांच करती है।' },
      { num: '03', title: 'सीधा परिचय', body: 'हम उपयुक्त विकल्प सीधे मालिक या खरीदार के साथ साझा करते हैं। वास्तविक स्थानीय बाज़ार दरों के साथ खुलकर चर्चा करें।' },
      { num: '04', title: 'सुरक्षित आगे बढ़ें', body: 'रजिस्ट्री, एनओसी, म्यूटेशन ट्रांसफर और हमारे कानूनी सहायता डेस्क से सीधा मार्गदर्शन प्राप्त करें।' },
    ],
    hiw_cta: 'आज ही संवाद शुरू करें',

    // ── DIFFERENCE ────────────────────────────────────────────────
    diff_eyebrow: 'हमसे क्यों जुड़ें',
    diff_title: 'CVP Exchange का अंतर।',
    diff_subtitle: 'मानवीय संबंधों, सरल प्रक्रिया और सामुदायिक विश्वास पर निर्मित एक केंद्रित स्थानीय नेटवर्क।',
    diff_points: [
      { icon: MapPin, title: 'एक समर्पित स्थानीय नेटवर्क', desc: 'चंदर विहार, निलोठी और आसपास के क्षेत्रों पर केंद्रित नेटवर्क।', color: '#00A3AD' },
      { icon: Users, title: 'मानवीय संबंध', desc: 'सार्थक बातचीत बेहतर संपत्ति अनुभव का निर्माण करती है।', color: '#FF9900' },
      { icon: Zap, title: 'सरल एवं सुगम प्रक्रिया', desc: 'कोई जटिल यात्रा नहीं। बस साझा करें, जुड़ें, चर्चा करें और आगे बढ़ें।', color: '#22c55e' },
      { icon: Eye, title: 'पारदर्शी दृष्टिकोण', desc: 'हम हर कदम पर स्पष्टता, संचार और निष्पक्षता को प्राथमिकता देते हैं।', color: '#11284A' },
      { icon: Heart, title: 'सामुदायिक भावना', desc: 'हम उन संबंधों पर ध्यान केंद्रित करते हैं जो केवल एक सौदे तक सीमित नहीं हैं।', color: '#AE2721' },
      { icon: Globe, title: 'स्थानीय दृष्टिकोण', desc: 'हमारा ध्यान सदैव इस क्षेत्र के निवासियों और उनकी प्राथमिकताओं पर रहता है।', color: '#7c3aed' },
    ],

    // ── FOUNDER ───────────────────────────────────────────────────
    founder_eyebrow: 'ज़मीनी कार्य एवं नेतृत्व',
    founder_title: 'सुखविंदर सिंह गुल्लू एवं टीम चंदर विहार',
    founder_subtitle: 'ज़मीनी समाज सेवा, नागरिक विकास एवं विश्वसनीय स्थानीय संपर्क',
    founder_body: 'Chander Vihar Property Exchange की स्थापना सुखविंदर सिंह गुल्लू जी (सुखविंदर पाजी) के दृष्टिकोण से हुई है — जिनका लक्ष्य नागरिक सेवा और पारदर्शी मार्गदर्शन के माध्यम से निवासियों को एक साथ लाना है।',
    founder_body2: 'टीम चंदर विहार के साथ मिलकर, गुल्लू जी श्री खांडा साहिब चौक पर यातायात प्रबंधन, सीवर एवं नाली सफाई अभियान, स्ट्रीट लाइट व्यवस्था, PM-UDAY दस्तावेज़ीकरण सहायता, वरिष्ठ नागरिकों की सेवा और युवाओं के सशक्तीकरण में निरंतर सक्रिय रहते हैं।',
    founder_badge: 'संस्थापक एवं कम्युनिटी लीडर',
    founder_initiatives: [
      'श्री खांडा साहिब चौक पर यातायात प्रबंधन',
      'सीवर लाइन एवं जल निकासी रखरखाव अभियान',
      'स्ट्रीट लाइट व्यवस्था एवं महिला/बुजुर्ग रात्रि सुरक्षा',
      'स्वच्छता एवं कचरा निस्तारण अभियान',
      'वरिष्ठ नागरिक सहायता एवं युवा सशक्तीकरण',
      'PM-UDAY दस्तावेज़ीकरण एवं सरकारी योजना सहायता',
    ],
    founder_cta: 'पूरा कार्य देखें',
    founder_fb_cta: 'ऑफिशियल फेसबुक पेज',
    founder_fb_url: 'https://www.facebook.com/share/1CjeqYtR17/',

    // ── MEDIA ─────────────────────────────────────────────────────
    media_eyebrow: 'सामुदायिक समाचार एवं अपडेट',
    media_title: 'ज़मीन से — सीधे आपके पास।',
    media_body: 'कॉलोनी के विकास, नागरिक उपलब्धियों, सामाजिक पहलों और संपत्ति अपडेट से सीधे जुड़े रहें।',
    media_facebook_label: 'फेसबुक कम्युनिटी',
    media_facebook_desc: 'कॉलोनी अपडेट, नागरिक मुद्दों और ज़मीनी गतिविधियों के फोटो गैलरी हेतु आधिकारिक फेसबुक पेज।',
    media_youtube_label: 'यूट्यूब चैनल',
    media_youtube_desc: 'स्थानीय बैठकों, मैराथन हाइलाइट्स और समाचारों हेतु आधिकारिक यूट्यूब चैनल।',
    media_photo_label: 'फोटो गैलरी',
    media_photo_desc: 'स्थानीय बैठकों, स्वास्थ्य शिविरों और विकास कार्यों की वास्तविक तस्वीरें।',
    media_coming_soon: 'वास्तविक तस्वीरें एवं वीडियो',

    // ── CTA ───────────────────────────────────────────────────────
    cta_badge: 'आज ही शुरुआत करें',
    cta_title: 'भरोसेमंद संपर्कों के साथ अपनी संपत्ति यात्रा आज ही शुरू करें।',
    cta_body: 'चाहे आपको खरीदना हो, बेचना हो, किराए पर लेना हो या PM-UDAY दस्तावेज़ीकरण सहायता चाहिए — गुल्लू जी और टीम आपकी सहायता हेतु सदैव उपलब्ध हैं।',
    cta_btn1: 'हमसे बात करें',
    cta_btn2: 'व्हाट्सएप करें',
    cta_support: 'चंदर विहार एवं निलोठी — आपका अपना स्थानीय नेटवर्क, आपका अपना समुदाय।',
  },
};

export default HOME_CONTENT;
