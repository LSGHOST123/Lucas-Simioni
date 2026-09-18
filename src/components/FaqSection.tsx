import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

interface FaqSectionProps {
  lang: 'pt' | 'en';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#05080c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff77]/10 border border-[#00ff77]/25 text-xs font-bold text-[#00ff77] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            {lang === 'pt' ? 'TIRA-DÚVIDAS' : 'FAQ ASSIST'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase font-['Plus_Jakarta_Sans']">
            {lang === 'pt' ? 'DÚVIDAS ' : 'FREQUENT '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff77] to-emerald-400 drop-shadow-[0_0_25px_rgba(0,255,119,0.3)]">
              {lang === 'pt' ? 'FREQUENTES' : 'QUESTIONS'}
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#00ff77] to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            {lang === 'pt'
              ? 'Tudo o que você precisa saber sobre a entrega, pagamentos e formatos dos produtos.'
              : 'Everything you need to know about delivery, payment methods, and file formats.'}
          </p>
        </div>

        {/* Accordion Container (Screenshot 3 style) */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? 'bg-[#091119] border-[#00ff77]/40 shadow-[0_10px_30px_rgba(0,255,119,0.1)]'
                    : 'bg-[#070d13]/80 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                    {lang === 'pt' ? faq.question : faq.questionEn}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#00ff77] text-black rotate-180 shadow-[0_0_10px_rgba(0,255,119,0.5)]'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5">
                    {lang === 'pt' ? faq.answer : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
