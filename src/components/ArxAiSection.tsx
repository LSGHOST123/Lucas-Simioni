import React, { useState } from 'react';
import { Bot, Sparkles, Eye, Search, Brain, Zap, CheckCircle2, ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface ArxAiSectionProps {
  lang: 'pt' | 'en';
}

type TabMode = 'vision' | 'search' | 'reasoning' | 'fast';

export const ArxAiSection: React.FC<ArxAiSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<TabMode>('vision');

  const arxTabs = [
    { id: 'vision', label: 'Vision Mode', icon: Eye, latency: '12ms', speed: '192 tok/s' },
    { id: 'search', label: 'Web Search Live', icon: Search, latency: '18ms', speed: '240 tok/s' },
    { id: 'reasoning', label: lang === 'pt' ? 'ARX PRO (Raciocínio)' : 'ARX PRO (Reasoning)', icon: Brain, latency: '24ms', speed: '180 tok/s' },
    { id: 'fast', label: 'ARX FAST (Latência)', icon: Zap, latency: '8ms', speed: '320 tok/s' },
  ];

  return (
    <section id="arx-ia" className="py-24 relative overflow-hidden bg-[#03060a] border-t border-white/5">
      {/* Background Neural Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#00ff77]/10 blur-[140px] rounded-full pointer-events-none -z-10 animate-glow-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00ff77]/10 border border-[#00ff77]/30 text-xs font-bold text-[#00ff77] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,255,119,0.2)]">
            <Bot className="w-3.5 h-3.5" />
            {lang === 'pt' ? 'PRODUTO PRINCIPAL • IA PROPRIETÁRIA' : 'FLAGSHIP PRODUCT • PROPRIETARY AI'}
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4 uppercase font-['Plus_Jakarta_Sans']">
            ARX 1.0{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff77] via-emerald-400 to-[#00b36b] drop-shadow-[0_0_35px_rgba(0,255,119,0.4)]">
              FAST / PRO
            </span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00ff77] to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {lang === 'pt'
              ? 'A inteligência artificial proprietária desenvolvida por Lucas Simioni. Equipada com análise visual profunda (Vision Mode), busca ativa em tempo real na internet (Web Search Live) e respostas de latência ultrabaixa.'
              : 'The flagship artificial intelligence engineered by Lucas Simioni. Equipped with deep computer vision (Vision Mode), real-time web crawler (Web Search Live), and ultra-low latency response times.'}
          </p>
        </motion.div>

        {/* Big Launch Banner with direct link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#07131e] via-[#091b29] to-[#07131e] border border-[#00ff77]/40 shadow-[0_10px_40px_rgba(0,255,119,0.15)] flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-[#00ff77] uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00ff77] animate-ping" />
              <span>{lang === 'pt' ? 'SISTEMA ONLINE & DISPONÍVEL' : 'SYSTEM ONLINE & OPERATIONAL'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {lang === 'pt' ? 'Experimente a ARX 1.0 Diretamente no Navegador' : 'Experience ARX 1.0 Directly in Your Browser'}
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              URL Oficial: <span className="font-mono text-[#00ff77]">https://arx.lucassimioni.cloud-ip.cc/</span>
            </p>
          </div>

          <a
            href="https://arx.lucassimioni.cloud-ip.cc/"
            target="_blank"
            rel="noopener noreferrer"
            id="launch-arx-ai-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00ff77] hover:bg-[#00e569] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,119,0.4)] hover:shadow-[0_0_40px_rgba(0,255,119,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
          >
            <span>{lang === 'pt' ? 'ACESSAR ARX 1.0 AGORA' : 'LAUNCH ARX 1.0 NOW'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Highlight Badges (Inside the grid, fully responsive without sticking out) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-3 bg-[#080e14]/90 border border-[#00ff77]/30 px-5 py-4 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl text-left">
            <div className="w-10 h-10 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/40 flex items-center justify-center text-[#00ff77] shadow-[0_0_15px_rgba(0,255,119,0.2)] shrink-0">
              <Eye className="w-5 h-5 text-[#00ff77]" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-[#00ff77] uppercase">VISION MODE</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">
                {lang === 'pt' ? 'Análise Visual & Optical OCR Ativo' : 'Visual Analysis & Optical OCR Active'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#080e14]/90 border border-[#00ff77]/30 px-5 py-4 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl text-left">
            <div className="w-10 h-10 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/40 flex items-center justify-center text-[#00ff77] shadow-[0_0_15px_rgba(0,255,119,0.2)] shrink-0">
              <Search className="w-5 h-5 text-[#00ff77]" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-[#00ff77] uppercase">WEB SEARCH LIVE</div>
              <div className="text-xs sm:text-sm font-semibold text-gray-200">
                {lang === 'pt' ? 'Busca em Tempo Real na Internet' : 'Real-time Live Web Crawler'}
              </div>
            </div>
          </div>
        </div>

        {/* 2 Model Flavors comparison: FAST vs PRO */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 text-left">
          {/* ARX 1.0 FAST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[#070e17] border border-[#00ff77]/30 p-6 relative overflow-hidden group hover:border-[#00ff77] transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#00ff77]/15 border border-[#00ff77]/30 text-[#00ff77] text-xs font-extrabold uppercase tracking-wider">
                ARX 1.0 FAST
              </span>
              <span className="text-xs font-mono text-[#00ff77] bg-[#00ff77]/10 px-2.5 py-0.5 rounded border border-[#00ff77]/20">
                ⚡ ~8ms Latência
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
              {lang === 'pt' ? 'Velocidade Extrema & Diálogo Fluido' : 'Extreme Speed & Fluid Dialogue'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              {lang === 'pt'
                ? 'Projetada para respostas instantâneas, redação rápida, brainstorm, código limpo e interações do dia a dia com taxa de transferência de até 320 tokens/segundo.'
                : 'Engineered for instant answers, fast writing, brainstorming, clean coding, and everyday interactions streaming up to 320 tokens/second.'}
            </p>
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff77]" />
                <span>Streaming instantâneo sem delay perceptível</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff77]" />
                <span>Otimizado para produtividade contínua</span>
              </div>
            </div>
          </motion.div>

          {/* ARX 1.0 PRO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-[#070e17] border border-emerald-500/40 p-6 relative overflow-hidden group hover:border-[#00ff77] transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                ARX 1.0 PRO
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                🧠 Vision + Web Search
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
              {lang === 'pt' ? 'Visão Computacional & Busca Web' : 'Computer Vision & Live Web Search'}
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              {lang === 'pt'
                ? 'O modo mais poderoso: lê e analisa imagens com Optical OCR (Vision Mode), navega pela web em tempo real (Web Search Live) e executa raciocínio analítico denso.'
                : 'The powerhouse engine: inspects and parses images with Optical OCR (Vision Mode), browses live internet sources (Web Search Live), and reasons through complex problems.'}
            </p>
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff77]" />
                <span>Vision Mode com extração OCR e segmentação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff77]" />
                <span>Web Search Live com dados atualizados da web</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Neural Terminal Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#060c12]/95 border border-[#00ff77]/30 shadow-[0_25px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden text-left"
        >
          {/* Terminal Tabs Header */}
          <div className="px-5 py-3.5 bg-[#091119] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
              {arxTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabMode)}
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#00ff77] text-black shadow-[0_0_15px_rgba(0,255,119,0.4)]'
                        : 'bg-[#0e1722] text-gray-400 hover:text-white hover:bg-[#132030] border border-white/5'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Metrics */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#00ff77] ml-auto">
              <span className="flex items-center gap-1 bg-[#00ff77]/10 px-2.5 py-1 rounded-md border border-[#00ff77]/25">
                <Zap className="w-3 h-3 text-[#00ff77]" />
                {arxTabs.find((t) => t.id === activeTab)?.latency}
              </span>
              <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 text-gray-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {arxTabs.find((t) => t.id === activeTab)?.speed}
              </span>
            </div>
          </div>

          {/* Terminal Code Body */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-3 bg-[#04080d] overflow-x-auto">
            {activeTab === 'vision' && (
              <>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="text-[#00ff77] font-bold">&gt;_ $</span>
                  <span className="text-gray-200">
                    ARX_PRO:vision_mode(&quot;tensor_schematic_v1.png&quot;, analysis=&quot;ocr+segmentation&quot;)
                  </span>
                </div>
                <div className="space-y-2 pt-2 text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Reconhecimento Óptico: Diagrama neural e textos extraídos com 99.8% de precisão.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Segmentação Visual: Mapeamento de matrizes de tensores e delimitação de nós em 12ms.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Extração de Dados: Parâmetros FP16 estruturados sem distorções óticas.</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'search' && (
              <>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="text-[#00ff77] font-bold">&gt;_ $</span>
                  <span className="text-gray-200">
                    ARX_PRO:web_search_live(&quot;ultimas atualizações tech e mercado digital 2026&quot;)
                  </span>
                </div>
                <div className="space-y-2 pt-2 text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Crawler em Tempo Real: 18 fontes rastreadas e indexadas em 18ms.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Síntese Algorítmica: Informações cruzadas com timestamps recentes e checagem de fontes.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Resumo Executivo: Resposta estruturada pronta para aplicação imediata.</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'reasoning' && (
              <>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="text-[#00ff77] font-bold">&gt;_ $</span>
                  <span className="text-gray-200">
                    ARX_PRO:deep_chain_of_thought(task=&quot;otimizacao_arquitetura_digital&quot;)
                  </span>
                </div>
                <div className="space-y-2 pt-2 text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Cadeia de Raciocínio: 4 etapas lógicas avaliadas antes da emissão final da resposta.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Validação de Hipóteses: Descarte de caminhos sub-ótimos com penalização de heurísticas.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Conclusão Estratégica: Solução robusta com mitigação de falhas e alto grau de assertividade.</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'fast' && (
              <>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="text-[#00ff77] font-bold">&gt;_ $</span>
                  <span className="text-gray-200">
                    ARX_FAST:stream_generate(tokens_per_sec=320, latency=&quot;8ms&quot;)
                  </span>
                </div>
                <div className="space-y-2 pt-2 text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Velocidade Pura: Respostas instantâneas para chats fluidos e produtividade contínua.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Cache Neural: Latência de 8ms em prompts recorrentes e templates.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                    <span>Acesso Web Livre: Acessível diretamente pelo endereço oficial da IA.</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Terminal Bottom Tags & Direct Action */}
          <div className="px-6 py-4 bg-[#080e15] border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-gray-400">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#00ff77]/10 text-[#00ff77] border border-[#00ff77]/25">
                ⚡ OPTICAL OCR
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                ✨ MULTIMODAL FP16
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10">
                🌐 WEB SEARCH LIVE
              </span>
            </div>

            <a
              href="https://arx.lucassimioni.cloud-ip.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00ff77] hover:text-white transition-colors"
            >
              <span>{lang === 'pt' ? 'Abrir site da ARX 1.0' : 'Open ARX 1.0 site'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
