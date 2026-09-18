import React from 'react';
import { Gamepad2, Terminal, Bot, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ROADMAP_ITEMS } from '../data/products';

interface RoadmapSectionProps {
  lang: 'pt' | 'en';
}

const iconMap: Record<string, React.ElementType> = {
  Gamepad2,
  Terminal,
  Bot,
  Code2,
};

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ lang }) => {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#04070b]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00ff77]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff77]/10 border border-[#00ff77]/25 text-xs font-bold text-[#00ff77] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'pt' ? 'FUTURAS ATUALIZAÇÕES' : 'FUTURE UPDATES'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 uppercase font-['Plus_Jakarta_Sans']">
            {lang === 'pt' ? 'O QUE VEM ' : 'WHAT IS '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff77] to-emerald-400 drop-shadow-[0_0_25px_rgba(0,255,119,0.3)]">
              {lang === 'pt' ? 'POR AÍ.' : 'NEXT.'}
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#00ff77] to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'pt'
              ? 'Próximos lançamentos, módulos e novidades em desenvolvimento pelo criador Lucas Simioni.'
              : 'Upcoming releases, modules, and software under active development by creator Lucas Simioni.'}
          </p>
        </motion.div>

        {/* 4 Cards Grid: Jogos, Softwares, ARX 2.0, App Builder (No dates!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#080e15]/90 border border-white/10 hover:border-[#00ff77]/40 p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] group backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0e1722] border border-white/5 flex items-center justify-center text-[#00ff77] mb-5 group-hover:scale-110 group-hover:border-[#00ff77]/40 group-hover:shadow-[0_0_20px_rgba(0,255,119,0.25)] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#00ff77] tracking-wider mb-3">
                  {lang === 'pt' ? item.tag : item.tagEn}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff77] transition-colors font-['Plus_Jakarta_Sans']">
                  {lang === 'pt' ? item.title : item.titleEn}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {lang === 'pt' ? item.description : item.descriptionEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
