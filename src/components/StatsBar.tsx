import React from 'react';
import { DollarSign, Layers, Film, ShieldCheck, Zap } from 'lucide-react';

interface StatsBarProps {
  lang: 'pt' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ lang }) => {
  const stats = [
    {
      icon: DollarSign,
      value: 'R$ 5.000+',
      label: lang === 'pt' ? 'Vendas Comprovadas' : 'Verified Revenue',
      detail: lang === 'pt' ? 'Resultados reais de alunos e clientes' : 'Real customer & student results',
    },
    {
      icon: Film,
      value: '+1.000',
      label: lang === 'pt' ? 'Vídeos Virais Prontos' : 'Viral Ready Videos',
      detail: lang === 'pt' ? 'Resolução HD/4K sem direitos autorais' : 'HD/4K clips copyright-free',
    },
    {
      icon: Layers,
      value: '14+',
      label: lang === 'pt' ? 'Produtos & Softwares' : 'Products & Softwares',
      detail: lang === 'pt' ? 'E-books, packs virais e apps de IA' : 'E-books, viral packs & AI apps',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: lang === 'pt' ? 'Garantia Kirvano' : 'Kirvano Guarantee',
      detail: lang === 'pt' ? '7 dias de garantia incondicional' : '7 days unconditional money back',
    },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#070c12]/60 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0a121b]/80 border border-white/5 hover:border-[#00ff77]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 group-hover:from-white group-hover:to-[#00ff77] transition-all">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
