
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.host': 'Your Host',
    'nav.villa': 'The Villa',
    'nav.gallery': 'Gallery',
    'nav.explore': 'Explore',
    'nav.contact': 'Contact',
    'logo': 'Seaside Home',

    // Hero
    'hero.title': 'Experience Greek',
    'hero.subtitle': 'Island Luxury',
    'hero.description': 'Wake up to the sea breeze and endless Aegean views in our beautiful Mediterranean escape.',
    'hero.cta': 'Book Your Escape',

    // Host Introduction
    'host.title': 'Meet Sarah, Your Host',
    'host.greeting': 'Yamas! I\'m Sarah, and I\'ve been sharing the magic of Greek island life with travelers for over 8 years. Born and raised here, I know all the hidden gems and secret spots that will make your stay unforgettable.',
    'host.description': 'From the best sunset viewpoints to authentic tavernas locals love, I\'m here to ensure your Greek island dream becomes reality. Welcome to our slice of paradise!',
    'host.superhost': 'Airbnb Superhost',
    'host.cta': 'View Airbnb Profile',

    // Stay Overview
    'overview.title': 'Your Greek Island Sanctuary',
    'overview.subtitle': 'Every detail designed for your comfort and Mediterranean relaxation',
    'overview.bedrooms': '3 Bedrooms',
    'overview.bedrooms.desc': 'Sleeps 6 guests',
    'overview.bathrooms': '2 Bathrooms',
    'overview.bathrooms.desc': 'Modern amenities',
    'overview.pool': 'Private Pool',
    'overview.pool.desc': 'Sea view infinity pool',
    'overview.concierge': 'Concierge',
    'overview.concierge.desc': '24/7 support',

    // Amenities
    'amenities.title': 'Luxury Amenities',
    'amenities.subtitle': 'Everything you need for the perfect Mediterranean getaway',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Discover the beauty and elegance of your Mediterranean retreat',
    'gallery.view': 'View Image',

    // Enjoy Your Stay
    'enjoy.title': 'Enjoy Your Stay',
    'enjoy.subtitle': 'Immerse yourself in the authentic Greek island experience',
    'enjoy.relax.title': 'Relax by the Aegean Breeze',
    'enjoy.relax.desc1': 'Step onto your private terrace and feel the gentle Mediterranean wind carry the scent of wild herbs and sea salt. Watch the sun paint the sky in shades of gold and rose as fishing boats return to harbor, their lights twinkling like stars on the water.',
    'enjoy.relax.desc2': 'Our infinity pool seems to merge with the horizon, creating the perfect spot for morning swims or evening contemplation. The sound of waves below provides nature\'s own soundtrack to your island retreat.',
    'enjoy.entertain.title': 'Entertain in Style',
    'enjoy.entertain.desc1': 'The villa\'s open-plan design seamlessly blends indoor and outdoor living, featuring handcrafted furniture, local ceramics, and textiles that celebrate Greek artisanship. Natural stone walls and whitewashed surfaces create the perfect backdrop for memorable gatherings.',
    'enjoy.entertain.desc2': 'Host sunset dinners on the spacious terrace, where the outdoor kitchen makes al fresco dining effortless. The gentle evening light filtering through olive branches creates an atmosphere that transforms every meal into a celebration.',

    // Explore Area
    'explore.title': 'Explore the Area',
    'explore.subtitle': 'Discover the authentic charm of Greek island life just steps from your door',
    'explore.attractions': 'Natural Wonders',
    'explore.restaurants': 'Nearby Restaurants',
    'explore.resources': 'Helpful Resources',
    'explore.download': 'Download',
    'explore.map': 'Area Map',
    'explore.guide': 'Local Guide',
    'explore.manual': 'House Manual',

    // Rental Services
    'services.title': 'Rental Services & Experiences',
    'services.subtitle': 'Enhance your stay with curated experiences and convenient services',
    'services.cars': 'Car Rentals',
    'services.cars.desc': 'Explore the island at your own pace with our trusted rental partners',
    'services.boats': 'Boat Tours',
    'services.boats.desc': 'Discover hidden coves and pristine beaches accessible only by sea',
    'services.watersports': 'Water Sports',
    'services.watersports.desc': 'Thrilling adventures on the crystal-clear Aegean waters',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about your stay at Seaside Home',

    // Reviews
    'reviews.title': 'Guest Reviews',
    'reviews.subtitle': 'Hear from our guests about their unforgettable experiences',
    'reviews.highlight': 'What they loved most:',

    // Rate Experience
    'rate.title': 'Rate Your Experience',
    'rate.subtitle': 'Help future guests by sharing your thoughts about Seaside Home',
    'rate.question': 'How was your stay?',
    'rate.submit': 'Submit Review',
    'rate.thanks': 'Thank You!',
    'rate.thanks.desc': 'Your feedback helps us continue providing exceptional experiences for our guests.',

    // Final CTA
    'cta.title': 'Book Your Stay Today',
    'cta.subtitle': 'Your Greek island escape awaits. Create memories that will last a lifetime in our beautiful Seaside Home.',
    'cta.available': 'Available year-round • Instant booking • Best rate guaranteed',
    'cta.airbnb': 'Book on Airbnb',
    'cta.booking': 'Book on Booking.com',
    'cta.follow': 'Follow our journey',
    'cta.contact': 'Questions? Contact us at',

    // Footer
    'footer.description': 'Your gateway to authentic Greek island luxury. Experience the magic of the Aegean Sea.',
    'footer.links': 'Quick Links',
    'footer.book': 'Book Your Stay',
    'footer.copyright': '© 2024 Seaside Home. All rights reserved.'
  },
  el: {
    // Header
    'nav.host': 'Ο Ξενοδόχος σας',
    'nav.villa': 'Η Βίλα',
    'nav.gallery': 'Γκαλερί',
    'nav.explore': 'Εξερευνήστε',
    'nav.contact': 'Επικοινωνία',
    'logo': 'Παραθαλάσσιο Σπίτι',

    // Hero
    'hero.title': 'Ζήστε την Ελληνική',
    'hero.subtitle': 'Νησιώτικη Πολυτέλεια',
    'hero.description': 'Ξυπνήστε με το αεράκι της θάλασσας και την ατέλειωτη θέα του Αιγαίου στη όμορφη μεσογειακή μας απόδραση.',
    'hero.cta': 'Κλείστε την Απόδρασή σας',

    // Host Introduction
    'host.title': 'Γνωρίστε τη Σάρα, την Ξενοδόχο σας',
    'host.greeting': 'Γεια σας! Είμαι η Σάρα και μοιράζομαι τη μαγεία της ελληνικής νησιώτικης ζωής με ταξιδιώτες εδώ και πάνω από 8 χρόνια. Γεννημένη και μεγαλωμένη εδώ, ξέρω όλα τα κρυφά στολίδια και τα μυστικά μέρη που θα κάνουν τη διαμονή σας αξέχαστη.',
    'host.description': 'Από τα καλύτερα σημεία για ηλιοβασίλεμα μέχρι αυθεντικές ταβέρνες που αγαπούν οι ντόπιοι, είμαι εδώ για να διασφαλίσω ότι το ελληνικό νησιώτικο σας όνειρο θα γίνει πραγματικότητα. Καλώς ήρθατε στη δική μας φέτα παραδείσου!',
    'host.superhost': 'Υπερξενοδόχος Airbnb',
    'host.cta': 'Δείτε το Προφίλ Airbnb',

    // Stay Overview
    'overview.title': 'Το Ελληνικό σας Νησιώτικο Καταφύγιο',
    'overview.subtitle': 'Κάθε λεπτομέρεια σχεδιασμένη για την άνεσή σας και τη μεσογειακή χαλάρωση',
    'overview.bedrooms': '3 Υπνοδωμάτια',
    'overview.bedrooms.desc': 'Φιλοξενεί 6 επισκέπτες',
    'overview.bathrooms': '2 Μπάνια',
    'overview.bathrooms.desc': 'Σύγχρονες ανέσεις',
    'overview.pool': 'Ιδιωτική Πισίνα',
    'overview.pool.desc': 'Πισίνα υπερχείλισης με θέα θάλασσα',
    'overview.concierge': 'Θυρωρός',
    'overview.concierge.desc': 'Υποστήριξη 24/7',

    // Amenities
    'amenities.title': 'Πολυτελείς Ανέσεις',
    'amenities.subtitle': 'Όλα όσα χρειάζεστε για την τέλεια μεσογειακή απόδραση',

    // Gallery
    'gallery.title': 'Γκαλερί',
    'gallery.subtitle': 'Ανακαλύψτε την ομορφιά και την κομψότητα του μεσογειακού σας καταφυγίου',
    'gallery.view': 'Προβολή Εικόνας',

    // Enjoy Your Stay
    'enjoy.title': 'Απολαύστε τη Διαμονή σας',
    'enjoy.subtitle': 'Βυθιστείτε στην αυθεντική ελληνική νησιώτικη εμπειρία',
    'enjoy.relax.title': 'Χαλαρώστε με το Αιγαίο Αεράκι',
    'enjoy.relax.desc1': 'Βγείτε στην ιδιωτική σας βεράντα και νιώστε τον απαλό μεσογειακό άνεμο να μεταφέρει το άρωμα των άγριων βοτάνων και του θαλασσινού αλατιού. Παρακολουθήστε τον ήλιο να βάφει τον ουρανό σε αποχρώσεις χρυσού και ροζ καθώς τα ψαράδικα επιστρέφουν στο λιμάνι, με τα φώτα τους να αστράφτουν σαν αστέρια στο νερό.',
    'enjoy.relax.desc2': 'Η πισίνα υπερχείλισής μας φαίνεται να συγχωνεύεται με τον ορίζοντα, δημιουργώντας το τέλειο σημείο για πρωινά μπάνια ή βραδινό στοχασμό. Ο ήχος των κυμάτων από κάτω παρέχει το φυσικό soundtrack του νησιώτικου σας καταφυγίου.',
    'enjoy.entertain.title': 'Διασκεδάστε με Στυλ',
    'enjoy.entertain.desc1': 'Ο ανοιχτός σχεδιασμός της βίλας συνδυάζει άψογα την εσωτερική και εξωτερική ζωή, με χειροποίητα έπιπλα, τοπικά κεραμικά και υφάσματα που γιορτάζουν την ελληνική τεχνοτροπία. Οι φυσικοί πέτρινοι τοίχοι και οι ασπρισμένες επιφάνειες δημιουργούν το τέλειο σκηνικό για αξέχαστες συγκεντρώσεις.',
    'enjoy.entertain.desc2': 'Φιλοξενήστε δείπνα ηλιοβασιλέματος στην ευρύχωρη βεράντα, όπου η εξωτερική κουζίνα κάνει το φαγητό στον ύπαιθρο χώρο αβίαστο. Το απαλό βραδινό φως που διηθείται μέσα από τα κλαδιά των ελιών δημιουργεί μια ατμόσφαιρα που μετατρέπει κάθε γεύμα σε γιορτή.',

    // Explore Area
    'explore.title': 'Εξερευνήστε την Περιοχή',
    'explore.subtitle': 'Ανακαλύψτε την αυθεντική γοητεία της ελληνικής νησιώτικης ζωής μόλις λίγα βήματα από την πόρτα σας',
    'explore.attractions': 'Φυσικά Θαύματα',
    'explore.restaurants': 'Κοντινά Εστιατόρια',
    'explore.resources': 'Χρήσιμοι Πόροι',
    'explore.download': 'Λήψη',
    'explore.map': 'Χάρτης Περιοχής',
    'explore.guide': 'Τοπικός Οδηγός',
    'explore.manual': 'Εγχειρίδιο Σπιτιού',

    // Rental Services
    'services.title': 'Υπηρεσίες Ενοικίασης & Εμπειρίες',
    'services.subtitle': 'Ενισχύστε τη διαμονή σας με επιμελημένες εμπειρίες και βολικές υπηρεσίες',
    'services.cars': 'Ενοικίαση Αυτοκινήτων',
    'services.cars.desc': 'Εξερευνήστε το νησί με τον δικό σας ρυθμό με τους έμπιστους εταίρους μας ενοικίασης',
    'services.boats': 'Εκδρομές με Σκάφος',
    'services.boats.desc': 'Ανακαλύψτε κρυφούς κόλπους και παρθένες παραλίες προσβάσιμες μόνο από τη θάλασσα',
    'services.watersports': 'Θαλάσσια Σπορ',
    'services.watersports.desc': 'Συναρπαστικές περιπέτειες στα κρυστάλλινα νερά του Αιγαίου',

    // FAQ
    'faq.title': 'Συχνές Ερωτήσεις',
    'faq.subtitle': 'Όλα όσα πρέπει να γνωρίζετε για τη διαμονή σας στο Παραθαλάσσιο Σπίτι',

    // Reviews
    'reviews.title': 'Κριτικές Επισκεπτών',
    'reviews.subtitle': 'Ακούστε από τους επισκέπτες μας για τις αξέχαστες εμπειρίες τους',
    'reviews.highlight': 'Αυτό που αγάπησαν περισσότερο:',

    // Rate Experience
    'rate.title': 'Αξιολογήστε την Εμπειρία σας',
    'rate.subtitle': 'Βοηθήστε μελλοντικούς επισκέπτες μοιράζοντας τις σκέψεις σας για το Παραθαλάσσιο Σπίτι',
    'rate.question': 'Πώς ήταν η διαμονή σας;',
    'rate.submit': 'Υποβολή Κριτικής',
    'rate.thanks': 'Ευχαριστούμε!',
    'rate.thanks.desc': 'Τα σχόλιά σας μας βοηθούν να συνεχίσουμε να παρέχουμε εξαιρετικές εμπειρίες για τους επισκέπτες μας.',

    // Final CTA
    'cta.title': 'Κλείστε τη Διαμονή σας Σήμερα',
    'cta.subtitle': 'Η ελληνική νησιώτικη απόδρασή σας σας περιμένει. Δημιουργήστε αναμνήσεις που θα διαρκέσουν μια ζωή στο όμορφο Παραθαλάσσιο μας Σπίτι.',
    'cta.available': 'Διαθέσιμο όλο το χρόνο • Άμεση κράτηση • Εγγυημένη καλύτερη τιμή',
    'cta.airbnb': 'Κλείστε στο Airbnb',
    'cta.booking': 'Κλείστε στο Booking.com',
    'cta.follow': 'Ακολουθήστε το ταξίδι μας',
    'cta.contact': 'Ερωτήσεις; Επικοινωνήστε μαζί μας στο',

    // Footer
    'footer.description': 'Η πύλη σας στην αυθεντική ελληνική νησιώτικη πολυτέλεια. Ζήστε τη μαγεία του Αιγαίου Πελάγους.',
    'footer.links': 'Γρήγοροι Σύνδεσμοι',
    'footer.book': 'Κλείστε τη Διαμονή σας',
    'footer.copyright': '© 2024 Παραθαλάσσιο Σπίτι. Όλα τα δικαιώματα διατηρούνται.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
