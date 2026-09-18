import React from 'react';
import { ArrowRight, Sparkles, Bot, TrendingUp, ShieldCheck, Youtube, Instagram, ExternalLink, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../data/products';

interface HeroProps {
  lang: 'pt' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Glows & Cyber Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#00ff77]/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Creator Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff77]/10 border border-[#00ff77]/30 text-xs font-extrabold text-[#00ff77] tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(0,255,119,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#00ff77] animate-ping" />
          {lang === 'pt'
            ? 'LUCAS SIMIONI • DESENVOLVEDOR & CRIADOR DIGITAL'
            : 'LUCAS SIMIONI • SOFTWARE ENGINEER & CREATOR'}
        </motion.div>

        {/* Master Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase max-w-5xl mx-auto leading-[1.08] font-['Plus_Jakarta_Sans']"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 drop-shadow-sm">
            {lang === 'pt' ? 'TRANSFORMANDO VISÃO EM' : 'TRANSFORMING VISION INTO'}
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00ff77] to-[#00b36b] drop-shadow-[0_0_40px_rgba(0,255,119,0.35)]">
            {lang === 'pt' ? 'RESULTADOS DIGITAIS.' : 'DIGITAL RESULTS.'}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {lang === 'pt'
            ? 'Desenvolvedor da IA ARX 1.0 (Fast & Pro), engenheiro de soluções digitais e criador de infoprodutos de alta escala. Mais de R$ 5.000 em vendas comprovadas e um ecossistema completo de tecnologia.'
            : 'Creator of the ARX 1.0 AI (Fast & Pro), digital solutions architect, and high-scale infoproduct creator. Over R$ 5,000 in proven sales with a full technology ecosystem.'}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          {/* Primary: Go to Flagship AI ARX 1.0 */}
          <button
            onClick={() => scrollTo('#arx-ia')}
            id="hero-cta-arx"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00ff77] hover:bg-[#00e569] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(0,255,119,0.4)] hover:shadow-[0_0_50px_rgba(0,255,119,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>{lang === 'pt' ? 'CONHECER MINHA IA (ARX 1.0)' : 'EXPLORE MY AI (ARX 1.0)'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary: Go to Digital Products */}
          <button
            onClick={() => scrollTo('#produtos')}
            id="hero-cta-products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#091118]/90 hover:bg-[#0e1b26] border border-white/10 hover:border-[#00ff77]/40 text-gray-200 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-xl transition-all duration-200 cursor-pointer"
          >
            <TrendingUp className="w-4 h-4 text-[#00ff77]" />
            <span>{lang === 'pt' ? 'VER PRODUTOS DIGITAIS' : 'VIEW DIGITAL PRODUCTS'}</span>
          </button>

          {/* Tertiary: About Lucas */}
          <button
            onClick={() => scrollTo('#sobre')}
            id="hero-cta-about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
          >
            <span>{lang === 'pt' ? 'SOBRE MIM' : 'ABOUT ME'}</span>
          </button>
        </motion.div>

        {/* Highlight Stats Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl bg-[#080e15]/80 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl text-xs font-semibold text-gray-300"
        >
          <div className="flex items-center gap-2 text-[#00ff77]">
            <TrendingUp className="w-4 h-4" />
            <span className="font-bold">+R$ 5.000 em Vendas Comprovadas</span>
          </div>
          <span className="hidden sm:inline text-gray-600">•</span>
          <div className="flex items-center gap-2 text-white">
            <Bot className="w-4 h-4 text-[#00ff77]" />
            <span>Criador da IA ARX 1.0 (Fast & Pro)</span>
          </div>
          <span className="hidden sm:inline text-gray-600">•</span>
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Infoprodutos Validados na Kirvano</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
