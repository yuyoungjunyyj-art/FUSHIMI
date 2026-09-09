import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

interface NavigationProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenReserve: () => void;
  onOpenMenu: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentLang,
  onLanguageChange,
  onOpenReserve,
  onOpenMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#house', labelEn: 'The House', labelJa: '町家', labelKo: '마치야 고택', labelZh: '町家古邸' },
    { href: '#first-floor', labelEn: 'Cafe Area', labelJa: '1階カフェ', labelKo: '1층 카페', labelZh: '一楼茶台' },
    { href: '#garden', labelEn: 'The Garden', labelJa: '中庭', labelKo: '정원', labelZh: '中庭庭院' },
    { href: '#moss-wall', labelEn: 'Moss Wall', labelJa: '苔壁', labelKo: '이끼 벽', labelZh: '青苔墙' },
    { href: '#second-floor', labelEn: 'Upper House', labelJa: '2階茶室', labelKo: '2층 다실', labelZh: '二楼茶室' },
    { href: '#tea', labelEn: 'Tea', labelJa: '日本茶', labelKo: '차', labelZh: '日本茶' },
    { href: '#kitchen', labelEn: 'Financiers', labelJa: '焼菓子', labelKo: '피낭시에', labelZh: '现烤茶点' },
    { href: '#experience', labelEn: 'Experience', labelJa: '体験', labelKo: '티 세션', labelZh: '茶席体验' },
    { href: '#stories', labelEn: 'Stories', labelJa: '物語', labelKo: '이야기', labelZh: '宅邸物语' },
    { href: '#archive', labelEn: 'Archive', labelJa: '資料', labelKo: '자료실', labelZh: '建筑档案' },
  ];

  const getNavLabel = (link: (typeof navLinks)[0]) => {
    if (currentLang === 'ja') return link.labelJa;
    if (currentLang === 'ko') return link.labelKo;
    if (currentLang === 'zh') return link.labelZh;
    return link.labelEn;
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1C1A17]/10 py-3 shadow-[0_4px_20px_-12px_rgba(28,26,23,0.06)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="group flex items-baseline space-x-3 text-[#1C1A17] focus:outline-none"
        >
          <span className="font-editorial text-2xl tracking-tight font-medium group-hover:opacity-75 transition-opacity">
            Ie
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#1C1A17]/60">
            Fushimi · Kyoto
          </span>
        </a>

        {/* Desktop links - hidden until scrolled to keep the Hero tranquil and free of nav walls */}
        <nav
          className={`hidden xl:flex items-center space-x-6 text-[13px] tracking-wide font-sans-clean text-[#1C1A17]/70 transition-opacity duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1C1A17] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1C1A17] hover:after:w-full after:transition-all"
            >
              {getNavLabel(link)}
            </a>
          ))}
        </nav>

        {/* Right actions: Language, Menu, Reserve */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Language Selector */}
          <div className="flex items-center text-xs tracking-wider border border-[#1C1A17]/15 rounded-full p-0.5 text-[#1C1A17]/60">
            {(['en', 'ja', 'ko', 'zh'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-0.5 rounded-full transition-all uppercase text-[11px] ${
                  currentLang === lang
                    ? 'bg-[#1C1A17] text-[#FAF8F5] font-medium shadow-xs'
                    : 'hover:text-[#1C1A17]'
                }`}
              >
                {lang === 'ja' ? '日' : lang === 'ko' ? '한' : lang === 'zh' ? '中' : 'EN'}
              </button>
            ))}
          </div>

          {/* Quick Menu view */}
          <button
            type="button"
            onClick={onOpenMenu}
            className="hidden md:inline-flex items-center text-xs tracking-wider border border-[#1C1A17]/20 hover:border-[#1C1A17] text-[#1C1A17] px-3.5 py-1.5 rounded-full transition-colors font-sans-clean"
          >
            <span>
              {currentLang === 'ja'
                ? 'お品書き'
                : currentLang === 'ko'
                ? '메뉴'
                : currentLang === 'zh'
                ? '品单'
                : 'Menu'}
            </span>
          </button>

          {/* Reserve CTA */}
          <button
            type="button"
            onClick={onOpenReserve}
            className="inline-flex items-center space-x-1 text-xs tracking-wider bg-[#1C1A17] text-[#FAF8F5] hover:bg-[#3E4B39] px-4 py-1.5 rounded-full transition-colors font-sans-clean font-medium shadow-xs"
          >
            <span>
              {currentLang === 'ja'
                ? '予約'
                : currentLang === 'ko'
                ? '예약하기'
                : currentLang === 'zh'
                ? '预约茶席'
                : 'Reserve'}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-[#1C1A17] hover:opacity-75 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-[#1C1A17]/10 px-6 py-6 transition-all">
          <nav className="flex flex-col space-y-3 font-sans-clean text-sm text-[#1C1A17]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#1C1A17]/5 flex justify-between items-center"
              >
                <span>{getNavLabel(link)}</span>
                <span className="text-[11px] text-[#1C1A17]/40 tracking-wider">
                  {link.labelEn}
                </span>
              </a>
            ))}
            <div className="pt-3 flex items-center space-x-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenu();
                }}
                className="flex-1 py-2 text-center text-xs border border-[#1C1A17]/30 rounded-full"
              >
                {currentLang === 'ja'
                  ? 'お品書きを見る'
                  : currentLang === 'ko'
                  ? '메뉴 전체보기'
                  : currentLang === 'zh'
                  ? '浏览完整品单'
                  : 'View Full Menu'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReserve();
                }}
                className="flex-1 py-2 text-center text-xs bg-[#1C1A17] text-[#FAF8F5] rounded-full"
              >
                {currentLang === 'ja'
                  ? '茶室のご予約'
                  : currentLang === 'ko'
                  ? '티 세션 예약'
                  : currentLang === 'zh'
                  ? '预约茶室席位'
                  : 'Book Session'}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
