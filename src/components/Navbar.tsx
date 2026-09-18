import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

interface NavbarProps {
  lang: 'pt' | 'en';
  setLang: (lang: 'pt' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'pt' ? 'SOBRE MIM' : 'ABOUT', href: '#sobre' },
    { name: lang === 'pt' ? 'IA ARX 1.0' : 'ARX 1.0 AI', href: '#arx-ia', highlight: true },
    { name: lang === 'pt' ? 'PRODUTOS' : 'PRODUCTS', href: '#produtos' },
    { name: lang === 'pt' ? 'ROADMAP' : 'ROADMAP', href: '#roadmap' },
    { name: lang === 'pt' ? 'FAQ' : 'FAQ', href: '#faq' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05080c]/95 backdrop-blur-xl border-b border-[#00ff77]/20 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-[#05080c]/40 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group cursor-pointer"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-[#00ff77]/10 border border-[#00ff77]/30 flex items-center justify-center text-[#00ff77] shadow-[0_0_15px_rgba(0,255,119,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,119,0.5)] group-hover:border-[#00ff77] transition-all duration-300">
            <Bot className="w-5 h-5 text-[#00ff77] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                LUCAS SIMIONI
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#00ff77]/20 text-[#00ff77] border border-[#00ff77]/40 tracking-wider">
                LSGHOST
              </span>
            </div>
            <span className="text-[10px] text-gray-400 -mt-0.5 tracking-wider uppercase font-semibold">
              Criador & Desenvolvedor
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-gray-300 uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`transition-colors duration-200 cursor-pointer ${
                link.highlight
                  ? 'text-[#00ff77] font-extrabold hover:text-white flex items-center gap-1 bg-[#00ff77]/10 px-2.5 py-1 rounded-full border border-[#00ff77]/30'
                  : 'hover:text-[#00ff77]'
              }`}
            >
              {link.highlight && <Sparkles className="w-3 h-3" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Lang toggle & ARX 1.0 Launch CTA) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#0d141d] border border-white/10 rounded-full p-1 text-xs">
            <button
              onClick={() => setLang('pt')}
              className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                lang === 'pt'
                  ? 'bg-[#00ff77] text-black shadow-[0_0_10px_rgba(0,255,119,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                lang === 'en'
                  ? 'bg-[#00ff77] text-black shadow-[0_0_10px_rgba(0,255,119,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Direct CTA to ARX 1.0 */}
          <a
            href="https://arx.lucassimioni.cloud-ip.cc/"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-arx-button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00ff77] text-black text-xs font-extrabold tracking-wide uppercase shadow-[0_0_20px_rgba(0,255,119,0.4)] hover:shadow-[0_0_30px_rgba(0,255,119,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>TESTAR ARX 1.0</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center bg-[#0d141d] border border-white/10 rounded-full p-0.5 text-xs mr-1">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="px-2 py-0.5 text-[10px] font-bold text-[#00ff77]"
            >
              {lang.toUpperCase()}
            </button>
          </div>
          <button
            id="mobile-menu-btn"
            aria-label="Abrir menu móvel"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0d141d] border border-white/10 text-gray-200 hover:text-[#00ff77] hover:border-[#00ff77]/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070c12]/98 border-b border-[#00ff77]/20 backdrop-blur-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm font-semibold text-gray-200 hover:text-[#00ff77] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="https://arx.lucassimioni.cloud-ip.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#00ff77] text-black text-center text-xs font-extrabold tracking-wide uppercase shadow-[0_0_20px_rgba(0,255,119,0.3)] flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4" />
                <span>ACESSAR IA ARX 1.0</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#produtos"
                onClick={(e) => { e.preventDefault(); scrollTo('#produtos'); }}
                className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-center text-xs font-semibold hover:border-[#00ff77]/40"
              >
                {lang === 'pt' ? 'Ver Produtos Digitais' : 'View Digital Products'}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
