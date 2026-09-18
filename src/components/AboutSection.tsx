import React from 'react';
import { User, Youtube, Instagram, Award, Rocket, CheckCircle2, TrendingUp, ShieldCheck, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';
import { motion } from 'motion/react';

interface AboutSectionProps {
  lang: 'pt' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[#04070b] border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[300px] bg-[#00ff77]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff77]/10 border border-[#00ff77]/25 text-xs font-bold text-[#00ff77] uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            {lang === 'pt' ? 'SOBRE O CRIADOR' : 'ABOUT THE CREATOR'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase font-['Plus_Jakarta_Sans']">
            {lang === 'pt' ? 'QUEM É ' : 'WHO IS '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff77] to-emerald-400 drop-shadow-[0_0_25px_rgba(0,255,119,0.3)]">
              LUCAS SIMIONI
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#00ff77] to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'pt'
              ? 'Desenvolvedor, criador de inteligências artificiais e especialista em produtos digitais de alta escala sob a marca LSGHOST.'
              : 'Software engineer, artificial intelligence architect, and digital product specialist behind the LSGHOST brand.'}
          </p>
        </motion.div>

        {/* Profile Card & Story Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story & Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#081018] via-[#060c14] to-[#04080e] border border-[#00ff77]/30 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#00ff77]/15 border border-[#00ff77]/30 text-[#00ff77] text-xs font-extrabold tracking-wider uppercase">
                  LSGHOST CREATOR
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold">
                  {lang === 'pt' ? '+R$ 5.000 em Vendas Comprovadas' : '+R$ 5,000+ in Proven Sales'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
                {lang === 'pt'
                  ? 'Construindo o futuro com inteligência artificial prática e produtos que geram valor real.'
                  : 'Building the future through actionable AI and high-impact digital products.'}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  {lang === 'pt'
                    ? 'Lucas Simioni é o desenvolvedor e estrategista digital à frente da marca LSGHOST. Combinando engenharia de software moderna, arquitetura de inteligência artificial e visão de monetização prática, desenvolveu a IA ARX 1.0 (Fast & Pro), o copiloto CHARMA-AI e a linha de soluções Alpha.'
                    : 'Lucas Simioni is the engineer and strategist leading the LSGHOST ecosystem. Merging modern software engineering, proprietary neural architectures, and pragmatic digital monetization, he created the ARX 1.0 AI (Fast & Pro), CHARMA-AI, and the Alpha software line.'}
                </p>
                <p>
                  {lang === 'pt'
                    ? 'Com foco em alavancagem sem enrolação, seus produtos digitais já acumulam mais de R$ 5.000 em faturamento comprovado na internet — oferecendo desde packs virais de alta retenção para criadores de conteúdo até e-books práticos e ferramentas que economizam centenas de horas de trabalho.'
                    : 'With an unyielding focus on pure execution without theoretical fluff, his digital assets have generated over R$ 5,000 in proven online revenue — delivering high-retention viral assets for creators, actionable guides, and automated software.'}
                </p>
              </div>

              {/* Badges Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/5">
                {[
                  lang === 'pt' ? 'Criador da IA ARX 1.0 (Fast & Pro)' : 'Creator of ARX 1.0 AI (Fast & Pro)',
                  lang === 'pt' ? 'Criador do CHARMA-AI Wingman' : 'Creator of CHARMA-AI Wingman',
                  lang === 'pt' ? 'Mais de R$ 5.000 em vendas validadas' : 'Over R$ 5,000 in validated sales',
                  lang === 'pt' ? 'Entrega 100% automatizada e segura' : '100% automated & secure delivery',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                {lang === 'pt' ? 'Canais Oficiais:' : 'Official Channels:'}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/10 hover:bg-red-600 border border-red-500/20 hover:border-red-500 text-red-400 hover:text-white text-xs font-bold transition-all"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube @LSGHOST_1
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600/10 hover:bg-pink-600 border border-pink-500/20 hover:border-pink-500 text-pink-400 hover:text-white text-xs font-bold transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram @lucas_simioni_
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* 3 Pillar Cards on the Right */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Card 1: Vendas Comprovadas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-[#080e15] border border-white/10 hover:border-[#00ff77]/40 p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,119,0.1)] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#00ff77] transition-colors">
                {lang === 'pt' ? '+R$ 5.000 em Resultados Comprovados' : '+R$ 5,000+ in Proven Track Record'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'pt'
                  ? 'Faturamento real construído através da venda de infoprodutos de alta qualidade, packs virais com retenção otimizada e checkout seguro.'
                  : 'Real revenue achieved through high-quality digital info-products, viral media packs optimized for algorithm retention, and instant checkouts.'}
              </p>
            </motion.div>

            {/* Card 2: Inteligência Artificial Proprietária */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl bg-[#080e15] border border-[#00ff77]/30 p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,119,0.15)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#00ff77]/10 text-[#00ff77] text-[10px] font-extrabold uppercase rounded-bl-xl border-l border-b border-[#00ff77]/30">
                DESTAQUE
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#00ff77] transition-colors">
                {lang === 'pt' ? 'Criador da IA ARX 1.0 (Fast & Pro)' : 'Architect of ARX 1.0 AI (Fast & Pro)'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'pt'
                  ? 'Inteligência artificial proprietária equipada com Vision Mode (análise visual por OCR), Web Search Live e raciocínio profundo acessível online.'
                  : 'Proprietary artificial intelligence featuring computer vision OCR, real-time live search, and analytical reasoning.'}
              </p>
            </motion.div>

            {/* Card 3: Ecossistema de Software */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl bg-[#080e15] border border-white/10 hover:border-[#00ff77]/40 p-6 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,119,0.1)] group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-[#00ff77] transition-colors">
                {lang === 'pt' ? 'Tecnologia Alpha & Headless' : 'Alpha Tech & Headless Architecture'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {lang === 'pt'
                  ? 'Desenvolvimento de túneis como o Alpha Proxy (bypass universal de CORS no Google Apps Script) e o AlphaDatabase v25 para máxima flexibilidade.'
                  : 'Engineering custom infrastructure such as the Alpha Proxy CORS tunnel and the unified AlphaDatabase v25 REST connector.'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
