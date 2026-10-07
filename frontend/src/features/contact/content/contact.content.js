import { PhoneIcon, WhatsAppIcon, EmailIcon, GoogleMapsIcon } from '@/components/common/Icons';
import { SITE_CONFIG } from '@/config/site.config';

export const CONTACT_CONTENT = {
  en: {
    hero_eyebrow: 'Contact Us',
    hero_title: "Let's Talk About Your Property Requirement.",
    hero_body: "Looking to Buy, Sell or Rent? Need a local property connection? Have a property-related question? Let's Start With a Conversation.",

    reach_label: 'Reach Us Directly',
    contacts: [
      { icon: PhoneIcon, label: 'Call Us', value: SITE_CONFIG.rawPhone, href: `tel:${SITE_CONFIG.rawPhone}`, color: '#FF9900', sub: 'Monday – Sunday, 10:00 AM – 8:00 PM' },
      { icon: WhatsAppIcon, label: 'WhatsApp', value: SITE_CONFIG.rawWhatsapp, href: `https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`, color: '#22c55e', sub: 'Quick response via WhatsApp' },
      { icon: EmailIcon, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: '#00A3AD', sub: 'Send us your property details' },
      { icon: GoogleMapsIcon, label: 'Location', value: SITE_CONFIG.address, href: null, color: '#11284A', sub: 'Our primary focus area' },
    ],

    start_title: 'How to Get Started',
    start_steps: [
      'Call or WhatsApp us with your requirement.',
      'We understand what you are looking for.',
      'We connect you with the right local professional.',
      'Have a conversation and move forward with confidence.',
    ],
    start_note: 'No registration required. No complicated process. Just a conversation.',

    cta_call: 'Talk to Us Directly',
    cta_whatsapp: 'WhatsApp Us Now',
    cta_email: 'Email Your Query',

    social_title: 'Follow Our Community Journey',
    social_body: 'Stay connected through our active social channels for local updates and community work.',

    faq_eyebrow: 'Questions & Answers',
    faq_title: 'Frequently Asked Questions',
    faqs: [
      { q: 'Do I need to register on the website?', a: 'No. The website is designed as a simple promotional and contact platform. You can directly contact the team via Call, WhatsApp or Email - no registration required.' },
      { q: 'How do I get started?', a: `Simply Call us at ${SITE_CONFIG.rawPhone}, WhatsApp us at ${SITE_CONFIG.rawWhatsapp} or Email us at ${SITE_CONFIG.email} - and share your requirement. We will take it from there.` },
      { q: 'What areas do you cover?', a: 'We primarily focus on Chander Vihar and Nilothi, along with surrounding West Delhi areas including Vikaspuri, Paschim Vihar, Tilak Nagar, Nangloi, and Nihal Vihar.' },
      { q: 'What types of property do you handle?', a: 'We assist with residential houses/flats, rental properties, godowns, sheds, commercial shops, and property investment opportunities.' },
      { q: 'Is there any fee to make an inquiry?', a: 'No. Making an inquiry or having an initial property conversation is completely free of charge.' },
    ],

    final_title: 'Ready to Start Your Property Journey?',
    final_body: "Reach out to Gullu Ji and team today. Whether you're buying, selling, renting, or inquiring - we're here to help.",
    final_support: 'Chander Vihar & Nilothi — Your Local Network, Your Community.',
  },

  hi: {
    hero_eyebrow: 'संपर्क करें',
    hero_title: 'अपनी प्रॉपर्टी आवश्यकता पर हमसे बात करें।',
    hero_body: 'खरीदना, बेचना या किराए पर लेना चाहते हैं? स्थानीय संपत्ति नेटवर्क से जुड़ना चाहते हैं? आइए, एक सीधी बातचीत से शुरुआत करते हैं।',

    reach_label: 'सीधा संपर्क करें',
    contacts: [
      { icon: PhoneIcon, label: 'फोन करें', value: SITE_CONFIG.rawPhone, href: `tel:${SITE_CONFIG.rawPhone}`, color: '#FF9900', sub: 'सोमवार – रविवार, सुबह 10:00 – शाम 8:00' },
      { icon: WhatsAppIcon, label: 'व्हाट्सएप', value: SITE_CONFIG.rawWhatsapp, href: `https://wa.me/${SITE_CONFIG.rawWhatsapp}?text=Hi%2C%20I%20want%20to%20connect%20regarding%20a%20property%20in%20Chander%20Vihar`, color: '#22c55e', sub: 'व्हाट्सएप पर तुरंत प्रतिक्रिया' },
      { icon: EmailIcon, label: 'ईमेल', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: '#00A3AD', sub: 'अपनी प्रॉपर्टी का विवरण भेजें' },
      { icon: GoogleMapsIcon, label: 'स्थान', value: SITE_CONFIG.address, href: null, color: '#11284A', sub: 'हमारा प्राथमिक कार्य क्षेत्र' },
    ],

    start_title: 'शुरुआत कैसे करें',
    start_steps: [
      'अपनी आवश्यकता के साथ हमें कॉल या व्हाट्सएप करें।',
      'हम समझते हैं कि आप क्या ढूंढ रहे हैं।',
      'हम आपको सही स्थानीय प्रोफेशनल से जोड़ते हैं।',
      'विश्वास के साथ बातचीत करें और आगे बढ़ें।',
    ],
    start_note: 'कोई रजिस्ट्रेशन आवश्यक नहीं है। कोई जटिल प्रक्रिया नहीं। केवल एक सीधी बातचीत।',

    cta_call: 'हमसे सीधे बात करें',
    cta_whatsapp: 'व्हाट्सएप पर संदेश भेजें',
    cta_email: 'ईमेल द्वारा संपर्क करें',

    social_title: 'हमारे सोशल मीडिया से जुड़ें',
    social_body: 'स्थानीय अपडेट और सामुदायिक कार्यों की ताज़ा जानकारी के लिए हमारे सोशल चैनलों से जुड़े रहें।',

    faq_eyebrow: 'सवाल व जवाब',
    faq_title: 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    faqs: [
      { q: 'क्या वेबसाइट पर रजिस्ट्रेशन की आवश्यकता है?', a: 'नहीं। वेबसाइट केवल जानकारी और संपर्क हेतु बनाई गई है। आप सीधे कॉल, व्हाट्सएप या ईमेल द्वारा संपर्क कर सकते हैं - कोई रजिस्ट्रेशन आवश्यक नहीं है।' },
      { q: 'शुरुआत कैसे करें?', a: `बस हमें ${SITE_CONFIG.rawPhone} पर कॉल करें, ${SITE_CONFIG.rawWhatsapp} पर व्हाट्सएप करें या ${SITE_CONFIG.email} पर ईमेल करें - और अपनी आवश्यकता साझा करें।` },
      { q: 'आपका प्राथमिक कार्य क्षेत्र कौन सा है?', a: 'हम मुख्य रूप से चंदर विहार और निलोठी, तथा आसपास के पश्चिम दिल्ली क्षेत्रों जैसे विकासपुरी, पश्चिम विहार, तिलक नगर, नांगलोई और निहाल विहार को कवर करते हैं।' },
      { q: 'आप किस प्रकार की प्रॉपर्टी डील करते हैं?', a: 'हम रिहायशी मकान/फ्लैट, किराये की प्रॉपर्टी, गोदाम, शेड, व्यावसायिक दुकानें और प्रॉपर्टी इन्वेस्टमेंट में मार्गदर्शन प्रदान करते हैं।' },
      { q: 'क्या पूछताछ करने का कोई शुल्क है?', a: 'नहीं। पूछताछ करना या प्रॉपर्टी पर चर्चा करना पूरी तरह से निःशुल्क है।' },
    ],

    final_title: 'अपनी प्रॉपर्टी यात्रा शुरू करने के लिए तैयार हैं?',
    final_body: 'आज ही गुल्लू जी और टीम से संपर्क करें। चाहे आप खरीद रहे हों, बेच रहे हों, किराए पर ले रहे हों — हम सहायता के लिए तैयार हैं।',
    final_support: 'चंदर विहार एवं निलोठी — आपका अपना स्थानीय नेटवर्क, आपका अपना समुदाय।',
  },
};

export default CONTACT_CONTENT;
