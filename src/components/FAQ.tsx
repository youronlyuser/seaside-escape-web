
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.wifi.q'),
      answer: t('faq.wifi.a')
    },
    {
      question: t('faq.pets.q'),
      answer: t('faq.pets.a')
    },
    {
      question: t('faq.keys.q'),
      answer: t('faq.keys.a')
    },
    {
      question: t('faq.views.q'),
      answer: t('faq.views.a')
    },
    {
      question: t('faq.parking.q'),
      answer: t('faq.parking.a')
    },
    {
      question: t('faq.included.q'),
      answer: t('faq.included.a')
    },
    {
      question: t('faq.beach.q'),
      answer: t('faq.beach.a')
    },
    {
      question: t('faq.heated.q'),
      answer: t('faq.heated.a')
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
