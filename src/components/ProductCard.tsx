import React from 'react';
import {
  Flame,
  TrendingUp,
  ShoppingBag,
  Video,
  Cpu,
  Lightbulb,
  Home,
  DollarSign,
  Sparkles,
  Film,
  Calendar,
  Zap,
  Boxes,
  Bot,
  ArrowUpRight,
  Check,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  lang: 'pt' | 'en';
  onOpenDetails: (product: Product) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Flame,
  TrendingUp,
  ShoppingBag,
  Video,
  Cpu,
  Lightbulb,
  Home,
  DollarSign,
  Sparkles,
  Film,
  Calendar,
  Zap,
  Boxes,
  Bot,
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, lang, onOpenDetails }) => {
  const IconComponent = iconMap[product.icon] || Sparkles;

  return (
    <div
      id={`product-card-${product.id}`}
      className={`group relative rounded-2xl bg-[#09111a]/90 border transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
        product.isBestSeller || product.id === 'pack-1000-videos'
          ? 'border-[#00ff77]/50 shadow-[0_10px_35px_rgba(0,255,119,0.12)] hover:border-[#00ff77] hover:shadow-[0_15px_50px_rgba(0,255,119,0.25)]'
          : 'border-white/10 hover:border-[#00ff77]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]'
      } hover:-translate-y-1.5`}
    >
      {/* Top Banner / Badge */}
      {product.badge && (
        <div className="absolute top-0 right-0 z-10">
          <div className="text-[10px] font-extrabold tracking-wider px-3 py-1 bg-gradient-to-r from-[#00ff77] to-[#00b36b] text-black uppercase rounded-bl-xl shadow-md">
            {lang === 'pt' ? product.badge : product.badgeEn || product.badge}
          </div>
        </div>
      )}

      {/* Card Header & Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,119,0.4)] transition-all duration-300">
            <IconComponent className="w-6 h-6 text-[#00ff77]" />
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">
              {lang === 'pt' ? product.categoryLabel : product.categoryLabelEn}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00ff77]" />
              <span>{lang === 'pt' ? 'Entrega Instantânea' : 'Instant Delivery'}</span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-[#00ff77] transition-colors leading-snug mb-2 font-['Plus_Jakarta_Sans']">
          {lang === 'pt' ? product.title : product.titleEn}
        </h3>

        <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
          {lang === 'pt' ? product.description : product.descriptionEn}
        </p>

        {/* Feature bullets */}
        <div className="space-y-1.5 mb-5 border-t border-white/5 pt-3">
          {(lang === 'pt' ? product.features : product.featuresEn).slice(0, 3).map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
              <Check className="w-3.5 h-3.5 text-[#00ff77] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer & Action Button (No prices displayed) */}
      <div className="p-6 pt-0 bg-transparent mt-auto">
        <div className="flex items-center justify-between mb-4 border-t border-white/5 pt-4 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 text-[#00ff77]">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-semibold">{lang === 'pt' ? 'Checkout Oficial' : 'Official Checkout'}</span>
          </div>

          <button
            onClick={() => onOpenDetails(product)}
            className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{lang === 'pt' ? 'Detalhes' : 'Preview'}</span>
          </button>
        </div>

        <div className="flex gap-2">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            id={`buy-btn-${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#00ff77] hover:bg-[#00e569] text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(0,255,119,0.25)] hover:shadow-[0_0_25px_rgba(0,255,119,0.6)] active:scale-95 transition-all duration-200"
          >
            <span>{lang === 'pt' ? 'Adquirir Agora' : 'Get Access'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
