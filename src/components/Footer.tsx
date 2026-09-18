import React from 'react';
import { Bot, Youtube, Instagram, ArrowUp, ShieldCheck } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

interface FooterProps {
  lang: 'pt' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030508] border-t border-white/5 pt-16 pb-12 text-gray-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Creator */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] shadow-[0_0_15px_rgba(0,255,119,0.2)]">
                <Bot className="w-5 h-5 text-[#00ff77]" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                  LUCAS SIMIONI
                </span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#00ff77]/20 text-[#00ff77] border border-[#00ff77]/40 tracking-wider">
                  LSGHOST
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              {lang === 'pt'
                ? 'Desenvolvedor da inteligência artificial ARX 1.0 (Fast & Pro), criador de infoprodutos validados na Kirvano e soluções digitais de alta conversão.'
                : 'Developer of ARX 1.0 AI (Fast & Pro), creator of validated digital products on Kirvano and high-converting tech solutions.'}
            </p>

            <div className="pt-2">
              <span className="text-xs font-black tracking-widest text-[#00ff77] uppercase bg-[#00ff77]/10 px-3 py-1 rounded-full border border-[#00ff77]/20">
                {lang === 'pt' ? 'DESENVOLVEDOR & CRIADOR INDEPENDENTE' : 'SOFTWARE ENGINEER & CREATOR'}
              </span>
            </div>
          </div>

          {/* Navigation links (No Apps / Aplicações) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-3 font-['Plus_Jakarta_Sans']">
              {lang === 'pt' ? 'NAVEGAÇÃO' : 'NAVIGATION'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#00ff77] transition-colors">
                  {lang === 'pt' ? 'Início' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#00ff77] transition-colors">
                  {lang === 'pt' ? 'Sobre Lucas Simioni' : 'About Lucas'}
                </a>
              </li>
              <li>
                <a href="#arx-ia" className="hover:text-[#00ff77] transition-colors">
                  {lang === 'pt' ? 'IA ARX 1.0' : 'ARX 1.0 AI'}
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#00ff77] transition-colors">
                  {lang === 'pt' ? 'Produtos Digitais' : 'Digital Products'}
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#00ff77] transition-colors">
                  {lang === 'pt' ? 'O Que Vem Por Aí' : 'Roadmap'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#00ff77] transition-colors">
                  {lang === 'pt' ? 'Perguntas Frequentes' : 'FAQ'}
                </a>
              </li>
            </ul>
          </div>

          {/* Ecosystem & Redes (Only YouTube & Instagram - CHARMA removed!) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-3 font-['Plus_Jakarta_Sans']">
              {lang === 'pt' ? 'ECOSSISTEMA & REDES' : 'ECOSYSTEM & NETWORKS'}
            </h4>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff77]" />
                <span>ARX 1.0 FAST / PRO (Vision &amp; Web Search)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff77]" />
                <span>Catálogo de Infoprodutos Kirvano</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ff77]" />
                <span>+R$ 5.000 em Vendas Comprovadas</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="text-[11px] font-bold text-gray-400 mb-2 uppercase">
                {lang === 'pt' ? 'CANAIS OFICIAIS:' : 'OFFICIAL CHANNELS:'}
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/20 transition-all flex items-center gap-2 text-xs font-semibold"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube @LSGHOST_1</span>
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-pink-600/10 hover:bg-pink-600 text-pink-400 hover:text-white border border-pink-500/20 transition-all flex items-center gap-2 text-xs font-semibold"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram @lucas_simioni_</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Lucas Simioni (LSGHOST). Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00ff77]" />
              Kirvano Secured
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-[#00ff77] text-gray-400 hover:text-black transition-all cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
