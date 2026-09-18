import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  lang: 'pt' | 'en';
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang }) => {
  const scrollToProducts = () => {
    const el = document.querySelector('#produtos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#05080c] via-[#07111a] to-[#040609] text-center border-t border-white/5">
      {/* Central Radiance Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00ff77]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
          <span className="block">{lang === 'pt' ? 'A ERA LSGHOST' : 'THE DIGITAL ERA'}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff77] via-emerald-400 to-[#00b36b] drop-shadow-[0_0_40px_rgba(0,255,119,0.5)]">
            {lang === 'pt' ? 'COMEÇA AGORA.' : 'STARTS NOW.'}
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {lang === 'pt'
            ? 'Não fique para trás na maior revolução tecnológica da história. Ative seu ecossistema digital hoje mesmo.'
            : 'Do not stay behind in the greatest technological revolution. Activate your high-performance digital ecosystem today.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToProducts}
            id="cta-bottom-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#00ff77] hover:bg-[#00e569] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_35px_rgba(0,255,119,0.5)] hover:shadow-[0_0_55px_rgba(0,255,119,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>{lang === 'pt' ? 'ATIVAR ACESSO AGORA' : 'ACTIVATE ACCESS NOW'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
