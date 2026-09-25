import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site.config';

export const CONTACT_CONTENT = {
  en: {
    hero_eyebrow: 'Contact Us',
    hero_title: "Let's Talk About Your Property Requirement.",
    hero_body: "Looking to Buy, Sell or Rent? Need a local property connection? Have a property-related question? Let's Start With a Conversation.",

    reach_label: 'Reach Us Directly',
    contacts: [
      { icon: Phone, label: 'Call Us', value: SITE_CONFIG.rawPhone, href: `tel:${SITE_CONFIG.rawPhone}`, color: '#FF9900', sub: 'Monday – Sunday, 10:00 AM – 8:00 PM' },
      { icon: MessageCircle, label: 'WhatsApp', value: SITE_CONFIG.rawWhatsapp, href: `https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`, color: '#22c55e', sub: 'Quick response via WhatsApp' },
      { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: '#00A3AD', sub: 'Send us your property details' },
      { icon: MapPin, label: 'Location', value: SITE_CONFIG.address, href: null, color: '#11284A', sub: 'Our primary focus area' },
    ],

    start_title: 'How to Get Started',
    start_steps: [
      'Call or WhatsApp us with your requirement.',
      'We understand what you are looking for.',
      'We connect you with the right local professional.',
      'Have a conversation and move forward with confidence.',
    ],
    start_note: 'No registration required. No complicated process. Just a conversation.',

    cta_call: 'Call Now',
    cta_whatsapp: 'WhatsApp Us',
    cta_email: 'Send Email',

    social_title: 'Stay Connected With CVP Exchange',
    social_body: 'Follow us for local updates, property-related information and community-focused content.',
    social_cta: 'Follow Us',

    faq_eyebrow: 'Frequently Asked Questions',
    faq_title: 'Common Questions Answered.',
    faqs: [
      { q: 'How can Chander Vihar Property Exchange help me?', a: 'We help you start a property conversation and connect with relevant local property professionals based on your requirement. Whether you want to Buy, Sell, Rent or need Property Support — we make the first connection easier.' },
      { q: 'Do you deal with buying and selling requirements?', a: 'Yes. The network is focused on helping people connect around Buy, Sell, Rent and Property Support requirements. We help create the right local connection for each type of property requirement.' },
      { q: 'Which areas do you focus on?', a: 'Our primary focus is Chander Vihar and Nilothi. We are a locally focused property network for this community and its surrounding residential areas.' },
      { q: 'Can I contact you for a rental requirement?', a: 'Yes. You can contact us for rental-related requirements — whether you are looking for a rental property or planning to rent out your property. We help start a local property conversation.' },
      { q: 'Can property owners contact you?', a: 'Yes. Property owners can reach out to discuss their property-related requirements. We connect owners with the relevant local property professionals.' },
      { q: 'Do I need to register on the website?', a: 'No. The website is designed as a simple promotional and contact platform. You can directly contact the team via Call, WhatsApp or Email — no registration required.' },
      { q: 'How do I get started?', a: `Simply Call us at ${SITE_CONFIG.rawPhone}, WhatsApp us at ${SITE_CONFIG.rawWhatsapp} or Email us at ${SITE_CONFIG.email} — and share your requirement. We will take it from there.` },
    ],

    final_title: 'Your Property Journey Starts With the Right Connection.',
    final_body: "Whether you're buying, selling, renting or looking for the right local property connection — let's connect.",
    final_support: 'Chander Vihar & Nilothi — Connected through people, relationships and trust.',

    founder_eyebrow: 'Direct Guidance',
    founder_title: 'Reach Out to Sukhvinder Pajji & Team',
    founder_subtitle: 'Community Leader & Local Guide for Chander Vihar & Nilothi',
    founder_body: 'Behind Chander Vihar Property Exchange is Sukhvinder Pajji (Sukhwinder Singh Gullu), dedicated to helping residents with property guidance, PM-UDAY regularization paperwork, and ground-level civic assistance.',
    founder_body2: 'Whether you need assistance with property documentation, traffic concerns at Shri Khanda Sahib Chowk, sewer/street light issues, or local welfare support — reach out directly to Sukhvinder Pajji & Team Chander Vihar Ki Khoobsurti.',
    founder_badge: 'Founder & Community Lead',
    founder_cta: 'View Chander Vihar Impact',
    founder_fb_cta: 'Official Facebook Page',
    founder_fb_url: 'https://www.facebook.com/share/1CjeqYtR17/',
  },

  hi: {
    hero_eyebrow: 'संपर्क करें',
    hero_title: 'अपनी प्रॉपर्टी जरूरत पर बात करें।',
    hero_body: 'खरीदना, बेचना या किराए पर लेना चाहते हैं? स्थानीय प्रॉपर्टी कनेक्शन चाहिए? प्रॉपर्टी से जुड़ा कोई सवाल है? आइए, बातचीत शुरू करते हैं।',

    reach_label: 'हमसे सीधे संपर्क करें',
    contacts: [
      { icon: Phone, label: 'हमें कॉल करें', value: SITE_CONFIG.rawPhone, href: `tel:${SITE_CONFIG.rawPhone}`, color: '#FF9900', sub: 'सोमवार – रविवार, सुबह 10 – शाम 8 बजे' },
      { icon: MessageCircle, label: 'WhatsApp', value: SITE_CONFIG.rawWhatsapp, href: `https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=नमस्ते%2C%20मुझे%20चंदर%20विहार%20में%20प्रॉपर्टी%20के%20बारे%20में%20जानकारी%20चाहिए`, color: '#22c55e', sub: 'WhatsApp पर जल्दी जवाब मिलेगा' },
      { icon: Mail, label: 'ईमेल', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: '#00A3AD', sub: 'अपनी प्रॉपर्टी की जानकारी भेजें' },
      { icon: MapPin, label: 'स्थान', value: SITE_CONFIG.address, href: null, color: '#11284A', sub: 'हमारा मुख्य फोकस क्षेत्र' },
    ],

    start_title: 'शुरुआत कैसे करें',
    start_steps: [
      'अपनी जरूरत के साथ हमें Call या WhatsApp करें।',
      'हम समझते हैं कि आप क्या ढूंढ रहे हैं।',
      'हम आपको सही स्थानीय प्रोफेशनल से जोड़ते हैं।',
      'बातचीत करें और आत्मविश्वास के साथ आगे बढ़ें।',
    ],
    start_note: 'कोई registration जरूरी नहीं। कोई complicated process नहीं। बस एक बातचीत।',

    cta_call: 'अभी कॉल करें',
    cta_whatsapp: 'WhatsApp करें',
    cta_email: 'ईमेल भेजें',

    social_title: 'CVP Exchange से जुड़े रहें',
    social_body: 'स्थानीय अपडेट्स, प्रॉपर्टी से जुड़ी जानकारी और community-focused content के लिए हमें follow करें।',
    social_cta: 'हमें Follow करें',

    faq_eyebrow: 'सामान्य प्रश्न',
    faq_title: 'अक्सर पूछे जाने वाले सवाल।',
    faqs: [
      { q: 'चंदर विहार प्रॉपर्टी एक्सचेंज मेरी किस तरह मदद कर सकता है?', a: 'हम आपकी प्रॉपर्टी बातचीत की शुरुआत करने और आपकी जरूरत के अनुसार relevant local property professionals से connect करने में मदद करते हैं। चाहे आप Buy, Sell, Rent करना चाहते हों या Property Support चाहिए — हम पहला कनेक्शन आसान बनाते हैं।' },
      { q: 'क्या आप Buy और Sell से जुड़ी requirements में मदद करते हैं?', a: 'हां। हमारा नेटवर्क Buy, Sell, Rent और Property Support से जुड़ी requirements के लिए connections बनाने पर केंद्रित है। हर प्रकार की प्रॉपर्टी जरूरत के लिए सही स्थानीय कनेक्शन बनाने में मदद करते हैं।' },
      { q: 'आपका मुख्य क्षेत्र कौन-सा है?', a: 'हमारा मुख्य फोकस चंदर विहार और निलोठी है। हम इस कम्युनिटी और आसपास के रिहायशी क्षेत्रों के लिए एक locally focused property network हैं।' },
      { q: 'क्या मैं rental requirement के लिए संपर्क कर सकता हूं?', a: 'हां। आप rental requirement के लिए हमसे संपर्क कर सकते हैं — चाहे आप किराए की प्रॉपर्टी ढूंढ रहे हों या अपनी प्रॉपर्टी किराए पर देना चाहते हों। हम स्थानीय प्रॉपर्टी बातचीत शुरू करने में मदद करते हैं।' },
      { q: 'क्या property owners भी संपर्क कर सकते हैं?', a: 'हां। property owners अपनी property-related requirements पर बातचीत के लिए संपर्क कर सकते हैं। हम owners को relevant local property professionals से जोड़ते हैं।' },
      { q: 'क्या वेबसाइट पर registration करना जरूरी है?', a: 'नहीं। यह वेबसाइट एक simple promotional और contact platform के रूप में बनाई गई है। आप सीधे Call, WhatsApp या Email के जरिए team से संपर्क कर सकते हैं — कोई registration जरूरी नहीं।' },
      { q: 'शुरुआत कैसे करें?', a: `बस हमें ${SITE_CONFIG.rawPhone} पर Call करें, ${SITE_CONFIG.rawWhatsapp} पर WhatsApp करें या ${SITE_CONFIG.email} पर Email करें — और अपनी जरूरत बताएं। आगे का काम हम करेंगे।` },
    ],

    final_title: 'आपकी प्रॉपर्टी यात्रा सही कनेक्शन से शुरू होती है।',
    final_body: 'चाहे आप प्रॉपर्टी खरीद रहे हों, बेच रहे हों, किराए पर ले रहे हों या सही स्थानीय कनेक्शन की तलाश में हों — आइए, जुड़ते हैं।',
    final_support: 'चंदर विहार और निलोठी — लोगों, रिश्तों और भरोसे से जुड़ा स्थानीय नेटवर्क।',

    founder_eyebrow: 'सीधा संपर्क व मार्गदर्शन',
    founder_title: 'सुखविंदर पज्जी व टीम से संपर्क करें',
    founder_subtitle: 'चंदर विहार व निलोठी के स्थानीय जनसेवक व मार्गदर्शक',
    founder_body: 'चंदर विहार प्रॉपर्टी एक्सचेंज के पीछे सुखविंदर पज्जी (सुखविंदर सिंह गुल्लू) का मार्गदर्शन है, जो निवासियों को प्रॉपर्टी, PM-UDAY कागजी कार्रवाई और धरातल पर नागरिक सहायता प्रदान करते हैं।',
    founder_body2: 'चाहे आपको प्रॉपर्टी डाक्यूमेंटेशन, श्री खांडा साहिब चौक ट्रैफिक, सीवर/स्ट्रीट लाइट समस्या या स्थानीय समाज सेवा सहायता चाहिए — सीधे सुखविंदर पज्जी व Team Chander Vihar Ki Khoobsurti से संपर्क करें।',
    founder_badge: 'संस्थापक व कम्युनिटी लीडर',
    founder_cta: 'चंदर विहार विकास देखें',
    founder_fb_cta: 'ऑफिशियल फेसबुक पेज',
    founder_fb_url: 'https://www.facebook.com/share/1CjeqYtR17/',
  },
};

export default CONTACT_CONTENT;
