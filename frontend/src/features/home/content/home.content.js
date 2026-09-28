import {
  Home, TrendingUp, Key, Headphones,
  MapPin, Users, Zap, Eye, Heart, Globe,
  Warehouse, Store, FileText, Trophy,
} from 'lucide-react';

export const HOME_CONTENT = {
  en: {
    // ── HERO ─────────────────────────────────────────────────────
    hero_badge: 'Chander Vihar & Nilothi, West Delhi',
    hero_eyebrow: 'Ward No. 38/36 — Nilothi Extn, Mundka',
    h1_line1: 'Chander Vihar ka Vikas,',
    h1_line2: 'Ekta aur Bharosa.',
    tagline: 'Sukhwinder Singh Gullu ke Sath — Aapka Apna Local Network.',
    hero_body:
      'Chander Vihar & Nilothi ke logon ka bharosa, samaj seva, aur property se judne ka ek seedha aur saral raasta. Property, Sarkari Yojanayein, aur Community Development — sab ek jagah.',
    cta1: 'WhatsApp Karo',
    cta2: 'Call Karo',
    hero_support: 'Chander Vihar & Nilothi — Apna Local Network, Apni Community.',

    // ── QUICK ACCESS CARDS (3 cards below hero) ───────────────────
    quick_label: 'Kya chahiye aapko aaj?',
    quick_cards: [
      {
        icon: Home,
        title: 'Property & Rent Support',
        titleHi: 'Property & Kiraya',
        desc: 'Makaan khareedna, bechna, kiraye par lena, ya Godown / Shop / Shed ki zaroorat? Seedha connect karo.',
        items: ['Buy / Sell', 'Rent / Lease', 'Godown & Shed', 'Commercial Shops'],
        color: '#00A3AD',
        bg: '#e0f7f8',
        cta: 'Property Baat Karo',
      },
      {
        icon: FileText,
        title: 'Sarkari Yojanayein & Help',
        titleHi: 'Sarkari Sahayata',
        desc: 'PM-UDAY registry, Aadhaar, Voter ID, Pension forms — kisi bhi sarkari kaam mein seedha madad milegi.',
        items: ['PM-UDAY Registry', 'Voter ID & Aadhaar', 'Pension Forms', 'Documentation Help'],
        color: '#FF9900',
        bg: '#fff3e0',
        cta: 'Help Lao',
      },
      {
        icon: Trophy,
        title: 'Community & Social Initiatives',
        titleHi: 'Samaj Seva & Events',
        desc: 'Colony development, youth events, marathon, traffic management aur public ki daily problems — Gullu ji ke sath.',
        items: ['Colony Vikas', 'Youth Events & Marathon', 'Traffic & Civic Issues', 'Public Grievances'],
        color: '#AE2721',
        bg: '#fdecea',
        cta: 'Judiye Hamse',
      },
    ],

    // ── SERVICES (expanded) ───────────────────────────────────────
    services_label: 'Property Services',
    services: [
      {
        icon: Home,
        title: 'Buy',
        color: '#00A3AD',
        bg: '#e0f7f8',
        desc: 'Chander Vihar ya Nilothi mein makaan ya property kharidna chahte hain? Apni zaroorat batao aur sahi local professional se judo.',
        cta: 'Connect Karo',
      },
      {
        icon: TrendingUp,
        title: 'Sell',
        color: '#FF9900',
        bg: '#fff3e0',
        desc: 'Apni property bechna chahte hain? Local buyers aur professionals ke sath connect karo jo is area ko achhi tarah samjhte hain.',
        cta: 'Property Discuss Karo',
      },
      {
        icon: Key,
        title: 'Rent',
        color: '#22c55e',
        bg: '#dcfce7',
        desc: 'Kiraye ka makaan dhundh rahe hain ya apni property kiraye par deni hai? Seedha local conversation shuru karo.',
        cta: 'Baat Karo',
      },
      {
        icon: Warehouse,
        title: 'Godown / Shed',
        color: '#7c3aed',
        bg: '#ede9fe',
        desc: 'Commercial godown, shed, ya industrial space ki zaroorat? Chander Vihar & Nilothi area mein available options ke liye contact karo.',
        cta: 'Options Dekho',
      },
      {
        icon: Store,
        title: 'Shop / Commercial',
        color: '#11284A',
        bg: '#f1f5f9',
        desc: 'Dukaan, office, ya commercial space lena ya dena chahte hain? Local business community se directly connect karo.',
        cta: 'Connect Karo',
      },
      {
        icon: Headphones,
        title: 'Property Support',
        color: '#AE2721',
        bg: '#fdecea',
        desc: 'Property se judi koi bhi zaroorat ya sawaal — document verification, valuation, ya local guidance. Hum connect karate hain.',
        cta: 'Madad Lo',
      },
    ],

    // ── HAMARA SAFAR (4-step journey) ─────────────────────────────
    safar_eyebrow: 'Hamara Safar',
    safar_title: 'Jo Kiya, Jo Kar Rahe Hain — Chander Vihar Ke Liye.',
    safar_subtitle: 'Sukhwinder Singh Gullu ji ka ground-level safar — leadership se lekar property network tak.',
    safar_steps: [
      {
        num: '01',
        icon: Users,
        title: 'Ground-Level Leadership & Public Support',
        label: 'Aamjan Ki Seva',
        desc: 'Festivals aur Rakhi ke waqt traffic management, Shri Khanda Sahib Chowk par jam solution, aur colony ki roz ki takleefon ka seedha samadhan. Log kehte hain — "Gullu Bhai hai toh kaam hoga."',
        highlights: [
          'Festivals mein traffic & jam management',
          'Shri Khanda Sahib Chowk development',
          'Public ki daily problems solve karna',
          'Raat ki safety — women & elders ke liye street lights',
        ],
        color: '#00A3AD',
      },
      {
        num: '02',
        icon: Trophy,
        title: 'Community Unity & Events',
        label: 'Ekta aur Utsav',
        desc: 'Chander Vihar ki pehli Aitihasik Marathon ka aayojan, youth ko sports aur social service se jodna, aur colony ko ek proud identity dena. Ek connected community banana — yahi sapna hai.',
        highlights: [
          'Chander Vihar ki Pehli Aitihasik Marathon',
          'Youth sports & empowerment events',
          'Colony cleanliness & Swachhata drives',
          'Anti-encroachment awareness campaigns',
        ],
        color: '#FF9900',
      },
      {
        num: '03',
        icon: FileText,
        title: 'Sarkari Yojanayein & Documentation Help',
        label: 'Sarkari Sahayata',
        desc: 'PM-UDAY registry guidance, Aadhaar corrections, Voter ID registration camps, old voter list assistance aur pension forms — har sarkari kaam mein Gullu ji ki team seedha madad karti hai.',
        highlights: [
          'PM-UDAY Registry & property regularization',
          'Aadhaar correction & Voter ID camps',
          'Old voter list verification',
          'Pension & welfare scheme documentation',
        ],
        color: '#22c55e',
      },
      {
        num: '04',
        icon: Home,
        title: 'Property & Local Business Network',
        label: 'Property & Karobar',
        desc: 'Buy, Sell, Rent ke saath-saath Godown, Shed, aur local restaurants/shops ko promote karna. Ek transparent, community-first property network — jahaan local businesses ko bhi izzat milti hai.',
        highlights: [
          'Buy / Sell / Rent — transparent connections',
          'Godown, Shed & commercial leasing',
          'Local restaurants & business promotion',
          'PM-UDAY property documentation support',
        ],
        color: '#AE2721',
      },
    ],

    // ── STORY ─────────────────────────────────────────────────────
    story_eyebrow: 'Hamari Kahani',
    story_title: 'Ek Local Idea — Ek Badi Soch.',
    story_body:
      'Har mohalle ki apni pehchaan hoti hai, apne log, apne rishte aur kaam karne ka apna andaaz. Chander Vihar bhi alag nahi hai. Property ki baat ho ya sarkari kaam — sahi insaan tak pahunchna hamesha aasaan nahi hota.',
    story_body2:
      'Chander Vihar Property Exchange isi seedhi soch ke sath bana hai — logon ko aur property connections ko qarib lana, pehla qadam aasaan banana. Ek aisi jagah jahan log apni zaroorat bata sakein, baat shuru kar sakein, aur apni zaroorat ke hisaab se sahi local professional se jud sakein.',
    story_pillars: [
      { key: 'Log', desc: 'Jo is community mein rehte, kaam karte aur invest karte hain.' },
      { key: 'Connections', desc: 'Woh rishte jo property baat ko aasaan banate hain.' },
      { key: 'Bharosa', desc: 'Har acchi property interaction ki bunyaad.' },
      { key: 'Community', desc: 'Woh local network jo sab ko ek saath laata hai.' },
    ],

    // ── HOW IT WORKS ──────────────────────────────────────────────
    hiw_eyebrow: 'Kaise Kaam Karta Hai',
    hiw_title: 'Seedha. Saral. Bharosemand.',
    hiw_body: 'Koi complicated process nahi. Pehla qadam ekdum aasaan hai.',
    hiw_steps: [
      { num: '01', title: 'Apni Zaroorat Batao', body: 'Property, Sarkari Kaam, ya Community support — bas WhatsApp ya call karo aur apni zaroorat share karo.' },
      { num: '02', title: 'Hum Samjhenge', body: 'Aapki basic zaroorat samajhte hain taaki sahi local connection ban sake.' },
      { num: '03', title: 'Sahi Connection', body: 'Relevant local property professional ya guidance se seedha connect karate hain.' },
      { num: '04', title: 'Baat Karo & Explore Karo', body: 'Available options samjho, zaruri information lo aur apna faisla karo.' },
      { num: '05', title: 'Aage Badho', body: 'Sahi jankari aur sahi direction ke sath apna agla qadam uthao.' },
    ],
    hiw_cta: 'Baat Shuru Karo',

    // ── DIFFERENCE ────────────────────────────────────────────────
    diff_eyebrow: 'Hamse Kyun Judo',
    diff_title: 'CVP Exchange Ka Farq.',
    diff_subtitle: 'Human connection, seedha process aur community trust par bana ek focused local network.',
    diff_points: [
      { icon: MapPin, title: 'Ek Local Network', desc: 'Chander Vihar, Nilothi, Teacher Vihar, Uday Vihar aur Mundka par focused.', color: '#00A3AD' },
      { icon: Users, title: 'Insaani Connection', desc: 'Meaningful baat se better property experience banti hai — yahi manta hai CVP.', color: '#FF9900' },
      { icon: Zap, title: 'Seedha Process', desc: 'Koi complicated journey nahi. Batao, judo, baat karo aur aage badho.', color: '#22c55e' },
      { icon: Eye, title: 'Paaradharshi Soch', desc: 'Clarity, communication aur trust — har step par.', color: '#11284A' },
      { icon: Heart, title: 'Community Pehle', desc: 'Sirf ek property deal nahi — lasting relationships banana hai maqsad.', color: '#AE2721' },
      { icon: Globe, title: 'Local Perspective', desc: 'Hamari baat is area ke logon aur unki zarooraton se judi rehti hai.', color: '#7c3aed' },
    ],

    // ── FOUNDER ───────────────────────────────────────────────────
    founder_eyebrow: 'Network Ke Peeche',
    founder_title: 'Sukhwinder Singh Gullu & Team Chander Vihar Ki Khoobsurti',
    founder_subtitle: 'Zamini Samaj Seva, Nagarik Vikas & Bharosemand Local Connections',
    founder_body: 'Chander Vihar Property Exchange ke peeche Sukhwinder Singh Gullu ji (Sukhvinder Pajji) ki soch hai — logon ko community work aur bharosemand local connections ke zariye ek sath lana.',
    founder_body2: 'Team Chander Vihar Ki Khoobsurti ke sath milkar Gullu ji Shri Khanda Sahib Chowk par traffic management, sewer cleaning, street lights, PM-UDAY documentation, buzurgon ki seva aur yuvon ko positive direction dene mein sargarm rehte hain.',
    founder_badge: 'Sansthapak & Community Leader',
    founder_initiatives: [
      'Traffic Management at Shri Khanda Sahib Chowk',
      'Sewer Line & Drainage Maintenance Drives',
      'Street Lights & Women / Elder Night Safety',
      'Cleanliness & Waste Clearance Campaigns',
      'Senior Citizens Support & Youth Empowerment',
      'PM-UDAY Documentation & Government Schemes',
    ],
    founder_cta: 'Poora Safar Dekho',
    founder_fb_cta: 'Official Facebook Page',
    founder_fb_url: 'https://www.facebook.com/share/1CjeqYtR17/',

    // ── MEDIA ─────────────────────────────────────────────────────
    media_eyebrow: 'Hamare Updates',
    media_title: 'Ground Se — Seedhe Aapke Paas.',
    media_body: 'Colony development, social work, events aur property updates — sab kuch directly dekhein aur connected rahein.',
    media_facebook_label: 'Facebook Community',
    media_facebook_desc: 'Colony updates, civic issues aur social initiatives ke liye official Facebook page.',
    media_youtube_label: 'YouTube Channel',
    media_youtube_desc: 'Local events, community meetings aur ground-level work ke videos.',
    media_photo_label: 'Photo Gallery',
    media_photo_desc: 'Real ground-level activity photos — community meetings, events aur more.',
    media_coming_soon: 'Coming Soon — Real Photos & Videos',

    // ── CTA ───────────────────────────────────────────────────────
    cta_badge: 'Baat Shuru Karo',
    cta_title: 'Aapki Property Journey Sahi Connection Se Shuru Hoti Hai.',
    cta_body: 'Property ho, sarkari kaam ho, ya community support — Gullu ji aur team se seedha baat karo.',
    cta_btn1: 'WhatsApp Karo',
    cta_btn2: 'Call Karo',
    cta_support: 'Chander Vihar & Nilothi — Apna Local Network, Apni Community.',
  },

  hi: {
    // ── HERO ─────────────────────────────────────────────────────
    hero_badge: 'चंदर विहार और निलोठी, पश्चिम दिल्ली',
    hero_eyebrow: 'वार्ड नं. 38/36 — निलोठी एक्सटेंशन, मुंडका',
    h1_line1: 'चंदर विहार का विकास,',
    h1_line2: 'एकता और भरोसा।',
    tagline: 'सुखविंदर सिंह गुल्लू जी के साथ — आपका अपना लोकल नेटवर्क।',
    hero_body:
      'चंदर विहार और निलोठी के लोगों का भरोसा, समाज सेवा, और प्रॉपर्टी से जुड़ने का एक सीधा और सरल रास्ता। प्रॉपर्टी, सरकारी योजनाएं, और Community Development — सब एक जगह।',
    cta1: 'WhatsApp करें',
    cta2: 'Call करें',
    hero_support: 'चंदर विहार और निलोठी — अपना लोकल नेटवर्क, अपनी Community।',

    // ── QUICK ACCESS CARDS ────────────────────────────────────────
    quick_label: 'आज आपको क्या चाहिए?',
    quick_cards: [
      {
        icon: Home,
        title: 'Property & Rent Support',
        titleHi: 'प्रॉपर्टी और किराया',
        desc: 'मकान खरीदना, बेचना, किराए पर लेना, या Godown/Shop/Shed की जरूरत? सीधे Connect करें।',
        items: ['खरीदें / बेचें', 'किराया / Lease', 'गोदाम और शेड', 'Commercial Shops'],
        color: '#00A3AD',
        bg: '#e0f7f8',
        cta: 'Property बात करें',
      },
      {
        icon: FileText,
        title: 'Sarkari Yojanayein & Help',
        titleHi: 'सरकारी सहायता',
        desc: 'PM-UDAY registry, Aadhaar, Voter ID, Pension forms — किसी भी सरकारी काम में सीधी मदद।',
        items: ['PM-UDAY Registry', 'Voter ID & Aadhaar', 'Pension Forms', 'Documentation Help'],
        color: '#FF9900',
        bg: '#fff3e0',
        cta: 'Help लो',
      },
      {
        icon: Trophy,
        title: 'Community & Social Initiatives',
        titleHi: 'समाज सेवा और Events',
        desc: 'Colony development, youth events, marathon, traffic management और public की daily problems।',
        items: ['Colony विकास', 'Youth Events & Marathon', 'Traffic & Civic Issues', 'Public Grievances'],
        color: '#AE2721',
        bg: '#fdecea',
        cta: 'जुड़िए हमसे',
      },
    ],

    // ── SERVICES ─────────────────────────────────────────────────
    services_label: 'Property Services',
    services: [
      { icon: Home, title: 'खरीदें', color: '#00A3AD', bg: '#e0f7f8', desc: 'चंदर विहार या निलोठी में मकान खरीदना चाहते हैं? अपनी जरूरत बताएं और सही local professional से जुड़ें।', cta: 'Connect करें' },
      { icon: TrendingUp, title: 'बेचें', color: '#FF9900', bg: '#fff3e0', desc: 'अपनी property बेचना चाहते हैं? Local buyers और professionals से connect करें जो इस area को अच्छी तरह समझते हैं।', cta: 'Property Discuss करें' },
      { icon: Key, title: 'किराए पर', color: '#22c55e', bg: '#dcfce7', desc: 'किराए का मकान ढूंढ रहे हैं या अपनी property किराए पर देनी है? Local conversation शुरू करें।', cta: 'बात करें' },
      { icon: Warehouse, title: 'Godown / Shed', color: '#7c3aed', bg: '#ede9fe', desc: 'Commercial godown, shed, या industrial space की जरूरत? Chander Vihar & Nilothi area में available options के लिए contact करें।', cta: 'Options देखें' },
      { icon: Store, title: 'Shop / Commercial', color: '#11284A', bg: '#f1f5f9', desc: 'दुकान, office, या commercial space लेना या देना चाहते हैं? Local business community से directly connect करें।', cta: 'Connect करें' },
      { icon: Headphones, title: 'Property Support', color: '#AE2721', bg: '#fdecea', desc: 'Property से जुड़ी कोई भी जरूरत — document verification, valuation, या local guidance। हम connect कराते हैं।', cta: 'मदद लें' },
    ],

    // ── HAMARA SAFAR ──────────────────────────────────────────────
    safar_eyebrow: 'हमारा सफर',
    safar_title: 'जो किया, जो कर रहे हैं — चंदर विहार के लिए।',
    safar_subtitle: 'सुखविंदर सिंह गुल्लू जी का ground-level safar — leadership से लेकर property network तक।',
    safar_steps: [
      {
        num: '01',
        icon: Users,
        title: 'Ground-Level Leadership & Public Support',
        label: 'आमजन की सेवा',
        desc: 'Festivals और Rakhi के वक्त traffic management, Shri Khanda Sahib Chowk पर jam solution, और colony की रोज़ की तकलीफों का सीधा समाधान। लोग कहते हैं — "गुल्लू भाई हैं तो काम होगा।"',
        highlights: [
          'Festivals में traffic & jam management',
          'Shri Khanda Sahib Chowk development',
          'Public की daily problems solve करना',
          'रात की safety — महिलाओं और बुज़ुर्गों के लिए street lights',
        ],
        color: '#00A3AD',
      },
      {
        num: '02',
        icon: Trophy,
        title: 'Community Unity & Events',
        label: 'एकता और उत्सव',
        desc: 'चंदर विहार की पहली ऐतिहासिक Marathon का आयोजन, youth को sports और social service से जोड़ना, और colony को एक proud identity देना।',
        highlights: [
          'चंदर विहार की पहली ऐतिहासिक Marathon',
          'Youth sports & empowerment events',
          'Colony cleanliness & Swachhata drives',
          'Anti-encroachment awareness campaigns',
        ],
        color: '#FF9900',
      },
      {
        num: '03',
        icon: FileText,
        title: 'Sarkari Yojanayein & Documentation Help',
        label: 'सरकारी सहायता',
        desc: 'PM-UDAY registry guidance, Aadhaar corrections, Voter ID registration camps, old voter list assistance और pension forms — हर सरकारी काम में गुल्लू जी की team सीधी मदद करती है।',
        highlights: [
          'PM-UDAY Registry & property regularization',
          'Aadhaar correction & Voter ID camps',
          'Old voter list verification',
          'Pension & welfare scheme documentation',
        ],
        color: '#22c55e',
      },
      {
        num: '04',
        icon: Home,
        title: 'Property & Local Business Network',
        label: 'Property & कारोबार',
        desc: 'Buy, Sell, Rent के साथ-साथ Godown, Shed, और local restaurants/shops को promote करना। एक transparent, community-first property network।',
        highlights: [
          'Buy / Sell / Rent — transparent connections',
          'Godown, Shed & commercial leasing',
          'Local restaurants & business promotion',
          'PM-UDAY property documentation support',
        ],
        color: '#AE2721',
      },
    ],

    // ── STORY ─────────────────────────────────────────────────────
    story_eyebrow: 'हमारी कहानी',
    story_title: 'एक Local Idea — एक बड़ी सोच।',
    story_body:
      'हर मोहल्ले की अपनी पहचान होती है, अपने लोग, अपने रिश्ते और काम करने का अपना अंदाज़। चंदर विहार भी अलग नहीं है। Property की बात हो या सरकारी काम — सही इंसान तक पहुंचना हमेशा आसान नहीं होता।',
    story_body2:
      'Chander Vihar Property Exchange इसी सीधी सोच के साथ बना है — लोगों को और property connections को क़रीब लाना। एक ऐसी जगह जहां लोग अपनी जरूरत बता सकें, बात शुरू कर सकें और सही local professional से जुड़ सकें।',
    story_pillars: [
      { key: 'लोग', desc: 'जो इस community में रहते, काम करते और invest करते हैं।' },
      { key: 'Connections', desc: 'वह रिश्ते जो property बात को आसान बनाते हैं।' },
      { key: 'भरोसा', desc: 'हर अच्छी property interaction की बुनियाद।' },
      { key: 'Community', desc: 'वह local network जो सब को एक साथ लाता है।' },
    ],

    // ── HOW IT WORKS ──────────────────────────────────────────────
    hiw_eyebrow: 'कैसे काम करता है',
    hiw_title: 'सीधा। सरल। भरोसेमंद।',
    hiw_body: 'कोई complicated process नहीं। पहला कदम एकदम आसान है।',
    hiw_steps: [
      { num: '01', title: 'अपनी जरूरत बताएं', body: 'Property, सरकारी काम, या Community support — बस WhatsApp या call करो और अपनी जरूरत share करो।' },
      { num: '02', title: 'हम समझेंगे', body: 'आपकी basic जरूरत समझते हैं ताकि सही local connection बन सके।' },
      { num: '03', title: 'सही Connection', body: 'Relevant local property professional या guidance से सीधा connect कराते हैं।' },
      { num: '04', title: 'बात करो & Explore करो', body: 'Available options समझो, जरूरी जानकारी लो और अपना फैसला करो।' },
      { num: '05', title: 'आगे बढ़ो', body: 'सही जानकारी और सही direction के साथ अपना अगला कदम उठाओ।' },
    ],
    hiw_cta: 'बात शुरू करो',

    // ── DIFFERENCE ────────────────────────────────────────────────
    diff_eyebrow: 'हमसे क्यों जुड़ो',
    diff_title: 'CVP Exchange का फर्क।',
    diff_subtitle: 'Human connection, सीधा process और community trust पर बना एक focused local network।',
    diff_points: [
      { icon: MapPin, title: 'एक Local Network', desc: 'Chander Vihar, Nilothi, Teacher Vihar, Uday Vihar और Mundka पर focused।', color: '#00A3AD' },
      { icon: Users, title: 'इंसानी Connection', desc: 'Meaningful बात से better property experience बनती है — यही मानता है CVP।', color: '#FF9900' },
      { icon: Zap, title: 'सीधा Process', desc: 'कोई complicated journey नहीं। बताओ, जुड़ो, बात करो और आगे बढ़ो।', color: '#22c55e' },
      { icon: Eye, title: 'पारदर्शी सोच', desc: 'Clarity, communication और trust — हर step पर।', color: '#11284A' },
      { icon: Heart, title: 'Community पहले', desc: 'सिर्फ एक property deal नहीं — lasting relationships बनाना है मकसद।', color: '#AE2721' },
      { icon: Globe, title: 'Local Perspective', desc: 'हमारी बात इस area के लोगों और उनकी जरूरतों से जुड़ी रहती है।', color: '#7c3aed' },
    ],

    // ── FOUNDER ───────────────────────────────────────────────────
    founder_eyebrow: 'Network के पीछे',
    founder_title: 'सुखविंदर सिंह गुल्लू व Team Chander Vihar Ki Khoobsurti',
    founder_subtitle: 'ज़मीनी समाज सेवा, नागरिक विकास और भरोसेमंद स्थानीय संपर्क',
    founder_body: 'Chander Vihar Property Exchange के पीछे सुखविंदर सिंह गुल्लू जी (Sukhvinder Pajji) की सोच है — community work और trusted local connections के ज़रिए लोगों को एक साथ लाना।',
    founder_body2: 'Team Chander Vihar Ki Khoobsurti के साथ मिलकर Gullu ji Shri Khanda Sahib Chowk पर traffic management, sewer cleaning, street lights, PM-UDAY documentation, बुजुर्गों की सेवा और युवाओं को positive direction देने में सक्रिय रहते हैं।',
    founder_badge: 'संस्थापक व Community Leader',
    founder_initiatives: [
      'Shri Khanda Sahib Chowk पर Traffic Management',
      'Sewer Line व Drainage Maintenance Drives',
      'Street Lights व महिला/बुज़ुर्ग Night Safety',
      'Cleanliness व Waste Clearance Campaigns',
      'Senior Citizens Support व Youth Empowerment',
      'PM-UDAY Documentation व Government Schemes',
    ],
    founder_cta: 'पूरा सफर देखें',
    founder_fb_cta: 'Official Facebook Page',
    founder_fb_url: 'https://www.facebook.com/share/1CjeqYtR17/',

    // ── MEDIA ─────────────────────────────────────────────────────
    media_eyebrow: 'हमारे Updates',
    media_title: 'Ground से — सीधे आपके पास।',
    media_body: 'Colony development, social work, events और property updates — सब कुछ directly देखें और connected रहें।',
    media_facebook_label: 'Facebook Community',
    media_facebook_desc: 'Colony updates, civic issues और social initiatives के लिए official Facebook page।',
    media_youtube_label: 'YouTube Channel',
    media_youtube_desc: 'Local events, community meetings और ground-level work के videos।',
    media_photo_label: 'Photo Gallery',
    media_photo_desc: 'Real ground-level activity photos — community meetings, events और more।',
    media_coming_soon: 'Coming Soon — Real Photos & Videos',

    // ── CTA ───────────────────────────────────────────────────────
    cta_badge: 'बात शुरू करो',
    cta_title: 'आपकी Property Journey सही Connection से शुरू होती है।',
    cta_body: 'Property हो, सरकारी काम हो, या Community support — Gullu ji और team से सीधे बात करो।',
    cta_btn1: 'WhatsApp करें',
    cta_btn2: 'Call करें',
    cta_support: 'चंदर विहार और निलोठी — अपना Local Network, अपनी Community।',
  },
};

export default HOME_CONTENT;
