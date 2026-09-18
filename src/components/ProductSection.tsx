import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Filter, Check, ArrowRight, ShieldCheck, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductSectionProps {
  products: Product[];
  lang: 'pt' | 'en';
  onOpenDetails: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  products,
  lang,
  onOpenDetails,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: lang === 'pt' ? 'Todos os Produtos' : 'All Products' },
    { id: 'featured', label: lang === 'pt' ? 'Destaques 🔥' : 'Featured 🔥' },
    { id: 'ebook', label: lang === 'pt' ? 'E-books / PDF' : 'E-books / PDF' },
    { id: 'video_pack', label: lang === 'pt' ? 'Packs de Vídeos' : 'Video Packs' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category match
      let matchesCategory = true;
      if (activeCategory === 'featured') {
        matchesCategory = !!p.isFeatured || !!p.isBestSeller;
      } else if (activeCategory !== 'all') {
        matchesCategory = p.category === activeCategory;
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(query) ||
        p.titleEn.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.descriptionEn.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchQuery]);

  const featuredPack = products.find((p) => p.id === 'pack-1000-videos');

  return (
    <section id="produtos" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00ff77]/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff77]/10 border border-[#00ff77]/25 text-xs font-bold text-[#00ff77] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'pt' ? 'CATÁLOGO OFICIAL' : 'OFFICIAL CATALOG'}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            {lang === 'pt' ? 'MEUS PRODUTOS ' : 'MY DIGITAL '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff77] to-emerald-400 drop-shadow-[0_0_25px_rgba(0,255,119,0.3)]">
              {lang === 'pt' ? 'DIGITAIS' : 'PRODUCTS'}
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#00ff77] to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {lang === 'pt'
              ? 'Packs virais prontos e manuais estratégicos desenvolvidos por Lucas Simioni com entrega imediata via Kirvano.'
              : 'Ready-to-use viral packs and tactical guides developed by Lucas Simioni with instant delivery via Kirvano.'}
          </p>
        </motion.div>

        {/* HERO SPOTLIGHT OFFER: PACK +1000 VÍDEOS (Without prices) */}
        {featuredPack && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 rounded-3xl bg-gradient-to-b from-[#0a1722] to-[#060c12] border-2 border-[#00ff77]/60 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,255,119,0.15)] relative overflow-hidden group"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff77]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 animate-pulse">
              <Flame className="w-4 h-4 fill-current text-amber-300" />
              {lang === 'pt' ? 'MELHOR OFERTA DISPONÍVEL' : 'BEST OFFER AVAILABLE'}
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center pt-4">
              <div className="lg:col-span-8 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-0.5 rounded-full bg-[#00ff77]/20 border border-[#00ff77]/40 text-[#00ff77] text-xs font-bold uppercase">
                    Pack de Vídeos Virais
                  </span>
                  <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                    ★★★★★ (4.9/5.0)
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 font-['Plus_Jakarta_Sans']">
                  {lang === 'pt' ? featuredPack.title : featuredPack.titleEn}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl leading-relaxed">
                  {lang === 'pt' ? featuredPack.description : featuredPack.descriptionEn}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {(lang === 'pt' ? featuredPack.features : featuredPack.featuresEn).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
                      <Check className="w-4 h-4 text-[#00ff77] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#00ff77]" />
                    <span>Garantia Incondicional de 7 Dias</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#00ff77]" />
                    <span>Acesso Imediato no Google Drive</span>
                  </div>
                </div>
              </div>

              {/* Action Box without prices */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#081018]/90 border border-[#00ff77]/30 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] mb-3 shadow-[0_0_15px_rgba(0,255,119,0.3)]">
                  <Flame className="w-6 h-6 text-[#00ff77]" />
                </div>

                <span className="text-xs font-extrabold text-gray-300 uppercase tracking-wider mb-2">
                  {lang === 'pt' ? 'ACESSO VITALÍCIO & COMPLETO' : 'FULL LIFETIME ACCESS'}
                </span>

                <div className="space-y-1 text-xs text-gray-400 mb-5">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'pt' ? 'Licença Comercial Inclusa' : 'Commercial License Included'}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff77]" />
                    <span>{lang === 'pt' ? 'Entrega Instantânea Kirvano' : 'Instant Kirvano Delivery'}</span>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <a
                    href={featuredPack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="featured-pack-buy-btn"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#00ff77] hover:bg-[#00e569] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,119,0.4)] hover:shadow-[0_0_40px_rgba(0,255,119,0.8)] active:scale-95 transition-all duration-200"
                  >
                    <span>{lang === 'pt' ? 'ADQUIRIR PACK AGORA' : 'GET PACK ACCESS NOW'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onOpenDetails(featuredPack)}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 transition-colors cursor-pointer"
                  >
                    {lang === 'pt' ? 'Ver Mais Detalhes' : 'View Full Details'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#00ff77] text-black shadow-[0_0_15px_rgba(0,255,119,0.3)]'
                    : 'bg-[#0b131c] text-gray-400 hover:text-white hover:bg-[#111d2b] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={lang === 'pt' ? 'Buscar e-book ou pack...' : 'Search ebook or pack...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0b131c] border border-white/10 focus:border-[#00ff77] focus:outline-none text-xs text-white placeholder-gray-500 transition-colors"
            />
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  product={product}
                  lang={lang}
                  onOpenDetails={onOpenDetails}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#080d14] rounded-2xl border border-white/5">
            <p className="text-gray-400 text-sm">
              {lang === 'pt'
                ? 'Nenhum produto encontrado com o termo pesquisado.'
                : 'No products matched your search.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
