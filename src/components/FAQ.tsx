
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, high-speed Wi-Fi is available throughout the villa, perfect for staying connected or working remotely with a view of the Aegean Sea."
    },
    {
      question: "Are pets allowed?",
      answer: "We welcome well-behaved pets! Please let us know in advance about your furry companions so we can prepare the villa accordingly. Additional cleaning fees may apply."
    },
    {
      question: "How do I get the keys?",
      answer: "Our local concierge will meet you at the villa for check-in between 3:00 PM - 8:00 PM. For arrivals outside these hours, we'll arrange a secure key pickup location nearby."
    },
    {
      question: "Are there sea views?",
      answer: "Absolutely! The villa offers stunning panoramic views of the Aegean Sea from multiple rooms, the terrace, and the infinity pool area. Wake up to breathtaking sunrises over the water."
    },
    {
      question: "Is parking available?",
      answer: "Yes, the villa includes private parking for up to 2 vehicles. The parking area is secure and conveniently located adjacent to the main entrance."
    },
    {
      question: "What's included in the rental?",
      answer: "Your stay includes all linens and towels, fully equipped kitchen, complimentary Wi-Fi, pool maintenance, weekly housekeeping, and 24/7 concierge support for any needs during your stay."
    },
    {
      question: "How far is the nearest beach?",
      answer: "The nearest beach is just a 5-minute walk down a scenic coastal path. Several other beautiful beaches are within 10-15 minutes by car or scooter."
    },
    {
      question: "Is the pool heated?",
      answer: "The infinity pool is available year-round. During cooler months (November-March), heating is available upon request for an additional fee to ensure your comfort."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('faq.title')}
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="font-playfair text-lg font-semibold text-gray-800 hover:text-aegean-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-gray-600 leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
