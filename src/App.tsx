import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StatsBar } from './components/StatsBar';
import { ArxAiSection } from './components/ArxAiSection';
import { ProductSection } from './components/ProductSection';
import { RoadmapSection } from './components/RoadmapSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { PRODUCTS } from './data/products';
import { Product } from './types';

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05080c] text-white selection:bg-[#00ff77]/30 selection:text-white font-['Plus_Jakarta_Sans'] relative">
      {/* Universal Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,119,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,179,107,0.04)_0%,transparent_70%)]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,119,0.04)_0%,transparent_70%)]" />
      </div>

      {/* Main Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      <main>
        {/* 1. Hero: Introduz Lucas Simioni (LSGHOST), autoridade e propostas */}
        <Hero lang={lang} />

        {/* 2. Sobre Lucas Simioni: Trajetória, +R$ 5.000 em vendas comprovadas e canais oficiais */}
        <AboutSection lang={lang} />

        {/* 3. Indicadores de Autoridade e Números */}
        <StatsBar lang={lang} />

        {/* 4. PRODUTO PRINCIPAL: IA ARX 1.0 (FAST & PRO), Vision Mode, Web Search Live & link https://arx.lucassimioni.cloud-ip.cc/ */}
        <ArxAiSection lang={lang} />

        {/* 5. Catálogo de Produtos Digitais (Pack +1000 Vídeos & 10 E-books Kirvano) */}
        <ProductSection
          products={PRODUCTS}
          lang={lang}
          onOpenDetails={(p) => setSelectedProduct(p)}
        />

        {/* 6. Roadmap ("O QUE VEM POR AÍ") */}
        <RoadmapSection lang={lang} />

        {/* 8. FAQ ("DÚVIDAS FREQUENTES") */}
        <FaqSection lang={lang} />

        {/* 9. Chamada Final para Ação */}
        <CtaBanner lang={lang} />
      </main>

      {/* 10. Rodapé Oficial */}
      <Footer lang={lang} />

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        lang={lang}
      />

      {/* Botão Flutuante Voltar ao Topo */}
      {showToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top"
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-[#09131d]/90 hover:bg-[#00ff77] border border-[#00ff77]/30 text-[#00ff77] hover:text-black shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
