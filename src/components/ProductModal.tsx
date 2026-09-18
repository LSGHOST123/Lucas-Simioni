import React from 'react';
import { X, Check, ShieldCheck, ArrowUpRight, Zap, Download, Lock } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  lang: 'pt' | 'en';
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, lang }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-[#080e15] border border-[#00ff77]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#091522] to-[#0b1b2a] border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-[#00ff77]/15 border border-[#00ff77]/30 text-[#00ff77] text-xs font-bold uppercase tracking-wider mb-3">
            {lang === 'pt' ? product.categoryLabel : product.categoryLabelEn}
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight font-['Plus_Jakarta_Sans']">
            {lang === 'pt' ? product.title : product.titleEn}
          </h3>

          <div className="flex items-center gap-2 mt-3 text-xs text-[#00ff77] font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'pt' ? 'Material Digital com Acesso Vitalício' : 'Digital Resource with Lifetime Access'}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {lang === 'pt' ? 'Descrição do Material' : 'Overview & Purpose'}
            </h4>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {lang === 'pt' ? product.description : product.descriptionEn}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              {lang === 'pt' ? 'O Que Está Incluso' : 'What is Included'}
            </h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {(lang === 'pt' ? product.features : product.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Check className="w-4 h-4 text-[#00ff77] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery & Guarantee notice */}
          <div className="p-4 rounded-2xl bg-[#00ff77]/5 border border-[#00ff77]/20 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00ff77]/10 flex items-center justify-center text-[#00ff77] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs text-gray-300">
              <span className="font-bold text-white block">
                {lang === 'pt' ? 'Garantia Incondicional de 7 Dias' : '7-Day Unconditional Guarantee'}
              </span>
              {lang === 'pt'
                ? 'Pagamento 100% protegido pela plataforma Kirvano com entrega automatizada no seu e-mail.'
                : '100% secured payment via Kirvano with instant automated download access in your email.'}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#060b10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#00ff77]" />
            <span>{lang === 'pt' ? 'Checkout Oficial Seguro' : 'Official Secure Checkout'}</span>
          </div>

          <div className="flex w-full sm:w-auto items-center gap-3">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300 transition-colors"
            >
              {lang === 'pt' ? 'Fechar' : 'Close'}
            </button>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#00ff77] hover:bg-[#00e569] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,119,0.4)] hover:scale-105 active:scale-95 transition-all"
            >
              <span>{lang === 'pt' ? 'Comprar Agora' : 'Buy Now'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
