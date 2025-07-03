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
    'amenities.wifi': 'Free Wi-Fi',
    'amenities.wifi.desc': 'High-speed internet throughout',
    'amenities.smarttv': 'Smart TV',
    'amenities.smarttv.desc': 'Netflix & streaming ready',
    'amenities.kitchen': 'Fully Equipped Kitchen',
    'amenities.kitchen.desc': 'Cook like a local chef',
    'amenities.fireplace': 'Fireplace',
    'amenities.fireplace.desc': 'Cozy evening ambiance',
    'amenities.pool': 'Private Pool',
    'amenities.pool.desc': 'Infinity pool with sea views',
    'amenities.hottub': 'Hot Tub',
    'amenities.hottub.desc': 'Relax under the stars',
    'amenities.security': 'Secure Access',
    'amenities.security.desc': 'Safe & private entrance',
    'amenities.concierge': 'Concierge Service',
    'amenities.concierge.desc': '24/7 guest support',
    'amenities.petfriendly': 'Pet Friendly',
    'amenities.petfriendly.desc': 'Bring your furry friends',
    'amenities.outdoor': 'Outdoor Dining',
    'amenities.outdoor.desc': 'Al fresco dining setup',
    'amenities.bicycle': 'Bicycle Rental',
    'amenities.bicycle.desc': 'Explore the island',
    'amenities.ac': 'Air Conditioning',
    'amenities.ac.desc': 'Climate control comfort',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Discover the beauty and elegance of your Mediterranean retreat',
    'gallery.view': 'View Image',
    'gallery.all': 'All',
    'gallery.livingroom': 'Living Room',
    'gallery.kitchen': 'Kitchen',
    'gallery.bedroom': 'Bedroom',
    'gallery.outdoor': 'Outdoor',

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
    'explore.beaches': 'Local Beaches',
    'explore.beaches.desc': 'Soft sand, turquoise water',
    'explore.trails': 'Hidden Trails',
    'explore.trails.desc': 'Olive groves and ruins',
    'explore.markets': 'Village Markets',
    'explore.markets.desc': 'Fresh produce, handmade goods',
    'explore.taverna': 'Taverna Akrogiali',
    'explore.taverna.desc': 'Fresh seafood by the harbor',
    'explore.bistro': 'Olive Garden Bistro',
    'explore.bistro.desc': 'Traditional Greek cuisine',
    'explore.terrace': 'Sunset Terrace',
    'explore.terrace.desc': 'Mediterranean fusion',

    // Rental Services
    'services.title': 'Rental Services & Experiences',
    'services.subtitle': 'Enhance your stay with curated experiences and convenient services',
    'services.cars': 'Car Rentals',
    'services.cars.desc': 'Explore the island at your own pace with our trusted rental partners',
    'services.cars.feature1': 'Economy to luxury vehicles',
    'services.cars.feature2': 'Free delivery to villa',
    'services.cars.feature3': 'GPS included',
    'services.boats': 'Boat Tours',
    'services.boats.desc': 'Discover hidden coves and pristine beaches accessible only by sea',
    'services.boats.feature1': 'Half & full day tours',
    'services.boats.feature2': 'Sunset cruises',
    'services.boats.feature3': 'Snorkeling equipment',
    'services.watersports': 'Water Sports',
    'services.watersports.desc': 'Thrilling adventures on the crystal-clear Aegean waters',
    'services.watersports.feature1': 'Jet ski rentals',
    'services.watersports.feature2': 'Paddleboarding',
    'services.watersports.feature3': 'Scuba diving lessons',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about your stay at Seaside Home',
    'faq.wifi.q': 'Is Wi-Fi available?',
    'faq.wifi.a': 'Yes, high-speed Wi-Fi is available throughout the villa, perfect for staying connected or working remotely with a view of the Aegean Sea.',
    'faq.pets.q': 'Are pets allowed?',
    'faq.pets.a': 'We welcome well-behaved pets! Please let us know in advance about your furry companions so we can prepare the villa accordingly. Additional cleaning fees may apply.',
    'faq.keys.q': 'How do I get the keys?',
    'faq.keys.a': 'Our local concierge will meet you at the villa for check-in between 3:00 PM - 8:00 PM. For arrivals outside these hours, we\'ll arrange a secure key pickup location nearby.',
    'faq.views.q': 'Are there sea views?',
    'faq.views.a': 'Absolutely! The villa offers stunning panoramic views of the Aegean Sea from multiple rooms, the terrace, and the infinity pool area. Wake up to breathtaking sunrises over the water.',
    'faq.parking.q': 'Is parking available?',
    'faq.parking.a': 'Yes, the villa includes private parking for up to 2 vehicles. The parking area is secure and conveniently located adjacent to the main entrance.',
    'faq.included.q': 'What\'s included in the rental?',
    'faq.included.a': 'Your stay includes all linens and towels, fully equipped kitchen, complimentary Wi-Fi, pool maintenance, weekly housekeeping, and 24/7 concierge support for any needs during your stay.',
    'faq.beach.q': 'How far is the nearest beach?',
    'faq.beach.a': 'The nearest beach is just a 5-minute walk down a scenic coastal path. Several other beautiful beaches are within 10-15 minutes by car or scooter.',
    'faq.heated.q': 'Is the pool heated?',
    'faq.heated.a': 'The infinity pool is available year-round. During cooler months (November-March), heating is available upon request for an additional fee to ensure your comfort.',

    // Reviews
    'reviews.title': 'Guest Reviews',
    'reviews.subtitle': 'Hear from our guests about their unforgettable experiences',
    'reviews.highlight': 'What they loved most:',
    'reviews.name': 'Maria & James',
    'reviews.location': 'London, UK',
    'reviews.text': 'Absolutely magical! The villa exceeded all our expectations. Waking up to the Aegean Sea every morning was pure bliss. Sarah was incredibly helpful and made our stay seamless.',
    'reviews.loved': 'The infinity pool and sunset views',

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
    'amenities.wifi': 'Δωρεάν Wi-Fi',
    'amenities.wifi.desc': 'Γρήγορο διαδίκτυο παντού',
    'amenities.smarttv': 'Έξυπνη Τηλεόραση',
    'amenities.smarttv.desc': 'Έτοιμη για Netflix & streaming',
    'amenities.kitchen': 'Πλήρως Εξοπλισμένη Κουζίνα',
    'amenities.kitchen.desc': 'Μαγειρέψτε σαν ντόπιος σεφ',
    'amenities.fireplace': 'Τζάκι',
    'amenities.fireplace.desc': 'Ζεστή βραδινή ατμόσφαιρα',
    'amenities.pool': 'Ιδιωτική Πισίνα',
    'amenities.pool.desc': 'Πισίνα υπερχείλισης με θέα θάλασσα',
    'amenities.hottub': 'Τζακούζι',
    'amenities.hottub.desc': 'Χαλαρώστε κάτω από τα αστέρια',
    'amenities.security': 'Ασφαλής Πρόσβαση',
    'amenities.security.desc': 'Ασφαλής & ιδιωτική είσοδος',
    'amenities.concierge': 'Υπηρεσία Θυρωρού',
    'amenities.concierge.desc': 'Υποστήριξη επισκεπτών 24/7',
    'amenities.petfriendly': 'Φιλικό προς τα Κατοικίδια',
    'amenities.petfriendly.desc': 'Φέρτε τους τετράποδους φίλους σας',
    'amenities.outdoor': 'Υπαίθριο Φαγητό',
    'amenities.outdoor.desc': 'Εγκατάσταση φαγητού στον ύπαιθρο',
    'amenities.bicycle': 'Ενοικίαση Ποδηλάτων',
    'amenities.bicycle.desc': 'Εξερευνήστε το νησί',
    'amenities.ac': 'Κλιματισμός',
    'amenities.ac.desc': 'Έλεγχος κλίματος άνεσης',

    // Gallery
    'gallery.title': 'Γκαλερί',
    'gallery.subtitle': 'Ανακαλύψτε την ομορφιά και την κομψότητα του μεσογειακού σας καταφυγίου',
    'gallery.view': 'Προβολή Εικόνας',
    'gallery.all': 'Όλα',
    'gallery.livingroom': 'Σαλόνι',
    'gallery.kitchen': 'Κουζίνα',
    'gallery.bedroom': 'Υπνοδωμάτιο',
    'gallery.outdoor': 'Εξωτερικός Χώρος',

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
    'explore.beaches': 'Τοπικές Παραλίες',
    'explore.beaches.desc': 'Μαλακή άμμος, τυρκουάζ νερό',
    'explore.trails': 'Κρυφά Μονοπάτια',
    'explore.trails.desc': 'Ελαιώνες και ερείπια',
    'explore.markets': 'Χωριάτικες Αγορές',
    'explore.markets.desc': 'Φρέσκα προϊόντα, χειροποίητα αγαθά',
    'explore.taverna': 'Ταβέρνα Ακρογιάλι',
    'explore.taverna.desc': 'Φρέσκα θαλασσινά στο λιμάνι',
    'explore.bistro': 'Μπιστρό Ελαιώνας',
    'explore.bistro.desc': 'Παραδοσιακή ελληνική κουζίνα',
    'explore.terrace': 'Βεράντα Ηλιοβασιλέματος',
    'explore.terrace.desc': 'Μεσογειακή fusion κουζίνα',

    // Rental Services
    'services.title': 'Υπηρεσίες Ενοικίασης & Εμπειρίες',
    'services.subtitle': 'Ενισχύστε τη διαμονή σας με επιμελημένες εμπειρίες και βολικές υπηρεσίες',
    'services.cars': 'Ενοικίαση Αυτοκινήτων',
    'services.cars.desc': 'Εξερευνήστε το νησί με τον δικό σας ρυθμό με τους έμπιστους εταίρους μας ενοικίασης',
    'services.cars.feature1': 'Οικονομικά έως πολυτελή οχήματα',
    'services.cars.feature2': 'Δωρεάν παράδοση στη βίλα',
    'services.cars.feature3': 'GPS συμπεριλαμβάνεται',
    'services.boats': 'Εκδρομές με Σκάφος',
    'services.boats.desc': 'Ανακαλύψτε κρυφούς κόλπους και παρθένες παραλίες προσβάσιμες μόνο από τη θάλασσα',
    'services.boats.feature1': 'Ημιήμερες & ολοήμερες εκδρομές',
    'services.boats.feature2': 'Κρουαζιέρες ηλιοβασιλέματος',
    'services.boats.feature3': 'Εξοπλισμός για κολύμπι με αναπνευστήρα',
    'services.watersports': 'Θαλάσσια Σπορ',
    'services.watersports.desc': 'Συναρπαστικές περιπέτειες στα κρυστάλλινα νερά του Αιγαίου',
    'services.watersports.feature1': 'Ενοικίαση jet ski',
    'services.watersports.feature2': 'Paddleboarding',
    'services.watersports.feature3': 'Μαθήματα κατάδυσης',

    // FAQ
    'faq.title': 'Συχνές Ερωτήσεις',
    'faq.subtitle': 'Όλα όσα πρέπει να γνωρίζετε για τη διαμονή σας στο Παραθαλάσσιο Σπίτι',
    'faq.wifi.q': 'Υπάρχει Wi-Fi;',
    'faq.wifi.a': 'Ναι, γρήγορο Wi-Fi είναι διαθέσιμο σε όλη τη βίλα, ιδανικό για να παραμείνετε συνδεδεμένοι ή να εργαστείτε εξ αποστάσεως με θέα στο Αιγαίο Πέλαγος.',
    'faq.pets.q': 'Επιτρέπονται τα κατοικίδια;',
    'faq.pets.a': 'Καλωσορίζουμε καλοαναθρεμμένα κατοικίδια! Παρακαλούμε ενημερώστε μας εκ των προτέρων για τους τετράποδους συντρόφους σας ώστε να προετοιμάσουμε τη βίλα ανάλογα. Μπορεί να ισχύουν επιπλέον τέλη καθαρισμού.',
    'faq.keys.q': 'Πώς παίρνω τα κλειδιά;',
    'faq.keys.a': 'Ο τοπικός μας θυρωρός θα σας συναντήσει στη βίλα για check-in μεταξύ 15:00 - 20:00. Για αφίξεις εκτός αυτών των ωρών, θα κανονίσουμε ένα ασφαλές σημείο παραλαβής κλειδιών κοντά.',
    'faq.views.q': 'Υπάρχει θέα θάλασσα;',
    'faq.views.a': 'Απολύτως! Η βίλα προσφέρει εκπληκτική πανοραμική θέα στο Αιγαίο Πέλαγος από πολλά δωμάτια, τη βεράντα και την περιοχή της πισίνας υπερχείλισης. Ξυπνήστε με εκπληκτικές ανατολές πάνω από το νερό.',
    'faq.parking.q': 'Υπάρχει πάρκινγκ;',
    'faq.parking.a': 'Ναι, η βίλα περιλαμβάνει ιδιωτικό πάρκινγκ για έως 2 οχήματα. Ο χώρος στάθμευσης είναι ασφαλής και βολικά τοποθετημένος δίπλα στην κύρια είσοδο.',
    'faq.included.q': 'Τι περιλαμβάνεται στην ενοικίαση;',
    'faq.included.a': 'Η διαμονή σας περιλαμβάνει όλα τα σεντόνια και τις πετσέτες, πλήρως εξοπλισμένη κουζίνα, δωρεάν Wi-Fi, συντήρηση πισίνας, εβδομαδιαίο καθάρισμα και υποστήριξη θυρωρού 24/7 για οποιεσδήποτε ανάγκες κατά τη διαμονή σας.',
    'faq.beach.q': 'Πόσο μακριά είναι η πλησιέστερη παραλία;',
    'faq.beach.a': 'Η πλησιέστερη παραλία είναι μόλις 5 λεπτά με τα πόδια κάτω από ένα γραφικό παράκτιο μονοπάτι. Αρκετές άλλες όμορφες παραλίες είναι σε απόσταση 10-15 λεπτών με αυτοκίνητο ή σκούτερ.',
    'faq.heated.q': 'Η πισίνα είναι θερμαινόμενη;',
    'faq.heated.a': 'Η πισίνα υπερχείλισης είναι διαθέσιμη όλο το χρόνο. Κατά τους πιο κρύους μήνες (Νοέμβριος-Μάρτιος), η θέρμανση είναι διαθέσιμη κατόπιν αιτήματος με επιπλέον χρέωση για να εξασφαλίσουμε την άνεσή σας.',

    // Reviews
    'reviews.title': 'Κριτικές Επισκεπτών',
    'reviews.subtitle': 'Ακούστε από τους επισκέπτες μας για τις αξέχαστες εμπειρίες τους',
    'reviews.highlight': 'Αυτό που αγάπησαν περισσότερο:',
    'reviews.name': 'Μαρία & Τζέιμς',
    'reviews.location': 'Λονδίνο, Ηνωμένο Βασίλειο',
    'reviews.text': 'Απολύτως μαγικό! Η βίλα ξεπέρασε όλες μας τις προσδοκίες. Το να ξυπνάμε με το Αιγαίο Πέλαγος κάθε πρωί ήταν καθαρή ευδαιμονία. Η Σάρα ήταν απίστευτα βοηθητική και έκανε τη διαμονή μας άψογη.',
    'reviews.loved': 'Η πισίνα υπερχείλισης και οι θέες ηλιοβασιλέματος',

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
